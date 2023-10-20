import React, { useState, useEffect } from 'react';
import './ProgressBarDemo.css';

const ProgressBarDemo = ({hex1,hex2}) => {
    const [progress, setProgress] = useState(0);
    const [isFull, setIsFull] = useState(false);

    useEffect(() => {
        if(progress < 1) {
            setTimeout(() => setProgress(prev => prev + 0.01), 50); // progress speed
        } else {
            setIsFull(true);
        }
    }, [progress]);

    useEffect(() => {
        if(isFull) {
            setTimeout(() => {
                setIsFull(false);
                setProgress(0);
            }, 5000); // loop delay
        }
    }, [isFull]);

    const gradient = `linear-gradient(45deg, 
      ${mixColors(`${hex1}`, '#ffffff', progress)}, 
      ${mixColors(`${hex2}`, '#ffffff', progress)})`;

    return (
        <div className="viewport" style={{ background: `${gradient}` }}>
            <div className={`bar-container ${isFull ? 'full' : ''}`}>
                <div className="bar-fill" style={{ width: `${progress * 100}%` }}></div>
            </div>
            {isFull && (
                <div className="welcome-grid-demo">
                    <div>PL</div>
                    <div>A</div>
                    <div>CE</div>
                    <div>HOLD</div>
                    <div>ER</div>
                </div>
            )}
        </div>
    );
}

const mixColors = (color1, color2, weight) => {
    const w1 = weight;
    const w2 = 1 - w1;
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    const [r1, g1, b1] = rgb1;
    const [r2, g2, b2] = rgb2;

    const r = Math.round(r1 * w1 + r2 * w2);
    const g = Math.round(g1 * w1 + g2 * w2);
    const b = Math.round(b1 * w1 + b2 * w2);

    return `rgb(${r},${g},${b})`;
};

const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
};

export default ProgressBarDemo;

