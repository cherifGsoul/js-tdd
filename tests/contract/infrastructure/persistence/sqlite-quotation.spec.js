const { saveQuotation, getQuotationById } = require('../../../../lib/Infrastructure/persistence/sqlite-quotations');
const { makeQuotationsContractTest } = require('../../../micro/model/quotations-contract');
describe('SQLite quotations', () => {
	makeQuotationsContractTest(saveQuotation, getQuotationById);
});