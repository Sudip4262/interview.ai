import React, { useState } from "react"

type FormData = {
    email: string,
    password:string,
    name:string
}

export default function Login() {

    const [currentPage, setCurrentPage] = useState<boolean>(true)
    const [formData,setFormData] = useState<FormData>({
        email:"",
        password:"",
        name:""
    })


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
                    name:name,
                })
            })
            // const data = await request.json()
            if(request.status == 201){
              navigation.navigate("/login")
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
            Sign in to continue
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

            <input
              type="text"
              placeholder="Name"
              className="w-full border p-4 rounded-xl text-[#000]"
              value={formData.name}
              onChange={(e) => setFormData({
                ...formData,
                name:e.target.value
              })}
            />

            <button className=" w-full py-4 rounded-xl bg-indigo-600 text-white font-semibold "
              type="submit"
            >
              Signing
            </button>
          </form>
          <p className="hover:cursor-pointer py-4" onClick={() => {navigation.navigate('/login')}}>Already have and Account?</p>
        </div>
      </div>
    </div>
  )
}


