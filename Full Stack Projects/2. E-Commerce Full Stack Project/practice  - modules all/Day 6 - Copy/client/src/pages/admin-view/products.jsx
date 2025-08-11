import { ProductImageUpload } from "@/components/admin-view/image-upload";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import { Sheet,SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import { useState } from "react";

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

export const AdminProducts=()=>{
    const [openCreateProductsDialog,setOpenCreateProductsDialog]=useState(false)
    const [formData,setFormData]=useState(initialFormData)
    const [imageFile,setImageFile]=useState(null)
    const [uploadedImageUrl,setUploadedImageUrl]=useState("")

    function onSubmit(){}
    return(
        <>
            <div className="w-full flex justify-end">
                <Button onClick={()=>setOpenCreateProductsDialog(true)}>
                Add New Product
                </Button>
            </div>

            <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3">
                <Sheet open={openCreateProductsDialog} onOpenChange={()=>setOpenCreateProductsDialog(false)} >
                    <SheetContent side="right" className="overflow-auto">
                        <SheetHeader>
                            <SheetTitle>
                                Add New Product
                            </SheetTitle>
                        </SheetHeader>
                        
                        <ProductImageUpload imageFile={imageFile} setImageFile={setImageFile} uploadedImageUrl={uploadedImageUrl} setUploadedImageUrl={setUploadedImageUrl}/>

                        <div className="py-6">
                            <CommonForm formControls={addProductFormElements} formData={formData} setFormData={setFormData} buttonText={"Add"} onSubmit={onSubmit}/>
                        </div>
                        <SheetDescription>
                            Choose a high quality image you fool
                        </SheetDescription>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}