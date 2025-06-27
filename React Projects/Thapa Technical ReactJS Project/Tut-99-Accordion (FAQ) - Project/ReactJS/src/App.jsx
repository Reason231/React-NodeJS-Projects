import { useState } from "react"
import faqData from "./services/api"

function App(){
  const [faq,setFaq]=useState(faqData)

  const handleShow=(id)=>{
    try{
      const updatedFaqs=faq.map((faqs)=>
        faqs.id === id ? {...faqs,isShow:!faqs.isShow} : {...faqs,isShow:false}
      )

      // faqData((prev) => {
      //   prev.isShow == true ? {...prev,isShow:false} : prev
      // })
      setFaq(updatedFaqs)
    }
    catch(e){
      console.log(e)
    }
  }

  return(
    <div className="flex flex-col items-center h-screen gap-5">
    <h1>The Accordion</h1>

    {faq.map((currData)=>(
      <section className="border-2 w-2/3" key={currData.id}>
        <div className="flex justify-between p-2">
          <p>{currData.question}</p>
          <button className="p-1 w-16 bg-green-500" onClick={()=>handleShow(currData.id)}>{currData.isShow ? "Exit":"Show"}</button>
        </div>

      <div>{currData.isShow ? `${currData.answer}`:""}</div>
      </section>
    ))}

    </div>
  )
}

export default App
