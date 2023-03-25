export default function Gen(tagName, attributes, children) {
	// create element
	const element = document.createElement(tagName);

	// set attributes
	for (let key in attributes) {
		if (key !== 'style' && key !== 'conclick') {
			element.setAttribute(key, attributes[key]);
		}
		if (key === 'onclick') element.onclick = attributes[key];
	}
	
	// set style
	for (let property in attributes.style) {
		if (property !== 'hover') element.style[property] = attributes.style[property];
	}

	// hover
	element.onmouseover = () => {
		for (let property in attributes.style.hover) {
			element.style[property] = attributes.style.hover[property];
		}
	};
	
	// hover out
	element.onmouseout = () => {
		for (let property in attributes.style) {
			if (property !== 'hover') element.style[property] = attributes.style[property];
		}
	};

	// append child
	if (children instanceof Array) {
		for (let i = 0; i < children.length; i++) {
			if (typeof children[i] === 'string') {
				// if type === string
				element.appendChild(document.createTextNode(children[i]));
			} else {
				// if type !== string
				element.appendChild(children[i]);
			}
		}
	} else if (typeof children === 'string') {
		// if children !== Array && type === string
		element.appendChild(document.createTextNode(children));
	}

	return element;
}

export function Query(queryTag, children) {
	const element = document.querySelector(queryTag);

	if (children instanceof Array) {
		for (let i = 0; i < children.length; i++) {
			if (typeof children[i] === 'string') {
				element.appendChild(document.createTextNode(children[i]));
			} else {
				element.appendChild(children[i]);
			}
		}
	} else if (typeof children === 'string') {
		element.appendChild(document.createTextNode(children));
	}

	return element;
}