import React from 'react';
import ReactAudioPlayer from './player.component';
import './player-list.styles.scss';

const PlayerList = ({ monthTitle, audioData }) => {
	return (
		<main className='player-wrapper'>
			{audioData.map((audio) => (
				<article key={audio.audioFile}>
					<h2 className='audio-title'>{audio.audioTitle}</h2>
					<ReactAudioPlayer audioFile={audio.audioFile} />
				</article>
			))}
		</main>
	);
};

export default PlayerList;
