import React from 'react'
import { todayText } from '../../data/Today'
import { Link } from 'react-router-dom'

const Today = () => {
    return (
        <section id='today'>
            {todayText.map((item, index) => (
                <div className='today__inner' key={index}>
                    <div className='today__thumb play__icon'>
                        <Link to={item.page}>
                            <img src={item.img} alt={item.title} />
                        </Link>
                    </div>
                    <div className='today__text'>
                        <span className='today'>추천 영상</span>
                        <h3 className='title'>
                            <Link to={item.page}>{item.title}</Link>
                        </h3>
                        <p className='desc'>{item.desc}</p>
                        <div className='info'>
                            <span className='author'>
                                <Link to={`/channel/${item.channelId}`}>{item.author}</Link>
                            </span>
                            <span className='date'>{item.date}</span>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Today
