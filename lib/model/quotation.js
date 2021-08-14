exports.makeQuotation = () => ({items: new Map()})

exports.addQuotationItem = (quotation, item) => {
	let quotationWithItems = {...quotation};
	if (!quotationWithItems.items.has(item)) {
		quotationWithItems.items.set(item, 0);
	}
	let quantity = quotationWithItems.items.get(item);
	quantity += 1;
	quotationWithItems.items.set(item, quantity);
	return quotationWithItems;
};

exports.listQuotationItems = (quotation) => {
	return Array.from(quotation.items, ([item, quantity]) => ({item, quantity}));
}