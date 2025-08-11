import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet"

function UserCartWrapper(){
    return(
        // Click on the "Cart Icon" beside to the user profile to see the content
        <SheetContent className="sm:max-w-md">
            <SheetHeader>
                <SheetTitle>
                    Your Cart
                </SheetTitle>
                </SheetHeader>

                <div className="mt-8 space-y-4">

                </div>
                <div className="mt-8 space-y-4">
                    <div className="flex justify-between">
                        <span className="font-bold">Total</span>
                        <span className="font-bold">$1000</span>
                    </div>
                </div>

                <Button className="w-full mt-6">Checkout</Button>
        </SheetContent>
    )
}

export default UserCartWrapper