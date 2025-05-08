"use client"

import React, {useState} from 'react';
import {Header} from "@/components/Header";
import Navbar from "@/components/Navbar";
import {Footer} from "@/components/Footer";
import {signIn} from "next-auth/react";
import Image from "next/image";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const router = useRouter();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const signInData = await
    await signIn("credentials", {email: email, password: password, redirectTo: "/dashboard"});

    // console.log(signInData);
    //
    // if (signInData?.error) {
    //   alert(signInData.error);
    // } else {
    //   console.log("redirect to dashboard");
    //   // router.push("/dashboard")
    // }
  }

  return (
    <div>
      <Header><Navbar/></Header>
      <div className="container">
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center text-gray-900">Sign In</h1>
            <form className="mt-4" onSubmit={handleSubmit}>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-center mt-3">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="mt-6 flex flex-col items-center">
              <p className="text-sm text-gray-600 mb-2">Or sign in with</p>
              <button
                className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-white rounded-lg outline  outline-grey-500 hover:bg-grey-600 focus:ring focus:ring-grey-300 focus:outline-none"
                onClick={() => signIn("google", { redirectTo: "/dashboard" })}
              >

                <Image loading="lazy" alt="Sign in with Google" width="24" height="24" src="https://authjs.dev/img/providers/google.svg"/>
                Sign In with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default SignInPage;