import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8)
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50%;
  width: 50%;
  border: 1px solid; border-radius: 10px;
  background-color:  #F9FBFC;
`
export const Message = styled.h4`
  font-size: 50px;
  text-align: center;
  font-family: 'Creepster', cursive;
`
export const Button = styled.button`
  font-family: 'Creepster', cursive;
  font-size: 20px;
`
