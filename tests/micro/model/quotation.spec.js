const { expect } = require("chai");
const { makeQuotation, addQuotationItem, listQuotationItems } = require("../../../lib/model/quotation");

describe('Quotation model', () => {
	it('should add items', () => {
		let quotation = makeQuotation()
		quotation.id = '1';
		quotation = addQuotationItem(quotation, 'mouse');
		expect(listQuotationItems(quotation)).to.deep.eq([{item: 'mouse', quantity: 1}])
	});

	it('should aggregate items quantity', () => {
		let quotation = makeQuotation()
		quotation.id = '1';
		quotation = addQuotationItem(quotation, 'mouse');
		quotation = addQuotationItem(quotation, 'mouse');
		expect(listQuotationItems(quotation)).to.deep.eq([{item: 'mouse', quantity: 2}])
	})
});