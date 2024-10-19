'use client';

import Header from './components/Header';
import TransactionComponent from './components/TransactionComponent';
import EmptyState from './components/EmptyState'; // Import the EmptyState component
import { useAccount } from 'wagmi';

export default function App() {
  const { address } = useAccount();

  return (
    <div className="flex flex-col bg-background font-sans h-screen">
      <Header />
      <div className="flex flex-1 items-center justify-center">
        {address ? (
          <TransactionComponent address={address}/>
        ) : (
          <EmptyState /> // Render EmptyState if address is not available
        )}
      </div>
    </div>
  );
}
