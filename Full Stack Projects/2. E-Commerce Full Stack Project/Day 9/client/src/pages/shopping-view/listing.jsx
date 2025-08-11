import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProductFilter from "../../components/shopping-view/filter";
import { Button } from "@/components/ui/button";
import { ArrowUpDownIcon } from "lucide-react";
import { DropdownMenuRadioGroup } from "@radix-ui/react-dropdown-menu";
import { sortOptions } from "@/config";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFilteredProducts } from "@/store/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";

function ShoppingListing() {
  const dispatch=useDispatch()
  const {productList} = useSelector(state => state.shopProducts)

  useEffect(()=>{
    dispatch(fetchAllFilteredProducts())
    console.log(productList)
  },[dispatch])

  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4 md:p-6">
      {/* Filtering */}
      <ProductFilter />

      <div className="bg-background w-full rounded-lg shadow-sm">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-extrabold">All Products</h2>

          {/* Sorting */}
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground">{productList.length} Products</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ArrowUpDownIcon className="h-4 w-4" />
                  <span>Sort by</span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuRadioGroup>
                  {sortOptions.map((sortItem) => (
                    <DropdownMenuRadioGroup key={sortItem.id}>
                      {sortItem.label}
                    </DropdownMenuRadioGroup>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

          {/* Rendering List of Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {
            productList && productList.length > 0 ? 
            productList.map(productItem => <ShoppingProductTile product={productItem}/>) : null
          }
        </div>
      </div>
    </div>
  );
}

export default ShoppingListing;
