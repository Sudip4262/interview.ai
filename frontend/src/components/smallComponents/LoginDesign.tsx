import React from 'react'

type data = {
    name:string,
    desc:string,
    img:string
}

const InfoData: data[] = [
    {
        name: "Practice smarter",
        desc: "Access curated questions",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTojS6DbVziqEgCA-p3UJVpyLhZBBer2TMJYGJOSSBVxA&s=10"
    },
    {
        name: "Track your growth",
        desc: "set your progress over time",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTojS6DbVziqEgCA-p3UJVpyLhZBBer2TMJYGJOSSBVxA&s=10"
    },
    {
        name: "Achive your goals",
        desc: "get closer to your dream job",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTojS6DbVziqEgCA-p3UJVpyLhZBBer2TMJYGJOSSBVxA&s=10"
    }
]

function LoginDesign() {
  const displayW = window.innerWidth >= 1400
  return (
    <div className="flex flex-col h-full w-full p-8 overflow-hidden" style={{backgroundImage:`url("/img/Working.png")`,  backgroundPosition: 'bottom right', backgroundSize:displayW? "500px" : "350px", backgroundRepeat:'no-repeat'}}>
      <h1 className="text-4xl font-bold tracking-tight">Sign in to</h1>
      <h1 className="text-5xl text-[#4545F2] font-bold tracking-tight">
        InterviewAI
      </h1>
      <p className="text-gray-600 mt-4 mb-8">
        Continue your journey to ace interviews with AI-powered practice and
        feedback
      </p>

      <div className='flex flex-col gap-4'>
        {InfoData.map((item) => {
          return (
            <div className="flex flex-row gap-4 items-center">
              <img src={item.img} className="w-14 rounded-[10px]" />
              <div className="flex flex-col">
                <p className="text-base font-bold text-gray-600">{item.name}</p>
                <p className="text-sm text-gray-600 tracking-wider">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* <img src='/img/Working.png' className='w-[60%] md:w-[50%] 2xl:w-[80%] self-end'/> */}
    </div>
  );
}

export default LoginDesign