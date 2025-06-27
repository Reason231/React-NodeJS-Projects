import { Form } from "react-router-dom"

export const contactData=async({request})=>{
    try{
        const res=await request.formData()

        const data=Object.fromEntries(res)
        console.log(data)
        return null
    }
    catch(e){
        console.log(e)
    }
}


export const Contact=()=>{
    return (
        <div className="flex flex-col items-center gap-10">
            <h1 className="text-6xl">Contact Us</h1>

            <Form action="/contact" method="POST" className="flex flex-col gap-12">
            <input type="text" name="name" className="bg-black text-white border-2 rounded-md h-16 w-[30dvw] p-3 text-2xl" placeholder="Enter Your Name"/>
            <input type="email" name="email" className="bg-black text-white border-2 rounded-md h-16 w-[30dvw] p-3 text-2xl" placeholder="Enter your Email"/>
            <textarea name="message" className="bg-black text-white border-2 rounded-md min-h-80 w-[30dvw] p-3 resize-none text-2xl" placeholder="Enter Your Message"></textarea>
            <button>Send</button>
            </Form>

        </div>
    )
}