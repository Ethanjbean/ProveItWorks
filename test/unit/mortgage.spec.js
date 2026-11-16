const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/mortgage');

describe('Mortgage', () => {
    let mortgage = null;

    beforeEach(() => {
        mortgage = new Mortgage(200000, 5, 30, 12);
    });
    it('should create a Mortgage instance', () => {
        expect(mortgage).to.be.an.instanceOf(Mortgage);
    });
    it('should have a monthlyPayment function', () => {
        expect(mortgage.monthlyPayment).to.be.a('function');
    });
    it('should return a value when monthlyPayment is called with valid inputs', () => {
        expect(mortgage.monthlyPayment()).to.exist;
    });
    it('should calculate the correct monthly payment for known values', () => {
        expect(mortgage.monthlyPayment()).to.equal('1073.64');
    });

    
});