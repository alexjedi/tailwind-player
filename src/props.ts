export default interface PlayerProps {
  audioUrl: string
  autoPlay?: boolean
  className?: string
  controls?: boolean
  controlsList?: string
  id?: string
  loop?: boolean
  muted?: boolean
  onAbort?: () => void
  onCanPlay?: () => void
  onCanPlayThrough?: () => void
  onEnded?: () => void
  onError?: () => void
  onLoadedMetadata?: () => void
  onPause?: () => void
  onPlay?: () => void
  onSeeked?: () => void
  onVolumeChange?: () => void
  preload?: '' | 'none' | 'metadata' | 'auto'
  style?: React.CSSProperties
  title?: string
}
