import React from 'react'
import { Box, Container, Message } from '../Fail/styles'

export const Good = ({ counter }) => {
  return (
    <Container>
      <Box>
        <Message>
          Good, continue <br />
          score: {counter}
        </Message>
      </Box>
    </Container>
  )
}
