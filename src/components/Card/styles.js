import styled from 'styled-components'

export const Img = styled.img`
  width: 85%;
  max-width: 100px;
  height: 90%;
  max-height: 100px;
  border: 1px solid #cdcd0f;
  border-radius: 5px;
  box-shadow: 11px 11px 24px 1px rgba(0,0,0,0.75);
-webkit-box-shadow: 11px 11px 24px 1px rgba(0,0,0,0.75);
-moz-box-shadow: 11px 11px 24px 1px rgba(0,0,0,0.75);
  margin: 5px;
  background-color: #0096d2;
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(50px, 1fr));
  justify-items: center;
  gap: 10px;
  @media(min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(8, minmax(50px, 1fr));
    justify-items: center;
    gap: 20px; 
  }
`
