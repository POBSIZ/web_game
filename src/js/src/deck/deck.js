import Gen, { Query } from 'JS/gen';

export default class Deck {
	#list;
	#elem;
	constructor(list, elem) {
		this.#list = list || [];
		this.#elem = elem;
	}

	list() {
		return this.#list;
	}

	push(card) {
		this.#list.push(card);
	}

	get(idx) {
		return this.#list[idx];
	}

	use(idx) {
		const card = this.#list[idx];
		this.#list.splice(idx, 1);

		const queryTag = `#c${idx}`;
		Query(queryTag).remove();
		
		return card;
	}

	reset() {
		this.#list.splice(0, this.#list.length);
	}
}