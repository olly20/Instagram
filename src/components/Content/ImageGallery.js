import React from "react";
import data from "../../data.json";

const ImageGallery = () => {
  return (
    <div className="imagegallery">
      {data.images.map((image, index) => (
        <div className="gallery" key={index}>
          <img src={`${image.url}?w=400&fit=max`} alt={image.description} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
