import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item
          name='rovers'
          active={activeItem === 'rovers'}
          onClick={this.handleItemClick}
        >
          Rovers
        </Menu.Item>

        <Menu.Item name='reviews' active={activeItem === 'about'} onClick={this.handleItemClick}>
          About
        </Menu.Item>
      </Menu>
    )
  }
}