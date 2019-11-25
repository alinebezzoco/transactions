import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import "./FormContainer.css";

export default class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: {
        description: "",
        value: 0,
        transaction: ""
      },
      total: 0,
      transactionOptions: ["Débito", "Crédito"]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.handleDescription = this.handleDescription.bind(this);
    this.handleValue = this.handleValue.bind(this);

    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let newTransactionData = this.state.transactions;
    if(newTransactionData.transaction === 'Débito') { 
      newTransactionData.value = -Math.abs(newTransactionData.value);
    }

    newTransactionData.value = parseInt(newTransactionData.value).toFixed(2);
    
    fetch("https://transactionmanager-1e50a.firebaseio.com/content/.json", {
      method: "POST",
      body: JSON.stringify(newTransactionData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(() => {
        alert("Transação cadastrada com sucesso");
      })
      .catch(error => {
        console.error(
          "Ocorreu um erro ao salvar a transação. Tente novamente.",
          error
        );
      });

    this.handleClear(e);
  }

  handleClear(e) {
    e.preventDefault();
    this.setState({
      transactions: {
        description: "",
        value: 0,
        transaction: ""
      }
    });
  }

  handleDescription(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      transactions: {
        ...prevState.transactions,
        description: value
      }
    }));
  }

  handleValue(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      transactions: {
        ...prevState.transactions,
        value: value
      }
    }));
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      transactions: {
        ...prevState.transactions,
        [name]: value
      }
    }));
  }

  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <Input
          type={"text"}
          title={"Descrição"}
          value={this.state.transactions.description}
          placeholder={"Ex.: Salário"}
          handleChange={this.handleDescription}
          required={true}
        />
        <Input
          type={"number"}
          title={"Valor"}
          value={this.state.transactions.value}
          placeholder={"Ex.: 100.00"}
          handleChange={this.handleValue}
          required={true}
        />
        <Select
          title={"Tipo de transação"}
          name={"transaction"}
          options={this.state.transactionOptions}
          value={this.state.transactions.transaction}
          placeholder={"Selecionar..."}
          handleChange={this.handleInput}
          required={true}
        />
        <div className="actions">
          <Button
            action={this.handleSubmit}
            type={"primary"}
            title={"Adicionar"}
            disabled={
              !this.state.transactions.description ||
              !this.state.transactions.value ||
              !this.state.transactions.transaction
            }
          />
          <Button
            action={this.handleClear}
            type={"secondary"}
            title={"Limpar"}
          />
        </div>
      </form>
    );
  }
}

FormContainer.defaultProps = {
  transactions: {
    description: "",
    value: 0,
    transaction: ""
  },
  handleSubmit: () => {},
  handleInput: () => {},
  handleDescription: () => {},
  handleValue: () => {}
};

FormContainer.propTypes = {
  transactions: PropTypes.shape({
    description: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    transaction: PropTypes.string.isRequired
  }),
  handleSubmit: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleDescription: PropTypes.func.isRequired,
  handleValue: PropTypes.func.isRequired
};
