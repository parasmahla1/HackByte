import { Button, Navbar } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { Room } from "../components/Room";

const Call = () => {
  const [localAudioTrack, setLocalAudioTrack] =
    useState<MediaStreamTrack | null>(null);
  const [localVideoTrack, setlocalVideoTrack] =
    useState<MediaStreamTrack | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [joined, setJoined] = useState(false);

  const getCam = async () => {
    const stream = await window.navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    // MediaStream
    const audioTrack = stream.getAudioTracks()[0];
    const videoTrack = stream.getVideoTracks()[0];
    setLocalAudioTrack(audioTrack);
    setlocalVideoTrack(videoTrack);
    if (!videoRef.current) {
      return;
    }
    videoRef.current.srcObject = new MediaStream([videoTrack]);
    videoRef.current.play();
    // MediaStream
  };

  useEffect(() => {
    if (videoRef && videoRef.current) {
      getCam();
    }
  }, [videoRef]);
  if (!joined) {
    return (
      <>
        <Header />
        <div className="windows flex flex-row justify-center items-center gap-16 mt-16">
          {/* <>
                        <div className="flex justify-between mx-auto max-w-screen-md">
                            <div className="w-1/2 px-4 flex items-center justify-center mt-20 border border-black-400 h-60vh mr-2">First Div</div>
                            <div className="w-1/2 px-4 flex items-center justify-center mt-20 border border-black-400 h-60vh ml-2">Second Div</div>
                        </div>
                    </> */}
          
            <video height={500} width={500} autoPlay ref={videoRef} className=" rounded-3xl"></video>
          
         
        <div>
        <button className="font-bold py-2 px-4 rounded bg-blue-500 text-white mt-4 "
            onClick={() => {
                setJoined(true);
            }}
            >
            Join
          </button>
        </div>
    </div>
      </>
    );
  }
  return (
    <>
      <Room
        localAudioTrack={localAudioTrack}
        localVideoTrack={localVideoTrack}
      />
    </>
  );
};

export default Call;
