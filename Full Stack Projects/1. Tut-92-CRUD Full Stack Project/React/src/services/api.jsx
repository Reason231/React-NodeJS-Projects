import axios from "axios";

const axiosClient=axios.create({
    baseURL:"http://localhost:3000"
})

export const getApi=async()=>{
    try{
        const res=await axiosClient.get("todo")
        console.log(res.data)
        return res.data
    }
    catch(e){
        console.log(`Error while getting the data ${e}`)
    }
}

export const postApi=async(newPost)=>{
    try{
        const res=await axiosClient.post("/todo",newPost);
        return res.data
    }
    catch(e){
        console.log(`Error while adding the data ${e}`)
    }
}

export const putApi=async(id,updatedPost)=>{
    try{
        const res=await axiosClient.put(`todo/${id}`,updatedPost)
        return res.data
    }
    catch(e){
        console.log(`Error while updating the data ${e}`)
    }
}

export const deleteApi=async(id)=>{
    try{
        const res=await axiosClient.delete(`todo/${id}`)
        return res.data
    }
    catch(e){
        console.log(`Error while deleting the data ${e}`)
    }
}