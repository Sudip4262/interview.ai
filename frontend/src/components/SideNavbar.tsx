import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { House, Play, StickyNotes, RotateCcwClock, ChevronRight,UserShield } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice'

type SideNavbarProps = {
    width:number
}
type BarItem = {
    name:string,
    icon:any,
    link:string,
}
type user = {
    name:string,
    img:string,
    email:string
}

const BarContent: BarItem[] = [
    {
        name:"Dashboard",
        icon:House,
        link:"/home"
    },
    {
        name:"Start Interview",
        icon:Play,
        link:"/interview"
    },
    {
        name:"Categories",
        icon:StickyNotes,
        link:"/categories"
    },
    {
        name:"Interview History",
        icon:RotateCcwClock,
        link:"/history"
    },
    {
        name:"Profile",
        icon:UserShield,
        link:"/profile"
    },
]

export default function SideNavbar({width}:SideNavbarProps) {

    const [user, setUser] = useState<user>({
        name:"",
        img:"",
        email:""
    })
    const token = localStorage.getItem("token")
    const dispatch =useDispatch()

    useEffect(() => {
        if(token){
            callUser()
        }
        else{
            navigation.navigate("/")
        }
    },[])

    const callUser = async() => {
        const user = await fetch("http://localhost:5000/users/get-user",{
            method:'GET',
            headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
          }
        })
        const data = await user.json()
        // console.log(data)
        if (data.user) {
          setUser({
            ...user,
            name: data.user.name,
            img: data.user.img,
            email: data.user.email,
          });

          dispatch(
            login({
                user: {
                    id: data.user.id,
                    name: data.user.name,
                    email: data.user.email
                },
                token:token
            })
          )
        }

    }

  return (
    <div className={`flex flex-col h-screen border border-[#000]/20 p-4`} style={{ width: `${width}%` }}>
      <div className='flex w-full h-[10%]'>
        <img className='w-full h-full object-contain' src='/img/PMlogo.png' alt="Not Loaded" />
      </div>
      <div className='flex flex-col h-[80%] mt-8 gap-1'>
        {BarContent.map((item) => {
            const Icon = item.icon
          return (
            <NavLink to={item.link} className={({isActive}) => `flex flex-row items-center pl-6 py-3 rounded-[10px] gap-3 duration-200 ${isActive? "bg-[#4545F2] backdrop-bg-blur text-[#FFF] text-base font-medium":"text-sm text-[#000]/60 hover:bg-[#4545F2]/20"}` }>
                <Icon size={20}/>
                <p>{item.name}</p>
            </NavLink>
          )
        })
        }
      </div>
      <NavLink to={"/profile"} className={`flex flex-row items-center h-[10%] w-full border border-[#000]/20 hover:bg-[#000]/10 duration-200 rounded-[10px] py-2 pl-4 gap-2 cursor-pointer`}>
        <img src='https://png.pngtree.com/png-clipart/20210702/ourmid/pngtree-simple-hello-text-handwriting-png-image_3548451.jpg' className='h-full aspect-[1/1] rounded-full'/>
        <p className='leading-tight'>{user.name}</p>
        <ChevronRight size={15} className='ml-auto mr-2'/>
      </NavLink>
    </div>
  );
}
