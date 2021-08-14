const { saveQuotation, getQuotationById } = require('../../../../lib/Infrastructure/persistence/in-memory-quotations');
const { makeQuotationsContractTest } = require('../../../micro/model/quotations-contract');
describe('In memory quotation', () => {
	makeQuotationsContractTest(saveQuotation, getQuotationById);
});