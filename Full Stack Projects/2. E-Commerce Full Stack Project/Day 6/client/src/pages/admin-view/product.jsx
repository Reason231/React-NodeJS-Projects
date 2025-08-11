import ProductImageUpload from "@/components/admin-view/image-upload";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Sheet } from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import { Fragment, useState } from "react";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  brand: "",
  category: "",
  price: "",
  salePrice: "",
  totalStock: "",
};

export function AdminProducts() {
  const [opeCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false); // This is used to open the products sidebar
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  function onSubmit(e) {}

  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Add New Product
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-col-4">
        {/* Click on Add Product to open the products sidebar  */}
        <Sheet
          open={opeCreateProductsDialog}
          onOpenChange={() => {
            setOpenCreateProductsDialog(false);
          }}
        >
          <SheetContent side="right" className="overflow-auto">
            <SheetHeader>
              <SheetTitle>Add New Product</SheetTitle>
            </SheetHeader>

            {/* Product Image Upload */}
            <ProductImageUpload
              imageFile={imageFile}
              setImageFile={setImageFile}
              uploadedImageUrl={uploadedImageUrl}
              setUploadedImageUrl={setUploadedImageUrl}
            />

            <div className="py-6">
              <CommonForm
                formControls={addProductFormElements}
                formData={formData}
                setFormData={setFormData}
                buttonText="Add"
                onSubmit={onSubmit}
              />
            </div>

            <SheetDescription>
              Choose a high-quality image for the product. Supported formats:
              JPG, PNG.
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  );
}

export default AdminProducts;
