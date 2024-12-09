import { useState } from 'react';
import { Brain, Image, FileText, Code, Palette, MessageSquare, ChevronDown } from 'lucide-react';
import ToolCard from './ToolCard';
import { Tool } from '../types';

const tools: Tool[] = [
  {
    name: "AI Text Generator",
    description: "Generate human-like text for various purposes using advanced AI",
    category: "AI Tools",
    icon: <Brain className="h-6 w-6 text-orange-600" />,
    isPremium: true
  },
  {
    name: "Image Editor Pro",
    description: "Professional image editing tools with AI enhancement capabilities",
    category: "Hybrid",
    icon: <Image className="h-6 w-6 text-orange-600" />,
    isPremium: true
  },
  {
    name: "Document Parser",
    description: "Extract and analyze data from documents automatically",
    category: "Productivity",
    icon: <FileText className="h-6 w-6 text-orange-600" />,
    isPremium: false
  },
  {
    name: "Code Assistant",
    description: "AI-powered code completion and review assistant",
    category: "Development",
    icon: <Code className="h-6 w-6 text-orange-600" />,
    isPremium: true
  },
  {
    name: "Design Templates",
    description: "Professional design templates for various purposes",
    category: "Design",
    icon: <Palette className="h-6 w-6 text-orange-600" />,
    isPremium: false
  },
  {
    name: "Chat Analytics",
    description: "Analyze chat conversations with AI insights",
    category: "Analytics",
    icon: <MessageSquare className="h-6 w-6 text-orange-600" />,
    isPremium: true
  }
];

const categories = [...new Set(tools.map(tool => tool.category))];

export default function ToolsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredTools = selectedCategory
    ? tools.filter(tool => tool.category === selectedCategory)
    : tools;

  const displayedTools = showAll ? filteredTools : filteredTools.slice(0, 6);

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-800 colored:bg-orange-50" id="tools">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white colored:text-orange-900 mb-4">
            Explore Our Tools
          </h2>
          <p className="text-gray-600 dark:text-gray-400 colored:text-orange-700 max-w-2xl mx-auto mb-8">
            From AI-powered solutions to traditional tools, find everything you need to enhance your workflow
          </p>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === null
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>

        {filteredTools.length > 6 && !showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              See All Tools <ChevronDown className="ml-2 h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}