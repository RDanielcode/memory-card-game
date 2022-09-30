import React from 'react'
import { Container, Message, Box, Button } from '../Fail/styles'

export const Intro = ({ onClick }) => {
  return (
    <Container>
      <Box>
        <Message>
          Pick two cards and start discovering the same pairs. Go on until you finish.
        </Message>
        <Button onClick={onClick}>
          Start Game
        </Button>
      </Box>
    </Container>
  )
}
