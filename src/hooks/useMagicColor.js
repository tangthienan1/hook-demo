import { useEffect, useState } from 'react';
function randomColor() {
    return 'green';
}
function useMagicColor(props) {
    const [color, setColor] = useState('transparent');
    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor();
            setColor(newColor);
            console.log('1', color);
        }, 1000);
        return () => {
            clearInterval(colorInterval);
        };
    }, []);
    return color;
}

export default useMagicColor;