import React, { useState } from 'react';
import './SongList.css';

const SongList = ({ songs, onSelectSong, currentSong }) => {
    const [visibleIndex, setVisibleIndex] = useState(0); // Track the current starting index of visible songs

    const handleShowMore = () => {
        if (visibleIndex + 3 < songs.length) {
            setVisibleIndex(visibleIndex + 3); // Move to the next set of 3 songs
        }
    };

    const handleShowLess = () => {
        if (visibleIndex - 3 >= 0) {
            setVisibleIndex(visibleIndex - 3); // Move back to the previous set of 3 songs
        }
    };

    return ( <
        div className = "song-list-container" >
        <
        div className = "song-list" > {
            songs.slice(visibleIndex, visibleIndex + 3).map((song) => ( <
                div key = { song.id }
                className = { `song-card ${currentSong?.id === song.id ? 'active' : ''}` }
                onClick = {
                    () => onSelectSong(song)
                } >
                <
                div className = "song-info" >
                <
                h3 > { song.title } < /h3> <
                p > { song.artist } < /p> < /
                div > <
                button className = "play-btn" > { currentSong && currentSong.id === song.id ? 'Playing' : 'Play' } <
                /button> < /
                div >
            ))
        } <
        /div> <
        div className = "song-list-navigation" > {
            visibleIndex > 0 && ( <
                button className = "back-btn"
                onClick = { handleShowLess } >
                Back <
                /button>
            )
        } {
            visibleIndex + 3 < songs.length && ( <
                button className = "show-more-btn"
                onClick = { handleShowMore } >
                Show More <
                /button>
            )
        } <
        /div> < /
        div >
    );
};

export default SongList;