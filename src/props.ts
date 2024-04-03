export default interface PlayerProps {
  audioUrl: string
  autoPlay?: boolean
  className?: string
  controls?: boolean
  controlsList?: string
  crossOrigin?: string
  id?: string
  loop?: boolean
  muted?: boolean
  onAbort?: (e: Event) => void
  onCanPlay?: (e: Event) => void
  onCanPlayThrough?: (e: Event) => void
  onEnded?: (e: Event) => void
  onError?: (e: Event) => void
  onLoadedMetadata?: (e: Event) => void
  onPause?: (e: Event) => void
  onPlay?: (e: Event) => void
  onSeeked?: (e: Event) => void
  onVolumeChanged?: (e: Event) => void
  preload?: '' | 'none' | 'metadata' | 'auto'
  style?: React.CSSProperties
  title?: string
  volume?: number
}
