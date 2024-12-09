import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ToolsGrid from './components/ToolsGrid';
import Store from './components/Store';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';
import AccessibilityMenu from './components/AccessibilityMenu';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <Hero />
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.5 }}
        >
          <ToolsGrid />
        </motion.div>
        <Store />
        <Footer />
        <LiveChat />
        <AccessibilityMenu />
      </div>
    </ThemeProvider>
  );
}

export default App;