import "../styles/global.scss";

import { Header } from "../components/Header";
import { Player } from "../components/Player";

import styles from "../styles/app.module.scss";
import { PlayerContext } from "../context/PlayerContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
    const [episodeList, setEpisodeList] = useState([])
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
    const [isPlaying, setIsPLaying] = useState(false);

    function play(episode) {
        setEpisodeList([episode])
        setCurrentEpisodeIndex(0)
        setIsPLaying(true)
    }

    function togglePlay() {
        setIsPLaying(!isPlaying)
    }

    function setPlayingState(state:boolean) {
        setIsPLaying(state);
    }

    return (
        <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, play, isPlaying, togglePlay, setPlayingState }}>
            <div className={styles.wrapper}>
                <main>
                    <Header />
                    <Component {...pageProps} />
                </main>
                <Player />
            </div>
        </PlayerContext.Provider>
    );
}

export default MyApp;
