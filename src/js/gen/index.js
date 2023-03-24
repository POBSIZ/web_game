export default function Gen(tag, props, style, child) {
	const TAG = document.createElement(tag);
	TAG.id = props.id;
	TAG.className = props.className;
	TAG.style = {...style};
	TAG.appendChild(child);
	return TAG;
}