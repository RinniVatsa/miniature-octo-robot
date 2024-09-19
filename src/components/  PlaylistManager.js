import React from 'react';
import './PlaylistManager.css';

const PlaylistManager = ({ playlist, onRemoveSong }) => {
    return ( <
        div className = "playlist-manager-container" >
        <
        h2 className = 'playlist-h2' > Your Playlist < /h2> <
        ul className = "playlist" > {
            playlist.map((song, index) => ( <
                li key = { index }
                className = "playlist-item" >
                <
                span > { song.title } - { song.artist } < /span> <
                button className = "remove-btn"
                onClick = {
                    () => onRemoveSong(index)
                } > ❌ <
                /button> < /
                li >
            ))
        } <
        /ul> < /
        div >
    );
};

export default PlaylistManager;