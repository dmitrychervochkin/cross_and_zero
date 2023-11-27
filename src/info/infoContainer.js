import { InfoLayout } from "./infoLayout";
import PropTypes from 'prop-types';

export function InfoContainer({isDraw, isGameEnded, currentPlayer}){
	return(
		<InfoLayout
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
		/>
	)
}

InfoContainer.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string
}
