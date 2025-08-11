import { useState } from "react"
import { DialogContent} from "../../components/ui/dialog"
import { Label } from "../../components/ui/label"
import { Separator } from "../../components/ui/separator"

const initialFormData={
    status:""
}

function ShoppingOrderDetailsView(){

    const [formData,setFormData]=useState(initialFormData)

    function handleUpdateStatus(event){
        event.preventDefault()
    }

    return(

        <DialogContent className="sm:max-w-[600px]">
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <div className="flex mt-6 items-center justify-between">
                        <p className="font-medium">Order ID</p>
                        <Label>123456</Label>
                    </div>
                    <div className="flex mt-6 items-center justify-between">
                        <p className="font-medium">Order Date</p>
                        <Label>25/25/25</Label>
                    </div>
                    <div className="flex mt-6 items-center justify-between">
                        <p className="font-medium">Order Status</p>
                        <Label>In Process</Label>
                    </div>
                    <div className="flex mt-6 items-center justify-between">
                        <p className="font-medium">Order Price</p>
                        <Label>$500</Label>
                    </div>
                </div>

                {/* Order Details */}
                <Separator></Separator>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <div className="font-medium">Order Details</div>
                        <ul className="grid gap-3">
                            <li className="flex items-center justify-between">
                                <span>Product One</span>
                                <span>$100</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Shipping Info */}
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <div className="font-medium">Shipping Info</div>
                            <div className="grid gap-0.5 text-muted-foreground">
                                <span>UserName</span>
                                <span>Address</span>
                                <span>City</span>
                                <span>Pincode</span>
                                <span>Phone</span>
                                <span>Notes</span>
                            </div>
                    </div>
                </div>

              
            </div>
        </DialogContent>
    )
}

export default ShoppingOrderDetailsView