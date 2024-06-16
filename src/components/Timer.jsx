import  { useState,useEffect } from "react";
import Title from "../ui/Title";

const Timer = ({ onTimeUpdate }) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
            if (seconds === 59) {
                setMinutes(prevMinutes => prevMinutes + 1);
                setSeconds(0);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);
    useEffect(() => {
        onTimeUpdate(seconds+minutes*60);
    }, [seconds, minutes,onTimeUpdate]);
    return (
        <Title as='h2'>
                Timer: {minutes < 10 ? '0' + minutes : minutes} m / {seconds < 10 ? '0' + seconds : seconds} s
        </Title>
    )
}
export default Timer;