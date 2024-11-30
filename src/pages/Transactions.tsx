import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight, Search, Filter } from 'lucide-react';

const Transactions: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock transaction data
  const transactions = [
    {
      id: 1,
      type: 'sent',
      amount: 500,
      currency: 'USD',
      recipient: 'Jane Smith',
      date: '2024-01-15',
      status: 'completed',
      description: 'Monthly rent payment'
    },
    {
      id: 2,
      type: 'received',
      amount: 1200,
      currency: 'EUR',
      recipient: 'John Doe',
      date: '2024-01-14',
      status: 'completed',
      description: 'Freelance work payment'
    },
    {
      id: 3,
      type: 'sent',
      amount: 300,
      currency: 'GBP',
      recipient: 'Alice Johnson',
      date: '2024-01-13',
      status: 'pending',
      description: 'Shopping payment'
    },
    // Add more transactions as needed
  ];

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = 
      transaction.recipient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = 
      selectedFilter === 'all' || 
      selectedFilter === transaction.type;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-primary dark:text-primary-light">
          Transactions
        </h2>
        
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search transactions..."
              className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 text-primary dark:text-primary-light focus:ring-2 focus:ring-primary/20 outline-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>

          {/* Filter Dropdown */}
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 text-primary dark:text-primary-light focus:ring-2 focus:ring-primary/20 outline-none"
          >
            <option value="all">All Transactions</option>
            <option value="sent">Money Sent</option>
            <option value="received">Money Received</option>
          </select>
        </div>
      </div>

      {/* Transactions List */}
      <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="px-6 py-4 text-left text-sm font-semibold text-primary dark:text-primary-light">Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-primary dark:text-primary-light">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-primary dark:text-primary-light">Recipient</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-primary dark:text-primary-light">Description</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-primary dark:text-primary-light">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-primary dark:text-primary-light">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {filteredTransactions.map((transaction) => (
                <tr 
                  key={transaction.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className={`p-2 rounded-full ${
                        transaction.type === 'sent' 
                          ? 'bg-red-100 dark:bg-red-900/20' 
                          : 'bg-green-100 dark:bg-green-900/20'
                      }`}>
                        {transaction.type === 'sent' ? (
                          <ArrowUpRight className="h-4 w-4 text-red-600 dark:text-red-400" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 text-green-600 dark:text-green-400" />
                        )}
                      </div>
                      <span className="text-sm capitalize text-primary dark:text-primary-light">
                        {transaction.type}
                      </span>
                    </div>
                  </td>
                  <td className={`px-6 py-4 text-sm font-medium ${
                    transaction.type === 'sent' 
                      ? 'text-red-600 dark:text-red-400' 
                      : 'text-green-600 dark:text-green-400'
                  }`}>
                    {transaction.type === 'sent' ? '-' : '+'} {transaction.amount} {transaction.currency}
                  </td>
                  <td className="px-6 py-4 text-sm text-primary dark:text-primary-light">
                    {transaction.recipient}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {transaction.description}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      transaction.status === 'completed'
                        ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400'
                        : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
