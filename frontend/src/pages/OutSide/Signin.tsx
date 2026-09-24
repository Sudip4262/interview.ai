import React, { useState } from "react"
import { SquareCheck, Square } from 'lucide-react';
import LoginDesign from "../../components/smallComponents/LoginDesign";

type FormData = {
    email: string,
    password:string,
    name:string
}

export default function Login() {

    const [formData,setFormData] = useState<FormData>({
        email:"",
        password:"",
        name:""
    })

    const [remember,setRemember] = useState<Boolean>(false)


    const Submit = async(e: React.FormEvent) => {
        e.preventDefault()

        if(formData.email === ""){
          return alert("please enter your email")
        }

        else if(formData.password === ""){
          return alert("please enter a valid pass")
        }

        else if(formData.name === ""){
          return alert("please enter your name")
        }

            const request = await fetch("http://localhost:5000/users/signin",{
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    email:formData.email,
                    password:formData.password,
                    name:formData.name,
                })
            })
            // const data = await request.json()
            if(request.status === 350) {
              alert("user already exists! please try to login instead")
              navigation.navigate("/login")
            }
            if(request.status === 200){
              alert("User Created! please login.")
              navigation.navigate("/login")
            }
            if(request.status === 400){
              alert("Something went wrong, please try again later")
            }
    }



   return (
     <div className="flex flex-col h-[calc(100vh-60px)] w-full items-center bg-[#4545F2]/20">
       <div className="flex flex-row h-full w-full max-w-6xl justify-center items-center">
         <div className="flex flex-[2] h-full flex-col">
           <LoginDesign />
         </div>
         <div className="flex flex-[1.5] flex-col h-full items-center p-6">
           <div className="flex flex-col w-full bg-[#FFF] rounded-[10px] py-6 px-8">
             <h2 className=" text-3xl xl:text-4xl font-bold leading-none">
               Get Started,
             </h2>
             <p className="text-gray-500 mt-2 leading-none">
               Create new account to continue
             </p>

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
               <div>
                 <p className="leading-relaxed text-sm">Name</p>
                 <input
                   type="text"
                   placeholder="Name"
                   className="w-full border py-2 px-4 text-base rounded-sm text-[#000]"
                   value={formData.name}
                   onChange={(e) =>
                     setFormData({
                       ...formData,
                       name: e.target.value,
                     })
                   }
                 />
               </div>

               <button
                 className=" w-full py-4 rounded-md bg-indigo-600 text-white font-semibold cursor-pointer"
                 type="submit"
               >
                 Create Account
               </button>
             </form>

             <p
               className="hover:cursor-pointer mt-2 text-sm hover:text-[#4545F2] hover:underline"
               onClick={() => {
                 navigation.navigate("/login");
               }}
             >
               Already have and Account?
             </p>
           </div>
         </div>
       </div>
     </div>

   );
}


