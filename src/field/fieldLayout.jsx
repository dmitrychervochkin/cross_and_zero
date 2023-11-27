import styles from './field.module.css';
import React from 'react';
import { FieldContainer } from './fieldContainer';
import PropTypes from 'prop-types';

export function FieldLayout({ fields, handleClick }) {

	return (
		<div className={styles.container}>
			{fields.map((field, index) => (
				<FieldContainer
					key={index}
					index={index}
					field={field}
					handleClick={handleClick}
				/>
			))}
		</div>
	);
}

FieldLayout.propTypes ={
	fields: PropTypes.array.isRequired,
	handleClick: PropTypes.func
}
