import React from 'react'
import Main from '../components/section/Main'

import { todayText } from '../data/Today'
import { Link } from 'react-router-dom'

const Today = () => {
    return (
        <Main
            title="lsh유튜브"
            description="lsh 유튜브에 오신 것을 환영합니다."
        >
            <section id='TodayPage'>
                <h2>오늘의 추천</h2>

                {todayText.map((today, key) => (
                    <div className='today__inner' key={key}>
                    <div className='today__thumb play__icon'>
                        <Link to={todayText[0].page}>
                            <img src={todayText[0].img} alt={todayText[0].title} />
                        </Link>
                    </div>
                    <div className='today__text'>
                        <span className='today'>today!</span>
                        <h3 className='title'>
                            <Link to={todayText[0].page}>{todayText[0].title}</Link>
                        </h3>
                        <p className='desc'>{todayText[0].desc}</p>
                        <div className='info'>
                            <span className='author'>
                                <Link to={`/channel/${todayText[0].channelId}`}>{todayText[0].author}</Link>
                            </span>
                            <span className='date'>{todayText[0].date}</span>
                        </div>
                    </div>
                </div>
                ))}
            </section>


        </Main>
    )
}

export default Today
