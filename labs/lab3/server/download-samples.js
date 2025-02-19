import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadDir = path.join(__dirname, 'uploads');

// Ensure uploads directory exists and is empty
if (fs.existsSync(uploadDir)) {
    // Clear the directory
    fs.readdirSync(uploadDir).forEach(file => {
        fs.unlinkSync(path.join(uploadDir, file));
    });
} else {
    fs.mkdirSync(uploadDir, { recursive: true });
}

console.log('Creating sample images in:', uploadDir);

// List of image URLs to download (using Lorem Picsum for random images)
const imageUrls = [
    'https://picsum.photos/800/600',
    'https://picsum.photos/800/600',
    'https://picsum.photos/800/600',
    'https://picsum.photos/800/600',
    'https://picsum.photos/800/600'
].map(url => `${url}?random=${Math.random()}`); // Add random parameter to get different images

// Function to download an image
async function downloadImage(url, filename) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
        }
        
        const buffer = await response.buffer();
        const filepath = path.join(uploadDir, filename);
        
        fs.writeFileSync(filepath, buffer);
        console.log(`Downloaded: ${filename}`);
        return true;
    } catch (error) {
        console.error(`Error downloading ${filename}:`, error);
        return false;
    }
}

// Download all images
async function downloadAllImages() {
    console.log('Downloading sample images...');
    
    const downloads = imageUrls.map((url, index) => 
        downloadImage(url, `sample-${index + 1}.jpg`)
    );
    
    try {
        await Promise.all(downloads);
        console.log('\nAll downloads completed!');
        
        // Verify files were created
        const files = fs.readdirSync(uploadDir);
        console.log('Files in uploads directory:', files);
        console.log(`Total files created: ${files.length}`);
    } catch (error) {
        console.error('Error downloading images:', error);
    }
}

// Run the download
downloadAllImages();
