# Tailwind Audio Player

A lightweight TailwindCSS React wrapper for the default audio element.

## Installation

    npm install --save tailwind-player

You should have the react and react-dom installed.

## Usage

    import TailwindPlayer from 'tailwind-player';
    //...
    <TailwindPlayer
      src="https://youtu.be/dQw4w9WgXcQ?si=Id6V7AafrYLSmgNd"
      loop
      autoplay
    />

### Example

See the example directory for a basic working example of using this project. To run it locally, run `npm install` in the example directory and then `npm start`.

## Props

| Prop           | Type    | Default        |
| -------------- | ------- | -------------- |
| `autoPlay`     | Boolean | false          |
| `children`     | Element | null           |
| `className`    | String  | _empty string_ |
| `controls`     | Boolean | false          |
| `crossOrigin`  | String  | _empty string_ |
| `controlsList` | String  | _empty string_ |
| `id`           | String  | _empty string_ |
| `loop`         | Boolean | false          |
| `muted`        | Boolean | false          |
| `volume`       | Number  | 1.0            |
| `preload`      | String  | 'metadata'     |
| `src`          | String  | _empty string_ |
| `style`        | Object  | ---            |

| Prop | Type | Description |
| --- | --- | --- |
| `preset` | Object | Additional properties for the preset |
| `preset.showSlider` | Boolean | Determines whether to show the slider. Default is true. |
| `preset.showFastForward` | Boolean | Determines whether to show the fast forward button. Default is true. |
| `preset.showPlaybackSpeed` | Boolean | Determines whether to show the playback speed control. Default is true. |
| `preset.showMute` | Boolean | Determines whether to show the mute button. Default is true. |
| `preset.showDownload` | Boolean | Determines whether to show the download button. Default is true. |
| `preset.showPlaylist` | Boolean | Determines whether to show the playlist button. Default is true. |

| Prop | Type | Description |
| --- | --- | --- |
| `listenInterval` | Number | Indicates how often to call the `onListened` prop during playback, in milliseconds. Default is 10000. |
| `onAbort` | Function | called when unloading the audio player, like when switching to a different src file. Passed the event. |
| `onCanPlay` | Function | called when enough of the file has been downloaded to be able to start playing. Passed the event. |
| `onCanPlayThrough` | Function | called when enough of the file has been downloaded to play through the entire file. Passed the event. |
| `onEnded` | Function | called when playback has finished to the end of the file. Passed the event. |
| `onError` | Function | called when the audio tag encounters an error. Passed the event. |
| `onListen` | Function | called every `listenInterval` milliseconds during playback. Passed the event. |
| `onPause` | Function | called when the user pauses playback. Passed the event. |
| `onPlay` | Function | called when the user taps play. Passed the event. |
| `onSeeked` | Function | called when the user drags the time indicator to a new time. Passed the event. |
| `onVolumeChanged` | Function | called when the user changes the volume, such as by dragging the volume slider |
| `onLoadedMetadata` | Function | called when the metadata for the given audio file has finished downloading. Passed the event. |
