import { useMemo, useState } from 'react';
import { IssueDrawer } from './components/IssueDrawer';
import { IssueTable } from './components/IssueTable';
import { QualityChart } from './components/QualityChart';
import { Sidebar } from './components/Sidebar';
import { SummaryCard } from './components/SummaryCard';
import { issues } from './data/issues';
import type { Issue, IssueStatus, QualityMetric, Severity } from './types/issue';

const summaryMetrics: QualityMetric[] = [
  { label: 'Test cases', value: '248', change: '+18 this sprint', tone: 'blue' },
  { label: 'Open defects', value: '12', change: '3 need attention', tone: 'red' },
  { label: 'Ready for retest', value: '7', change: '+4 since yesterday', tone: 'amber' },
  { label: 'Pass rate', value: '92%', change: '+8.2% this week', tone: 'green' },
];

function App() {
  const [search, setSearch] = useState('');
  const [severity, setSeverity] = useState<Severity | 'All'>('All');
  const [status, setStatus] = useState<IssueStatus | 'All'>('All');
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

  const filteredIssues = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    return issues.filter((issue) => {
      const matchesSearch = !normalizedSearch || [issue.id, issue.title, issue.module]
        .some((value) => value.toLowerCase().includes(normalizedSearch));
      const matchesSeverity = severity === 'All' || issue.severity === severity;
      const matchesStatus = status === 'All' || issue.status === status;
      return matchesSearch && matchesSeverity && matchesStatus;
    });
  }, [search, severity, status]);

  return (
    <div className="app-shell" id="top">
      <Sidebar />

      <main className="main-content">
        <header className="topbar">
          <div>
            <span className="eyebrow">Product quality workspace</span>
            <h1>Good morning, QA team</h1>
            <p>Here is the latest release-readiness picture.</p>
          </div>
          <div className="topbar-actions">
            <label className="global-search">
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                placeholder="Search issues..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
            <button className="primary-button" type="button">+ New defect</button>
          </div>
        </header>

        <section className="summary-grid" aria-label="Quality summary">
          {summaryMetrics.map((metric) => <SummaryCard key={metric.label} {...metric} />)}
        </section>

        <section className="insights-grid">
          <QualityChart />
          <article className="panel release-panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">Release 2.8.0</span>
                <h2>Readiness checks</h2>
              </div>
              <span className="release-score">86%</span>
            </div>
            <ul className="check-list">
              <li><span className="check complete">✓</span><div><strong>Smoke suite</strong><small>42 of 42 passed</small></div></li>
              <li><span className="check complete">✓</span><div><strong>Critical defects</strong><small>0 unresolved</small></div></li>
              <li><span className="check pending">!</span><div><strong>Regression suite</strong><small>18 cases remaining</small></div></li>
              <li><span className="check pending">!</span><div><strong>Product approval</strong><small>Awaiting sign-off</small></div></li>
            </ul>
          </article>
        </section>

        <section className="panel issues-panel" id="defects" aria-labelledby="defects-title">
          <div className="panel-heading issues-heading">
            <div>
              <span className="eyebrow">Defect management</span>
              <h2 id="defects-title">Recent issues</h2>
            </div>
            <div className="filters" aria-label="Issue filters">
              <label>
                <span>Severity</span>
                <select value={severity} onChange={(event) => setSeverity(event.target.value as Severity | 'All')}>
                  <option>All</option>
                  <option>Critical</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </label>
              <label>
                <span>Status</span>
                <select value={status} onChange={(event) => setStatus(event.target.value as IssueStatus | 'All')}>
                  <option>All</option>
                  <option>Open</option>
                  <option>In Progress</option>
                  <option>Ready for Retest</option>
                  <option>Closed</option>
                </select>
              </label>
            </div>
          </div>
          <IssueTable issues={filteredIssues} onSelect={setSelectedIssue} />
        </section>
      </main>

      {selectedIssue && <IssueDrawer issue={selectedIssue} onClose={() => setSelectedIssue(null)} />}
    </div>
  );
}

export default App;
