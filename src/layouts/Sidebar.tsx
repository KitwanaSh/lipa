import React from 'react';
import { Home, Send, History, Settings, CreditCard, Users } from 'lucide-react';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: Send, label: 'Send Money', href: '/send' },
    { icon: History, label: 'Transactions', href: '/transactions' },
    { icon: CreditCard, label: 'Cards', href: '/cards' },
    { icon: Users, label: 'Recipients', href: '/recipients' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  if (!open) return null;

  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-white dark:bg-background-dark border-r border-gray-200 dark:border-gray-800">
      <div className="flex-1 py-6 overflow-y-auto">
        <nav className="px-4 space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center px-4 py-3 text-primary dark:text-primary-light hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* User Profile Section */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
            <span className="text-white font-medium">JD</span>
          </div>
          <div>
            <p className="text-sm font-medium text-primary dark:text-primary-light">John Doe</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">john@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
