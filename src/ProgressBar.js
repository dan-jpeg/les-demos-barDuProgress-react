import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress, isFull }) => {
    const [gradient, setGradient] = useState('');

    useEffect(() => {
        const pinkGradient = 'linear-gradient(45deg, #FFC0CB, #FFB6C1)';
        const blueGradient = 'linear-gradient(45deg, #ADD8E6, #B0E0E6)';

        const currentGradient = `linear-gradient(45deg, 
      ${mixColors('#000000', '#ffffff', progress)}, 
      ${mixColors('#000000', '#ffffff', progress)})`;

        setGradient(currentGradient);
    }, [progress]);

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

    return (
        <div className="viewport" style={{ background: `${gradient}, ${'url("data:image/svg+xml,%3Csvg ... %3C/svg%3E")'}` }}>
            <div className={`bar-container ${isFull ? 'full' : ''}`}>
                <div className="bar-fill" style={{ width: `${progress * 100}%` }}></div>
            </div>
            {isFull && (
                <div className="welcome-grid">

                        <div>PLACE</div>
                        <div>_HOLDER</div>
                        <div>UI</div>
                        <div>PROGRESS BAR DEMOS</div>

                </div>
            )}

        </div>
    );
}

export default ProgressBar;
