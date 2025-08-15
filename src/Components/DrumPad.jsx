import React from 'react'

export default function DrumPad({ keyTrigger, clip, name, setDisplay }) {
  const playSound = () => {
    const audio = document.getElementById(keyTrigger)
    audio.currentTime = 0
    audio.play()
    setDisplay(name)
  }

  React.useEffect(() => {
    const handleKey = (e) => {
      if (e.key.toUpperCase() === keyTrigger) playSound()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <div id="drum-pad" onClick={playSound} className="drum-pad btn btn-outline-light fs-5 py-3">
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={clip}></audio>
    </div>
  )
}
