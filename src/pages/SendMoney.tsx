import React, { useState } from 'react';
import { Search, ChevronDown, CreditCard } from 'lucide-react';

const SendMoney: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const currencies = ['USD', 'EUR', 'GBP', 'KES', 'UGX', 'TZS'];
  const recentRecipients = [
    { id: 1, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 2, name: 'John Doe', email: 'john@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment submission
    console.log({ amount, recipient, selectedCurrency });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Send Money Form */}
      <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
        <h2 className="text-2xl font-bold text-primary dark:text-primary-light mb-6">Send Money</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Amount Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-primary dark:text-primary-light">
              Amount
            </label>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 text-primary dark:text-primary-light focus:ring-2 focus:ring-primary/20 outline-none"
                placeholder="0.00"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <select
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                  className="h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 dark:text-gray-400 sm:text-sm rounded-md focus:ring-2 focus:ring-primary/20 outline-none"
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Recipient Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-primary dark:text-primary-light">
              Recipient
            </label>
            <div className="relative">
              <input
                type="email"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 text-primary dark:text-primary-light focus:ring-2 focus:ring-primary/20 outline-none"
                placeholder="Email or phone number"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-primary dark:text-primary-light">
              Payment Method
            </label>
            <div className="relative">
              <button
                type="button"
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 text-primary dark:text-primary-light hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-5 w-5 text-primary dark:text-primary-light" />
                  <span>•••• 4242</span>
                </div>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full btn-primary py-3"
          >
            Send Money
          </button>
        </form>
      </div>

      {/* Recent Recipients */}
      <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
        <h3 className="text-lg font-semibold text-primary dark:text-primary-light mb-4">
          Recent Recipients
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {recentRecipients.map((recipient) => (
            <button
              key={recipient.id}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setRecipient(recipient.email)}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-medium">
                  {recipient.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="text-left">
                <p className="font-medium text-primary dark:text-primary-light">
                  {recipient.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {recipient.email}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
