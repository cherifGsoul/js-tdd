const quotations = new Map();

exports.saveQuotation = (quotation) => {
	let id = quotations.size
	id = '' + id;
	let persistedQuotation = {...quotation, id};
	quotations.set(id, persistedQuotation);
	return id;
}

exports.getQuotationById = (id) => {
	return quotations.get(id);
}