import React, { useRef, useState } from "react";

function ImageUploader() {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const imageURL = URL.createObjectURL(selectedFile);
      setImage(imageURL);
      setFileName(selectedFile.name);
    }
  };

  const openFilePicker = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="container">
      <div className="image-box">
        {image ? (
          <img src={image} alt="Uploaded Preview" className="preview-image" />
        ) : (
          <p>No Image Selected</p>
        )}
      </div>

      {fileName && (
        <p className="file-name">
          <strong>File Name:</strong> {fileName}
        </p>
      )}

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
      />

      <button onClick={openFilePicker} className="upload-btn">
        Upload Image
      </button>
    </div>
  );
}

export default ImageUploader;