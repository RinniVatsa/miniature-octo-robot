import React, { useState } from 'react';
import SongList from './components/  SongList';
import PlaylistManager from './components/  PlaylistManager';
import AudioPlayer from './components/AudioPlayer';
import './App.css';

function App() {
    const [songs] = useState([
        { id: 1, title: 'English Poem', artist: 'Jazz', audioSrc: '/english-poem-108554.mp3' },
        { id: 2, title: 'Good King', artist: 'Andrew', audioSrc: '/good-king-wenceslas-english-christmas-carol-piano-and-shimmer-pad-11556.mp3' },
        { id: 3, title: 'Old story from scotland', artist: 'Jack D.T', audioSrc: '/old-story-from-scotland-147143.mp3' },
        { id: 4, title: 'Escape-the-dark', artist: 'YoshY', audioSrc: '/escape-the-dark-prod-by-yoshybeats-166894.mp3' },
        { id: 5, title: 'Come-with-me', artist: 'Spooky', audioSrc: '/come-with-me-prod-by-yoshybeats-171325.mp3' },
        { id: 6, title: 'Drive-Punk', artist: 'XEr1', audioSrc: '/drive-punk-171113.mp3' },
        { id: 6, title: 'Drive-Punk', artist: 'XEr1', audioSrc: '/drive-punk-171113.mp3' },
    ]);

    const [currentSong, setCurrentSong] = useState(null);
    const [playlist, setPlaylist] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleSelectSong = (song) => {
        setCurrentSong(song);
        setIsPlaying(true);
        if (!playlist.some((plSong) => plSong.id === song.id)) {
            setPlaylist([...playlist, song]);
        }
    };

    const handleRemoveSong = (index) => {
        setPlaylist(playlist.filter((_, i) => i !== index));
    };

    const handlePlayPause = (playState) => {
        setIsPlaying(playState);
    };

    return ( <
            div className = "app" >
            <
            h1 className = 'app-header' > SoundScape < /h1>  <
            SongList songs = { songs }
            onSelectSong = { handleSelectSong }
            currentSong = { currentSong }
            /> {
            currentSong && ( <
                AudioPlayer song = { currentSong }
                isPlaying = { isPlaying }
                onPlayPause = { handlePlayPause }
                />
            )
        } <
        PlaylistManager playlist = { playlist }
    onRemoveSong = { handleRemoveSong }
    /> < /
    div >
);
}

export default App;