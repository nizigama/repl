const {Expense, Report, type} = require("./sut")

const expenses = () => [
    new Expense(type.BREAKFAST.id, 15.20),
    new Expense(type.BREAKFAST.id, 28.10),
    new Expense(type.LUNCH.id, 10.20),
    new Expense(type.DINNER.id, 16.00),
    new Expense(type.DINNER.id, 120.20),
]

const report = new Report(...expenses())
report.generate()