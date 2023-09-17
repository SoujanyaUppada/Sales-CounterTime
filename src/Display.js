import React from 'react'
import "./App.css";

const Display = ({days,hours,minutes,seconds}) => {
    return (
        <div>
            <h1 className='title'>SALES COUNTDOWN TIMER</h1>
            <h2 className='info'>Offer ends in</h2>
            <table>
                <tbody>
                    <tr className='counter-time'>
                        <th className='timer'>{days}</th>&nbsp;&nbsp;
                        <th className='timer'>{hours}</th>&nbsp;&nbsp;
                        <th className='timer'>{minutes}</th>&nbsp;&nbsp;
                        <th className='timer'>{seconds}</th>&nbsp;&nbsp;
                    </tr>
                    <tr className='counter-time'>
                        <td className='timer-text'>DAYS</td>&nbsp;&nbsp;
                        <td className='timer-text'>HOURS</td>&nbsp;&nbsp;
                        <td className='timer-text'>MINUTES</td>&nbsp;&nbsp;
                        <td className='timer-text'>SECONDS</td>&nbsp;&nbsp;
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Display