import { config } from 'dotenv'

config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/adventuresdb';
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || 'dotaebdx8';
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || 753178845141354;
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || 'rnpkzmG-pCaloKDfqTgzr_vl_lE';