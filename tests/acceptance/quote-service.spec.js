const { expect } = require("chai");

const quotes = new Map();

const createQuote = () => {
	const id = quotes.size + 1;
	const quote = {
		id: '' + id
	};
	quotes.set(quote.id, quote);
	return quote.id;
};

const addQuoteItem = (quoteId, item) => {
	const quote = quotes.get(quoteId);
	quote.items = quote.items && quote.items instanceof Map ? quote.items : new Map();
	if (!quote.items.has(item)) {
		quote.items.set(item, 0);
	}
	let quantity = quote.items.get(item);
	quantity += 1;
	quote.items.set(item, quantity);
};

const listQuoteItems = (quoteId) => {
	const quote = quotes.get(quoteId);
	return Array.from(quote.items, ([item, quantity]) => ({item, quantity}));
};


describe('Quote service', () => {
	it('adds items to the quote', () => {
		const quoteId = createQuote();
		expect(quoteId).to.not.equal(undefined);
		expect(typeof quoteId).to.equal('string');
		addQuoteItem(quoteId, 'Mouse');
		const items = listQuoteItems(quoteId);
		expect(items).to.deep.equal([
			{
				item: 'Mouse',
				quantity: 1
			}
		]);
	});

	it('should aggregate item quantity', () => {
		const quoteId = createQuote();
		addQuoteItem(quoteId, 'Mouse');
		addQuoteItem(quoteId, 'Mouse');
		addQuoteItem(quoteId, 'Keyboard');
		const items = listQuoteItems(quoteId);
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