import React, { useState } from "react"
import { SquareCheck, Square } from 'lucide-react';
import LoginDesign from "../../components/smallComponents/LoginDesign";

type FormData = {
    email: string,
    password:string
}

export default function Login() {

    const [formData,setFormData] = useState<FormData>({
        email:"",
        password:""
    })
    const [remember,setRemember] = useState<Boolean>(false)


    const Submit = async(e: React.FormEvent) => {
        e.preventDefault()
            const request = await fetch("http://localhost:5000/users/login", {
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    email:formData.email,
                    password:formData.password
                })
            })
            if (request.status === 200){
              const data = await request.json()
              console.log(data)
              localStorage.setItem("token",data.token)
              setFormData({
                email:"",
                password:""
              })
              navigation.navigate("/home")
            }
            if (request.status === 350){
              alert("Invalid Credentials")
              setFormData({
                ...formData,
                password:""
              })
            }
            if(request.status === 400){
              alert("Something went wrong, Please try again later")
            }
    }



  return (
    <div className="flex flex-col h-[calc(100vh-60px)] w-full items-center bg-[#4545F2]/20">
      <div className="flex flex-row h-full w-full max-w-6xl justify-center items-center">
        <div className="flex flex-[2] h-full flex-col">
          <LoginDesign/>
        </div>
        <div className="flex flex-[1.5] flex-col h-full items-center p-6">
          <div className="flex flex-col w-full bg-[#FFF] rounded-[10px] py-6 px-8">
            <h2 className=" text-3xl xl:text-4xl font-bold leading-none">
              Welcome Back,
            </h2>
            <p className="text-gray-500 mt-2 leading-none">Login to continue</p>

            <form className="flex flex-col gap-4 mt-6" onSubmit={Submit}>
              <div>
                <p className="leading-relaxed text-sm">Email</p>
                <input
                  placeholder="Email"
                  className="w-full border py-2 px-4 text-base rounded-sm text-[#000]"
                  value={formData.email}
                  autoComplete="off"
                  onPaste={(e) => e.preventDefault()}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <p className="leading-relaxed text-sm">Password</p>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border py-2 px-4 text-base rounded-sm text-[#000]"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex flex-row justify-between my-1">
                <div className="flex flex-row items-center gap-2 cursor-pointer" onClick={() => setRemember(prev=> !prev)}>
                  {
                    remember? <SquareCheck size={24}/> : <Square size={24}/>
                  }
                  <p>Remember me</p>
                </div>
                <p className="text-[#4545F2] font-bold text-sm cursor-pointer hover:underline">forgot password?</p>
              </div>

              <button
                className=" w-full py-4 rounded-md bg-indigo-600 text-white font-semibold cursor-pointer"
                type="submit"
              >
                Login
              </button>
            </form>

            <p
              className="hover:cursor-pointer mt-2 text-sm hover:text-[#4545F2] hover:underline"
              onClick={() => {
                navigation.navigate("/signin");
              }}
            >
              Don't have an account?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

