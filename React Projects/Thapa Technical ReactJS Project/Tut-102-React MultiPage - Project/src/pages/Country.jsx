import { SearchFilter } from "../components/UI/SearchFilter"
import { getCountryData } from "../api/postApi"
import { useEffect, useState, useTransition } from "react"
import { NavLink } from "react-router-dom"

export const Country=()=>{
    // isPending helps to show the loader until the data fetches
    // startTransition is a React hook to improve performance and user experience by marking certain state updates as non-urgent (i.e., low priority).
    const [isPending,startTransition]=useTransition()
    const [data,setData]=useState([])

    const [search,setSearch]=useState()
    const [filter,setFilter]=useState("all")

    // To get the data
   useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await getCountryData();
      startTransition(() => {
        setData(res.data);
      });
    } catch (e) {
      console.log("Error while fetching the data", e);
    }
  };

  fetchData();
}, []);

    // isPending helps to show the loader until the data fetches
    if(isPending) return (<Loader />)


    // To search Country
    const searchCountry=(country)=>{
        if(search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase())
        }
        return country
    }


    // To filter Country
    const filterCountries=(country)=>{
        if(filter === "all") return country
        return country.region == filter // If the filtered btn country and region matches
    }
    // Final Part of search and filter data
    const filterandSearchCountries=data.filter((country) => searchCountry(country) && filterCountries(country))

    return (
        <>
        <SearchFilter setSearch={setSearch} search={search} filter={filter} setFilter={setFilter} data={data} setData={setData}/>
        <div className="grid grid-cols-3 gap-8">
        {filterandSearchCountries.map((currData,index)=>{
            const {name,population,region,capital,flags}=currData
            
            return(
                <div key={index} className="container-card bg-white-box flex flex-col gap-8 items-center justify-center">
                    <div className="flex flex-col gap-8">
                <img src={flags.png} alt="" className="w-[23dvw]"/>
                <p className="text-5xl">{name.common}</p>
                <p>Population:{population}</p>
                <p>Region:{region}</p>
                <p>Capital:{capital}</p>

                <NavLink to={`/country/${name.common}`}>
                <button className="w-60">Read More</button>
                </NavLink>
                    </div>
                </div>
            )
        })}
        </div>
        </>
    )
}