import { FC } from "react";
import "./index.css";

const AnimatedGlowButton: FC = () => {
  return (
    <div className="containerGlowButton">
      <a className="glowButton" href="#">
        <span className="glowButtonInner">Button</span>
      </a>
    </div>
  );
};

export default AnimatedGlowButton;
