import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
.object({
  name: yup.string().min(3, "Name must be at least 3 characters").required("Please enter a name!"),
  subject: yup.string().min(3, "Subject must be at least 3 characters").required("Please enter a subject!"),
  email: yup.string().email("Email must be valid.").required("Email is required!"),
  message: yup.string().min(3, "Message must be at least 3 characters").required("Please enter your message!"),
})
.required();


export default function Contact() {


  // const [isSubmit, setIsSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  function onSubmit(data) {
    console.log(data);
  }
  // const [fullName, setFullName] = useState("");
  // const [subject, setSubject] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const url = 'https://v2.api.noroff.dev/';

  //   const response = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify({fullName, subject, email, message})
  //   })
  // }



  return (
    <div>
      <h2 className="my-10 text-center font-semibold leading-7 text-gray-900">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center">
        <div className="w-96 space-y-6">
          <div className="">
            <div className="relative mt-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              </div>
              {/* <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" name="full-name" id="full-name" className="ps-2 block w-full rounded-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Full Name" /> */}
              <input {...register("name")} type="text" name="name" id="name" className="ps-2 block w-full rounded-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Full Name" />
              {/* <p>{errors.name?.message}</p> */}
            </div>
            <div className="relative mt-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              </div>
              {/* <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" name="subject" id="subject" className="ps-2 block w-full rounded-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Subject" /> */}
              <input{...register("subject")} type="text" name="subject" id="subject" className="ps-2 block w-full rounded-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Subject" />
            </div>
            <div className="relative mt-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              </div>
              {/* <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="email" className="ps-2 block w-full rounded-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email" /> */}
              <input {...register("email")} id="email" name="email" type="email" className="ps-2 block w-full rounded-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email" />
            </div>
            <div className="relative mt-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              </div>
              {/* <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="about" name="about" rows="3" className="ps-2 block w-full rounded-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Your message"></textarea> */}
              <textarea {...register("message")} id="message" name="message" rows="3" className="ps-2 block w-full rounded-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Your message"></textarea>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-x-6">
           <button type="submit" className="w-64 rounded-none bg-red-600 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</button>
          </div>
        </div>
      </form>
    </div>
    )
}