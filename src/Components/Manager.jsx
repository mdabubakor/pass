import React, { useEffect,  useState } from "react";
import {IoPersonAddSharp} from 'react-icons/io5'
import {FaEye, FaEyeSlash} from 'react-icons/fa'


const Manager = () => {
  // const ref = useRef()
  const [passdata,setPassData] = useState({site:"", username:"", password:""});
  const [show, setShow] = useState(false);
  const [passwordArray, setpasswordArray] = useState([])

  useEffect(()=>{
    let passwords = localStorage.getItem("password");
   
    if(passwords){
      setpasswordArray ( JSON.parse(passwords))
    }
  },[]) 
  
const handelpass=(e)=>{
  setPassData({...passdata,[e.target.name]: e.target.value});
  
}
const savepass =()=>{

  setpasswordArray(...passwordArray,passdata)
  localStorage.setItem("password",JSON.stringify([...passwordArray,passdata]))
  console.log([...passwordArray,passdata]);
  
}
    
    const handelshowpass=()=>{
      setShow(!show)
    }
  
  return (
  <>

  <div className="container mx-auto max-w-2xl py-5">
    <h1 className="text-zinc-500 text-4xl font-bold text-center">
    <span className='text-green-700'>&lt;</span>
        Pass
        <span className='text-green-700'>OP/&gt;</span>
    </h1>
    <p className=" text-lg text-green-700 text-center">Your own password Manager</p>
  <div className="flex flex-col p-4 text-lg gap-8">
    <input type="text" value={passdata.site} name="site" onChange={handelpass} placeholder="Enter your Website URL" className="rounded border[1px] outline-lime-800 p-4 py-1 bg-zinc-200 font-semibold border-[2px] border-green-500" />
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-32 w-full justify-between">
    <input type="text" value={passdata.usename} name="username" onChange={handelpass} placeholder="Enter your user Name" className="rounded border[1px] outline-lime-800 p-4 py-1 bg-zinc-200 font-semibold border-[2px] border-green-500" />
    <div className="relative flex  items-center">
      
    <input onChange={handelpass} value={passdata.password} name="password" type={show ? 'text' : 'password'} placeholder="Enter your Password" className=" rounded outline-1 outline-lime-800 p-4 py-1 bg-zinc-200 font-semibold border-[2px] border-green-500" />
    <button   className="absolute right-0 px-2  ">
     
    {/* <FaEye onClick={}/> */}
      {/* <FaEyeSlash/> */}
     
     {
      show ? ( <FaEyeSlash onClick={handelshowpass}/>) : (<FaEye onClick={handelshowpass} />)
     }
    
      </button>
    </div>
   
    </div>
    
    <button onClick={savepass} className="text-white text-xl bg-green-500 w-fit rounded flex py-2 px-2 gap-2
    hover:bg-green-600 duration-200
    ">
    <IoPersonAddSharp className="text-white text-2xl"/>
      Add Pssword</button>
  </div>
     <div>
      
  <h2 className="text-zinc-800 font-semibold text-xl text-bold py-4 underline">Your passwords</h2>
     {
      passwordArray.length === 0 && <div>No Password to Show</div>
     }
     {passwordArray.length !=0 &&
    <table className="md:table-fixed table-auto text-zinc-600 text-lg font-semibold w-full rounded-lg overflow-hidden ">
  <thead className="bg-green-900 text-white">
    <tr>
      <th className="py-2">Site</th>
      <th className="py-2">UserName</th>
      <th className="py-2">Password</th>
    </tr>
  </thead>
  <tbody className="">
    {passwordArray.map((item, index)=>{
      return <tr key={index}>

      <td className=" py-2 border  text-center w-32 "> <a href={item.site} target='_blank'>{item.site}</a> </td>
      <td className=" py-2 border  text-center w-32">{item.username}</td>
      <td className=" py-2 border  text-center w-32">{item.password}</td>
    </tr>
    })}
 
  </tbody>
</table>
}

     </div>
  
  </div>
  </>
  );
};

export default Manager;
