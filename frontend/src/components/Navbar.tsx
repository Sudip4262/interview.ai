import { Search, Bell, BellDot } from 'lucide-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

  const user = useSelector(
    (state: RootState) => state.auth.user
  )

  console.log(user)


  return (
    <div className="flex flex-row min-h-16 max-h-24 border-b border-[#000]/20 justify-between items-center">
      <div
        className={`flex h-[70%] w-[40%] border border-[#000]/30 hover:border-2 hover:border-[#4545F2] items-center rounded-[4px] px-4 mx-2 gap-2`}
      >
        <Search />
        <input
          className={`flex w-full border-none outline-none focus:outline-none `}
          placeholder="Search"
        />
      </div>
      <div className="flex items-center gap-6 mr-4">
        <Bell />
        <NavLink
          to={"/profile"}
          className={`flex flex-row items-center h-12 w-full hover:bg-[#000]/10 duration-200 rounded-[10px] p-2 gap-2 cursor-pointer`}
        >
          <img
            src="https://png.pngtree.com/png-clipart/20210702/ourmid/pngtree-simple-hello-text-handwriting-png-image_3548451.jpg"
            className="h-full aspect-[1/1] rounded-full"
          />
          <p className="leading-tight text-sm">{user?.name}</p>
        </NavLink>
      </div>
    </div>
  );
}
