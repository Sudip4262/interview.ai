import React, {useEffect, useState} from 'react'
import { CircleArrowRight, ArrowRight, Check, File, FileSpreadsheet, Clock } from 'lucide-react';
import type { category, Interview_topic } from '../../types'

const Difficulty = [
  {
    id:1,
    name:"Easy",
    description:"Basic concepts and fundamentals",
    color:"#00ff00"
  },
  {
    id:2,
    name:"Medium",
    description:"Intermediate concepts and real work scenarios",
    color:"#0000ff"
  },
  {
    id:3,
    name:"Hard",
    description:"Advanced concepts and in-depth problem solving",
    color:"#ff0000"
  }
]

const No_Questions = [
  {
    id:1,
    value:5,
    time: "10-15 minutes"
  },
  {
    id:2,
    value:10,
    time: "20-25 minutes"
  },
  {
    id:3,
    value:15,
    time: "30-40 minutes"
  },
  {
    id:4,
    value:20,
    time: "40-50 minutes"
  },
]

export default function Interview() {

  const [categories, setCategories] = useState<category[]>([])
  const [topic, setTopic] = useState<Interview_topic>({
    category_id: 8,
    category_name:"NodeJs",
    category_img:"https://zonalogo.com/assets/nodejs-logo-png-svg.webp",
    difficulty: "Easy",
    difficulty_color:"#00ff00",
    no_question: 5 ,
    estimated_time:"10-15 minutes"
  })
  
    useEffect(() => {
      getAllCategory()
    },[])
  
    const getAllCategory = async() => {
      const response = await fetch("http://localhost:5000/category/getall",{
        method:'GET'
      })
      const data = await response.json()
      console.log(data.allCategories)
      setCategories(data.allCategories)
    }

  return (
    <div>
      <div className="relative flex flex-col p-6">
        <div className="flex flex-row justify-between pb-0">
          <div className="flex flex-col ">
            <p className="text-xs font-bold text-slate-400">START INTERVIEW</p>
            <h1 className="text-4xl font-bold tracking-tight mb-1 text-[#000]/70">
              Start a New Interview
            </h1>
            <p className="text-xs text-slate-400 tracking-wider">
              Customize your interview settings and get ready to practice.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="h-[70%] bg-[#000]/40 rounded-[20px]">
              <p className="p-6 text-[#FFF]/40">
                We will use adds here someDay
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-row gap-6'>
          <div className='flex flex-[3] flex-col'>

            {/* Select Category */}
            <div className="flex flex-col w-full border border-[#000]/10 rounded-[10px] py-4 px-8 my-6 ">
              <div className="flex flex-row gap-4">
                <div className="flex bg-[#4343F4] w-6 h-6 rounded-full justify-center items-center self-center">
                  <p className="text-[#FFF] text-sm ">1</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-slate-700">
                    Select Category
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Choose the difficulty level that matches your preparation.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-5 2xl:grid-cols-7 gap-4 my-4">
                {categories?.map((item) => {
                  if (item.active) {
                    return (
                      <div
                        key={item.id}
                        className={`relative flex flex-col border-2 rounded-[5px] justify-center items-center p-6 gap-4 cursor-pointer duration-200 
                    ${topic?.category_id === item.id ? "border-[#4343F4] scale-[1.05]" : "border-slate-200 hover:border-blue-400"}`}
                        onClick={() => {
                          setTopic({
                            ...topic,
                            category_id: item.id,
                            category_img:item.img,
                            category_name:item.name
                          });
                          console.log(topic, item.id);
                        }}
                      >
                        <img src={item.img} className="h-12" />
                        <p className="text-sm">{item.name}</p>
                        <div
                          className={`absolute ${topic?.category_id === item.id ? "flex" : "hidden"} bg-[#4343F4] rounded-full top-0 right-0 m-2`}
                        >
                          <Check className="p-1 text-[#FFF]" />
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>

            {/* select difficulty */}
            <div className="flex flex-col w-full border border-[#000]/10 rounded-[10px] py-4 px-8 mb-6 ">
              <div className="flex flex-row gap-4">
                <div className="flex bg-[#4343F4] w-6 h-6 rounded-full justify-center items-center self-center">
                  <p className="text-[#FFF] text-sm "> 2 </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-slate-700">
                    Select Difficulty
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Choose the topic you want to be interviewed on.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 2xl:grid-cols-3 gap-4 my-4">
                {Difficulty.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className={`relative flex flex-row border-2 rounded-[5px] items-center py-2 px-6 gap-4 cursor-pointer duration-200 
                    ${topic?.difficulty.toLowerCase() === item.name.toLowerCase() ? "border-[#4343F4] scale-[1.05]" : "border-slate-200 hover:border-blue-400"}`}
                      onClick={() => {
                        setTopic({
                          ...topic,
                          difficulty: item.name,
                          difficulty_color: item.color
                        });
                        console.log(topic, item.name);
                      }}
                    >
                      <div
                        className={`flex h-6 w-6 rounded-full justify-center items-center shrink-0`}
                        style={{ backgroundColor: `${item.color}33` }}
                      >
                        <div
                          className="flex h-2 w-2 rounded-full justify-center items-center"
                          style={{ backgroundColor: `${item.color}` }}
                        ></div>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className="text-xs text-slate-500">
                          {item.description}
                        </p>
                      </div>
                      <div
                        className={`absolute ${topic?.difficulty === item.name ? "flex" : "hidden"} bg-[#4343F4] rounded-full top-0 right-0 m-2`}
                      >
                        <Check className="p-1 text-[#FFF]" size={20} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* select no_of_questions */}
            <div className="flex flex-col w-full border border-[#000]/10 rounded-[10px] py-4 px-8 mb-6 ">
              <div className="flex flex-row gap-4">
                <div className="flex bg-[#4343F4] w-6 h-6 rounded-full justify-center items-center self-center">
                  <p className="text-[#FFF] text-sm "> 3 </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-slate-700">
                    Select Difficulty
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Choose the topic you want to be interviewed on.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-4 2xl:grid-cols-5 gap-6 my-4">
                {No_Questions?.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className={`relative flex flex-row border-2 rounded-[5px] justify-center items-center py-2 cursor-pointer duration-200 
                    ${topic?.no_question === item.value ? "border-[#4343F4] scale-[1.05]" : "border-slate-200 hover:border-blue-400"}`}
                      onClick={() => {
                        setTopic({
                          ...topic,
                          no_question: item.value,
                          estimated_time:item.time
                        });
                        console.log(topic, item.value);
                      }}
                    >
                      <div className="flex flex-col">
                        <p className="text-sm font-semibold">{item.value}</p>
                      </div>
                      <div
                        className={`absolute ${topic?.no_question === item.value ? "flex" : "hidden"} bg-[#4343F4] rounded-full top-0 right-0 m-1`}
                      >
                        <Check className="p-0 text-[#FFF]" size={18} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* start interview section */}
            <div className='flex justify-end border border-[#000]/10 rounded-[4px]'>
              <p className='bg-[#4343F4] duration-200 hover:shadow-[2px_4px_8px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:-translate-y-0 rounded-[4px] px-4 py-2 text-[#FFF] font-semibold tracking-wide m-4 cursor-pointer'>Start Interview</p>
            </div>
          </div>

          <div className='flex flex-col flex-[1] mt-6'>

            <div className='flex flex-col h-auto w-full border border-[#000]/20 rounded-[6px] p-4'>

            {/* Category */}
              <div className='flex flex-row items-center gap-2'>
                <File color='#4343F4' size={30} className='p-2 bg-[#4343F4]/20 rounded-full'/>
                <p className='text-base text-slate-600 font-semibold tracking-tight'>Interview Summary</p>
              </div>

              {/* Difficulty */}
              <div className='flex flex-col mt-2'>
                <p className='text-xs text-slate-400 my-2 font-bold tracking-wide'>Category</p>
                <div className='flex flex-row items-center gap-2'>
                  <img src={topic.category_img} className='w-8'/>
                  <p className='text-sm font-semibold text-slate-700'>{topic.category_name}</p>
                </div>
              </div>
              {/* No Of Question */}
              <div className='flex flex-col mt-2'>
                <p className='text-xs text-slate-400 my-2 font-bold tracking-wide'>Difficulty</p>
                <div className='flex flex-row items-center gap-4'>
                  <div className={`flex h-8 w-8 rounded-full justify-center items-center shrink-0`} style={{ backgroundColor: `${topic.difficulty_color}33` }} >
                    <div className="flex h-3 w-3 rounded-full justify-center items-center" style={{ backgroundColor: `${topic.difficulty_color}` }} ></div>
                  </div>
                  <p className='text-sm font-semibold text-slate-700'>{topic.difficulty}</p>
                </div>
              </div>
              <div className='flex flex-col mt-2 border-b border-[#000]/20 pb-4'>
                <p className='text-xs text-slate-400 my-2 font-bold tracking-wide'>No Of Questions</p>
                <div className='flex flex-row items-center gap-2'>
                  <FileSpreadsheet color='#4343F4' className='p-2 bg-[#4343F4]/20 rounded-full' size={35}/>
                  <p className='text-sm font-semibold text-slate-700'>{topic.no_question}</p>
                </div>
              </div>

              <div className='flex flex-col mt-2'>
                <p className='text-xs text-slate-400 my-2 font-bold tracking-wide'>Estimated Duration</p>
                <div className='flex flex-row items-center gap-2'>
                  <Clock color='#4343F4' className='p-2 bg-[#4343F4]/20 rounded-full' size={35}/>
                  <p className='text-sm font-semibold text-slate-700'>{topic.estimated_time}</p>
                </div>
              </div>

              <div className='flex w-full bg-[#4343F4] justify-center items-center mt-6 border border-[#000]/10 duration-200 hover:shadow-[2px_4px_8px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:-translate-y-0 rounded-[4px]'>
                <p className=' py-2 text-[#FFF] font-semibold tracking-wide cursor-pointer'>Start Interview</p>
              </div>

            </div>
            {/* <div className='flex'>hii</div> */}
          </div>

        </div>
      </div>
    </div>
  ); 
}
