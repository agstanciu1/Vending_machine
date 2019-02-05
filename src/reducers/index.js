//Reducers
import { combineReducers } from 'redux';

const productsReducer = (state = [], action) => {
	switch(action.type) {
		case "BUY_PRODUCT" :
			return state.map(product => {
				if(product.code === action.payload.code) {
					return action.payload;
				};
				return product;	
			});
		case "REFILL_MACHINE" : 
			return [
						{code: '110', price: 10, name: 'KitKat', quantity: 5, image: 'https://i.ibb.co/41dKJ8r/kitkat.jpg'},
						{code: '111', price: 11, name: 'CocaCola', quantity: 5, image: 'https://i.ibb.co/Y8jfGRK/cola.jpg'},
						{code: '112', price: 12, name: 'Evian', quantity: 5, image: 'https://i.ibb.co/sPrrwyr/evian.jpg'},
						{code: '210', price: 13, name: 'Twix', quantity: 5, image: 'https://i.ibb.co/hmhPhMf/twix.jpg'},
						{code: '211', price: 14, name: 'Lays', quantity: 5, image: 'https://i.ibb.co/x1VLJyw/lays-onion.jpg'}, 
						{code: '212', price: 15, name: 'M&Ms', quantity: 5, image: 'https://i.ibb.co/fCbTKLM/m-ms.jpg'},
						{code: '310', price: 14, name: 'Fanta', quantity: 5, image: 'https://i.ibb.co/LrB9y4c/fanta.jpg'},
						{code: '311', price: 14, name: 'CocaCola', quantity: 5, image: 'https://i.ibb.co/Y8jfGRK/cola.jpg'},
						{code: '312', price: 14, name: 'Oreo', quantity: 5, image: 'https://i.ibb.co/VNgx6kR/oreo.jpg'}
					];
		default: 
			return state;

	}

};

const creditReducer = (state = 0, action) => {
	switch (action.type) {
		case 'BUY_PRODUCT':
			if(action.payload.quantity < 0) {
				return state;
			};
			return state - action.payload.price;
		case "ADD_MONEY" : 
			return state + action.payload;
		case "RETURN_CHANGE" :
			return state - action.payload;
		default: 
			return state;
	}
};

const boughtProductsReducer = (state = [], action) => {
	if(action.type === 'BUY_PRODUCT') {
		if(state.length === 3){
			state.shift();
		}
		return [...state, {name: action.payload.name, image: action.payload.image}];
	};

	return state;
};

const changeReducer = (state = 0 , action) => {
	switch(action.type) {
		case 'RETURN_CHANGE':
			return state+action.payload;
		case 'ADD_MONEY':
			if(state>=action.payload) {
				return state-action.payload;
			}else if (!state) {
				return state;
			}else {return state-state}
		default:
			return state;
	}
};

const errorReducer = (state = {}, action) => {
	switch(action.type) {
		case "SHOW_ERROR":
			return action.payload;
		case "HIDE_ERROR":
			return {};
		default: 
			return state;
	}
};



export default combineReducers({
	products: productsReducer,
	credit: creditReducer,
	boughtProducts: boughtProductsReducer,
	change: changeReducer,
	error: errorReducer
});
