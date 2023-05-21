import React from 'react';
import YouTubePlayer from './components/YouTubePlayer/YouTubePlayer';
import './fonts.css';
const App = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=duCAM5ljhIw';

  return (
    <div>
      <YouTubePlayer videoUrl={videoUrl} />
    </div>
  );
};

export default App;
