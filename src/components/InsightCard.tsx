import { Insight, CATEGORY_COLORS } from '../types';

interface InsightCardProps {
  insight: Insight;
  onToggle: () => void;
}

export const InsightCard = ({ insight, onToggle }: InsightCardProps) => {
  const colorClass = CATEGORY_COLORS[insight.category] || CATEGORY_COLORS['Other'];

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow">
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={insight.selected}
          onChange={onToggle}
          className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
        />
        <div className="flex-1">
          <span className={`inline-block px-2 py-1 rounded text-xs font-medium border mb-2 ${colorClass}`}>
            {insight.category}
          </span>
          <p className="text-slate-900 font-normal mb-2">
            {insight.insight}
          </p>
          <p className="text-sm text-slate-600">
            {insight.reason}
          </p>
        </div>
      </label>
    </div>
  );
};
