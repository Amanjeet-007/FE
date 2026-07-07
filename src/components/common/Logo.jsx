import { Link } from "react-router-dom"
export default function Logo(){
    return(
        <div className="flex flex-1 justify-center md:justify-start md:flex-none">
          <Link to={"/"} className="flex items-center gap-2">
            <div className=" logo w-9 h-9 px-6 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg dark:shadow-blue-800 shadow-blue-200">
              Neo
            </div>
            <span className="text-xl font-bold tracking-tight text-blue-600 hidden md:block">
              ecommerce
            </span>
          </Link>
        </div>
    )
}