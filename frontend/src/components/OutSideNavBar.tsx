import { Link, NavLink } from "react-router-dom";

export default function OutSideNavBar() {
  return (
    <div className="flex flex-row justify-between items-center w-full min-h-10 max-h-24">
        <img src="/img/PMlogo.png" alt="Sorry for the image"
        className="w-[25%] py-2 px-6"/>
        <div className="flex py-2 px-6 gap-2">
            <NavLink to={'/'} className={({isActive}) => isActive? "underline cursor-pointer":"cursor-pointer"} >Home</NavLink>
        </div>
        <div className="flex py-2 px-6 gap-2">
            <Link to={"/signin"} className=" border border-[#000]/20 hover:bg-[#000]/20 py-2 px-4 rounded-[4px] cursor-pointer">Sign Up</Link>
            <Link to={"/login"} className=" border-2 border-[#00f]/20 text-[#00f] hover:bg-[#00f]/20 py-2 px-4 rounded-[4px] cursor-pointer">Login</Link>
        </div>
    </div>
  )
}
