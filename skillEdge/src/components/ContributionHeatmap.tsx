import React from 'react';
import CalendarHeatmap, { ReactCalendarHeatmapValue, TooltipDataAttrs } from 'react-calendar-heatmap';
import { Tooltip } from 'react-tooltip';
import { format, subMonths, startOfMonth } from 'date-fns';

interface ContributionData {
  date: string;
  count: number;
}

interface Props {
  contributions: ContributionData[];
}

const ContributionHeatmap: React.FC<Props> = ({ contributions }) => {
  const today = new Date();
  const startDate = startOfMonth(subMonths(today, 11));
  const endDate = today;

  // Filter out future dates
  const filteredContributions = contributions.filter(
    (contribution) => new Date(contribution.date) <= today
  );

  const getContributionLevel = (count: number): number => {
    if (!count) return 0;
    if (count <= 1) return 1;
    if (count <= 3) return 2;
    if (count <= 5) return 3;
    return 4;
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[800px] p-4">
        <CalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          values={filteredContributions}
          classForValue={(value) => {
            if (!value) return 'contribution-level-0';
            return `contribution-level-${getContributionLevel(value.count)}`;
          }}
          tooltipDataAttrs={(value: ReactCalendarHeatmapValue<string> | undefined): TooltipDataAttrs => {
            if (!value || !value.date) {
              return {
                'data-tooltip-id': 'contribution-tooltip',
                'data-tooltip-content': 'No contributions'
              } as TooltipDataAttrs;
            }
            return {
              'data-tooltip-id': 'contribution-tooltip',
              'data-tooltip-content': `${value.count} contributions on ${format(new Date(value.date), 'MMM d, yyyy')}`
            } as TooltipDataAttrs;
          }}
          showWeekdayLabels={true}
          gutterSize={2}
          transformDayElement={(element, _, index) => {
            return React.cloneElement(element as React.ReactElement, {
              rx: 2,
              ry: 2,
              'data-testid': `day-${index}`
            });
          }}
        />
        <Tooltip id="contribution-tooltip" />
      </div>
    </div>
  );
};

export default ContributionHeatmap;