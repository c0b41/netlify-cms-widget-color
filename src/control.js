import React from 'react'
import styled from 'styled-components'
import { ChromePicker } from 'react-color'

const Swatch = styled.div`
  padding: 5px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  display: inline-block;
  cursor: pointer;
`

const Color = styled.div`
  width: 66px;
  height: 14px;
  border-radius: 2px;
  background-color: ${(props) => props.color || '#ddd'};
`

const Popover = styled.div`
  position: absolute,
  z-Index: 2
`

const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`

export default class Control extends React.PureComponent {
  state = {
    display: false
  }

  onChangeComplete = (color) => {
    this.props.onChange(color.hex)
  }

  handleClose = () => this.setState({ display: !this.state.display })

  render() {
    const {
      forID,
      value,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle,
      field
    } = this.props

    return (
      <div
        id={forID}
        className={classNameWrapper}
        onFocus={setActiveStyle}
        onBlur={setInactiveStyle}
      >
        <Swatch onClick={this.handleClose}>
          <Color color={value || field.get('default')} />
        </Swatch>

        {this.state.display ? (
          <Popover>
            <Cover onClick={this.handleClose} />
            <ChromePicker
              color={value}
              onChangeComplete={this.onChangeComplete}
            />
          </Popover>
        ) : null}
      </div>
    )
  }
}
