import React from 'react'
import { getCards } from '../../utils/getCards'

export const useCards = () => {
  const [cards, setCards] = React.useState('')
  const [cardsShown, setCardsShown] = React.useState([])

  const api = 'https://rickandmortyapi.com/api/character'

  React.useEffect(() => {
    async function getPokemons (api) {
      const response = await getCards(api)
      setCards(response)
    }

    getPokemons(api)
  }, [])

  const level = 10

  const randomOne = new Array(level).fill(0).map(n => Math.floor(Math.random() * level))
  const randomTwo = [...randomOne, ...randomOne]
  const deOrder = (array) => {
    array = array.sort(function () {
      return Math.random() - 0.5
    })
  }

  const newOrder = []
  for (let i = 0; i < randomTwo.length; i++) {
    newOrder[i] = deOrder(randomTwo)
  }
  for (let i = 0; i < randomTwo.length; i++) {
    const card = cards[randomTwo[i]]
    if (card !== undefined) {
      cardsShown.push({
        img: card.image,
        id: card.id,
        text: card.name,
        state: false,
        random: Math.random() * 100
      })
    }
  }

  return { cardsShown, setCardsShown }
}
