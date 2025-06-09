import React from 'react';
import styles from './field.module.css';
import PropTypes from 'prop-types';

export function FieldContainer({ field, index, handleClick, winnerFields }) {
	return (
		<button
			style={{ backgroundColor: winnerFields.includes(index) ? 'yellow' : 'azure' }}
			className={styles.cell}
			onClick={() => {
				if (field === '') {
					handleClick(index);
				}
			}}
		>
			{field}
		</button>
	);
}

FieldContainer.propTypes = {
	field: PropTypes.string,
	index: PropTypes.number,
	handleClick: PropTypes.func,
};
