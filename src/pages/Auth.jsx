import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser, signup } from "../Api/auth";
import { authenticated } from "../redux/features/auth";
// import { setUser } from "../redux/features/user";
import { useNavigate, useBlocker } from "react-router-dom";
import useSession from "../hooks/useSession.js";
import Loader from "../components/common/Loader.jsx";
import ErrorMessage from "../components/common/ErrorMessage.jsx";

const Login = () => {
  const { saveSession } = useSession();
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    // e.preventDefault()
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispactch = useDispatch();

   const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // server request and other thing with error handling
    try {
      if (inputData.email && inputData.password) {
        const res = await loginUser(inputData);
        dispactch(authenticated());
        saveSession(res.data.user);
        //navigate the page into home page
        navigate("/");
        // console.log("Login successful.",res)
      }
      setError("fill the blank field");
    } catch (err) {
      setError(err?.message || err);
      console.log("while login getting error", err);
    } finally {
      setLoading(false);
    }
  }

  // login
  return (
    <Loader type="blur" text="Finding" loading={loading}>
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-blue-900 tracking-tight">
            Welcome Back
          </h2>
          <p className="text-blue-600/60 mt-2 font-medium">
            Log in to your premium shopping account.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="group">
            <input
              onChange={handleChange}
              name="email"
              type="email"
              className="w-full px-5 py-4 bg-blue-50/50 border border-blue-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:text-blue-300"
              placeholder="Email Address"
            />
          </div>
          <div className="group w-full relative">

            <input
              onChange={handleChange}
              name="password"
              type={showPassword ? "text" : "password"}
              className="w-full px-5 py-4 bg-blue-50/50 border border-blue-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:text-blue-300"
              placeholder="Password"
            />
            <div onClick={togglePasswordVisibility} className="absolute right-3 bottom-1/3">
              {showPassword ? 
              // show icon
              <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(30,61,212,1)"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>
               : 
               // hide icon
               <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(40,77,173,1)"><path d="M17.8827 19.2968C16.1814 20.3755 14.1638 21.0002 12.0003 21.0002C6.60812 21.0002 2.12215 17.1204 1.18164 12.0002C1.61832 9.62282 2.81932 7.5129 4.52047 5.93457L1.39366 2.80777L2.80788 1.39355L22.6069 21.1925L21.1927 22.6068L17.8827 19.2968ZM5.9356 7.3497C4.60673 8.56015 3.6378 10.1672 3.22278 12.0002C4.14022 16.0521 7.7646 19.0002 12.0003 19.0002C13.5997 19.0002 15.112 18.5798 16.4243 17.8384L14.396 15.8101C13.7023 16.2472 12.8808 16.5002 12.0003 16.5002C9.51498 16.5002 7.50026 14.4854 7.50026 12.0002C7.50026 11.1196 7.75317 10.2981 8.19031 9.60442L5.9356 7.3497ZM12.9139 14.328L9.67246 11.0866C9.5613 11.3696 9.50026 11.6777 9.50026 12.0002C9.50026 13.3809 10.6196 14.5002 12.0003 14.5002C12.3227 14.5002 12.6309 14.4391 12.9139 14.328ZM20.8068 16.5925L19.376 15.1617C20.0319 14.2268 20.5154 13.1586 20.7777 12.0002C19.8603 7.94818 16.2359 5.00016 12.0003 5.00016C11.1544 5.00016 10.3329 5.11773 9.55249 5.33818L7.97446 3.76015C9.22127 3.26959 10.5793 3.00016 12.0003 3.00016C17.3924 3.00016 21.8784 6.87992 22.8189 12.0002C22.5067 13.6998 21.8038 15.2628 20.8068 16.5925ZM11.7229 7.50857C11.8146 7.50299 11.9071 7.50016 12.0003 7.50016C14.4855 7.50016 16.5003 9.51488 16.5003 12.0002C16.5003 12.0933 16.4974 12.1858 16.4919 12.2775L11.7229 7.50857Z"></path></svg>
               }
            </div>
          </div>
          {error && <ErrorMessage message={error} />}

          <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 active:scale-[0.98] transition-all shadow-xl shadow-blue-200">
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </Loader>
  );
};

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();
  const { saveSession } = useSession();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispactch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      if (form.name && form.email && form.password) {
        const res = await signup(form);
        dispactch(authenticated());
        saveSession(res.data.user);
        navigate("/");
      }
      setError("Please fill all field!");
      //navigate the user to home page
    } catch (err) {
      setError(err.message ?? "Network error!");
      return console.log("signup error", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Loader type="blur" text="Creating..." loading={loading}>
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-blue-900 tracking-tight">
            Create Account
          </h2>
          <p className="text-blue-600/60 mt-2 font-medium">
            Join us for exclusive deals and faster checkout.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            className="w-full px-5 py-4 bg-blue-50/50 border border-blue-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:text-blue-300"
            name="name"
            placeholder="Full Name"
          />
          <input
            type="email"
            onChange={handleChange}
            name="email"
            className="w-full px-5 py-4 bg-blue-50/50 border border-blue-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:text-blue-300"
            placeholder="Email Address"
          />
          <div className="group w-full relative">

          <input
           type={showPassword ? "text" : "password"}
            onChange={handleChange}
            name="password"
            className="w-full px-5 py-4 bg-blue-50/50 border border-blue-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:text-blue-300"
            placeholder="Password"
          />
          <div onClick={togglePasswordVisibility} className="absolute right-3 bottom-1/3">
              {showPassword ? 
              // show icon
              <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(30,61,212,1)"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>
               : 
               // hide icon
               <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(40,77,173,1)"><path d="M17.8827 19.2968C16.1814 20.3755 14.1638 21.0002 12.0003 21.0002C6.60812 21.0002 2.12215 17.1204 1.18164 12.0002C1.61832 9.62282 2.81932 7.5129 4.52047 5.93457L1.39366 2.80777L2.80788 1.39355L22.6069 21.1925L21.1927 22.6068L17.8827 19.2968ZM5.9356 7.3497C4.60673 8.56015 3.6378 10.1672 3.22278 12.0002C4.14022 16.0521 7.7646 19.0002 12.0003 19.0002C13.5997 19.0002 15.112 18.5798 16.4243 17.8384L14.396 15.8101C13.7023 16.2472 12.8808 16.5002 12.0003 16.5002C9.51498 16.5002 7.50026 14.4854 7.50026 12.0002C7.50026 11.1196 7.75317 10.2981 8.19031 9.60442L5.9356 7.3497ZM12.9139 14.328L9.67246 11.0866C9.5613 11.3696 9.50026 11.6777 9.50026 12.0002C9.50026 13.3809 10.6196 14.5002 12.0003 14.5002C12.3227 14.5002 12.6309 14.4391 12.9139 14.328ZM20.8068 16.5925L19.376 15.1617C20.0319 14.2268 20.5154 13.1586 20.7777 12.0002C19.8603 7.94818 16.2359 5.00016 12.0003 5.00016C11.1544 5.00016 10.3329 5.11773 9.55249 5.33818L7.97446 3.76015C9.22127 3.26959 10.5793 3.00016 12.0003 3.00016C17.3924 3.00016 21.8784 6.87992 22.8189 12.0002C22.5067 13.6998 21.8038 15.2628 20.8068 16.5925ZM11.7229 7.50857C11.8146 7.50299 11.9071 7.50016 12.0003 7.50016C14.4855 7.50016 16.5003 9.51488 16.5003 12.0002C16.5003 12.0933 16.4974 12.1858 16.4919 12.2775L11.7229 7.50857Z"></path></svg>
               }
            </div>
            </div>
          {error && <ErrorMessage message={error} />}
          <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 active:scale-[0.98] transition-all shadow-xl shadow-blue-200">
            Join Now
          </button>
        </form>
      </div>
    </Loader>
  );
};

