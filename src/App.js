import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

export function App() {
	// Декларативный стиль
	return createElement(
		'div',
		{className: 'App'},
		// Императивный стиль
		createElement (
			'header',
			{className: 'App-header'},
			// Императивный стиль
			createElement (
				'img',
				{src: logo, className: 'App-logo', alt: "logo"}
			),
			// Императивный стиль
			createElement (
				'p',
				null,
				'Edit ',
				// Императивный стиль
				createElement ('code', null, 'src/App.js'),
				' and save to reload.'
			),
			// Императивный стиль
			createElement (
				'a',
				{className: "App-link", href: 'https://reactjs.org',
				target: '_blank', rel: 'noopener noreferrer'},
				'Learn React'
			),
			createElement ('p', null, `${new Date().getFullYear()}`)
		)
	);
}


