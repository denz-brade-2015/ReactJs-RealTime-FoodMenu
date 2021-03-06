/**
 * Store Picker
 * @type {[Components]}
 */

import React from 'react';
import { History } from 'react-router';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

import h from '../helpers';

// binds the 'this' to directly to the entire class its placed above
@autobind
class StorePicker extends React.Component {

	goToStore(event) {
		console.log(this);
		event.preventDefault();
		// get the data from input
		var storeId = this.refs.storeId.value;

		// transition from <StorePicker /> to <App />
		this.history.pushState(null, '/store/' + storeId);
	}

	render() {
		return (
			<form className="store-selector" onSubmit={ this.goToStore }> {/* 'this' refers to StorePicker */}
				<h2>Please Enter a Store</h2>
				<input type="text" ref="storeId" defaultValue={ h.getFunName()} required />
				<input type="Submit" />
			</form>
		)
	}
}

// Es6 Requires you to add mixins via 'react-mixin' (class, Name of Mixin)
reactMixin.onClass(StorePicker, History);

export default StorePicker;