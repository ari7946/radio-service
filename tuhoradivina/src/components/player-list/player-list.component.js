import React, {Fragment} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './player-list.styles.scss';

const PlayerList = ({ monthTitle, audioData }) => {

  return (
    <div className='player-wrapper'>  
      {audioData.map(audio => (
        <div>
          <h2 className="audio-title">{audio.audioTitle}</h2>
          <ReactAudioPlayer 
            className="audio-player"
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