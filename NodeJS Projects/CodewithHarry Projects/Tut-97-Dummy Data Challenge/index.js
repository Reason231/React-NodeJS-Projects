import express from "express"
import mongoose from "mongoose"
import { Employee } from "./models/employee.js"
const app=express()

// Connect mongodb, and create the mongodb collection if it doesn't exists
await mongoose.connect("mongodb://localhost:27017/Employee")

const languages=["Python","JS","C"]
const city=["Ktm","Pokh","Lumb"]


// Random data picker
function getRandom(arr){
    const random=Math.floor(Math.random()*(arr.length-1))
    return arr[random]
}


async function generateData(){
    const employeeData=await Employee.find()
    
    // If the data doesn't exists, it creates
    if(employeeData.length==0){
        for(let i=0;i<10;i++){
            const employee=new Employee({
                name:`${i}.Reason`,
                salary:Math.round(Math.random()*4000)+20000,
                language:getRandom(languages),
                city:getRandom(city),
                isManager:(Math.random()>0.5)?true:false
            })
            await employee.save()
            console.log("Data created")
        }
        return true  // response giver down
    }
    else{
        await Employee.deleteMany()
        console.log("Data deleted")
        return false
    }
}

app.get("/get",async(req,res)=>{
    const result=await generateData()
    res.send(`${result ? "Data created" : "Data deleted"}`)
})

app.listen(3000,()=>{
    console.log("Server running successfully")
})
