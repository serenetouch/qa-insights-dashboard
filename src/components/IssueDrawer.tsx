import type { Issue } from '../types/issue';

interface IssueDrawerProps {
  issue: Issue;
  onClose: () => void;
}

export function IssueDrawer({ issue, onClose }: IssueDrawerProps) {
  return (
    <div className="drawer-backdrop" role="presentation" onMouseDown={onClose}>
      <aside
        className="issue-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="issue-drawer-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="drawer-heading">
          <div>
            <span className="eyebrow">{issue.id} · {issue.module}</span>
            <h2 id="issue-drawer-title">{issue.title}</h2>
          </div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close issue details">×</button>
        </div>

        <div className="drawer-badges">
          <span className={`badge severity-${issue.severity.toLowerCase()}`}>{issue.severity}</span>
          <span className="status-badge"><span />{issue.status}</span>
        </div>

        <section>
          <h3>Observed behaviour</h3>
          <p>{issue.description}</p>
        </section>
        <section>
          <h3>Expected behaviour</h3>
          <p>{issue.expected}</p>
        </section>

        <dl className="detail-grid">
          <div><dt>Owner</dt><dd>{issue.assignee}</dd></div>
          <div><dt>Last updated</dt><dd>{issue.updated}</dd></div>
        </dl>
      </aside>
    </div>
  );
}
