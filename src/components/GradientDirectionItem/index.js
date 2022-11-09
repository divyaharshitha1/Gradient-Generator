import {CustomButton, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDetails, isActive, clickGradientDirectionItem} = props
  const {displayText, value} = gradientDetails
  const onClickGradientDirectionItem = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <ListItem>
      <CustomButton
        type="button"
        onClick={onClickGradientDirectionItem}
        isActive={isActive}
      >
        {displayText}
      </CustomButton>
    </ListItem>
  )
}

export default GradientDirectionItem
