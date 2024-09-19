import React, { useRef, useEffect } from 'react';
import './AudioPlayer.css';

const AudioPlayer = ({ song, isPlaying, onPlayPause }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play().catch((error) => console.error('Error:', error));
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    return ( <
        div className = "audio-player" >
        <
        audio ref = { audioRef }
        src = { song.audioSrc }
        /> <
        button className = "play-pause-btn"
        onClick = {
            () => onPlayPause(!isPlaying)
        } > { isPlaying ? 'Pause' : 'Play' } <
        /button> <
        p className = 'audio-p' > { song.title } < /p> < /
        div >
    );
};

export default AudioPlayer;