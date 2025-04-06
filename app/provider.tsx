// app/provider.tsx
'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Provider({ 
  children,
  attribute = 'class',
  defaultTheme = 'dark',
  enableSystem = true,
  disableTransitionOnChange = false,
}: {
  children: React.ReactNode;
  attribute?: 'class' | 'data-theme'; // More specific type
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
    >
      {children}
      <ThemeToggle />
    </NextThemesProvider>
  );
}