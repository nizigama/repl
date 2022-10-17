'use strict'

const type = { BREAKFAST: { name: "Breakfast", id: 1, maxAmount: 20 }, LUNCH: { name: "Lunch", id: 2, maxAmount: 50 }, DINNER: { name: "Dinner", id: 3, maxAmount: 100 }, CAR_DEAL: { name: "Car Deal", id: 4, maxAmount: 1000 } }

class Expense {
    constructor(type, amount) {
        this.type = type
        this.amount = amount
    }

    isMeal() {
        return [type.DINNER.id, type.BREAKFAST.id].includes(this.type)
    }

    exceededMax() {
        return this.amount > Object.values(type).find((v) => v.id === this.type).maxAmount
    }
}

class Report {
    #total = 0
    #mealExpenses = 0
    #expenses = []

    constructor(...expenses) {
        this.#expenses.push(...expenses)
    }

    generate() {

        console.info(`Today Travel Expenses ${this.currentDatetime()}`)

        this.#expenses.forEach((expense) => {

            if (expense.isMeal()) {
                this.#mealExpenses += expense.amount
            }

            let expenseName = Object.values(type).find((v) => v.id === expense.type).name

            const mealOverExpensesMarker = expense.exceededMax() ? "[over-expense!]" : "";

            console.info(expenseName + "\t" + expense.amount + "eur" + "\t" + mealOverExpensesMarker)
            this.#total += expense.amount
        })

        console.info("Meal expenses: " + this.#mealExpenses + "eur")
        console.info("Total expenses: " + this.#total + "eur")

    }

    currentDatetime() {
        return new Date().toISOString().slice(0, 10)
    }
}

module.exports = {
    type,
    Expense,
    Report
}

