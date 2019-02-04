//Action creators

export const buyProduct = product => {
	product.quantity--;
	return {
		type: 'BUY_PRODUCT',
		payload: product
	};
};

export const addCredit = amount => {
	return {
		type: 'ADD_MONEY',
		payload: parseInt(amount)
	};
};

export const returnChange = amount => {
	return {
		type: 'RETURN_CHANGE',
		payload: amount

	};
};

export const refillMachine = () => {
	return {
		type: 'REFILL_MACHINE'
	};
};

export const showError = message => {
	return {
		type: "SHOW_ERROR",
		payload: message
	};
};

export const hideError = message => {
	return {
		type: "HIDE_ERROR",
	};
};