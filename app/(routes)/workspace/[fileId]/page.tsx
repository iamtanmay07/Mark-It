"use client"
import React, { useEffect, useState } from 'react'
import WorkspaceHeader from '../_components/WorkspaceHeader'
// import Editor from '../_components/Editor'
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { FILE } from '../../dashboard/_components/FileList';
// import Canvas from '../_components/Canvas';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../_components/Editor"), {
  ssr: false,
});

const Canvas = dynamic(() => import("../_components/Canvas"), {
  ssr: false,
});
function Workspace({ params }: any) {

  const convex = useConvex();
  const [fileData, setFileData] = useState<FILE | any>();
  useEffect(() => {
    // console.log("FILEID",params.fileId)
    params.fileId && getFileData();
  }, [])

  const getFileData = async () => {
    const result = await convex.query(api.files.getFileById, { _id: params.fileId })
    setFileData(result);
  }
  const Tabs = [
    {
      name: "Document",
    },
    {
      name: "Both",
    },
    {
      name: "Canvas",
    },
  ];

  const [activeTab, setActiveTab] = useState(Tabs[1].name);
  const [triggerSave, setTriggerSave] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <WorkspaceHeader
        Tabs={Tabs}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        onSave={() => setTriggerSave(!triggerSave)}
        file={fileData}
      />

      <div>
        {activeTab === "Document" ? (
          <div
            style={{
              height: "calc(100vh - 3rem)",
            }}
          >
            <Editor
              onSaveTrigger={triggerSave}
              fileId={params.fileId}
              fileData={fileData!}
            />
          </div>
        ) : activeTab === "Both" ? (
          <div className='grid grid-cols-1 md:grid-cols-1'>
            <ResizablePanelGroup
              style={{
                height: "calc(100vh - 3rem)",
              }}
              direction={isSmallScreen ? "vertical" : "horizontal"}
            >
              <ResizablePanel defaultSize={50} minSize={20} collapsible={false}>
                <Editor
                  onSaveTrigger={triggerSave}
                  fileId={params.fileId}
                  fileData={fileData!}
                />
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50} minSize={40}>
                <Canvas
                  onSaveTrigger={triggerSave}
                  fileId={params.fileId}
                  fileData={fileData!}
                />
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        ) : activeTab === "Canvas" ? (
          <div
            style={{
              height: "calc(100vh - 3rem)",
            }}
          >
            <Canvas
              onSaveTrigger={triggerSave}
              fileId={params.fileId}
              fileData={fileData!}
            />
          </div>
        ) : null}

      </div>
      {/* <div className='hidden'>
        <div className='grid grid-cols-1
     md:grid-cols-2'>
          <div className=' h-[500px]'>
            <Editor onSaveTrigger={triggerSave}
              fileId={params.fileId}
              fileData={fileData}
            />
          </div>
          <div className=' h-screen'>
            <Canvas
              onSaveTrigger={triggerSave}
              fileId={params.fileId}
              fileData={fileData}
            />
          </div>
        </div>
      </div> */} 
      {/* This thing causes double rendering of the EditorJS despite being the hidden */}
    </div>
  )
}

export default Workspace