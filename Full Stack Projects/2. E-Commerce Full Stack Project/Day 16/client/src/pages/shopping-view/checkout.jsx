import Address from "@/components/shopping-view/address";
import img from "../../assets/account.jpg";
import { useSelector } from "react-redux";
import UserCartItemsContent from "@/components/shopping-view/cart-items-content";
import { Button } from "@/components/ui/button";

function ShoppingCheckout() {
  const { cartItems } = useSelector((state) => state.shopCart);

  const totalCartAmount =
    cartItems && cartItems.items && cartItems.items.length > 0
      ? cartItems.items.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.salePrice > 0
              ? currentItem?.salePrice
              : currentItem?.price) *
              currentItem?.quantity,
          0
        )
      : 0;

    // Payment Button Validation
      function handleInitiatePaypalPayment() {
    if (cartItems.length === 0) {
      toast.info("Your cart is empty. Please add items to proceed")
      return;
    }

    if (currentSelectedAddress === null) {
      toast.info("Please select one address to proceed.")
      return;
    }
}
  return (
    <div className="flex flex-col">
      {/* Image Section */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <img
          src={img}
          className="h-full w-full object-cover object-center"
        ></img>
      </div>

      {/* Address and Cart Section*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 p-5">
        <Address />
        <div className="flex flex-col gap-4">
          {cartItems && cartItems.items && cartItems.items.length > 0
            ? cartItems.items.map((item) => (
                <UserCartItemsContent cartItem={item} />
              ))
            : null}
          {/* Total Section */}
          <div className="mt-8 space-y-4">
            <div className="flex justify-between">
              <span className="font-bold">Total</span>
              <span className="font-bold">${totalCartAmount}</span>
            </div>
          </div>

          {/* Payment Section */}
          <div className="mt-4 w-full">
            <Button onClick={handleInitiatePaypalPayment} className="w-full">Paypal Payment</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCheckout;
