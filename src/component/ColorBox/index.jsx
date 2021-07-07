import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss'
ColorBox.propTypes = {

};
function getRandomColor() {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', ' black', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
}

function ColorBox(props) {
    const [color, setColor] = useState(() =>
        localStorage.getItem('color') || 'deeppink'
    );
    const handleBoxOnClick = () => {
        const newCorlor = getRandomColor();
        setColor(newCorlor);
        localStorage.setItem('color', newCorlor);
    }
    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxOnClick}
        >
        </div>
    );
}

export default ColorBox;