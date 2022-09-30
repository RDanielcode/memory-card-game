import React from 'react'
import { Container, Score } from './styles'

export const Counter = ({ counter }) => {
  return (
    <Container>
      <Score>
        Score : {counter}
      </Score>
    </Container>
  )
}
