import React from 'react'
import { Box, Container, Message, Button } from '../Fail/styles'

export const Finish = () => {
  return (
    <Container>
      <Box>
        <Message>
          Congrats, you have finished the game
        </Message>
        <a href='/memory-card-game'><Button>Play Again</Button></a>
      </Box>
    </Container>
  )
}
