import React from 'react';
import './DialTimer.css'
import moment from 'moment'

const rate = (dataType, time) => {
    if (dataType &&  time) {
        switch (dataType) {
            case 'За этот день':
                return (100 - ((8 - time) / 0.08)).toFixed(0);
            case 'За эту неделю':
                return (100 - ((40 - time) / 0.4)).toFixed(0);
            case 'За этот месяц':
                return (100 - ((150 - time) / 1.5)).toFixed(0);
            default:
                return ''
        }
    }
};

const DialTimer = ({dates, dataType, dataIcon, loading})=> (
    <React.Fragment>
            <div className="diagram">
                <svg viewBox="0 0 36 36" className="circular-chart blue">
                    <linearGradient id="linear-gradient">
                        <stop stopColor="#27AE60"/>
                        <stop offset="0.0914918" stopColor="#3CB560"/>
                        <stop offset="0.143679" stopColor="#5BC061"/>
                        <stop offset="0.530314" stopColor="#99D25F"/>
                        <stop offset="0.78084" stopColor="#CAC745"/>
                        <stop offset="0.854028" stopColor="#F2994A"/>
                        <stop offset="0.92675" stopColor="#F87747"/>
                        <stop offset="1" stopColor="#FC654A"/>
                    </linearGradient>
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <path className="circle" stroke="url(#linear-gradient)"
                          strokeDasharray={rate(dataType, dates.time) + ",100"}
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                </svg>
                <div className="diagram_wrapper">
                    <div className="diagram__date">
                        {dataIcon ?
                            <svg className="icon icon-calendar">
                                <use xlinkHref="#icon-calendar"/>
                            </svg>
                            : ''}
                        <span className="diagram__interval">{dataIcon ? moment().format('DD.MM.YYYY') : dataType}</span>
                    </div>
                    <span className="diagram__time">{dates.time}</span>
                </div>
            </div>
        {!dataIcon ?
            <div className="diagram__percentages">
                {rate(dataType, dates.time)}%
            </div>
            : ''
        }
    </React.Fragment>
);

export default DialTimer;





