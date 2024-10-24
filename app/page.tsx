'use client';

import Header from './components/Header';
import TransactionComponent from './components/TransactionComponent';
import { useAccount } from 'wagmi';


export default function App() {
  const { address } = useAccount();
  return (
    <div className="flex flex-col bg-background font-sans h-screen">
      <Header />
      <div className="flex flex-1 items-center justify-center">
        <TransactionComponent address={address} />
      </div>
    </div>
  );
}
