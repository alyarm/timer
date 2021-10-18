import React, {useState, useEffect} from 'react'
import './Timer.css'

const TimerItem = ({digit, text}) => {
    const digitHandler = (digit) => digit > 9 ? digit : '0' + digit

    return <div className="timer__item">
        <span className="timer__digit">{digitHandler(digit)}</span>
        {text ? <span className="timer__text">{text}</span> : false}
    </div>
}

const Timer = ({finalDate}) => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            const remainingTime = new Date(finalDate) - new Date()
            if (remainingTime >= 0) {
                setDays(Math.floor(remainingTime / 1000 / 60 / 60 / 24))
                setHours(Math.floor(remainingTime / 1000 / 60 / 60) % 24)
                setMinutes(Math.floor(remainingTime / 1000 / 60) % 60)
                setSeconds(Math.floor(remainingTime / 1000) % 60)
            } else {
                clearInterval(interval)
            }
        }, 1000)
    })

    return <div className="timer">
        <TimerItem 
            digit={days}
            text="Days"
        />
        <TimerItem 
            digit={hours}
            text="Hours"
        />
        <TimerItem 
            digit={minutes}
            text="Minutes"
        />
        <TimerItem 
            digit={seconds}
            text="Seconds"
        />
    </div>
}

export default Timer