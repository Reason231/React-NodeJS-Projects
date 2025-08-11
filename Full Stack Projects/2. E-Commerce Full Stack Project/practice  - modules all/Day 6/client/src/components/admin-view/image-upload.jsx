import { useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";

export const ProductImageUpload = ({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  setUploadedImageUrl,
}) => {
  const inputRef = useRef(null);

  function handleImageFileChange(event) {
    console.log(event.target.value);
    const selectedFile = event.target.files?.[0];
    if (selectedFile) setImageFile(selectedFile);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault(); // Stop browser's default drop behavior
    const droppedFile = e.dataTransfer.files?.[0]; // Get the dropped file
    if (droppedFile) setImageFile(droppedFile); // Save it in state
  }

  function handleRemoveImage() {
    setImageFile(null);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <Label>Uploaded Image</Label>

      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-2 border-dashed rounded-lg p-4"
      >
        <div>
          <Input
            id="image-upload"
            type="file"
            className="hidden"
            ref={inputRef}
            onChange={handleImageFileChange}
          ></Input>

          {!imageFile ? (
            <Label htmlFor="image-upload">
              <UploadCloudIcon className="w-10 h-10 text-muted-foreground"></UploadCloudIcon>
              <span>Drag and Drop or click to upload image</span>
            </Label>
          ) : (
            <div className="flex justify-between items-center">
              <div>
                <FileIcon />
              </div>

              <p>{imageFile.name}</p>

              <Button
                variant="ghost"
                size="icon"
                onClick={handleRemoveImage}
                className="text-muted-foreground hover:text-foreground"
              >
                <XIcon></XIcon>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
