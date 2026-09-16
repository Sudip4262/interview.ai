import React, { useState } from "react"

type FormData = {
    email: string,
    password:string
}

export default function Login() {

    const [formData,setFormData] = useState<FormData>({
        email:"",
        password:""
    })


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

            }
            if(request.status === 400){
              // navigation.navigate("/signin")
            }
    }



  return (
    <div className="min-h-screen bg-slate-50">

      <div className="flex gap-10 px-16 py-12 justify-center items-center">

        <div className="bg-white p-10 rounded-3xl shadow-lg max-w-xl">

          <h2 className="text-4xl font-bold">
            Welcome Back
          </h2>

          <p className="text-gray-500 mt-2">
            Login to continue
          </p>

          <form className="space-y-5 mt-8" onSubmit={Submit}>

            <input
              placeholder="Email"
              className="w-full border p-4 rounded-xl text-[#000]"
              value={formData.email}
              autoComplete="off"
              onPaste={(e) => e.preventDefault()}
              onChange={(e) => setFormData({
                ...formData,
                email: e.target.value
              })}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-4 rounded-xl text-[#000]"
              value={formData.password}
              onChange={(e) => setFormData({
                ...formData,
                password:e.target.value
              })}
            />

            <button className=" w-full py-4 rounded-xl bg-indigo-600 text-white font-semibold "
              type="submit"
            >Login
            </button>
          </form>
          <p className="hover:cursor-pointer py-4" onClick={() => {navigation.navigate('/signin')}}>Don't have an account?</p>
        </div>
      </div>

    </div>
  )
}


