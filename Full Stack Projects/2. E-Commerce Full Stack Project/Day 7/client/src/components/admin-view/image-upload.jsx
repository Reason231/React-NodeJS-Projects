import { useEffect, useRef } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import axios from "axios";
import { Skeleton } from "../ui/skeleton";

function ProductImageUpload({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  setUploadedImageUrl,
  setImageLoadingState,
  imageLoadingState
}) {
  const inputRef = useRef(null);

  function handleImageFileChange(event) {
    console.log(event.target.files); // Logs the file details
    const selectedFile = event.target.files?.[0];
    if (selectedFile) setImageFile(selectedFile); // Set the selected file to the state
  }

  function handleDragOver(event) {
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

  // Day 7 => Uploads the selected image (imageFile) to the server route (which probably uploads it to Cloudinary).
  async function uploadImageToCloudinary(){
    setImageLoadingState(true)
    const data= new FormData()  // Creates a FormData object to send the image as multipart/form-data (used for file uploads).
    data.append("my_file",imageFile)  // "my_file is got from the backend product-routes.js file"
    const response= await axios.post("http://localhost:5000/api/admin/products/upload-image",data)

    if(response?.data?.success) {
      setUploadedImageUrl(response.data.result.url)
      setImageLoadingState(false)
    }
  }
  useEffect(()=>{
    if(imageFile !== null) uploadImageToCloudinary()
  },[imageFile])

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
          <Label
            htmlFor="image-upload"
            className="flex flex-col items-center justify-center h-32 cursor-pointer"
          >
            <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
            <span>Drag & drop or click to upload image</span>
          </Label>
        ) : (
          // Until the image is uploaded, it will show loader
          imageLoadingState ? 
          <Skeleton className="h-10 bg-gray-100"/> : 
          // If the image is set, show the remove button
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileIcon className="w-8 h-8 text-primary mr-2" />
            </div>
            <p className="text-sm font-medium">{imageFile.name}</p>
            <Button
              variant="ghost"
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
