import { FC, useEffect, useRef } from "react";
import "./index.css";

const Clock: FC = () => {
  const secondHand = useRef<HTMLDivElement>(null);
  const minsHand = useRef<HTMLDivElement>(null);
  const hourHand = useRef<HTMLDivElement>(null);

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.current &&
      (secondHand.current.style.transform = `rotate(${secondsDegrees}deg)`);

    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
    minsHand.current &&
      (minsHand.current.style.transform = `rotate(${minsDegrees}deg)`);

    const hour = now.getHours();
    const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
    hourHand.current &&
      (hourHand.current.style.transform = `rotate(${hourDegrees}deg)`);
  }

  useEffect(() => {
    setDate();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate();
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className="Clock">
      <div className="clock-face">
        <div className="hand hour-hand" ref={hourHand} />
        <div className="hand min-hand" ref={minsHand} />
        <div className="hand second-hand" ref={secondHand} />
      </div>
    </div>
  );
};

export default Clock;
