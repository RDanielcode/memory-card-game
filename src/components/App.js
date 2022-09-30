import React, { useState } from 'react'
import { Cards } from './Card'
import { Counter } from './Counter'
import { Header } from './Header'
import { Intro } from './Intro'
import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => {
  const [counter, setCounter] = useState(0)
  const [intro, setIntro] = useState(true)

  const onChange = () => {
    setCounter(counter + 1)
  }

  const removeIntro = () => {
    setIntro(false)
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      {!intro &&
        <>
          <Counter counter={counter} />
          <Cards counter={counter} onChange={onChange} />
        </>}
      {intro && <Intro onClick={removeIntro} />}
    </>
  )
}
