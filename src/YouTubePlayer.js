import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import InfoDescription from './infoDescription';

const YouTubePlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const PlayerContainer = styled.div`
  width: 640px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
