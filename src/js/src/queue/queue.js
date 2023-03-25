export default class Queue{
	#list 
	constructor(){
		this.#list = []

	}
	enqueue(card){
		this.list.push(card)
	}
	dequeue(){
		this.card = this.list[0]		
	}
	get_card(index){
		return this.list[index]
	}
	get_card_list(){
		return this.list
	}
	
}