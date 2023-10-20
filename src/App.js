import React, { useState, useEffect } from 'react';
import './App.css';
import ProgressBar from './ProgressBar';
import ProgressBarDemo from "./ProgressBarDemo";
import ProgressCircleHorizontalDemo from "./ProgressCircleHorizontalDemo";
import ProgressCircleVerticalDemo from "./ProgressCircleVerticalDemo";
import ScrollingBackground from "./ScrollingBackground";
import HorizontalSnapScroll from "./HorizontalSnapScroll";

function App() {



  const hex1 = '#fff7fe'
  const hex2 = '#7e8f7b'

  const hexBlack = '#000000'
  const hexWhite = '#FFFFFF'

  const hex5 = '#fff7fe'
  const hex6 = '#ded0db'

  const hex7 = ''
  const hex8 = ''



  const [progress, setProgress] = useState(0);
  const [isFull, setIsFull] = useState(false);
  const [currentView, setCurrentView] = useState('p1');

    useEffect(() => {
        const onScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;
            const pageIndex = Math.floor(scrollPosition / viewportHeight);
            const currentPage = 'p' + (pageIndex + 1);

            if (currentView !== currentPage) {
                setCurrentView(currentPage);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [currentView]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 1) {
        setProgress((prevProgress) => prevProgress + 0.01);
      } else if (!isFull) {
        setIsFull(true);
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [progress, isFull]);


  return (
      <div className="App">
        <ProgressBar progress={progress} isFull={isFull} />
        <ProgressBarDemo hex1={hex1} hex2={hex2} />
        <ProgressBarDemo hex1={hexBlack} hex2={hexBlack} />
        <ProgressBarDemo hex1={hex5} hex2={hex6} />
        <ProgressCircleVerticalDemo currentView={currentView}/>
        <ProgressCircleHorizontalDemo />
        <ScrollingBackground />
        {/*<HorizontalSnapScroll />*/}
      </div>
  );
}

export default App;
