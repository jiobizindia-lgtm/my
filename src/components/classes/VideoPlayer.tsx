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
  if (isYouTube) return; // <-- add this line
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
{isYouTube ? (
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



      {/* Play/Pause Overlay (ONLY for MP4) */}
{!isYouTube && !isPlaying && (
  <div
    className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
    onClick={togglePlay}
  >
    <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center">
      <Play className="h-10 w-10 text-primary-foreground ml-1" />
    </div>
  </div>
)}


     {/* Controls (ONLY for MP4) */}
{!isYouTube && (
  <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 transition-opacity duration-300 ${
    showControls ? "opacity-100" : "opacity-0"
  }`}>

    {/* Progress Bar */}
    <div className="mb-3">
      <Slider
        value={[currentTime]}
        max={duration || 100}
        step={0.1}
        onValueChange={handleSeek}
      />
    </div>
        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Play/Pause */}
            <Button
              variant="ghost"
              size="icon"
              onClick={togglePlay}
              className="text-white hover:bg-white/20 h-9 w-9"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </Button>

            {/* Skip Backward */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => skip(-10)}
              className="text-white hover:bg-white/20 h-9 w-9"
            >
              <SkipBack className="h-4 w-4" />
            </Button>

            {/* Skip Forward */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => skip(10)}
              className="text-white hover:bg-white/20 h-9 w-9"
            >
              <SkipForward className="h-4 w-4" />
            </Button>

            {/* Volume */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMute}
                className="text-white hover:bg-white/20 h-9 w-9"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </Button>
              <Slider
                value={[isMuted ? 0 : volume]}
                max={1}
                step={0.01}
                onValueChange={handleVolumeChange}
                className="w-20 cursor-pointer [&_[role=slider]]:h-2.5 [&_[role=slider]]:w-2.5 [&_[role=slider]]:bg-white"
              />
            </div>

            {/* Time */}
            <span className="text-white text-sm font-medium ml-2">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center gap-1">
            {/* Playback Speed */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20 h-9 px-2 text-sm"
                >
                  {playbackSpeed}x
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[80px] bg-background">
                {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3, 3.5, 4].map((speed) => (
                  <DropdownMenuItem
                    key={speed}
                    onClick={() => handleSpeedChange(speed)}
                    className={playbackSpeed === speed ? "bg-accent" : ""}
                  >
                    {speed}x
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Size Controls */}
            <DropdownMenu open={showSizeControls} onOpenChange={setShowSizeControls}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 h-9 w-9"
                >
                  <Move className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 p-3 bg-background">
                <div className="space-y-3">
                  <div className="text-sm font-medium">Custom Size</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground w-8">W:</span>
                    <Input
                      type="number"
                      placeholder="Auto"
                      value={customWidth ?? ''}
                      onChange={(e) => setCustomWidth(e.target.value ? Number(e.target.value) : null)}
                      className="h-8 text-sm"
                      min={200}
                      max={1920}
                    />
                    <span className="text-xs text-muted-foreground">px</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground w-8">H:</span>
                    <Input
                      type="number"
                      placeholder="Auto"
                      value={customHeight ?? ''}
                      onChange={(e) => setCustomHeight(e.target.value ? Number(e.target.value) : null)}
                      className="h-8 text-sm"
                      min={150}
                      max={1080}
                    />
                    <span className="text-xs text-muted-foreground">px</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={resetSize} className="flex-1 h-7 text-xs">
                      Reset
                    </Button>
                    <Button size="sm" onClick={() => setShowSizeControls(false)} className="flex-1 h-7 text-xs">
                      Apply
                    </Button>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Presets:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {[
                      { w: 640, h: 360, label: '360p' },
                      { w: 854, h: 480, label: '480p' },
                      { w: 1280, h: 720, label: '720p' },
                      { w: 1920, h: 1080, label: '1080p' },
                    ].map((preset) => (
                      <Button
                        key={preset.label}
                        size="sm"
                        variant="secondary"
                        className="h-6 px-2 text-xs"
                        onClick={() => {
                          setCustomWidth(preset.w);
                          setCustomHeight(preset.h);
                        }}
                      >
                        {preset.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Picture in Picture */}
            <Button
              variant="ghost"
              size="icon"
              onClick={togglePiP}
              className="text-white hover:bg-white/20 h-9 w-9"
            >
              <PictureInPicture2 className="h-4 w-4" />
            </Button>

            {/* Fullscreen */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="text-white hover:bg-white/20 h-9 w-9"
            >
              {isFullscreen ? (
                <Minimize className="h-5 w-5" />
              ) : (
                <Maximize className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
