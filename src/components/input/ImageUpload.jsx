import React, { useState } from "react";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col items-baseline mb-[25px]  justify-center">
      <label className="flex flex-col items-center justify-center w-28 h-28   rounded-full cursor-pointer">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Uploaded"
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <div className="flex w-max m-auto gap-3 items-center">
            <img src="/image/image_update.svg" alt="upload" />
            <span className="text-sm text-blue-500">+ Add image</span>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </label>
    </div>
  );
};

export default ImageUpload;
