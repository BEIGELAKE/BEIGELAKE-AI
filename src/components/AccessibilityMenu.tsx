import { useState } from 'react';
import { Settings, Sun, Moon, Type, ZoomIn, ZoomOut } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [fontSize, setFontSize] = useState(100);

  const adjustFontSize = (increment: boolean) => {
    setFontSize(prev => {
      const newSize = increment ? prev + 10 : prev - 10;
      document.documentElement.style.fontSize = `${newSize}%`;
      return newSize;
    });
  };

  return (
    <div className="fixed left-4 bottom-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
        aria-label="Accessibility settings"
      >
        <Settings className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="absolute bottom-16 left-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-64">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Accessibility</h3>
          
          <div className="space-y-4">
            {/* Theme Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Theme</span>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </button>
            </div>

            {/* Font Size Controls */}
            <div className="space-y-2">
              <span className="text-gray-700 dark:text-gray-300">Font Size</span>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => adjustFontSize(false)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
                  aria-label="Decrease font size"
                >
                  <ZoomOut className="h-5 w-5" />
                </button>
                <span className="text-gray-700 dark:text-gray-300">{fontSize}%</span>
                <button
                  onClick={() => adjustFontSize(true)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
                  aria-label="Increase font size"
                >
                  <ZoomIn className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">High Contrast</span>
              <button
                onClick={() => document.documentElement.classList.toggle('high-contrast')}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
                aria-label="Toggle high contrast"
              >
                <Type className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}