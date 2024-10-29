// app/components/Gallery.tsx
"use client"; // Ensure this is a client component

import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';

const Gallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('/api/images'); // Fetch image paths from your API route
      const data = await response.json();
      setImages(data.images); // Assuming the API returns { images: [] }
    };
    fetchImages();
  }, []);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const breakpointCols = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div id='designs'>
      <h2 className="text-3xl font-bold text-center mb-6">Portfolio Gallery</h2>
      <Masonry
        breakpointCols={breakpointCols}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => handleImageClick(image)}>
            <img src={image} alt={`Gallery image ${index}`} className="w-full h-auto" />
          </div>
        ))}
      </Masonry>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-white rounded-lg overflow-hidden">
            <img src={selectedImage!} alt="Selected" className="max-w-full max-h-screen" />
            <button onClick={closeModal} className="absolute top-2 right-2 text-black font-bold text-lg">
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;