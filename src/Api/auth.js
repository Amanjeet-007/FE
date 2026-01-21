import axios from 'axios'
import { useSelector , useDispatch } from 'react-redux'


export const signup = async (data)=>{
    try{
        await axios.post("http://localhost:5000/api/register",data).then(res=>{return res}).catch(err=>console.log(err))
        console.log("signup process complete")
    }catch(err){
        console.log(err)
        return(err)
    }
}

export const login = async (data)=>{
    try{
        await axios.post("http://localhost:5000/api/login",data).then(res=>{return res}).catch(err=>console.log(err))
        console.log("login process complete")
    }catch(err){
        console.log(err)
        return(err)
    }
}
