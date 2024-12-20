import type { LucideIcon } from 'lucide-react';
import type { Analytics } from '../../types';

export interface AnalyticsCardProps {
  title: string;
  value: number | string;
  Icon: LucideIcon;
  color: string;
}

export interface AnalyticsCardConfig {
  title: string;
  key: keyof Analytics;
  Icon: LucideIcon;
  color: string;
  formatValue?: (value: number) => string;
}