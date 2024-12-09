import { Menu, X, BrainCircuit, Sun, Moon, Palette } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const themeIcons = {
    light: <Sun className="h-5 w-5" />,
    dark: <Moon className="h-5 w-5" />,
    colored: <Palette className="h-5 w-5" />
  };

  const nextTheme: { [key in typeof theme]: typeof theme } = {
    light: 'dark',
    dark: 'colored',
    colored: 'light'
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 colored:bg-orange-50/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800 colored:border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <BrainCircuit className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white colored:text-orange-900">BEIGELAKE AI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#tools" className="text-gray-600 dark:text-gray-300 colored:text-orange-700 hover:text-orange-500">Tools</a>
            <a href="#store" className="text-gray-600 dark:text-gray-300 colored:text-orange-700 hover:text-orange-500">Store</a>
            <a href="#pricing" className="text-gray-600 dark:text-gray-300 colored:text-orange-700 hover:text-orange-500">Pricing</a>
            <button 
              onClick={() => setTheme(nextTheme[theme])}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 colored:hover:bg-orange-100"
              aria-label="Toggle theme"
            >
              {themeIcons[theme]}
            </button>
            <button className="text-gray-600 dark:text-gray-300 colored:text-orange-700 hover:text-orange-500">Sign In</button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <a href="#tools" className="text-gray-600 dark:text-gray-300 colored:text-orange-700 hover:text-orange-500">Tools</a>
              <a href="#store" className="text-gray-600 dark:text-gray-300 colored:text-orange-700 hover:text-orange-500">Store</a>
              <a href="#pricing" className="text-gray-600 dark:text-gray-300 colored:text-orange-700 hover:text-orange-500">Pricing</a>
              <button 
                onClick={() => setTheme(nextTheme[theme])}
                className="flex items-center text-gray-600 dark:text-gray-300 colored:text-orange-700 hover:text-orange-500"
              >
                {themeIcons[theme]}
                <span className="ml-2">Change Theme</span>
              </button>
              <button className="text-gray-600 dark:text-gray-300 colored:text-orange-700 hover:text-orange-500">Sign In</button>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}