export default function Auth() {
  const [signup, setSignup] = useState(false);
  const navigate = useNavigate();

  // The blocker will trigger whenever navigation is attempted
  const blocker = useBlocker(({ historyAction }) => {
    // Only block if the user is going "back" (POP action)
    return historyAction === "POP";
  });

  // Effect to handle the redirection logic
  if (blocker.state === "blocked") {
    // 1. Run your custom logic here
    console.log("Custom logic executed on back swipe/button");

    // 2. Clear the blocker so the next navigation works
    blocker.reset();

    // 3. Navigate to your specific route
    navigate("/");
  }

  //localstorage se puchhna hoga ki authenticated user hai ki nahi
  const { getSession } = useSession();

  const user = getSession();
  if (user) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      {/* Main Card Container */}
      <div className="bg-white w-full max-w-6xl rounded-[3rem] shadow-[0_30px_100px_rgba(30,58,138,0.15)] overflow-hidden flex flex-col md:flex-row min-h-175 transition-all duration-700 ease-in-out relative">
        {/* Form Section */}
        <div
          className={`w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center bg-white transition-all duration-700 ease-in-out transform z-10 
          ${signup ? "md:translate-x-full border-l border-blue-50" : "md:translate-x-0 border-r border-blue-50"}`}
        >
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
        <div
          className={`absolute hidden md:block w-1/2 h-full top-0 bottom-0 overflow-hidden transition-all duration-700 ease-in-out
          ${signup ? "left-0 translate-x-0" : "left-1/2 translate-x-0"}`}
        >
          <div className="relative w-full h-full group">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop"
              alt="Fashion Brand"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-2000 group-hover:scale-110"
            />
            {/* Blue Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-600/40 to-blue-900/80 flex flex-col justify-end p-16 text-white">
              <div className="backdrop-blur-sm bg-white/10 p-8 rounded-3xl border border-white/20 transform transition-transform duration-700">
                <h2 className="text-4xl font-bold mb-3 italic tracking-tight">
                  Elegance Redefined
                </h2>
                <p className="text-blue-50 text-lg font-light">
                  Experience the future of fashion shopping with us.
                </p>
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
