import styles from './App.module.css';
import { LogoContainer } from './logo/logo';
import { FieldLayout } from './field/fieldLayout';
import { InfoContainer } from './info/infoContainer';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function App() {
	let [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	let [fields, setFields] = useState(['', '', '', '', '', '', '', '', '']);

	function whoIsWinner(field){
		const WIN_PATTERNS = [
			[0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
			[0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
			[0, 4, 8], [2, 4, 6], // Варианты побед по диагонали
		];

		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (field[a] &&	field[a] === field[b] && field[a] === field[c]) {
				return field[a];
			}
		}
		return null;
	}

	function handleClick(index) {
		const fieldsCopy = [...fields];

		if(!isGameEnded && fieldsCopy[index] === ''){
			fieldsCopy[index] = currentPlayer;
		setFields(fieldsCopy);
		}

		if(whoIsWinner(fieldsCopy)){
			setIsGameEnded(true);
			return null
		} else if (whoIsWinner(fieldsCopy) === null && fieldsCopy.indexOf('') === -1){
			setIsDraw(true);
		} else if (whoIsWinner(fieldsCopy) === null && fieldsCopy.indexOf('') !== -1){
			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		}


	}

	return (
		<div className={styles.App}>
			<LogoContainer />
			<InfoContainer
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
			<FieldLayout fields={fields} handleClick={handleClick} />
			<button
				onClick={() => {
					setCurrentPlayer('X');
					setIsGameEnded(false);
					setIsDraw(false);
					setFields(['', '', '', '', '', '', '', '', '']);
				}}
				className={styles.restart_btn}
			>
				Начать заново
			</button>
		</div>
	);
}

