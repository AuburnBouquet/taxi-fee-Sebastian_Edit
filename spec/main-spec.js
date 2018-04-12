const main = require('../main/main.js');

describe('taxi fee', function () {

    it('x < 2km', function () {
        let expected_costs = '总计：6 元';
        let result = main(1, 0);

        expect(result).toEqual(expected_costs);
    });

    it('2km<= x < 8km', function () {
        let expected_costs = '总计：9 元';
        let result = main(6, 0);

        expect(result).toEqual(expected_costs);
    });

    it('x >= 8km', function () {
        let expected_costs = '总计：15 元';
        let result = main(11.1, 0);

        expect(result).toEqual(expected_costs);
    });

    it('x >= 8km and wait 3 mins', function () {
        let expected_costs = '总计：15 元';
        let result = main(11.1, 3);

        expect(result).toEqual(expected_costs);
    });
});
