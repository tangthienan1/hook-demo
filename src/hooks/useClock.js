import { useEffect, useState } from 'react';


function formatDate(date) {
    if (!date) return '';

    const hours = `0${date.getHours()}`.slice(-2);
    const miniutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${miniutes}:${seconds}`;
}
function useClock(props) {
    const [timeString, setTimeString] = useState('');
    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            const newTimeString = formatDate(now);

            setTimeString(newTimeString);
        }, 1000)
        return () => {
            console.log('clean up');
            clearInterval(clockInterval);
        }
    }, []);

    return { timeString };
}

export default useClock;