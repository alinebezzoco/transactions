import React, { Component } from "react";
import PropTypes from "prop-types";
import FormContainer from "../../containers/Form/FormContainer";
import "./Table.css";
import "../../ui/Scrollbar.css";

export default class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transactionsList: [],
      total: 0,
      tableTitle: ["Descrição", "Valor (R$)"]
    };
  }

  fetchTransactions() {
    fetch("https://transactionmanager-1e50a.firebaseio.com/.json", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        response.json().then(data => {
          const transactions = Object.values(data.content).reverse();

          const totalBalance = transactions
            .map(res => parseInt(res.value))
            .reduce((total, data) => total + data)
            .toFixed(2)
            .replace(".", ",");

          this.setState({
            transactionsList: transactions,
            total: totalBalance
          });
        });
      })
      .catch(error => {
        console.error("Ocorreu um erro ao carregar as transações", error);
      });
  }

  componentDidUpdate() {
    this.fetchTransactions();
  }

  componentDidMount() {
    this.fetchTransactions();
  }

  render() {
    const { transactionsList, tableTitle, total } = this.state;
    return (
      <React.Fragment>
        <FormContainer />
        <div className="total-balance">
          <h4>Minhas Transações</h4>
          <p>Saldo Total: {`R$ ${total}`}</p>
        </div>
        <table>
          <thead>
            <tr>
              {tableTitle.map((title, i) => (
                <React.Fragment key={i}>
                  <th>{title}</th>
                </React.Fragment>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactionsList.map((transaction, index) => (
              <React.Fragment key={index}>
                <tr key={transaction}>
                  <td key={transaction.description}>
                    {transaction.description}
                    <small
                      className={
                        transaction.transaction === "Crédito"
                          ? "highlight-green"
                          : "highlight-red"
                      }
                    >
                      {transaction.transaction}
                    </small>
                  </td>
                  <td
                    key={transaction.value}
                    className={
                      transaction.transaction === "Crédito"
                        ? "highlight-green"
                        : "highlight-red"
                    }
                  >
                    {transaction.value.replace(".", ",")}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

Table.propTypes = {
  transactionsList: PropTypes.array,
  total: PropTypes.number,
  fetchTransactions: PropTypes.func,
  tableTitle: PropTypes.array
};
