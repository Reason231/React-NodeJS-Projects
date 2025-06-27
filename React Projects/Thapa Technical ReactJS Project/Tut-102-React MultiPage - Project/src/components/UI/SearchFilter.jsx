export const SearchFilter=({
    search,setSearch,filter,setFilter,data,setData
})=>{

    // handleSearch
    const handleInput=(searchData)=>{
        setSearch(searchData)
    }

    // handleFilter
    const handleSelectChange=(selectedCountry)=>{
        setFilter(selectedCountry)
    }


    // To sort the ascending and descending
    const handleSortCountries=(value)=>{
        // Note: Given in readme.md file so read it to understand
        const sortCountry=[...data].sort((a,b)=>{
            return value === "asc" ? 
            a.name.common.localeCompare(b.name.common):  // Ascending 
            b.name.common.localeCompare(a.name.common)   // Descending
        })
        setData(sortCountry)
    }


    return(
        <div className="flex justify-between mr-6 ml-6">
        <input type="text" placeholder="Search" value={search} onChange={(e)=>handleInput(e.target.value)} className="bg-[#202020] text-white border-2 rounded-md h-16 w-[13dvw] p-3 text-2xl" />
        <button className="mt-0" onClick={()=>handleSortCountries("asc")}>Asc</button>
        <button className="mt-0" onClick={()=>handleSortCountries("desc")}>Desc</button>

        <select value={filter} onChange={(e)=>handleSelectChange(e.target.value)} className="bg-[#202020] text-white border-2 text-3xl rounded-3xl pr-6 h-[3rem] pl-6">
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        </select>
        </div>
    )
}