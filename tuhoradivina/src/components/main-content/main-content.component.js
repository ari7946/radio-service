import React, { useEffect } from 'react';
import Title from '../title/title.component';
import Month from '../month/month.component';
import data from '../data/data';
import ReactAudioPlayer from 'react-audio-player';
import './main-content.styles.scss'

const MainContent = () => {
  return (
    <main>
      <div className="main-left">
        <h2>{data.sixteen.yearTitle}</h2>
        {data.sixteen.months.map(month => (
          <Month month={month} />
        ))}
      </div>

      <div className='main-right'>
        <h2>{data.sixteen.monthTitle}</h2>
        {data.sixteen.audioData.map(audio => (
          <div>
            <h2>{audio.audioTitle}</h2>
            {/* <audio 
              class="audio-player" 
              id="fourthAudio2014" 
              controls
              src={audio.audioPath} 
              type="audio/mpeg" 
            /> */}
            <ReactAudioPlayer 
              src={audio.audioFile}
              autoplay
              controls
              preload
            />
          </div>
        ))}
      </div>

    </main> 
  )
}

export default MainContent;