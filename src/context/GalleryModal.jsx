import { useGallery } from "./GalleryContext";

const GalleryModal = () => {
  const { currentImage, closeImage, prevImage, nextImage } = useGallery();

  if (!currentImage) return null;

  return (
    <div className="fixed inset-0 z-[1500] flex items-center justify-center bg-black bg-opacity-80">
      {/* Close Button */}
      <button
        className="fixed top-4 right-4 z-50 text-white p-3 bg-black bg-opacity-50 rounded-full focus:outline-none"
        onClick={closeImage}
      >
        ✕
      </button>

      {/* Image Container */}
      <div className="relative max-w-3xl mx-auto">
        <img
          src={currentImage}
          alt="Gallery Image"
          loading="lazy"
          className="max-w-full max-h-[90vh] rounded-lg"
        />
      </div>

      {/* Previous Button with SVG */}
      <button
        className="fixed left-4 z-40 text-white p-3 bg-black bg-opacity-50 rounded-full focus:outline-none"
        onClick={prevImage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
        </svg>
      </button>

      {/* Next Button with SVG */}
      <button
        className="fixed right-4 z-40 text-white p-3 bg-black bg-opacity-50 rounded-full focus:outline-none"
        onClick={nextImage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </button>
    </div>
  );
};

export default GalleryModal;
