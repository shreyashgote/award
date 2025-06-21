import { useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setcurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoadind, setIsLoadind] = useState(true);
  const [loadingVideos, setLoadingVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadingVideos((prev) => prev + 1);
  };

  const upcomingVideosindex = (currentIndex % totalVideos) + 1;

  const handleMiniVideos = () => {
    setHasClicked(true);

    setcurrentIndex(upcomingVideosindex);
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
            <div
              onClick={handleMiniVideos}
              className="origin-center scale-50 opacity-0
            transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideosindex)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video ref={nextVideoRef} src={getVideoSrc(currentIndex)} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
