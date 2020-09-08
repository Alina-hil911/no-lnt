import React, { useState, useEffect } from 'react';


import './Clock.scss';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        let update = setInterval(() => {
            setTime(new Date())
        }, 1 * 250);
        return () => {
            clearInterval(update)
        }
    }, []);

    return (<div>

        <h2>
            {time.toLocaleTimeString()}
        </h2>
       
    </div>);
};


export default Clock;