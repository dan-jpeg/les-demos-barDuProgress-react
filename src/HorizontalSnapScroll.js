import React from 'react';
import './HorizontalSnapScroll.css';
import bg1 from './1020bg.png'
import bg2 from './1020bg2.png'
import bg3 from './1020bg3.png'
import bg4 from './1020bg4.png'
import bg5 from './1020bg5.png'
import bg6 from './1020bg6.png'

const HorizontalSnapScroll = () => {
    return (
        <div className="horizontal-container">
            <div className="section" style={{ backgroundImage: `url(${bg1})` }}></div>
            <div className="section" style={{ backgroundImage: `url(${bg2})` }}></div>
            <div className="section" style={{ backgroundImage: `url(${bg3})` }}></div>
            <div className="section" style={{ backgroundImage: `url(${bg4})` }}></div>
            <div className="section" style={{ backgroundImage: `url(${bg5})` }}></div>
            <div className="section" style={{ backgroundImage: `url(${bg6})` }}></div>
        </div>
    );
};



export default HorizontalSnapScroll;
