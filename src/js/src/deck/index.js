import Gen, { Query } from 'JS/gen';
import Deck from './deck';
import './style.scss';

export default Deck;

export function DeckComponent(deck) {
	const cards = deck.list().map((item, i) => {
		return Gen(
			'div',
			{
				id: `c${i}`,
				class: 'card',
				onclick: (e) => {
					deck.use(e.target.id[1]);
				},
			},
			[Gen('h2', {}, [item.name])]
		);
	});

	return Gen('div', { class: 'deck' }, [...cards]);
}