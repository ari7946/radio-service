import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const PlayerList = ({ monthTitle, audioData }) => {
  return (
    <div className='main-right'>  
      <h2>{monthTitle}</h2>
      {audioData.map(audio => (
        <div>
          <h2>{audio.audioTitle}</h2>
          <ReactAudioPlayer 
            src={audio.audioFile}
            autoplay
            controls
            preload
          />
        </div>
      ))}
    </div>
  )
}

export default PlayerList;