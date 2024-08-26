import React from 'react'
import Today from '../components/contents/Today'

import Main from '../components/section/Main'
import Developer from '../components/contents/Developer'
import Webd from '../components/contents/Webd'
import Website from '../components/contents/Website'
import Gsap from '../components/contents/Gsap'
import Portfolio from '../components/contents/Portfolio'
import Youtube from '../components/contents/Youtube'

const Home = () => {
  return (
    <Main
      title="lsh유튜브"
      description="lsh 유튜브에 오신 것을 환영합니다."
    >
      <Today />
      <Developer />
      <Webd />
      <Website />
      <Gsap />
      <Portfolio />
      <Youtube />

    </Main>
  )
}

export default Home