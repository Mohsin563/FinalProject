import React from 'react';
import './ExpensiveBarChart.css';

const ExpensiveBarChart = ({ expenses }) => {
  if (!expenses.length) return <div className="bar-chart-empty">No data to display</div>;

  // Find the max absolute amount for scaling
  const maxAmount = Math.max(...expenses.map(e => Math.abs(Number(e.amount))));

  return (
    <div className="bar-chart-container">
      {expenses.map((expense, idx) => (
        <div className="bar-chart-row" key={idx}>
          <span className="bar-label">{expense.text}</span>
          <div
            className="bar"
            style={{
              width: `${(Math.abs(expense.amount) / maxAmount) * 80}%`,
              background: expense.amount > 0 ? '#27ae60' : '#c0392b'
            }}
          >
            <span className="bar-value">PKR {expense.amount}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpensiveBarChart;