import '../scss/app.scss';
import Gen, { Query } from 'JS/gen';

Query('body', [
	Gen(
		'main',
		{ 
			id: 'content', 
			onclick: (e) => {console.log(e);},
			style: { 
				color: 'red', 
				transition: '.3s', 
				cursor: 'pointer',
				hover: { 
					color: 'blue' 
				} 
			} 
		},
		['TEXT']
	),
]);