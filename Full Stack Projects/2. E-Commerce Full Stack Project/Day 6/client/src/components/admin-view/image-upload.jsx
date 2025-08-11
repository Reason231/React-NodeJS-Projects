import { useRef } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";

function ProductImageUpload({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  setUploadedImageUrl,
}) {
  
  const inputRef = useRef(null);

  function handleImageFileChange(event) {
    console.log(event.target.files); // Logs the file details
    const selectedFile = event.target.files?.[0];
    if (selectedFile) setImageFile(selectedFile); // Set the selected file to the state
  }

  function handleDragOver(event) {
    // By default, dragging a file into the browser might open it as a new page.
    // event.preventDefault() stops the browser from doing that.
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile); // Set the dropped file to the state
  }

  function handleRemoveImage() {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-2 border-dashed rounded-lg p-4"
      >
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange}
        />

        {/* If imageFile is not set, show the upload area */}
        {!imageFile ? (
          // The htmlFor="image-upload" links the <Label> to the <input id="image-upload" type="file" />.
          // When you click the <Label>, it automatically triggers the file picker for that hidden input. 
          <Label
            htmlFor="image-upload"
            className="flex flex-col items-center justify-center h-32 cursor-pointer"
          >
            <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
            <span>Drag & drop or click to upload image</span>
          </Label>
        ) : (
          // If the image is set, show the remove button
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileIcon className="w-8 h-8 text-primary mr-2" />
            </div>
            <p className="text-sm font-medium">{imageFile.name}</p>
            <Button
              variant="ghost"  // minimal button color (transparent background, only changes on hover) ✅
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={handleRemoveImage}
            >
              <XIcon className="w-4 h-4" />
              <span className="sr-only">Remove File</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductImageUpload;
