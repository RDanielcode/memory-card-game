import React, { useState, useReducer } from 'react'
import { useCards } from '../hooks/useCards'
import { Img, Container } from './styles'
import { initialState, reducer, actionTypes } from '../hooks/useReducerItems'
import { Fail } from '../Fail'
import { Finish } from '../Finish'
import { Good } from '../Good'

export const Cards = ({ counter, onChange }) => {
  // eslint-disable-next-line no-unused-vars
  const { cardsShown, setCardsShown } = useCards()
  const [cards, setCards] = useState(cardsShown)
  const [name, setName] = useState([])
  const [state, dispatch] = useReducer(reducer, initialState)

  const onShow = (random) => {
    const newCards = [...cards]
    const cardIndex = cards.findIndex(card => card.random === random)
    console.log(cardIndex)
    newCards[cardIndex].state = true
    setCards(newCards)
    name.push({
      name: newCards[cardIndex].text,
      random: newCards[cardIndex].random
    })

    if (name.length === 2) {
      setTimeout(() => {
        compare()
      }, 1000)
    }
  }

  const compare = () => {
    if (name.length === 2) {
      if (name[name.length - 1].name === name[name.length - 2].name) {
        onChange()
        setName([])
        dispatch({ type: actionTypes.good })
        console.log(counter)
        setTimeout(() => {
          dispatch({ type: actionTypes.initial })
          if (counter === 9) {
            console.log('ok')
            setTimeout(() => {
              dispatch({ type: actionTypes.finish })
            }, 1000)
          }
        }, 2000)
      } else {
        const indexOne = cards.findIndex(card => card.random === name[name.length - 1].random)
        const indexTwo = cards.findIndex(card => card.random === name[name.length - 2].random)
        cards[indexOne].state = false
        cards[indexTwo].state = false
        setName([])
        dispatch({ type: actionTypes.fail })
        setTimeout(() => {
          dispatch({ type: actionTypes.initial })
        }, 2000)
        return cards
      }
    }
  }

  return (
    <Container>
      {cards.length !== 0 && cards.map(card => {
        return (
          <Img
            onClick={() => onShow(card.random)}
            src={card.state ? card.img : '../../assets/simbol-ask.png'}
            key={card.random}
          />
        )
      })}
      {state.fail && <Fail />}
      {state.finish && <Finish />}
      {state.good && <Good counter={counter} />}
    </Container>
  )
}
