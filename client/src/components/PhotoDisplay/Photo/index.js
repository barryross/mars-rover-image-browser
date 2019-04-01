import React from 'react'
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react'

const Photo = ({image}) => {
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

Photo.propTypes = {
	image: PropTypes.object
};

export default Photo
