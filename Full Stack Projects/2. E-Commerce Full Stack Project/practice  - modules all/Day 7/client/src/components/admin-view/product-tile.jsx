import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card"

function AdminProductTile({setFormData,setOpenCreateProductsDialog,setCurrentEditedId,product,handleDelete}){
    return(
        <Card className="w-full">
            <div>
                <div className="relative">
                    <img src={product?.image} alt={product?.title} className="w-full h-[300px] object-cover rounded-t-lg"/>
                </div>

                <CardContent>
                    <h2>{product?.title}</h2>
                    <div className="flex justify-between">
                        <span className={`${product?.salePrice > 0 ? "line-through" : ""}`}>{product?.price}</span>

                        {product?.salePrice > 0 ? (<span>{product?.salePrice}</span>): null} 
                    </div>

                    <CardFooter className="flex justify-between items-center w-full">
                        <Button onClick={()=>{setOpenCreateProductsDialog(true); setCurrentEditedId(product?._id); setFormData(product)}}>Edit</Button>
                        <Button onClick={()=>handleDelete(product?._id)}>Delete</Button>
                    </CardFooter>
                </CardContent>
            </div>
        </Card>
    )
}

export default AdminProductTile