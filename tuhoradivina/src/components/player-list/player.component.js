import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './player-list.styles.scss';

const PlayerList = ({ audioFile, audioData }) => {
	const [loading, setLoading] = useState(true);

	const handleOnCanPlay = () => {
		setLoading(false);
	};

	return (
		<div>
			{loading && <span className='spinner' />}
			<ReactAudioPlayer
				className='audio-player'
				src={audioFile}
				autoplay
				controls
				onCanPlay={handleOnCanPlay}
			/>
		</div>
	);
};

export default PlayerList;
