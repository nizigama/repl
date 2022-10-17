const { expect } = require("@jest/globals")
const { Expense, Report, type } = require("./sut")

describe('expense features', () => {
    test('that a meal expense can be marked as a meal', () => {
        const mealExp = new Expense(type.BREAKFAST.id, 100)
        const nonMealExp = new Expense(type.CAR_DEAL.id, 8100)
        expect(mealExp.isMeal()).toBe(true)
        expect(nonMealExp.isMeal()).toBe(false)
    })

    test('that an expense can verify if it exceeded the max amount ofits type', () => {
        const exceedingExp = new Expense(type.BREAKFAST.id, 120)
        const nonExceedingExp = new Expense(type.CAR_DEAL.id, 500)
        expect(exceedingExp.exceededMax()).toBe(true)
        expect(nonExceedingExp.exceededMax()).toBe(false)
    })
})


describe('reporting features', () => {
    test('that a report can get the current date', () => {
        const report = new Report([])
        expect(report.currentDatetime()).toBe(new Date().toISOString().slice(0, 10))
    })
    test('that a report can be generated', () => {
        const spy = jest.spyOn(global.console, 'info');

        const report = new Report(
            new Expense(type.BREAKFAST.id, 15.20),
            new Expense(type.BREAKFAST.id, 28.10),
            new Expense(type.LUNCH.id, 10.20),
            new Expense(type.DINNER.id, 16.00),
            new Expense(type.DINNER.id, 120.20)
        )


        report.generate()

        expect(global.console.info).toHaveBeenNthCalledWith(
            1, 'Today Travel Expenses 2022-10-17'
        );
        expect(global.console.info).toHaveBeenNthCalledWith(2,
            'Breakfast\t15.2eur\t');
        expect(global.console.info).toHaveBeenNthCalledWith(3,
            "Breakfast\t28.1eur\t[over-expense!]");
        expect(global.console.info).toHaveBeenNthCalledWith(4,
            "Lunch\t10.2eur\t");
        expect(global.console.info).toHaveBeenNthCalledWith(5,
            "Dinner\t16eur\t");
        expect(global.console.info).toHaveBeenNthCalledWith(6,
            "Dinner\t120.2eur\t[over-expense!]");
        expect(global.console.info).toHaveBeenNthCalledWith(7,
            "Meal expenses: 179.5eur");
        expect(global.console.info).toHaveBeenNthCalledWith(8,
            "Total expenses: 189.7eur");

        spy.mockRestore();

    })
})
