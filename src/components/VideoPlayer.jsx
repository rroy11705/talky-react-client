import React from "react";

const VideoPlayer = ({ name, type, onClick, color, buttonText, showButton }) => {
  return (
      <div>
        <video
            ref={player}
            autoPlay
            // controls
            playsInline
            muted
            className="flip-video img-fluid w-100"
            style={{left: x, top: y}}
        />
    </div>
  );
};
export default VideoPlayer;
