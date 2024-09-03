"use client"

import { useEffect, useRef, useState,  } from 'react'
import { Button } from "@/components/ui/button"
import Webcam from "react-webcam"
import { Label } from "@/components/ui/label"
import { Toggle } from "@/components/ui/toggle.jsx"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Camera} from "lucide-react"
import NavBar from "../components/nav-bar.jsx"

export default function RepTracker() {
  const videoRef = useRef(null)
  const [isCameraOn, setIsCameraOn] = useState(false)
  const videoConstraints = {
    facingMode: "user",
  };
  
  const toggleCamera = async () => {
    if (isCameraOn) {
      setIsCameraOn(false)
    } else {
      setIsCameraOn(true)
    }
  }

  useEffect(() => {
    return () => {
      if (isCameraOn) {
        // const stream = videoRef.current?.srcObject
        // stream?.getTracks().forEach(track => track.stop())
      } 
    }
  }, [isCameraOn])

  return (
    <>
        <NavBar/>
        <main className="flex-grow flex w-screen">
            <div className="overflow-hidden w-3/4 bg-muted ml-4 flex items-center justify-center">
            {isCameraOn ? (
                <Webcam
                audio={false}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                style={{
                    width:"1110px",
                }}
                />
            ) : (
                <div className="text-center">
                <Camera className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">Camera is off</p>
                </div>
            )}
            </div>
            <Toggle className="absolute right-1/4 top-[9vh] bg-background" variant="primary" onClick={toggleCamera}>
                <Camera className="h-4 w-4 rounded-full" />
            </Toggle>
            <div className="w-1/4 bg-background px-4">
            <ScrollArea className="h-[calc(100vh-5rem)] rounded-md border px-4 ">
                <h2 className="text-lg font-semibold my-4">Information</h2>
                <p className="mb-4">This is a scrollable area where you can display various information about the camera feed or any other relevant details.</p>
                <p className="mb-4">You can add more content here, and it will become scrollable when it exceeds the height of the container.</p>
                <p className="mb-4">Some features of this app:</p>
                <ul className="list-disc pl-5 mb-4">
                <li>Real-time camera feed display</li>
                <li>Camera on/off toggle</li>
                <li>Responsive layout</li>
                <li>Scrollable information panel</li>
                </ul>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </ScrollArea>
            </div>
        </main>
    </>
    
  )
}