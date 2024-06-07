import React, { useEffect, useState } from 'react'
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { FILE } from '../../dashboard/_components/FileList';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { toast } from "sonner";

const Canvas = ({
  onSaveTrigger,
  fileId,
  fileData,
}: {
  onSaveTrigger: any;
  fileId: any;
  fileData: FILE;
}) => {

  const [whiteBoardData, setWhiteBoardData] = useState<any>();

  const updateWhiteboard = useMutation(api.files.updateWhiteboard)
  useEffect(() => {
    onSaveTrigger && saveWhiteboard();
  }, [onSaveTrigger]);

  const saveWhiteboard = () => {
    updateWhiteboard({
      _id: fileId,
      whiteboard: JSON.stringify(whiteBoardData)
    })
      .then(() => {
        toast.success("Canvas saved");
      })
      .catch((e) => {
        toast.error("Error saving canvas");
      });
  }
  return (
    // <div style={{ height: "670px" }}>
    //   {fileData && <Excalidraw
    //     theme='light'
    //     initialData={{
    //       elements: fileData?.whiteboard && JSON.parse(fileData?.whiteboard)
    //     }}
    //     onChange={(excalidrawElements, appState, files) =>
    //       setWhiteBoardData(excalidrawElements)}
    //     UIOptions={{
    //       canvasActions: {
    //         saveToActiveFile: false,
    //         loadScene: false,
    //         export: false,
    //         toggleTheme: false

    //       }
    //     }}
    //   >
    //     <MainMenu>
    //       <MainMenu.DefaultItems.ClearCanvas />
    //       <MainMenu.DefaultItems.SaveAsImage />
    //       <MainMenu.DefaultItems.ChangeCanvasBackground />
    //     </MainMenu>
    //     <WelcomeScreen>
    //       <WelcomeScreen.Hints.MenuHint />
    //       <WelcomeScreen.Hints.MenuHint />
    //       <WelcomeScreen.Hints.ToolbarHint />
    //       <WelcomeScreen.Center>
    //         <WelcomeScreen.Center.MenuItemHelp />
    //       </WelcomeScreen.Center>
    //     </WelcomeScreen>
    //   </Excalidraw>}
    // </div>
    <div className="h-full w-full">
        {fileData && fileData.whiteboard ? (
          <Excalidraw
            theme="light"
            initialData={{
              elements: fileData && JSON.parse(fileData?.whiteboard),
            }}
            UIOptions={{
              canvasActions: {
                saveToActiveFile: false,
                export: false,
                loadScene: false,
                saveAsImage: false,
              },
            }}
            onChange={(excaliDrawElements, appState, files) => {
              setWhiteBoardData(excaliDrawElements);
            }}
          >
            <MainMenu>
              <MainMenu.DefaultItems.ClearCanvas />
              <MainMenu.DefaultItems.Help />
              <MainMenu.DefaultItems.ChangeCanvasBackground />
            </MainMenu>
            <WelcomeScreen>
              <WelcomeScreen.Hints.MenuHint />
              <WelcomeScreen.Hints.ToolbarHint />
              <WelcomeScreen.Hints.HelpHint />
            </WelcomeScreen>
            <WelcomeScreen.Center>
              <WelcomeScreen.Center.MenuItemHelp />
            </WelcomeScreen.Center>
          </Excalidraw>
        ) : (
          <Excalidraw
            theme="light"
            UIOptions={{
              canvasActions: {
                saveToActiveFile: false,
                export: false,
                loadScene: false,
                saveAsImage: false,
              },
            }}
            onChange={(excaliDrawElements, appState, files) => {
              setWhiteBoardData(excaliDrawElements);
            }}
          >
            <MainMenu>
              <MainMenu.DefaultItems.ClearCanvas />
              <MainMenu.DefaultItems.Help />
              <MainMenu.DefaultItems.ChangeCanvasBackground />
            </MainMenu>
            <WelcomeScreen>
              <WelcomeScreen.Hints.MenuHint />
              <WelcomeScreen.Hints.ToolbarHint />
              <WelcomeScreen.Hints.HelpHint />
            </WelcomeScreen>
            <WelcomeScreen.Center>
              <WelcomeScreen.Center.MenuItemHelp />
            </WelcomeScreen.Center>
          </Excalidraw>
        )}
      </div>
  )
}
// const Canvas = ({
//   onSaveTrigger,
//   fileId,
//   fileData,
// }: {
//   onSaveTrigger: any;
//   fileId: any;
//   fileData: FILE;
// }) => {
//   const [whiteBoard, setWhiteBoard] = useState<any>();

//   useEffect(() => {
//     whiteBoard && saveWhiteboard();
//   }, [onSaveTrigger]);

//   const updateWhiteBoard = useMutation(api.files.updateWhiteboard);

//   const saveWhiteboard = () => {
//     updateWhiteBoard({
//       _id: fileId,
//       whiteboard: JSON.stringify(whiteBoard),
//     })
//       .then(() => {
//         toast.success("Canvas saved");
//       })
//       .catch((e) => {
//         toast.error("Error saving canvas");
//       });
//   };

//   return (
//     <>
//       <div className="h-full w-full">
//         {fileData && fileData.whiteboard ? (
//           <Excalidraw
//             theme="light"
//             initialData={{
//               elements: fileData && JSON.parse(fileData?.whiteboard),
//             }}
//             UIOptions={{
//               canvasActions: {
//                 export: false,
//                 loadScene: false,
//                 saveAsImage: false,
//               },
//             }}
//             onChange={(excaliDrawElements, appState, files) => {
//               setWhiteBoard(excaliDrawElements);
//             }}
//           >
//             <MainMenu>
//               <MainMenu.DefaultItems.ClearCanvas />
//               <MainMenu.DefaultItems.Help />
//               <MainMenu.DefaultItems.ChangeCanvasBackground />
//             </MainMenu>
//             <WelcomeScreen>
//               <WelcomeScreen.Hints.MenuHint />
//               <WelcomeScreen.Hints.ToolbarHint />
//               <WelcomeScreen.Hints.HelpHint />
//             </WelcomeScreen>
//           </Excalidraw>
//         ) : (
//           <Excalidraw
//             theme="light"
//             UIOptions={{
//               canvasActions: {
//                 export: false,
//                 loadScene: false,
//                 saveAsImage: false,
//               },
//             }}
//             onChange={(excaliDrawElements, appState, files) => {
//               setWhiteBoard(excaliDrawElements);
//             }}
//           >
//             <MainMenu>
//               <MainMenu.DefaultItems.ClearCanvas />
//               <MainMenu.DefaultItems.Help />
//               <MainMenu.DefaultItems.ChangeCanvasBackground />
//             </MainMenu>
//             <WelcomeScreen>
//               <WelcomeScreen.Hints.MenuHint />
//               <WelcomeScreen.Hints.ToolbarHint />
//               <WelcomeScreen.Hints.HelpHint />
//             </WelcomeScreen>
//           </Excalidraw>
//         )}
//       </div>
//     </>
//   );
// };

export default Canvas