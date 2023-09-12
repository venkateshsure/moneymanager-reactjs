// Write your code here

import './index.css'

const MoneyDetails = prop => {
  const {getIncomeTrans, getExpensesTrans, getBalanceTrans} = prop
  // const {amount, selectedOption} = initialList
  return (
    <div className="con">
      <div className="money-details-list1">
        <div className="money-details-con">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
          <div className="money-details-text">
            <p>Your Balance</p>
            <p data-testid="balanceAmount">Rs {getBalanceTrans}</p>
          </div>
        </div>
      </div>

      <div className="money-details-list2">
        <div className="money-details-con">
          <img
            className="img"
            alt="income"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          />
          <div className="money-details-text">
            <p>Your Income</p>
            <p data-testid="incomeAmount">Rs {getIncomeTrans}</p>
          </div>
        </div>
      </div>

      <div className="money-details-list3">
        <div className="money-details-con">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
          <div className="money-details-text">
            <p>Your Expenses</p>
            <p data-testid="expensesAmount">Rs {getExpensesTrans}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
