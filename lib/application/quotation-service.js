const { addQuotationItem, makeQuotation } = require("../model/quotation");


exports.makeCreateQuotation = (saveQuotation) => {
	if (typeof saveQuotation !== 'function') {
		throw new TypeError('saveQuotation must be a function');
	}
	return () => {
		const quotation = makeQuotation();
		return saveQuotation(quotation);
	}
};

exports.makeAddQuotationItem = (getQuotationById, saveQuotation) => {
	if (typeof getQuotationById !== 'function') {
		throw new TypeError('getQuotationById must be a function');
	}
	return ({quotationId, item}) => {
		let quotation = getQuotationById(quotationId);
		quotation = addQuotationItem(quotation, item);
		saveQuotation(quotation);
	}
};

exports.makeListQuotationItems = (getQuotationById) => {
	return (quoteId) => {
		const quotation = getQuotationById(quoteId);
		return Array.from(quotation.items, ([item, quantity]) => ({item, quantity}));
	}
};