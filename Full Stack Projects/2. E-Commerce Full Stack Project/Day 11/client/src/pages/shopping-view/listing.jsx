import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import ProductFilter from "../../components/shopping-view/filter";
import { Button } from "@/components/ui/button";
import { ArrowUpDownIcon } from "lucide-react";
import { sortOptions } from "@/config";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFilteredProducts, fetchProductDetails } from "@/store/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useSearchParams } from "react-router-dom";
import ProductDetailsDialog from "@/components/shopping-view/product-details";

function createSearchParamsHelper(filterParams) { 
  const queryParams=[]
  for(const [key, value] of Object.entries(filterParams)){
    if(Array.isArray(value) && value.length > 0) {
      const paramValue = value.join(",");
      queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
    }
  }
  return queryParams.join("&");
}

function ShoppingListing() {
  const dispatch = useDispatch();
  // Day 11
  const { productList,productDetails } = useSelector((state) => state.shopProducts);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(null);
  const [searchParams,setSearchParams] = useSearchParams();  
  const [openDetailsDialog,setOpenDetailsDialog] = useState(false) 

  function handleSort(value) {
    setSort(value);
  }

  
  function handleFilter(getSectionId, getCurrentOptions) {
    let cpyFilters = { ...filters };
    const indexOfCurrentSection = Object.keys(cpyFilters).indexOf(getSectionId);

    if (indexOfCurrentSection === -1) {
      cpyFilters = {
        ...cpyFilters,
        [getSectionId]: [getCurrentOptions],
      };
    }

    // updates the filter
    else {
      const indexOfCurrentOption =
        cpyFilters[getSectionId].indexOf(getCurrentOptions);

      if (indexOfCurrentOption === -1) {
        cpyFilters[getSectionId].push(getCurrentOptions);

      } else {
        cpyFilters[getSectionId].splice(indexOfCurrentOption, 1);
      }
    }

    setFilters(cpyFilters);
    sessionStorage.setItem("filters",JSON.stringify(cpyFilters))  
  }


  // Day 11 => Product Details
  function handleGetProductDetails(getCurrentProductId){
    dispatch(fetchProductDetails(getCurrentProductId))
  }

  useEffect(()=>{
    setSort("price-lowtohigh")

    setFilters(JSON.parse(sessionStorage.getItem("filters")) || {})
  },[])

  
  useEffect(()=>{
    if(filters && Object.keys(filters).length > 0) {
      const createQueryString = createSearchParamsHelper(filters);
      setSearchParams(new URLSearchParams(createQueryString));
    }
  },[filters])


  // Fetching all products when the component mounts  
  useEffect(() => {
    if(filters !== null && sort !== null)
    dispatch(fetchAllFilteredProducts({filterParams:filters,sortParams:sort}));
    console.log(productList);
  }, [dispatch,sort,filters]);


  // Day 11
  useEffect(()=>{
    // It will open the dialog, if there is no problem in productDetails
    if(productDetails !== null) setOpenDetailsDialog(true)
  },[productDetails])

  console.log(productDetails,"productDetails");

  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-4 md:p-6">
      {/* Filtering */}
      <ProductFilter filters={filters} handleFilter={handleFilter} />

      <div className="bg-background w-full rounded-lg shadow-sm">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-extrabold">All Products</h2>

          {/* Sorting */}
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground">
              {productList.length} Products
            </span>
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
                {/* Filter functionality */}
                <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                  {sortOptions.map((sortItem) => (
                    <DropdownMenuRadioItem
                      value={sortItem.id}
                      key={sortItem.id}
                    >
                      {sortItem.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Rendering List of Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {productList && productList.length > 0
            ? productList.map((productItem) => (
                <ShoppingProductTile handleGetProductDetails={handleGetProductDetails} product={productItem} />
              ))
            : null}
        </div>
        <ProductDetailsDialog open={openDetailsDialog} setOpen={setOpenDetailsDialog} productDetails={productDetails}/>
      </div>
    </div>
  );
}

export default ShoppingListing;
