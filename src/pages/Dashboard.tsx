import React from 'react';
import { CreditCard, ArrowUpRight, ArrowDownRight, DollarSign, LineChart } from 'lucide-react';
import AnimatedContainer from '../components/ui/animated-container';

const Dashboard: React.FC = () => {
  // Mock data for demonstration
  const recentTransactions = [
    { id: 1, type: 'sent', amount: 500, recipient: 'Jane Smith', date: '2024-01-15', status: 'completed' },
    { id: 2, type: 'received', amount: 1200, recipient: 'John Doe', date: '2024-01-14', status: 'completed' },
    { id: 3, type: 'sent', amount: 300, recipient: 'Alice Johnson', date: '2024-01-13', status: 'pending' },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Stats Overview */}
      <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-hero dark:bg-gradient-primary p-6 rounded-xl shadow-sm border border-gray-200/50 dark:border-gray-800/50 transition-all duration-300 hover:scale-102">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Balance</p>
              <h3 className="text-2xl font-bold text-primary dark:text-primary-light mt-1">$12,345</h3>
            </div>
            <div className="bg-white/20 dark:bg-white/10 p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-primary dark:text-primary-light" />
            </div>
          </div>
        </div>

        <AnimatedContainer delay={100} className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:scale-102">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Sent</p>
              <div className="flex items-center gap-2 mt-1">
                <h3 className="text-2xl font-bold">$8,400</h3>
                <span className="text-red-500 text-sm flex items-center">
                  <ArrowUpRight className="h-4 w-4" />
                  2.5%
                </span>
              </div>
            </div>
            <div className="bg-red-50 dark:bg-red-500/10 p-3 rounded-lg">
              <ArrowUpRight className="h-6 w-6 text-red-500" />
            </div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer delay={200} className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:scale-102">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Received</p>
              <div className="flex items-center gap-2 mt-1">
                <h3 className="text-2xl font-bold">$4,200</h3>
                <span className="text-green-500 text-sm flex items-center">
                  <ArrowDownRight className="h-4 w-4" />
                  3.2%
                </span>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-500/10 p-3 rounded-lg">
              <ArrowDownRight className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer delay={300} className="bg-gradient-secondary p-6 rounded-xl shadow-sm border border-gray-200/50 dark:border-gray-800/50 transition-all duration-300 hover:scale-102">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Active Cards</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">2</h3>
            </div>
            <div className="bg-white/20 dark:bg-white/10 p-3 rounded-lg">
              <CreditCard className="h-6 w-6 text-gray-900 dark:text-white" />
            </div>
          </div>
        </AnimatedContainer>
      </AnimatedContainer>

      {/* Recent Transactions */}
      <AnimatedContainer delay={400} className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            {recentTransactions.map((transaction, index) => (
              <AnimatedContainer 
                key={transaction.id} 
                delay={500 + index * 100}
                className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-full ${
                    transaction.type === 'sent' 
                      ? 'bg-red-100 dark:bg-red-500/10 text-red-500' 
                      : 'bg-green-100 dark:bg-green-500/10 text-green-500'
                  }`}>
                    {transaction.type === 'sent' ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                  </div>
                  <div>
                    <p className="font-medium">{transaction.recipient}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${
                    transaction.type === 'sent' ? 'text-red-500' : 'text-green-500'
                  }`}>
                    {transaction.type === 'sent' ? '-' : '+'}${transaction.amount}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{transaction.status}</p>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </AnimatedContainer>
    </div>
  );
};

export default Dashboard;
