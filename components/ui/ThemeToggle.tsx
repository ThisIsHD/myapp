// components/ui/ThemeToggle.tsx
'use client';

import { MoonIcon, SunIcon, DesktopIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div 
        className="flex gap-2 p-2 bg-gray-900 bg-opacity-80 backdrop-blur rounded-full shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <ThemeButton 
          icon={<SunIcon />} 
          themeValue="light" 
          currentTheme={theme}
          onClick={() => setTheme('light')}
        />
        <ThemeButton 
          icon={<MoonIcon />} 
          themeValue="dark" 
          currentTheme={theme}
          onClick={() => setTheme('dark')}
        />
        <ThemeButton 
          icon={<DesktopIcon />} 
          themeValue="system" 
          currentTheme={theme}
          onClick={() => setTheme('system')}
        />
      </motion.div>
    </div>
  );
}

function ThemeButton({ 
  icon, 
  themeValue, 
  currentTheme, 
  onClick 
}: { 
  icon: React.ReactNode;
  themeValue: string;
  currentTheme?: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      className={`p-3 rounded-full transition-colors ${
        currentTheme === themeValue
          ? 'bg-cyan-500 text-white'
          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${themeValue} mode`}
    >
      {icon}
    </motion.button>
  );
}