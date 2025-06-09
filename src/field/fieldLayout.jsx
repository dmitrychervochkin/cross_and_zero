import styles from './field.module.css';
import React from 'react';
import { FieldContainer } from './fieldContainer';
import PropTypes from 'prop-types';

export function FieldLayout({ fields, handleClick, winnerFields }) {
	return (
		<div className={styles.container}>
			{fields.map((field, index) => (
				<FieldContainer
					key={index}
					index={index}
					field={field}
					handleClick={handleClick}
					winnerFields={winnerFields}
				/>
			))}
		</div>
	);
}

FieldLayout.propTypes = {
	fields: PropTypes.array.isRequired,
	handleClick: PropTypes.func,
};
