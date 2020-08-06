import React, {Fragment} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './player-list.styles.scss';

const PlayerList = ({ monthTitle, audioData }) => {
  return (
    <div className='player-wrapper'>  
      {/* <h2>{monthTitle}</h2> */}
      {audioData.map(audio => (
        <Fragment>
          <h2 className="audio-title">{audio.audioTitle}</h2>
          <ReactAudioPlayer 
            src={audio.audioFile}
            autoplay
            controls
            preload
          />
        </Fragment>
      ))}
    </div>
  )
}

export default PlayerList;