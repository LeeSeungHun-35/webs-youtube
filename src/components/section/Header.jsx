import React from 'react'

import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";


const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header_logo'>
                <a href='/'>
                    <em aria-hidden='true'></em>
                    <span style={{color:"red"}}>LSH <br />youtube</span>
                </a>
            </h1>
            <nav className='header__menu'>
                <ul className='menu'>
                    <li className='active'>
                        <a href='/'>
                            <CiBaseball /> 홈
                        </a>
                    </li>
                    <li>
                        <a href='/today'>
                            <CiMoneyBill /> shorts
                        </a>
                    </li>
                    <li>
                        <a href='/developer'>
                            <CiCoins1 /> 구독
                        </a>
                    </li>
                    <li>
                        <a href='/webd'>
                            <CiBoxes /> YouTube Music
                        </a>
                    </li>
                    <li>
                        <a href='/website'>
                            <CiBullhorn /> 나
                        </a>
                    </li>
                    <li>
                        <a href='/gsap'>
                            <CiCoffeeCup /> 내 채널
                        </a>
                    </li>
                    <li>
                        <a href='/port'>
                            <CiDumbbell /> 재생목록
                        </a>
                    </li>
                    <li>
                        <a href='/youtube'>
                            <CiFries /> 내 동영상
                        </a>
                    </li>
                </ul>
                <ul className='keyword'>
                    <li>
                        <a href='/search/webstoryboy'>나중에 볼 동영상</a>
                    </li>
                    <li>
                        <a href='/search/html'>좋아요 표시한 동영상</a>
                    </li>
                    <li>
                        <a href='/search/css'>오프라인 저장 동영상</a>
                    </li>
                    <li>
                        <a href='/search/javascript'>JavaScript</a>
                    </li>
                    <li>
                        <a href='/search/react.js'>React.js</a>
                    </li>
                    <li>
                        <a href='/search/vue.js'>Vue.js</a>
                    </li>
                    <li>
                        <a href='/search/next.js'>Next.js</a>
                    </li>
                    <li>
                        <a href='/search/node.js'>Node.js</a>
                    </li>
                    <li>
                        <a href='/search/sql'>SQL</a>
                    </li>
                    <li>
                        <a href='/search/React Portfolio'>portfolio</a>
                    </li>
                    <li>
                        <a href='/search/NewJeans'>music</a>
                    </li>
                </ul>
            </nav>

            <div className='header__sns'>
                <ul>
                    <li>
                        <a href='https://github.com/webstoryboy' rel='noopener noreferrer'>
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/webstoryboy' rel='noopener noreferrer'>
                            <AiFillYoutube />
                        </a>
                    </li>
                    <li>
                        <a href='https://codepen.io/webstoryboy' rel='noopener noreferrer'>
                            <AiOutlineCodepen />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/webstoryboy' rel='noopener noreferrer'>
                            <AiOutlineInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
