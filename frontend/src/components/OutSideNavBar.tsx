import { NavLink } from "react-router-dom";

export default function OutSideNavBar() {
  return (
    <div className="flex flex-row justify-between items-center w-full min-h-10 max-h-24">
        <img src="/img/PMlogo.png" alt="Sorry for the image"
        className="w-[20%] py-2 px-6 cursor-pointer" onClick={() => {navigation.navigate("/")}}/>
        <div className="flex py-2 px-6 gap-2">
            <NavLink to={'/'} className={({isActive}) => `border-2 border-[#000]/10 py-1 px-4 rounded-[4px] cursor-pointer duration-200 ${isActive? "text-[#FFF] bg-[#00f] shadow-[4px_6px_10px_rgba(0,0,255,0.20)]":"text-[#000] hover:bg-[#00f]/20"}`} >Home</NavLink>
        </div>
        <div className="flex py-2 px-6 gap-2">
            <NavLink to={"/signin"} className={({isActive}) => `border-2 border-[#000]/20 py-1 px-4 rounded-[4px] cursor-pointer duration-200 ${isActive? "text-[#FFF] bg-[#00f]":"text-[#000] hover:bg-[#00f]/20"}`}>Sign Up</NavLink>
            <NavLink to={"/login"} className={({isActive}) => `border-2 border-[#00f]/20 py-1 px-4 rounded-[4px] cursor-pointer duration-200 ${isActive? "text-[#FFF] bg-[#00f]":"text-[#00f] hover:bg-[#00f]/20"}`}>Login</NavLink>
        </div>
    </div>
  )
}
