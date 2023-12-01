import React from 'react';
// import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const VideoPlayer = ({ url }) => {
  return (
    <div>
      {/* <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        controls={true}
      /> */}
      <AudioPlayer
        style={{ background: 'transparent' }}
        autoPlay
        src={url}
        // onPlay={(e) => console.log('onPlay')}
        // other props here
      />
    </div>
  );
};

export default VideoPlayer;
