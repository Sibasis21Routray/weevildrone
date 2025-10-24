import React from "react";

// Define types for gallery and videos
interface Photo {
  image: string;
  caption: string;
}

interface Video {
  title: string;
  url: string;
  description: string;
}

interface ProductGalleryProps {
  photos: Photo[];
  videos: Video[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ photos, videos }) => {
  return (
    <div className="product-gallery">
      <h2>Gallery</h2>
      <div className="photos">
        {photos.map((photo, index) => (
          <div key={index} className="photo-item">
            <img src={photo.image} alt={photo.caption} />
            <p>{photo.caption}</p>
          </div>
        ))}
      </div>

      <h2>Videos</h2>
      <div className="videos">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <h3>{video.title}</h3>
            <video controls>
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
