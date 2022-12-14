"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// import Router from 'next/router'
import { useRouter } from 'next/navigation';
import { API_URL } from "../../utils/api";
import runApi from "run-api";

interface LoginData {
  email: string;
  password: string;
}

const loginAsync = async (reqData: LoginData) => {
  // const res = await fetch(`${API_URL}/user/login`, {
  //   // const res = await fetch(`/server/user/login`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(reqData),
  // });

  //  const res = await fetch(`http://65.1.169.125:3050/api/v1/cors-resolver?${API_URL}/user/login`, {
  //   // const res = await fetch(`/server/user/login`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(reqData),
  // });

  const res = await runApi.post(`${API_URL}/user/login`, reqData);
  // const res = await runApi.post(`${API_URL}/user/login`, reqData);

  // const data = await res.json();
  
  const data = res;

  console.log("data", data);

  if (data?.error?.length > 0) {
    return {
      status: "error",
      message: data?.error,
      data: null,
    };
  } else {
    return {
      status: "success",
      message: null,
      data: data.data,
    };
  }
};

const Login = () => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const reqData = {
      email: emailRef.current?.value || "",
      password: passwordRef.current?.value || "",
    };

    const loginData = await loginAsync(reqData);

    console.log(loginData);

    if (loginData.status === "success") {
      // window.location.href = "/standings";
      // Router.push('/standings')
      localStorage.setItem("token", JSON.stringify(loginData.data.token));
      router.push('/standings?token=' + loginData.data.token);
    }
  };

  return (
    <section className="h-screen">
      <div className="h-full px-6 text-gray-800">
        <div className="flex flex-wrap items-center justify-center h-full xl:justify-center lg:justify-between g-6">
          <div className="mb-12 grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 md:mb-0">
            <Image
              src="/assets/auth.webp"
              alt="Sample image"
              loading="lazy"
              width={1100}
              height={920}
            />
          </div>
          <div className="mb-12 xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 md:mb-0">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row items-center justify-center mb-5">
                <h1 className="text-2xl font-bold">Login</h1>
              </div>

              {/* Email input */}
              <div className="mb-6">
                <input
                  ref={emailRef}
                  type="text"
                  className="block w-full px-4 py-2 m-0 text-lg font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
              </div>

              {/* Password input */}
              <div className="mb-6">
                <input
                  ref={passwordRef}
                  type="password"
                  className="block w-full px-4 py-2 m-0 text-lg font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                    id="exampleCheck2"
                  />
                  <label
                    className="inline-block text-gray-800 form-check-label"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                {/* <a href="#!" className="text-gray-800">
                  Forgot password?
                </a> */}
              </div>

              <div className="text-center lg:text-left">
                <button
                  // type="button"
                  type="submit"
                  className="inline-block py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-blue-600 rounded shadow-md px-7 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                >
                  Login
                </button>
                <p className="pt-1 mt-2 mb-0 text-sm font-semibold">
                  Don&apos;t have an account? {""}
                  <Link
                    href="/register"
                    className="text-red-600 transition duration-200 ease-in-out hover:text-red-700 focus:text-red-700"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
