import React, { useState, useEffect } from 'react';
import './ProgressCircleHorizontalDemo.css';

const ProgressCircleHorizontalDemo = () => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        if (position < 100) {
            setTimeout(() => setPosition(prev => prev + 1), 50); // Adjust the increment and timeout value for desired speed.
        } else {
            setTimeout(() => setPosition(0), 2000); // Adjust this timeout to control the delay between each loop.
        }
    }, [position]);

    return (
        <div className="viewport-circle-horizontal">
            <div className="circle-horizontal" style={{ left: `${position}%` }}></div>
            <div className="circle-horizontal" style={{ left: `${position}%` }}></div>


        </div>
    );
}

export default ProgressCircleHorizontalDemo;
