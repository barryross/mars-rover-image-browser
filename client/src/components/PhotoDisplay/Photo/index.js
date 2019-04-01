import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default ({image}) => {
	return (
		<Card>
				<Image src={`${image.img_src}`} alt={`Image from Mars rover ${image.rover.name}`}/>
				<Card.Content>
					<Card.Meta>Taken on Sol {image.sol} ({image.earth_date})</Card.Meta>
				</Card.Content>
				<Card.Content extra>
					<Card.Meta>
						<Icon name='camera'/>{image.camera.name} || {image.camera.full_name}
					</Card.Meta>
				</Card.Content>
		</Card>
	)
}