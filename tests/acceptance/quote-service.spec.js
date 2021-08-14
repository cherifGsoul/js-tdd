const { expect } = require("chai");
const { makeCreateQuotation, makeAddQuotationItem, makeListQuotationItems } = require("../../lib/application/quotation-service");
const { saveQuotation, getQuotationById } = require("../../lib/Infrastructure/persistence/in-memory-quotations");

describe('Quote service', () => {
	beforeEach(() => {
		this.createQuotation = makeCreateQuotation(saveQuotation);
		this.addQuotationItem = makeAddQuotationItem(getQuotationById, saveQuotation);
		this.listQuotationItems = makeListQuotationItems(getQuotationById);
	});
	it('adds items to the quote', () => {
		// new quotation
		const quotationId = this.createQuotation();
		expect(quotationId).to.not.equal(undefined);
		expect(typeof quotationId).to.equal('string');
		
		// add item to the quotation 
		const item = 'Mouse';
		this.addQuotationItem({quotationId, item});
		const items = this.listQuotationItems(quotationId);
		expect(items).to.deep.equal([
			{
				item: 'Mouse',
				quantity: 1
			}
		]);
	});

	it('should aggregate item quantity', () => {
		const quotationId = this.createQuotation();
		this.addQuotationItem({quotationId, item: 'Mouse'});
		this.addQuotationItem({quotationId, item: 'Mouse'});
		this.addQuotationItem({quotationId, item: 'Keyboard'});
		const items = this.listQuotationItems(quotationId);
		expect(items).to.deep.equal([
			{
				item: 'Mouse',
				quantity: 2
			},
			{
				item: 'Keyboard',
				quantity: 1
			}
		]);
	});
});