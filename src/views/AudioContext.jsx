import { createContext, useContext, useRef, useState } from "react";

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const [reproduciendo, setReproduciendo] = useState(false);

  const iniciarMusica = async () => {
    try {
      await audioRef.current.play();
      setReproduciendo(true);
    } catch (error) {
      console.log("No se pudo reproducir la música:", error);
    }
  };

  const toggleAudio = async () => {
    if (audioRef.current.paused) {
      try {
        await audioRef.current.play();
        setReproduciendo(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      audioRef.current.pause();
      setReproduciendo(false);
    }
  };

  return (
    <AudioContext.Provider
      value={{
        iniciarMusica,
        toggleAudio,
        reproduciendo,
      }}
    >
      <audio ref={audioRef} loop>
        <source
          src="https://acilegna.github.io/audio.github.io/instrumental.mp3"
          type="audio/mpeg"
        />
      </audio>

      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}