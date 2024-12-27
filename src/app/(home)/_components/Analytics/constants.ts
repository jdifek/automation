import { BarChart2, TrendingUp, Users, MessageCircle } from 'lucide-react';
import type { AnalyticsCardConfig } from './types';

export const ANALYTICS_CARDS: AnalyticsCardConfig[] = [
  {
    title: 'Total Likes',
    key: 'likes',
    Icon: TrendingUp,
    color: 'indigo',
  },
  {
    title: 'Comments',
    key: 'comments',
    Icon: MessageCircle,
    color: 'green',
  },
  {
    title: 'Total Reach',
    key: 'reach',
    Icon: Users,
    color: 'purple',
  },
  {
    title: 'Engagement Rate',
    key: 'engagement',
    Icon: BarChart2,
    color: 'yellow',
    formatValue: (value: number) => `${value}%`,
  },
];