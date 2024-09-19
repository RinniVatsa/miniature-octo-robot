import React from 'react';
import './MusicHolder.css';

const MusicHolder = ({ currentSong, onNextSong, onPrevSong, isPlaying, togglePlayPause }) => {
        if (!currentSong) {
            return <div className = "music-holder" > Select a song to play < /div>;
        }

        return ( <
                div className = "music-holder" >
                <
                div className = "song-details" >
                <
                h2 > { currentSong.title } < /h2> <
                p > { currentSong.artist } < /p> <
                /div> <
                div className = "controls" >
                <
                button className = "prev-btn"
                onClick = { onPrevSong } >
                &
                #9664; Prev
        </button>
        <button className= "play-pause-btn"
                onClick = { togglePlayPause } > { isPlaying ? 'Pause' : 'Play' } <
                /button> <
                button className = "next-btn"
                onClick = { onNextSong } >
                Next & #9654;
        </button>
      </div>
    </div>
  );
};

export default MusicHolder;