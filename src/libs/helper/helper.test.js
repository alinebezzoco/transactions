import { addTransaction } from "./helper";

describe("addTransaction", () => {
  it("should add a transaction to the table", () => {
    const transactions = [
      {
        id: 1,
        description: "Supermercado",
        value: "-450.00",
        transaction: "Debit"
      },
      { id: 2, description: "Salário", value: "4500.00", transaction: "Credit" }
    ];

    const newTransaction = {
      id: 3,
      description: "Hambugueria",
      value: "-30.00",
      transaction: "Debit"
    };
    const expected = [
      {
        id: 3,
        description: "Hambugueria",
        value: "-30.00",
        transaction: "Debit"
      },
      {
        id: 1,
        description: "Supermercado",
        value: "-450.00",
        transaction: "Debit"
      },
      { id: 2, description: "Salário", value: "4500.00", transaction: "Credit" }
    ];
    const result = addTransaction(transactions, newTransaction);
    expect(result).toEqual(expected);
  });
});
