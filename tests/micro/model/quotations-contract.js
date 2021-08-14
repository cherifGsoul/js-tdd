const {expect} = require('chai');

exports.makeQuotationsContractTest = (saveQuotation, getQuotationById) => {
	beforeEach(() => {
		this.saveQuotation = saveQuotation;
		this.getQuotationById = getQuotationById;
	});
	afterEach(() => {
		this.saveQuotation = null;
		this.getQuotationById = null;
	});
	it('finds a saved quotation', () => {
		const quotation = {
			items: []
		};
		const id = this.saveQuotation(quotation);
		const persistedQuotation = this.getQuotationById(id);
		expect(persistedQuotation).to.deep.equal({
			id,
			items: []
		});
	});

	it('identifies a quotation', () => {
		const quotation = {
			items: []
		};
		const id = this.saveQuotation(quotation);
		expect(id).to.not.be.null;
		expect(id).to.not.be.undefined;
		const persistedQuotation = this.getQuotationById(id);
		expect(persistedQuotation.id).to.not.be.undefined;
	});
}