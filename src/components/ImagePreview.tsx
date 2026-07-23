type ImagePreviewProps = {
  image: string | null;
};

function ImagePreview({ image }: ImagePreviewProps) {
  if (!image) return null;

  return (
    <div className="image-preview-card">
      <h3>Uploaded Image</h3>

      <img
        src={image}
        alt="Uploaded Preview"
        className="image-preview"
      />
    </div>
  );
}

export default ImagePreview;