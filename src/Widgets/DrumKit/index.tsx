import { FC, useEffect } from "react";
import "./index.css";

const DrumKit: FC = () => {

  function removeTransition(e: any) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  }

  function playSound(e: any) {
    const audio: any = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    
    if (!audio) return;

    key?.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }


  useEffect(() => {
    const keys = Array.from(document.querySelectorAll(".key"));
    keys.forEach((key) =>
      key.addEventListener("transitionend", removeTransition)
    );
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", playSound);
  }, []);
  

  return (
    <div className="drumKit">
      <div className="keys">
        <div data-key="65" className="key">
          <kbd>A</kbd>
          <span className="sound">clap</span>
        </div>
        <div data-key="83" className="key">
          <kbd>S</kbd>
          <span className="sound">hihat</span>
        </div>
        <div data-key="68" className="key">
          <kbd>D</kbd>
          <span className="sound">kick</span>
        </div>
        <div data-key="70" className="key">
          <kbd>F</kbd>
          <span className="sound">openhat</span>
        </div>
        <div data-key="71" className="key">
          <kbd>G</kbd>
          <span className="sound">boom</span>
        </div>
        <div data-key="72" className="key">
          <kbd>H</kbd>
          <span className="sound">ride</span>
        </div>
        <div data-key="74" className="key">
          <kbd>J</kbd>
          <span className="sound">snare</span>
        </div>
        <div data-key="75" className="key">
          <kbd>K</kbd>
          <span className="sound">tom</span>
        </div>
        <div data-key="76" className="key">
          <kbd>L</kbd>
          <span className="sound">tink</span>
        </div>
      </div>

      <audio data-key="65"><source src="../../assets/sounds/clap.wav" type="audio/wav" /></audio>
      <audio data-key="83" src="../../assets/sounds/hihat.wav" />
      <audio data-key="68" src="../../assets/sounds/kick.wav" />
      <audio data-key="70" src="../../assets/sounds/openhat.wav" />
      <audio data-key="71" src="../../assets/sounds/boom.wav" />
      <audio data-key="72" src="../../assets/sounds/ride.wav" />
      <audio data-key="74" src="../../assets/sounds/snare.wav" />
      <audio data-key="75" src="../../assets/sounds/tom.wav" />
      <audio data-key="76" src="../../assets/sounds/tink.wav" />
    </div>
  );
};

export default DrumKit;