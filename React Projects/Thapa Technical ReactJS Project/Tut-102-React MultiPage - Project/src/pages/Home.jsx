import { FaLongArrowAltRight } from "react-icons/fa";
import { About } from "./About";

export const Home=()=>{
    return (
        <div>
        <main className="flex p-16 justify-between">
        <div className="flex flex-col gap-10">
        <h1 className="text-8xl">Explore the World,<br /> One Country at a <br />Time.</h1>
        <p>Discover the history, culture, and beauty of every <br /> nation. Sort, search, and filter through countries to find <br />
        the details you need.</p>
        <button className="w-[200px]">Start Exploring <FaLongArrowAltRight /> </button>
        </div>

        <img src="../public/images/world.png" alt="" className="w-[48dvw]"/>
        </main>

        <About />
        </div>
    )
}