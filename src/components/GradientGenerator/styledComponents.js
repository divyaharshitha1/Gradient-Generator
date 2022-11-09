// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  color: #ededed;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const ChooseColor = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: #ededed;
  font-weight: 500;
  line-height: 1.5;
`
export const ButtonsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`
export const ColorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 320px;
`
export const ColorInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ColorLabel = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #ededed;
`
export const ColorInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  border: none;
  outline: none;
  background-color: #00c9b7;
  border-radius: 8px;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  min-width: 25px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 25px;
  margin-bottom: 10px;
  margin-left: 0px;
`
