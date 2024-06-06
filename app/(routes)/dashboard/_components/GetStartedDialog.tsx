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

function GetStartedDialog() {
  return (
    <DialogContent className='grainy sm:max-w-[700px] sm:max-h-[600px] max-w-[300px]'>
    <DialogHeader>

      <DialogDescription>
        <div>
        <div className="sm:mb-[80px]">
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-4xl">
                  Kickstart Workflows in seconds with Mark-It
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Centralize all of your scattered docs and diagrams. Build a team knowledge repository with a multiplayer-first tool.
                </p>
              </div>
            </div>
            {/* steps */}

   
            <ol className="my-2 space-y-4 pt-2 md:flex md:space-x-6 md:space-y-0 md:px-8">
              
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-blue-600">
                    Step 1
                  </span>
                  <span className="text-xl font-semibold">
                    Set Up Your <span className="text-blue-600">Team</span>  Space
                    {/* &{" "}<span className="text-blue-600">Scenario</span> */}
                  </span>
                </div>
              </li>
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-blue-600">
                    Step 2
                  </span>
                  <span className="text-xl font-semibold">
                    Create the New File 
                  </span>
                 
                </div>
              </li>
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-blue-600">
                    Step 3
                  </span>
                  <span className="text-xl font-semibold">
                    Click on your new File to start documenting!
                  </span>
                </div>
              </li>
            </ol>
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

export default GetStartedDialog