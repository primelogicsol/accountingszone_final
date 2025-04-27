// import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export async function uploadFile(file: string, folder: string): Promise<string> {
//   try {
//     const result = await cloudinary.uploader.upload(file, {
//       folder: folder,
//     });
//     return result.secure_url;
//   } catch (error) {
//     console.error('Error uploading file to Cloudinary:', error);
//     throw new Error('Failed to upload file');
//   }
// }

// export default cloudinary;



import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadFile(file: string, folder: string): Promise<string> {
  try {
    // environment variables for debugging
    console.log("Using Cloudinary config:", {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key_exists: !!process.env.CLOUDINARY_API_KEY,
      api_secret_exists: !!process.env.CLOUDINARY_API_SECRET
    });
    
    const result = await cloudinary.uploader.upload(file, {
      folder: folder,
    });
    return result.secure_url;
  } catch (error) {
    console.error('Error uploading file to Cloudinary:', error);
    
    // More detailed error for debugging
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
    
    throw new Error('Failed to upload file');
  }
}

export default cloudinary;