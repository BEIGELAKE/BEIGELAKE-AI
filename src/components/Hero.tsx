import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-800 colored:from-orange-100 colored:to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white colored:text-orange-900 mb-6">
            Discover the Power of <span className="text-orange-600 dark:text-orange-400 colored:text-orange-700">AI & Human</span> Tools
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 colored:text-orange-700 mb-8 max-w-2xl mx-auto">
            Access our curated collection of AI-powered and traditional tools to supercharge your workflow. Built for creators, developers, and professionals.
          </p>
          <div className="flex justify-center gap-4">
            <button className="flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
              Explore Tools <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="flex items-center border border-gray-300 dark:border-gray-600 colored:border-orange-300 bg-white dark:bg-gray-800 colored:bg-orange-50 text-gray-700 dark:text-gray-300 colored:text-orange-700 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 colored:hover:bg-orange-100 transition-colors">
              View Pricing
            </button>
          </div>
          <div className="flex justify-center gap-8 mt-12">
            <div className="flex items-center">
              <Zap className="h-5 w-5 text-orange-600 dark:text-orange-400 colored:text-orange-700 mr-2" />
              <span className="text-gray-700 dark:text-gray-300 colored:text-orange-700">50+ Tools</span>
            </div>
            <div className="flex items-center">
              <Sparkles className="h-5 w-5 text-orange-600 dark:text-orange-400 colored:text-orange-700 mr-2" />
              <span className="text-gray-700 dark:text-gray-300 colored:text-orange-700">AI & Non-AI Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}