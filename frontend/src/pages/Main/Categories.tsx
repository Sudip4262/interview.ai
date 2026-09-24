import { useEffect, useState } from 'react'
import type { category } from '../../types'
import { CircleArrowRight, ArrowRight } from 'lucide-react';

function Categories() {

  const [categories, setCategories] = useState<category[]>([])

  useEffect(() => {
    getAllCategory()
  },[])

  const getAllCategory = async() => {
    const response = await fetch("http://localhost:5000/category/getall",{
      method:'GET'
    })
    const data = await response.json()
    // console.log(data.allCategories)
    setCategories(data.allCategories)
  }

  return (
    <div className="flex flex-col p-6">
      <div className="flex flex-row justify-between pb-0">
        <div className="flex flex-col ">
          <p className="text-xs font-bold text-slate-400">CATEGORIES</p>
          <h1 className="text-4xl font-bold tracking-tighter mb-1 text-[#000]/70">
            Choose Your Interview Track
          </h1>
          <p className="text-xs text-slate-400 tracking-wider">
            select a category to start practicing with curated questions and get
            AI-powered feedback
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <div className="h-[70%] bg-[#000]/40 rounded-[20px]">
            <p className="p-6 text-[#FFF]/40">We will use adds here someDay</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col my-10">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col mb-1">
            <h1 className="font-bold text-[#000]/70">Popular Categories</h1>
            <p className="text-xs text-slate-500">
              Most popular tracks to help you prepare for real-world interview
            </p>
          </div>
          <p className="flex items-center text-xs gap-2 text-[#4343F4] hover:text-[#4343F4]/70 font-bold cursor-pointer">
            view all Categories <CircleArrowRight className="w-4" />
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          {categories.map((item) => {
            if (item.active) {
              return (
                <div className="flex flex-row border-2 border-[#000]/10 hover:border-[#4343F4]/80 rounded-[6px] p-4 gap-4 bg-[#4545F4]/5 cursor-pointer">
                  <img
                    src={item.img}
                    className="flex h-14 aspect-[1/1] rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="text-base font-bold">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.description}</p>
                  </div>

                  <ArrowRight
                    className="self-center shrink-0 text-[#000]/70 bg-[#FFF] rounded-full p-1 border border-[#fff]/50"
                    size={25}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>

      <div className="flex flex-col mb-10">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col mb-1">
            <h1 className="font-bold text-[#000]/70">More Categories (Coming Soon)</h1>
            <p className="text-xs text-slate-500">
              These tracks are currently under development. Stay tuned
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          {categories.map((item) => {
            if (!item.active) {
              return (
                <div className="relative flex flex-row border-2 border-[#000]/10 hover:border-[#4343F4]/80 rounded-[6px] p-4 gap-4 bg-[#4545F4]/0 cursor-pointer">
                  <img
                    src={item.img}
                    className="flex h-14 aspect-[1/1] rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="text-base font-bold">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.description}</p>
                  </div>

                  <ArrowRight
                    className="self-end shrink-0 text-[#000]/70 bg-[#FFF] rounded-full p-1 border border-[#fff]/50"
                    size={25}
                  />

                  <p className='absolute right-0 top-0 m-2 text-[#4343F4] text-[10px] font-bold bg-[#4343F4]/10 border border-[#4343F4]/10 px-1 py-[1px] rounded-[4px]'>coming soon</p>
                </div>
              );
            }
          })}
        </div>
      </div>

      <div className="flex flex-row p-6 items-center border border-[#000]/30 rounded-[10px] gap-6">
        <img src="/img/PMlogo.png" className="w-[20%]" />
        <div className="flex flex-col">
          <h3 className="font-semibold leading-relaxed text-slate-600">
            Not sure where to start?
          </h3>
          <p className="text-xs tracking-wide text-slate-500">
            Take a quick assessment and we'll recommend the best track for you
          </p>
        </div>
        <p className="flex ml-auto bg-[#4343f4] text-[#FFF] text-sm py-2 px-4 rounded-[10px] items-center gap-2 cursor-pointer hover:bg-[#4343F4]/70">
          Take Assessment <ArrowRight className="w-4" />{" "}
        </p>
      </div>
    </div>
  );
}

export default Categories