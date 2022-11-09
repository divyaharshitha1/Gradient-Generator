import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  AppContainer,
  ResponsiveContainer,
  Heading,
  ChooseColor,
  ButtonsList,
  ColorsContainer,
  ColorInputContainer,
  ColorLabel,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    initialGradientColor: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onClickGenerateBtn = () => {
    const {initialGradientColor, fromColorInput, toColorInput} = this.state
    this.setState({
      gradientValue: `to ${initialGradientColor}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  clickGradientDirectionItem = direction => {
    this.setState({initialGradientColor: direction})
  }

  render() {
    const {
      initialGradientColor,
      fromColorInput,
      toColorInput,
      gradientValue,
    } = this.state
    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <ChooseColor>Choose Direction</ChooseColor>
          <ButtonsList>
            {gradientDirectionsList.map(eachBtn => (
              <GradientDirectionItem
                key={eachBtn.directionId}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
                gradientDetails={eachBtn}
                isActive={initialGradientColor === eachBtn.value}
              />
            ))}
          </ButtonsList>
          <ChooseColor>Pick the Colors</ChooseColor>
          <ColorsContainer>
            <ColorInputContainer>
              <ColorLabel>{fromColorInput}</ColorLabel>
              <ColorInput
                type="color"
                onChange={this.onChangeFromColor}
                value={fromColorInput}
              />
            </ColorInputContainer>
            <ColorInputContainer>
              <ColorLabel>{toColorInput}</ColorLabel>
              <ColorInput
                type="color"
                onChange={this.onChangeToColor}
                value={toColorInput}
              />
            </ColorInputContainer>
          </ColorsContainer>
          <GenerateButton onClick={this.onClickGenerateBtn}>
            Generate
          </GenerateButton>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
