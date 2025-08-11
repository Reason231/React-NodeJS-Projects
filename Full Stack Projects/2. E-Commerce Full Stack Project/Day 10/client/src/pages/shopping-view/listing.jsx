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
import { fetchAllFilteredProducts } from "@/store/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useSearchParams } from "react-router-dom";

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
  const { productList } = useSelector((state) => state.shopProducts);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(null);
  const [searchParams,setSearchParams] = useSearchParams();  // Updates the url as the filters change

  function handleSort(value) {
    setSort(value);
  }

  //  getSectionId = "brand"
  //  getCurrentOptions = "Nike"
  function handleFilter(getSectionId, getCurrentOptions) {
    let cpyFilters = { ...filters };
    const indexOfCurrentSection = Object.keys(cpyFilters).indexOf(getSectionId);

    // If no filters are applied for this category, it creates a new key in cpyFilters.
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

      // If the filter option is selected for the category section, add it to the filter array
      if (indexOfCurrentOption === -1) {
        cpyFilters[getSectionId].push(getCurrentOptions);

        // If already selected → Remove it (acts as toggle).
      } else {
        cpyFilters[getSectionId].splice(indexOfCurrentOption, 1);
      }
    }

    setFilters(cpyFilters);
    // set it to the localStorage, even if the page reloads, it will get the filtered data
    sessionStorage.setItem("filters",JSON.stringify(cpyFilters))  
  }

  useEffect(()=>{
    // Default sorting 
    setSort("price-lowtohigh")

    // If there is previous filter selected, or it will be blank filter
    setFilters(JSON.parse(sessionStorage.getItem("filters")) || {})
  },[])

  
  // Whenever the filters change, it updates the url with the new filters
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

  console.log(filters);

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
                <ShoppingProductTile product={productItem} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default ShoppingListing;
