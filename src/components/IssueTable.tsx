import type { Issue } from '../types/issue';

interface IssueTableProps {
  issues: Issue[];
  onSelect: (issue: Issue) => void;
}

export function IssueTable({ issues, onSelect }: IssueTableProps) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Issue</th>
            <th>Module</th>
            <th>Severity</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td>
                <button className="issue-title" type="button" onClick={() => onSelect(issue)}>
                  <span>{issue.id}</span>
                  <strong>{issue.title}</strong>
                </button>
              </td>
              <td>{issue.module}</td>
              <td><span className={`badge severity-${issue.severity.toLowerCase()}`}>{issue.severity}</span></td>
              <td><span className="status-badge"><span />{issue.status}</span></td>
              <td><span className="avatar" aria-label={`Assigned to ${issue.assignee}`}>{issue.assignee}</span></td>
              <td className="muted-cell">{issue.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {issues.length === 0 && (
        <div className="empty-state">
          <strong>No matching issues</strong>
          <span>Try changing your search or filters.</span>
        </div>
      )}
    </div>
  );
}
