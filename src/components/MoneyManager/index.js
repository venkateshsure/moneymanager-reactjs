import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    initialList: [],
    title: '',
    amount: '',
    selectedOption: transactionTypeOptions[0].optionId,
  }

  title = event => {
    this.setState({title: event.target.value})
  }

  amount = event => {
    this.setState({amount: event.target.value})
  }

  select = event => {
    this.setState({selectedOption: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()

    const {title, amount, selectedOption} = this.state

    const text = transactionTypeOptions.find(
      each => each.optionId === selectedOption,
    )
    const {displayText} = text
    const newTrans = {
      id: v4(),
      title,
      amount: parseInt(amount),
      type: displayText,
    }
    this.setState(pre => ({
      initialList: [...pre.initialList, newTrans],
      title: '',
      amount: '',
      selectedOption: transactionTypeOptions[0].optionId,
    }))
  }

  deleteTransaction = id => {
    const {initialList} = this.state
    // console.log(initialList)

    const filteredTrans = initialList.filter(each => each.id !== id)
    // console.log(filteredTrans)

    this.setState({initialList: filteredTrans})
  }

  getIncome = () => {
    let income = 0
    const {initialList} = this.state
    initialList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        income += each.amount
      }
    })
    return income
  }

  getExpenses = () => {
    let expense = 0
    const {initialList} = this.state
    initialList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expense += each.amount
      }
    })
    return expense
  }

  getBalance = () => {
    let balance = 0
    // const {initialList} = this.state

    balance = this.getIncome() - this.getExpenses()
    return balance
  }

  render() {
    const {initialList, selectedOption, title, amount} = this.state
    console.log(initialList)
    console.log(title, amount)
    const getIncomeTrans = this.getIncome()
    const getExpensesTrans = this.getExpenses()
    const getBalanceTrans = this.getBalance()
    return (
      <div className="money-manager">
        <div className="money-manager-head">
          <div className="money-manager-body">
            <h1>hi,Richard</h1>
            <p>
              welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            getIncomeTrans={getIncomeTrans}
            getExpensesTrans={getExpensesTrans}
            getBalanceTrans={getBalanceTrans}
          />

          <div className="body">
            <form className="form-con" onSubmit={this.formSubmit}>
              <h1>Add Transaction</h1>
              <div className="text-con">
                <label htmlFor="title">TITLE</label>
                <input
                  placeholder="Title"
                  onChange={this.title}
                  id="title"
                  type="text"
                  value={title}
                />
              </div>
              <div className="text-con">
                <label htmlFor="amount">AMOUNT</label>
                <input
                  placeholder="Amount"
                  onChange={this.amount}
                  id="amount"
                  type="text"
                  value={amount}
                />
              </div>
              <div className="text-con">
                <label htmlFor="select">TYPE</label>
                <select
                  id="select"
                  value={selectedOption}
                  onChange={this.select}
                >
                  {transactionTypeOptions.map(each => (
                    <option key={each.optionId} value={each.optionId}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button className="but" type="submit">
                Add
              </button>
            </form>
            <div className="ul-upper-con">
              <h1>History</h1>
              <div className="bg-con">
                <ul className="ul-con">
                  <li className="list-money-manager">
                    <p>Title</p>
                    <p>Amount</p>
                    <p>Type</p>
                  </li>
                  {initialList.map(each => (
                    <TransactionItem
                      deleteTransaction={this.deleteTransaction}
                      key={each.id}
                      each={each}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
