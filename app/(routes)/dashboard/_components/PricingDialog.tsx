import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Link from 'next/link'
function PricingDialog() {
  return (
    <DialogContent className='grainy sm:max-w-[700px] sm:max-h-[600px] max-w-[300px]'>
    <DialogHeader>
      <DialogTitle className='flex justify-center items-center text-bold text-lg sm:text-2xl'>Upgrade Your Plan</DialogTitle>
      <DialogDescription>
      <div className="mx-auto sm:max-w-3xl sm:px-6 sm:py-12 lg:px-8 sm:max-h-[600px]">
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
    <div
      className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12"
    >
      <div className="text-center">
        <h2 className="text-lg font-medium text-gray-900">
          Professional
          <span className="sr-only">Plan</span>
        </h2>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 99₹</strong>

          <span className="text-sm font-medium text-gray-700">/month</span>
        </p>
      </div>

      <ul className="mt-6 space-y-2">
        <li className="flex items-center gap-1">
          
          <span className="text-gray-700"> Email Support </span>
        </li>

        <li className="flex items-center gap-1">

          <span className="text-gray-700"> Unlimited Team Files </span>
        </li>

        <li className="flex items-center gap-1">

          <span className="text-gray-700"> Github Integration </span>
        </li>

        <li className="flex items-center gap-1">
          
          <span className="text-gray-700"> More document features </span>
        </li>

      </ul>

      <Link
        href=""
        className="mt-8 block rounded-full border border-indigo-600
         bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
      >
        Upgrade
      </Link>
    </div>

    <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
      <div className="text-center">
        <h2 className="text-lg font-medium text-gray-900">
          Free
          <span className="sr-only">Plan</span>
        </h2>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> Free </strong>

          <span className="text-sm font-medium text-gray-700">/month</span>
        </p>
      </div>

      <ul className="mt-6 space-y-2">
        <li className="flex items-center gap-1">
         

          <span className="text-gray-700"> 5 Team files </span>
        </li>

        <li className="flex items-center gap-1">
          

          <span className="text-gray-700"> Limited Access </span>
        </li>

        <li className="flex items-center gap-1">
          

          <span className="text-gray-700"> Limited Document feature </span>
        </li>

        <li className="flex items-center gap-1">
          

          <span className="text-gray-700"> Email Support </span>
        </li>
      </ul>

      <a
        href="/dashboard"
        className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
      >
        Get Started
      </a>
    </div>
  </div>
</div>
      </DialogDescription>
   
    </DialogHeader>
    <DialogFooter className="">
          <DialogClose asChild>
           
          </DialogClose>
        </DialogFooter>
  </DialogContent>
  )
}

export default PricingDialog