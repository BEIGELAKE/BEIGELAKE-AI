import { ReactNode } from 'react';

export interface Tool {
  name: string;
  description: string;
  category: string;
  icon: ReactNode;
  isPremium: boolean;
}