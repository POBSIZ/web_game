import '../scss/app.scss';
import Gen, { Query } from 'JS/gen';

import Deck, { DeckComponent } from 'JS/src/deck';

import Card from 'JS/src/card';

const deck = new Deck();

deck.push(Card('first'));

Query('body', [
	Gen('main', {}, [DeckComponent(deck)])
]);
