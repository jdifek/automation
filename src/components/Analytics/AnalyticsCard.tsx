import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AnalyticsCardProps {
  title: string;
  value: number | string;
  Icon: LucideIcon;
  color: string;
}

const getColorClasses = (color: string) => ({
  bg: `bg-${color}-100`,
  text: `text-${color}-600`
});

const AnalyticsCard = ({ title, value, Icon, color }: AnalyticsCardProps) => {
  const colorClasses = getColorClasses(color);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
        <div className={colorClasses.bg + " p-3 rounded-lg"}>
          <Icon className={`w-6 h-6 ${colorClasses.text}`} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;