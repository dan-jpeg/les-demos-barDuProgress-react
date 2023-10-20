import React, { useState, useEffect } from 'react';
import './ProgressCircleDemo.css';

const ProgressCircleVerticalDemo = ({ currentView }) => {
    const [position, setPosition] = useState(100);
    const [isFull, setIsFull] = useState(false);

    const handleTransitionEnd = () => {
        if (isFull) {
            setIsFull(false);
            setPosition(100);
        }
    };

    useEffect(() => {
        if (position > 0) {
            setTimeout(() => setPosition(prev => prev - 0.2), 50);
        } else {
            setIsFull(true);
        }
    }, [position]);

    return (
        <div className={`viewport-circle ${currentView}`}>
            <div
                className={`circle ${isFull ? 'fade-out' : ''}`}
                onTransitionEnd={handleTransitionEnd}
                style={{ bottom: `${position}%` }}
            >
            </div>
        </div>
    );
};

export default ProgressCircleVerticalDemo;
