/**
 * Extracts the Cloudinary public ID from a URL
 */
export function getCloudinaryPublicId(url: string): string {
    if (!url.includes('cloudinary.com')) {
      return '';
    }
    
    try {
      // Extract public ID from URL format like:
      // https://res.cloudinary.com/cloud-name/image/upload/v1234567890/folder/filename.jpg
      const parts = url.split('/');
      const uploadIndex = parts.indexOf('upload');
      
      if (uploadIndex !== -1 && uploadIndex + 2 < parts.length) {
        // Remove version number if present and get everything after "upload"
        const pathPart = parts.slice(uploadIndex + 1).join('/');
        // Remove file extension
        return pathPart.replace(/\.[^/.]+$/, '');
      }
      return '';
    } catch (error) {
      console.error('Error extracting Cloudinary public ID:', error);
      return '';
    }
  }