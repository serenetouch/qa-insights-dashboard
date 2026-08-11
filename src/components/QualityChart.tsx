const weeklyResults = [
  { day: 'Mon', passRate: 74 },
  { day: 'Tue', passRate: 81 },
  { day: 'Wed', passRate: 79 },
  { day: 'Thu', passRate: 86 },
  { day: 'Fri', passRate: 89 },
  { day: 'Sat', passRate: 88 },
  { day: 'Sun', passRate: 92 },
];

export function QualityChart() {
  return (
    <article className="panel chart-panel" aria-labelledby="pass-rate-title">
      <div className="panel-heading">
        <div>
          <span className="eyebrow">Regression suite</span>
          <h2 id="pass-rate-title">Weekly pass rate</h2>
        </div>
        <span className="positive-chip">+8.2%</span>
      </div>

      <div className="chart" role="img" aria-label="Pass rate increased from 74 percent on Monday to 92 percent on Sunday">
        {weeklyResults.map(({ day, passRate }) => (
          <div className="chart-column" key={day}>
            <span className="chart-value">{passRate}%</span>
            <div className="chart-track">
              <span style={{ height: `${passRate}%` }} />
            </div>
            <span className="chart-label">{day}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
