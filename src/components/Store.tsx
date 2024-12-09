import { Shield, Zap, Star } from 'lucide-react';

export default function Store() {
  return (
    <div className="py-16 bg-white dark:bg-gray-900 colored:bg-orange-50" id="store">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white colored:text-orange-900 mb-4">
            Premium Tools Store
          </h2>
          <p className="text-gray-600 dark:text-gray-400 colored:text-orange-700 max-w-2xl mx-auto">
            Unlock advanced features and capabilities with our premium tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="border border-gray-200 dark:border-gray-700 colored:border-orange-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Starter</h3>
            <p className="text-gray-600 dark:text-gray-400 colored:text-orange-700 mb-4">Perfect for individuals just getting started</p>
            <div className="mb-6">
              <div className="text-3xl font-bold">
                <span className="text-green-600">NGN</span> 1,500
                <span className="text-lg text-gray-500 dark:text-gray-400 colored:text-orange-600">/mo</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 colored:text-orange-600 mt-2">
                First month free
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600 dark:text-gray-400 colored:text-orange-700">
                <Shield className="h-5 w-5 mr-2 text-green-500" />
                Access to basic tools
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400 colored:text-orange-700">
                <Shield className="h-5 w-5 mr-2 text-green-500" />
                Limited API calls
              </li>
            </ul>
            <button className="w-full py-2 px-4 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="border-2 border-orange-500 rounded-xl p-8 hover:shadow-lg transition-shadow relative">
            <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-xl">
              Popular
            </div>
            <h3 className="text-xl font-semibold mb-4">Professional</h3>
            <p className="text-gray-600 dark:text-gray-400 colored:text-orange-700 mb-4">For professionals and small teams</p>
            <div className="mb-6">
              <div className="text-3xl font-bold">
                <span className="text-green-600">NGN</span> 7,000
                <span className="text-lg text-gray-500 dark:text-gray-400 colored:text-orange-600">/mo</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 colored:text-orange-600 mt-2">
                First month free
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600 dark:text-gray-400 colored:text-orange-700">
                <Zap className="h-5 w-5 mr-2 text-orange-500" />
                All basic tools
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400 colored:text-orange-700">
                <Zap className="h-5 w-5 mr-2 text-orange-500" />
                Unlimited API calls
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400 colored:text-orange-700">
                <Zap className="h-5 w-5 mr-2 text-orange-500" />
                Priority support
              </li>
            </ul>
            <button className="w-full py-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-gray-200 dark:border-gray-700 colored:border-orange-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
            <p className="text-gray-600 dark:text-gray-400 colored:text-orange-700 mb-4">For large organizations</p>
            <div className="mb-6">
              <div className="text-3xl font-bold">
                <span className="text-green-600">NGN</span> 20,000
                <span className="text-lg text-gray-500 dark:text-gray-400 colored:text-orange-600">/mo</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 colored:text-orange-600 mt-2">
                First month free
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600 dark:text-gray-400 colored:text-orange-700">
                <Star className="h-5 w-5 mr-2 text-orange-500" />
                All pro features
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400 colored:text-orange-700">
                <Star className="h-5 w-5 mr-2 text-orange-500" />
                Custom integrations
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400 colored:text-orange-700">
                <Star className="h-5 w-5 mr-2 text-orange-500" />
                24/7 support
              </li>
            </ul>
            <button className="w-full py-2 px-4 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}