import { Tool } from '../types';

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="bg-white dark:bg-gray-900 colored:bg-orange-50 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 dark:border-gray-800 colored:border-orange-200">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-orange-50 dark:bg-orange-900/20 colored:bg-orange-100 rounded-lg">
          {tool.icon}
        </div>
        {tool.isPremium && (
          <span className="bg-orange-100 dark:bg-orange-900/40 colored:bg-orange-200 text-orange-800 dark:text-orange-200 colored:text-orange-900 text-xs px-2 py-1 rounded-full">
            Premium
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white colored:text-orange-900 mb-2">{tool.name}</h3>
      <p className="text-gray-600 dark:text-gray-400 colored:text-orange-700 text-sm mb-4">{tool.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-500 colored:text-orange-600">{tool.category}</span>
        <button className="text-orange-600 dark:text-orange-400 colored:text-orange-700 hover:text-orange-700 dark:hover:text-orange-300 colored:hover:text-orange-800 text-sm font-medium">
          Try Now →
        </button>
      </div>
    </div>
  );
}