import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser, signup } from "../Api/auth";
import { authenticated } from "../redux/features/auth";
import { setUser } from "../redux/features/user";
import useSession from '../hooks/useSession.js'

 

const Login = () => {

  const { saveSession }  = useSession();

  const [inputData, setInputData] = useState({
    email: "",
    password: ""
  })

  function handleChange(e) {
    // e.preventDefault()
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  const dispactch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // server request and other thing with error handling
    try {

      const res = await loginUser(inputData)
      dispactch(authenticated());
      saveSession(res.data.user)
      dispactch(setUser(res.data.user));
      console.log("Login successful.",res)
    } catch (err) {
      setError(err?.message || err);
      console.log("while login getting error", err)

    } finally {
      setLoading(false)
    }

  }

  // login 
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center md:text-left">
        <h2 className="text-4xl font-extrabold text-blue-900 tracking-tight">Welcome Back</h2>
        <p className="text-blue-600/60 mt-2 font-medium">Log in to your premium shopping account.</p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="group">
          <input onChange={handleChange} name="email" type="email" className="w-full px-5 py-4 bg-blue-50/50 border border-blue-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:text-blue-300" placeholder="Email Address" />
        </div>
        <div className="group">
          <input onChange={handleChange} name="password" type="password" className="w-full px-5 py-4 bg-blue-50/50 border border-blue-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:text-blue-300" placeholder="Password" />
        </div>
        {error && <p className="text-red-500 text-sm">{error.message}</p>}
        <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 active:scale-[0.98] transition-all shadow-xl shadow-blue-200">
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

const Signup = () => {
  const [a, seta] = useState(false); // for temp check to navigate to home page after success
  const [form, setForm] = useState({
    'name': "",
    'email': '',
    'password': "",
  })
  const { saveSession }  = useSession();


  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispactch = useDispatch()
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await signup(form);
      dispactch(authenticated());
      saveSession(res.data.user)
      dispactch(setUser(res.data.user));
    } catch (err) {
      setError(err)
      return console.log("signup error", err)
    } finally {
      setLoading(false)
    }

  }

  // singup api 
  return (

    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center md:text-left">
        <h2 className="text-4xl font-extrabold text-blue-900 tracking-tight">Create Account</h2>
        <p className="text-blue-600/60 mt-2 font-medium">Join us for exclusive deals and faster checkout.</p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} className="w-full px-5 py-4 bg-blue-50/50 border border-blue-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:text-blue-300" name="name" placeholder="Full Name" />
        <input type="email" onChange={handleChange} name="email" className="w-full px-5 py-4 bg-blue-50/50 border border-blue-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:text-blue-300" placeholder="Email Address" />
        <input type="password" onChange={handleChange} name="password" className="w-full px-5 py-4 bg-blue-50/50 border border-blue-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:text-blue-300" placeholder="Password" />
        {error && <p className="text-red-500 text-sm">{error.message}</p>}
        <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 active:scale-[0.98] transition-all shadow-xl shadow-blue-200">
          {loading ? "Signing in..." : "Join Now"}
        </button>
      </form>
    </div>
  );
};

export default function Auth() {
  const [signup, setSignup] = useState(false);

  const isAuth = useSelector((state) => state.auth.value);


  //redux se puchhna higa ki authenticated user hai ki nahi
  const { getSession } = useSession()

  const user = getSession()

  if (user) {
    return (
      <Navigate to='/' replace />
    )
  }


  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      {/* Main Card Container */}
      <div className="bg-white w-full max-w-6xl rounded-[3rem] shadow-[0_30px_100px_rgba(30,58,138,0.15)] overflow-hidden flex flex-col md:flex-row min-h-[700px] transition-all duration-700 ease-in-out relative">

        {/* Form Section */}
        <div className={`w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center bg-white transition-all duration-700 ease-in-out transform z-10 
          ${signup ? 'md:translate-x-full border-l border-blue-50' : 'md:translate-x-0 border-r border-blue-50'}`}>

          <div className="max-w-sm mx-auto w-full">
            {signup ? <Signup /> : <Login />}

            <div className="mt-12 text-center">
              <p className="text-blue-400 font-medium">
                {signup ? "Already have an account?" : "New to our store?"}
                <button
                  onClick={() => setSignup(!signup)}
                  className="ml-2 font-bold text-blue-700 hover:text-blue-900 underline underline-offset-4 transition-colors"
                >
                  {signup ? "Login" : "Sign Up"}
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className={`absolute hidden md:block w-1/2 h-full top-0 bottom-0 overflow-hidden transition-all duration-700 ease-in-out
          ${signup ? 'left-0 translate-x-0' : 'left-1/2 translate-x-0'}`}>

          <div className="relative w-full h-full group">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop"
              alt="Fashion Brand"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
            />
            {/* Blue Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-blue-900/80 flex flex-col justify-end p-16 text-white">
              <div className="backdrop-blur-sm bg-white/10 p-8 rounded-3xl border border-white/20 transform transition-transform duration-700">
                <h2 className="text-4xl font-bold mb-3 italic tracking-tight">Elegance Redefined</h2>
                <p className="text-blue-50 text-lg font-light">Experience the future of fashion shopping with us.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-only Image (Top of the form) */}
        <div className="md:hidden w-full h-48 absolute bottom-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="mobile-header"
          />
        </div>

      </div>
    </div>
  );
}