import React from 'react';
import { Brain } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">BrainWave</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/signin" variant="ghost">Sign In</Link>
            <Link href="/signup" variant="primary">Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
  );
}