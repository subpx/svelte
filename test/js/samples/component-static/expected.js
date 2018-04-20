/* generated by Svelte vX.Y.Z */
import { Component, assign, callAll, noop } from "svelte/shared.js";

var Nested = window.Nested;

function create_main_fragment(component, state) {

	var nested_initial_data = { foo: "bar" };
	var nested = new Nested({
		root: component.root,
		data: nested_initial_data
	});

	return {
		c: function create() {
			nested._fragment.c();
		},

		m: function mount(target, anchor) {
			nested._mount(target, anchor);
		},

		p: noop,

		u: function unmount() {
			nested._unmount();
		},

		d: function destroy() {
			nested.destroy(false);
		}
	};
}

class SvelteComponent extends Component {
	constructor(options) {
		super(options);
		this._state = assign({}, options.data);

		if (!options.root) {
			this._oncreate = [];
			this._beforecreate = [];
			this._aftercreate = [];
		}

		this._fragment = create_main_fragment(this, this._state);

		if (options.target) {
			this._fragment.c();
			this._mount(options.target, options.anchor);

			this._lock = true;
			callAll(this._beforecreate);
			callAll(this._oncreate);
			callAll(this._aftercreate);
			this._lock = false;
		}
	}
}
export default SvelteComponent;