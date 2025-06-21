import { useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setcurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoadind, setIsLoadind] = useState(true);
  const [loadingVideo, setLoadingVideo] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const handleMiniVideos = () => {
    setHasClicked(true);

    setcurrentIndex((prevIndex) => prevIndex + 1);
  };

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative h-dvh w-screen overflow-x-hidden rounded-s-lg bg-blue-75"
      >
        <div>
          <div
            className="mask-click-path absolute-center absolute z-50 size-64 cursor-pointer 
             overflow-hidden rounded-lg"
          >
            <div onClick={handleMiniVideos} className="origin-center">
              <video
                ref={nextVideoRef}
                src={getVideoSrc(currentIndex + 1)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
