import React from "react";
import type { Analytics as AnalyticsType } from "../../../../types";
import AnalyticsCard from "./AnalyticsCard";
import { ANALYTICS_CARDS } from "./constants";

export const Analytics = () => {
  const stats: AnalyticsType = {
    likes: 1234,
    comments: 456,
    shares: 789,
    reach: 5000,
    engagement: 3.2,
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {ANALYTICS_CARDS.map((card) => (
          <AnalyticsCard
            key={card.title}
            title={card.title}
            value={
              card.formatValue
                ? card.formatValue(stats[card.key])
                : stats[card.key]
            }
            Icon={card.Icon}
            color={card.color}
          />
        ))}
      </div>
    </div>
  );
};
