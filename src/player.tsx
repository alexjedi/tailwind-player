import {
  ArrowDownTrayIcon,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  MinusIcon,
  PauseIcon,
  PlayIcon,
  PlusIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from '@heroicons/react/20/solid'
import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import { PlayerProps } from './prop.d'

const Player: React.FC<PlayerProps> = ({
  src,
  autoPlay,
  className,
  controls,
  controlsList,
  id,
  loop,
  muted,
  onAbort,
  onCanPlay,
  onCanPlayThrough,
  onEnded,
  onError,
  onLoadedMetadata,
  onPause,
  onPlay,
  onSeeked,
  onVolumeChange,
  preload,
  style,
  title,
  preset = {
    showSlider: true,
    showFastForward: true,
    showPlaybackSpeed: true,
    showMute: true,
    showDownload: true,
    showPlaylist: true,
  },
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(muted || false)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isDragging] = useState(false)
  const [sliderFraction, setSliderFraction] = useState(0)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const sliderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    audio.playbackRate = playbackRate
  }, [playbackRate])

  useEffect(() => {
    const audio = audioRef.current

    if (!audio || !isDragging) {
      return
    }

    audio.currentTime = currentTime
  }, [currentTime, isDragging])

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current?.currentTime || 0)
    setSliderFraction(currentTime / duration)
  }

  const handleDurationChange = () => {
    setDuration(audioRef.current?.duration || 0)
  }

  const handlePlayPause = () => {
    const audio = audioRef.current

    if (audio) {
      if (isPlaying) {
        audio.pause()
      } else {
        audio.play()
      }
    }

    setIsPlaying(!isPlaying)
  }

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = Math.floor(seconds % 60)

    return [hours, minutes, secs]
      .map((v) => (v < 10 ? '0' + v : v))
      .filter((v, i) => v !== '00' || i > 0)
      .join(':')
  }

  const handleSliderMouseDown = (e: React.MouseEvent) => {
    const slider = sliderRef.current

    if (!slider) {
      return
    }

    const rect = slider.getBoundingClientRect()
    const x = e.clientX - rect.left // x position within the slider
    const fraction = x / rect.width
    setSliderFraction(fraction)

    const newCurrentTime = fraction * duration
    setCurrentTime(newCurrentTime)

    if (audioRef.current) {
      audioRef.current.currentTime = newCurrentTime
    }
  }

  const handlePlaybackSpeedChange = () => {
    if (playbackRate === 1) {
      setPlaybackRate(1.5)
    } else if (playbackRate === 1.5) {
      setPlaybackRate(2)
    } else {
      setPlaybackRate(1)
    }
  }

  return (
    <dialog className="w-full h-24 px-12 flex items-center justify-center bg-transparent pointer-events-none tailwind-player">
      <audio
        src={src}
        autoPlay={autoPlay}
        className={className}
        controls={controls}
        controlsList={controlsList}
        id={id}
        loop={loop}
        muted={isMuted}
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
        onAbort={onAbort}
        onCanPlay={onCanPlay}
        onCanPlayThrough={onCanPlayThrough}
        onEnded={onEnded}
        onError={onError}
        onLoadedMetadata={onLoadedMetadata}
        onPause={onPause}
        onPlay={onPlay}
        onSeeked={onSeeked}
        onVolumeChange={onVolumeChange}
        preload={preload}
        style={style}
        title={title}
        ref={audioRef}
      >
        Your browser does not support the audio element.
      </audio>
      <div className="relative z-10 p-4 pointer-events-auto">
        <div className="flex w-[41rem] rounded-lg bg-white shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
          <div className="flex items-center space-x-4 px-6 py-4">
            {preset.showFastForward && (
              <button className="rounded-lg flex items-center justify-center py-2 px-2 bg-transparent hover:bg-gray-100 transition-all duration-300 ease-in-out">
                <ArrowUturnLeftIcon className="w-5 h-5 text-gray-600" />
              </button>
            )}
            <button
              onClick={handlePlayPause}
              className="bg-[#0F172A] rounded-full flex items-center justify-center p-2"
            >
              {isPlaying ? (
                <PauseIcon className="w-5 h-5 text-white" />
              ) : (
                <PlayIcon className="w-5 h-5 text-white" />
              )}
            </button>
            {preset.showFastForward && (
              <button className="rounded-lg flex items-center justify-center py-2 px-2 bg-transparent hover:bg-gray-100 transition-all duration-300 ease-in-out">
                <ArrowUturnRightIcon className="w-5 h-5 text-gray-600" />
              </button>
            )}
          </div>
          <div className="flex space-x-4 flex-auto items-center border-l border-slate-200/60 pl-6 pr-4 text-[0.8125rem] leading-5 text-slate-700">
            {preset.showSlider && (
              <>
                <div className="w-9">{formatTime(currentTime)}</div>
                <div
                  ref={sliderRef}
                  className="relative flex flex-auto rounded-full bg-slate-100 cursor-pointer"
                  onMouseDown={handleSliderMouseDown}
                >
                  <div
                    style={{ width: `${sliderFraction * 100}%` }}
                    className="h-2 flex-none rounded-l-full rounded-r-[1px] bg-indigo-600 transition-all duration-500 ease-in-out"
                  />
                  <div className="-my-[0.3125rem] ml-0.5 h-[1.125rem] w-1 rounded-full bg-indigo-600"></div>
                </div>
                <div className="w-9">{formatTime(duration)}</div>
              </>
            )}
            {preset.showPlaybackSpeed && (
              <div className="flex items-center">
                <button
                  onClick={handlePlaybackSpeedChange}
                  className="rounded-lg w-10 font-medium flex items-center justify-center py-2 px-2 bg-transparent hover:bg-gray-100 transition-all duration-300 ease-in-out"
                >
                  {playbackRate === 1 ? '1.0x' : playbackRate === 1.5 ? '1.5x' : '2.0x'}
                </button>
              </div>
            )}
            {preset.showMute && (
              <div className="flex items-center">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="rounded-lg flex items-center justify-center py-2 px-2 bg-transparent hover:bg-gray-100 transition-all duration-300 ease-in-out"
                >
                  {isMuted ? (
                    <SpeakerXMarkIcon className="w-5 h-5 text-gray-600" />
                  ) : (
                    <SpeakerWaveIcon className="w-5 h-5 text-gray-600" />
                  )}
                </button>
              </div>
            )}
            {preset.showDownload && (
              <a
                href={src}
                target="_blank"
                className="rounded-lg flex items-center justify-center py-2 px-2 bg-transparent hover:bg-gray-100 transition-all duration-300 ease-in-out"
              >
                <ArrowDownTrayIcon className="w-5 h-5 text-gray-600" />
              </a>
            )}
          </div>
        </div>
      </div>
    </dialog>
  )
}

export default Player
