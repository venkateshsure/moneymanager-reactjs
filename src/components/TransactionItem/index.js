// Write your code here

import './index.css'

const TransactionItem = prop => {
  const {each, deleteTransaction} = prop
  const {id, title, amount, type} = each

  const deleteIcon = () => {
    deleteTransaction(id)
  }

  return (
    <li className="list-transaction-item">
      <div className="trans-con">
        <p>{title}</p>
        <p>Rs {amount}</p>
        <p>{type}</p>
      </div>
      <button
        data-testid="delete"
        onClick={deleteIcon}
        type="button"
        className="trans-but"
      >
        <img
          className="trans-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
