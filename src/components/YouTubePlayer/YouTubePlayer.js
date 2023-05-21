import React from 'react';
import YouTube from 'react-youtube';
import InfoDescription from '../InfoDescription/InfoDescription';
import { YouTubePlayerWrapper, PlayerContainer } from './YouTubePlayer.styled';



const YouTubePlayer = ({ videoUrl }) => {
  const videoId = videoUrl.split('v=')[1];

  return (
    <YouTubePlayerWrapper>
      <PlayerContainer>
        <YouTube videoId={videoId} />
      </PlayerContainer>
      <InfoDescription />
    </YouTubePlayerWrapper>
  );
};

export default YouTubePlayer;