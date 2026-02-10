import api from './axios'
import { useSelector , useDispatch } from 'react-redux'


export const signup = async (data)=>{
   return api.post('/register', data);
}

export const loginUser = (data) => {
  return api.post("/login", data);
};

export const logout = () =>{
  return api.post("/logout")
}
