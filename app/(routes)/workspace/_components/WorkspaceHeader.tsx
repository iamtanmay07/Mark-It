import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Github, Link, Save } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { toast } from 'sonner'


function WorkspaceHeader({ 
  Tabs,
  setActiveTab,
  activeTab, 
  onSave, 
  file }: any) {
  return (
    <div className='p-3 border-b flex justify-between items-center h-12'>
      <div className='flex gap-2 items-center'>
        <a href="/dashboard">
          <Image src={'/logo.png'}
            alt='logo'
            height={32}
            width={32} />
        </a>
        <h2 className='font-bold hidden sm:block'>Mark-It in Your Way!</h2>
      </div>

      <div className='hidden sm:block ml-[169px]'>
        <div className="border rounded">
          <div className="flex w-full items-center">
            {
              // tabs
              Tabs.map((tab: any) => (
                <div
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={cn(
                    " cursor-pointer w-24 text-sm text-center hover:bg-[#F6F6F6] hover:text-accent-foreground bg-transparent text-black px-2 py-1",
                    {
                      "bg-[#F6F6F6] text-black": tab.name === activeTab,
                    },
                    {
                      "border-r":
                        tab.name !== Tabs[Tabs.length - 1].name,
                    }
                  )}
                >
                  <h1 className="text-sm font-medium">{tab.name}</h1>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <a
          href="https://github.com/iamtanmay07/Mark-It"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="rounded-sm flex text-sm items-center border border-neutral-300 hover:bg-[#F6F6F6] hover:text-accent-foreground bg-transparent text-black cursor-pointer px-2 py-1">
            Give Star on GitHub
            <Github size={16} className="ml-2" />
          </div>
        </a>
        <Button className='h-8 text-[12px]
        gap-2 bg-yellow-500 hover:bg-yellow-600'
          onClick={() => onSave()}
        >
          <Save className='h-4 w-4' /> Save </Button>

        <Button className='h-8 text-[12px]
        gap-2 bg-blue-600 hover:bg-blue-700'
          onClick={() => {
            navigator.clipboard.writeText(
              `${window.location.origin}/workspace/${file._id}`
            );
            toast.success("Link Copied");
          }}>
          Share <Link className='h-4 w-4' /> </Button>
      </div>
    </div>
  )
}

export default WorkspaceHeader