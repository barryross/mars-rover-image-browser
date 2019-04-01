import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class Header extends Component {
  state = {}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
		const items = ["Curiosity", "Opportunity", "Spirit"]
    const { activeItem } = this.state
		
    return (
      <Menu inverted>
			{ items.map(item =>  
				<Menu.Item
						as={Link}
						to={item}
						name={item}
						active={activeItem === {item}}
						onClick={this.handleItemClick}
					>
						{item}
					</Menu.Item>
				)}
      </Menu>
    )
  }
}