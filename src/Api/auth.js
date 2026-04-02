import api from './axios'

export const signup = async (data)=>{
   return api.post('/register', data);
}

export const loginUser = (data) => {
  return api.post("/login", data);
};

export const logout = () =>{
  return api.post("/logout")
}
