import { useState } from "react"

const Button = ({operation,fn})=>{
    return(
        <button onClick={fn} className="border-2 border-gray-600 flex items-center rounded-xl justify-center font-bold text-xl" style={{width:"40px", height:"40px"}}>{operation}</button>
    )
}

export default function Count({stock  = 5}){
    const [count,setCount] = useState(1);
     function handleLess(){
        if(count > 1){
            return setCount(el=>el-1);
        }
        return
     }
     function handleAdd(){
        if(count !=  stock){
             return setCount(el=>el+1)
        }
        return
     }
    return(
        <>
        <Button operation={"-"} fn={handleLess} />
        <p className="text-2xl">{count}</p>
        <Button operation={"+"} fn={handleAdd} />
        </>
    )
}