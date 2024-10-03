import { createContext, useState, useContext } from "react";

const GalleryContext = createContext();

export const useGallery = () => useContext(GalleryContext);

export const GalleryProvider = ({ children }) => {
  const [currentImage, setCurrentImage] = useState(null); 
  const [images, setImages] = useState([]); 

  const openImage = (img, imgArray = []) => {
    setCurrentImage(img);
    setImages(imgArray); 
  };

  const closeImage = () => {
    setCurrentImage(null);
  };

  const prevImage = () => {
    if (images.length > 0) {
      const currentIndex = images.indexOf(currentImage);
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setCurrentImage(images[prevIndex]);
    }
  };

  const nextImage = () => {
    if (images.length > 0) {
      const currentIndex = images.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[nextIndex]);
    }
  };

  return (
    <GalleryContext.Provider
      value={{ currentImage, openImage, closeImage, prevImage, nextImage }}
    >
      {children}
    </GalleryContext.Provider>
  );
};
