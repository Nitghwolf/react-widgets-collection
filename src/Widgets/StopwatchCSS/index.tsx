import { FC } from "react";
import "./index.css";

const StopwatchCSS: FC = () => {
  return (
    <div className="container-StopwatchCSS">
      <input id="start" name="controls" type="radio" />
      <input id="stop" name="controls" type="radio" />
      <input id="reset" name="controls" type="radio" />
      <div className="timer">
        <div className="cell">
          <div className="numbers tenhour moveten">0 1 2 3 4 5 6 7 8 9</div>
        </div>
        <div className="cell">
          <div className="numbers hour moveten">0 1 2 3 4 5 6 7 8 9</div>
        </div>
        <div className="cell divider">
          <div className="numbers">:</div>
        </div>
        <div className="cell">
          <div className="numbers tenminute movesix">0 1 2 3 4 5 6</div>
        </div>
        <div className="cell">
          <div className="numbers minute moveten">0 1 2 3 4 5 6 7 8 9</div>
        </div>
        <div className="cell divider">
          <div className="numbers">:</div>
        </div>
        <div className="cell">
          <div className="numbers tensecond movesix">0 1 2 3 4 5 6</div>
        </div>
        <div className="cell">
          <div className="numbers second moveten">0 1 2 3 4 5 6 7 8 9</div>
        </div>
        <div className="cell divider">
          <div className="numbers">.</div>
        </div>
        <div className="cell">
          <div className="numbers millisecond moveten">0 1 2 3 4 5 6 7 8 9</div>
        </div>
        <div className="cell">
          <div className="numbers tenmillisecond moveten">0 1 2 3 4 5 6 7 8 9</div>
        </div>
        <div className="cell">
          <div className="numbers hundredmillisecond moveten">
            0 1 2 3 4 5 6 7 8 9
          </div>
        </div>
      </div>
      <div className="timer-controls">
        <label htmlFor="start">
          {" "}
          <i className="fa fa-play" />
        </label>
        <label htmlFor="stop">
          <i className="fa fa-pause" />
        </label>
        <label htmlFor="reset">
          <i className="fa fa-refresh" />
        </label>
      </div>
    </div>
  );
};

export default StopwatchCSS;