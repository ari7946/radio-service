import React from 'react';
import ReactAudioPlayer from './player.component';
import './player-list.styles.scss';

const PlayerList = ({ monthTitle, audioData }) => {
	return (
		<div className='player-wrapper'>
			{audioData.map((audio) => (
				<div key={audio.audioFile}>
					<h2 className='audio-title'>{audio.audioTitle}</h2>
					<ReactAudioPlayer audioFile={audio.audioFile} />
				</div>
			))}
		</div>
	);
};

export default PlayerList;
