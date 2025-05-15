import { v2 as cloudinary } from 'cloudinary';
import { getCloudinaryPublicId } from './data-mappers';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Type definition for Cloudinary error
interface CloudinaryError {
  http_code?: number;
  message?: string;
}

export async function uploadFile(file: string, folder: string): Promise<string> {
  try {
    // Environment variables for debugging
    console.log("Using Cloudinary config:", {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key_exists: !!process.env.CLOUDINARY_API_KEY,
      api_secret_exists: !!process.env.CLOUDINARY_API_SECRET
    });

    // Add size check (approximate for base64 string)
    const base64Size = file.length * 0.75; // Approximate size in bytes
    if (base64Size > 10 * 1024 * 1024) { // 10MB limit
      throw new Error('File too large to upload');
    }
    
    const result = await cloudinary.uploader.upload(file, {
      folder: folder,
      resource_type: 'auto', // Auto-detect file type
      quality: 'auto', // Auto-optimize images
      fetch_format: 'auto' // Auto-select best format
    });
    
    return result.secure_url;
  } catch (error: unknown) {
    console.error('Error uploading file to Cloudinary:', error);
    
    // More detailed error for debugging
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
    
    // Handle specific Cloudinary errors - with proper type checking
    const cloudinaryError = error as CloudinaryError;
    if (typeof cloudinaryError === 'object' && 
        cloudinaryError !== null && 
        'http_code' in cloudinaryError && 
        cloudinaryError.http_code === 413) {
      throw new Error('File is too large for upload (max 10MB)');
    }
    
    throw new Error('Failed to upload file');
  }
}

// Rest of the file remains unchanged
export async function deleteFromCloudinary(publicId: string) {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("Error deleting from Cloudinary:", error);
    throw new Error("Failed to delete file from Cloudinary");
  }
}


export async function getCloudinaryFileInfo(url: string) {
  try {
    const publicId = getCloudinaryPublicId(url);
    if (!publicId) return null;
    
    const result = await cloudinary.api.resource(publicId);
    return result;
  } catch (error) {
    console.error("Error getting Cloudinary file info:", error);
    return null;
  }
}

export async function generateCloudinaryDownloadUrl(url: string) {
  try {
    const publicId = getCloudinaryPublicId(url);
    if (!publicId) return url;
    
    return cloudinary.url(publicId, {
      flags: "attachment",
      sign_url: true,
      secure: true,
    });
  } catch (error) {
    console.error("Error generating Cloudinary download URL:", error);
    return url;
  }
}

export function getFileTypeInfo(url: string) {
  if (!url) return { type: 'unknown', icon: 'file', label: 'Unknown' };
  
  const extension = url.split('.').pop()?.toLowerCase();
  
  switch (extension) {
    case 'pdf':
      return { type: 'pdf', icon: 'file-text', label: 'PDF Document' };
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
    case 'webp':
      return { type: 'image', icon: 'image', label: 'Image' };
    case 'doc':
    case 'docx':
      return { type: 'word', icon: 'file-text', label: 'Word Document' };
    case 'xls':
    case 'xlsx':
      return { type: 'excel', icon: 'table', label: 'Excel Spreadsheet' };
    case 'ppt':
    case 'pptx':
      return { type: 'powerpoint', icon: 'layout', label: 'PowerPoint' };
    default:
      return { type: 'other', icon: 'file', label: 'Document' };
  }
}

export function enhanceCloudinaryUrl(url: string, options: any = {}) {
  if (!url.includes('cloudinary.com') || !url.includes('/upload/')) {
    return url;
  }
  
  try {
    const parts = url.split('/upload/');
    
    if (parts.length !== 2) return url;
    
    let transformations = '';
    if (options.download) {
      transformations += 'fl_attachment/';
    }
    
    if (options.format) {
      transformations += `f_${options.format}/`;
    }
    
    return `${parts[0]}/upload/${transformations}${parts[1]}`;
  } catch (error) {
    console.error("Error enhancing Cloudinary URL:", error);
    return url;
  }
}

export default cloudinary;