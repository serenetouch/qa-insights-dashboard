import type { QualityMetric } from '../types/issue';

export function SummaryCard({ label, value, change, tone }: QualityMetric) {
  return (
    <article className={`summary-card tone-${tone}`}>
      <div className="summary-icon" aria-hidden="true">
        <span />
      </div>
      <div>
        <span className="summary-label">{label}</span>
        <div className="summary-value-row">
          <strong>{value}</strong>
          <small>{change}</small>
        </div>
      </div>
    </article>
  );
}
