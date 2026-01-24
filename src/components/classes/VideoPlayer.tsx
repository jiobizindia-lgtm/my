import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Settings,
  SkipBack,
  SkipForward,
  PictureInPicture2,
  Move,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const VideoPlayer = ({ src, poster, className }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [customWidth, setCustomWidth] = useState<number | null>(null);
  const [customHeight, setCustomHeight] = useState<number | null>(null);
  const [showSizeControls, setShowSizeControls] = useState(false);
  const isYouTube = src.includes("youtube.com") || src.includes("youtu.be") || src.startsWith("yt:");
  const isArchive = src.includes("archive.org");

const archiveId = src.includes("/details/")
  ? src.split("/details/")[1].split("/")[0]
  : src.split("/stream/")[1]?.split("/")[0];

const archiveSrc = archiveId
  ? `https://archive.org/embed/${archiveId}`
  : src;




  const hideControlsTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);


  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => setDuration(video.duration);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (isPlaying && !isHovering) {
      hideControlsTimeout.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    } else {
      setShowControls(true);
      if (hideControlsTimeout.current) {
        clearTimeout(hideControlsTimeout.current);
      }
    }
    return () => {
      if (hideControlsTimeout.current) {
        clearTimeout(hideControlsTimeout.current);
      }
    };
  }, [isPlaying, isHovering]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  const handleSeek = (value: number[]) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = value[0];
    setCurrentTime(value[0]);
  };

  const handleVolumeChange = (value: number[]) => {
    const video = videoRef.current;
    if (!video) return;
    const newVolume = value[0];
    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isMuted) {
      video.volume = volume || 0.5;
      setIsMuted(false);
    } else {
      video.volume = 0;
      setIsMuted(true);
    }
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    if (isFullscreen) {
      await document.exitFullscreen();
    } else {
      await containerRef.current.requestFullscreen();
    }
  };

  const handleSpeedChange = (speed: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = speed;
    setPlaybackSpeed(speed);
  };

  const skip = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.max(0, Math.min(video.currentTime + seconds, duration));
  };

 const togglePiP = async () => {
  if (isYouTube || isArchive) return; // <-- add this line
  const video = videoRef.current;
  if (!video) return;
  if (document.pictureInPictureElement) {
    await document.exitPictureInPicture();
  } else {
    await video.requestPictureInPicture();
  }
};


  const progress = duration ? (currentTime / duration) * 100 : 0;

  const containerStyle: React.CSSProperties = {
    width: customWidth ? `${customWidth}px` : '100%',
    height: customHeight ? `${customHeight}px` : '100%',
  };

  const resetSize = () => {
    setCustomWidth(null);
    setCustomHeight(null);
  };

  return (
  <div
    ref={containerRef}
    className={`relative bg-black rounded-lg overflow-hidden group ${className}`}
    style={containerStyle}
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
    onMouseMove={() => setShowControls(true)}
  >
    {/* Video, archive / YouTube */}
    {isArchive ? (
  <iframe
    src={archiveSrc}
    className="w-full h-full"
    allow="autoplay; fullscreen; encrypted-media"
    allowFullScreen
  />
) : isYouTube ? (
  <iframe
    src={
      src.startsWith("yt:")
        ? `https://www.youtube.com/embed/${src.replace("yt:", "")}`
        : src.replace("watch?v=", "embed/").replace("/live/", "/embed/")
    }
    className="w-full h-full"
    allow="autoplay; encrypted-media; picture-in-picture"
    allowFullScreen
  />
) : (
  <video
    ref={videoRef}
    src={src}
    poster={poster}
    className="w-full h-full object-contain cursor-pointer"
    onClick={togglePlay}
    playsInline
  />
)}


    {/* Play Overlay */}
    {!isYouTube && !isArchive && !isPlaying && (
      <div
        className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
        onClick={togglePlay}
      >
        <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center">
          <Play className="h-10 w-10 text-primary-foreground ml-1" />
        </div>
      </div>
    )}

    {/* Controls */}
    {!isYouTube && !isArchive && (
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
        <div className="mb-3">
          <Slider
            value={[currentTime]}
            max={duration || 100}
            step={0.1}
            onValueChange={handleSeek}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button onClick={togglePlay} variant="ghost" size="icon">
              {isPlaying ? <Pause /> : <Play />}
            </Button>

            <Button onClick={() => skip(-10)} variant="ghost" size="icon">
              <SkipBack />
            </Button>

            <Button onClick={() => skip(10)} variant="ghost" size="icon">
              <SkipForward />
            </Button>
          </div>

          <Button onClick={toggleFullscreen} variant="ghost" size="icon">
            {isFullscreen ? <Minimize /> : <Maximize />}
          </Button>
        </div>
      </div>
    )}
  </div>
);

};

export default VideoPlayer;
