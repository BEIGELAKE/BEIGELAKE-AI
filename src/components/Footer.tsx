import { Facebook, Twitter, Instagram, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div {...fadeIn} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">About Us</a></li>
              <li><a href="#careers" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">Careers</a></li>
              <li><a href="#press" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">Press</a></li>
              <li><a href="#blog" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">Blog</a></li>
            </ul>
          </motion.div>

          <motion.div {...fadeIn} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Developers</h3>
            <ul className="space-y-2">
              <li><a href="#docs" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">Documentation</a></li>
              <li><a href="#api" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">API Reference</a></li>
              <li><a href="#status" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">Status</a></li>
              <li><a href="#github" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">GitHub</a></li>
            </ul>
          </motion.div>

          <motion.div {...fadeIn} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">Terms of Service</a></li>
              <li><a href="#security" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">Security</a></li>
              <li><a href="#compliance" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">Compliance</a></li>
            </ul>
          </motion.div>

          <motion.div {...fadeIn} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Connect</h3>
            <div className="flex space-x-4">
              <a href="#twitter" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#facebook" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#instagram" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#github" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">
                <Github className="h-6 w-6" />
              </a>
              <a href="#linkedin" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Subscribe to our newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} BEIGELAKE AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}