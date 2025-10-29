Balance Tracker React App

A simple React application to track your account balance and expenses. Users can add money to their account, log transactions with categories, and remove transactions. The app also supports a dark mode toggle.

## Features

Add Money: Add funds to your account balance.

Track Expenses: Log transactions with a category and amount.

Remove Transactions: Delete a transaction and update the balance.

Total Spent: View the total amount spent across all transactions.

Dark Mode: Toggle between light and dark themes for a better viewing experience.

## Demo: https://expense-tracker-rust-psi.vercel.app/ 

## Usage

Add Money:
Enter an amount in the "Add money" input field and click the "Add money into account" button. The balance will update accordingly.

Add a Transaction:

Enter a transaction description.

Enter the transaction amount.

Select a category from the dropdown.

Click "Add Transaction" to log it. The balance will decrease by the transaction amount.

Remove a Transaction:
Click the "Remove Transaction" button next to a transaction to delete it and restore the amount to your balance.

Toggle Dark Mode:
Click the moon/sun button at the top to switch between dark and light themes.

## Code Overview

## React Hooks:

useState for managing state (balance, transactions, inputs, dark mode).

useEffect to apply the dark mode class to the body element.

## Transaction Management:

Transactions are stored as objects with category, text, and amount.

Adding or removing transactions updates the balance accordingly.

## Total Spending:

Calculated using reduce on the transaction array.

## Technologies Used

React (with Hooks)

JavaScript

HTML & CSS

## Future Improvements

Persist data in localStorage or a backend database.

Add charts to visualize spending per category.

Improve UI/UX with better styling and animations.
