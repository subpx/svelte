/* generated by Svelte vX.Y.Z */
import { Component, assign, createElement, detachNode, insertNode, noop, setStyle } from "svelte/shared.js";

function create_main_fragment(component, state) {
	var div;

	return {
		c: function create() {
			div = createElement("div");
			this.h();
		},

		h: function hydrate() {
			setStyle(div, "background", "url(data:image/png;base64," + state.data + ")");
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
		},

		p: function update(changed, state) {
			if (changed.data) {
				setStyle(div, "background", "url(data:image/png;base64," + state.data + ")");
			}
		},

		u: function unmount() {
			detachNode(div);
		},

		d: noop
	};
}

class SvelteComponent extends Component {
	constructor(options) {
		super(options);
		this._state = assign({}, options.data);

		this._fragment = create_main_fragment(this, this._state);

		if (options.target) {
			this._fragment.c();
			this._mount(options.target, options.anchor);
		}
	}
}
export default SvelteComponent;