export type Severity = 'Critical' | 'High' | 'Medium' | 'Low';
export type IssueStatus = 'Open' | 'In Progress' | 'Ready for Retest' | 'Closed';

export interface Issue {
  id: string;
  title: string;
  module: string;
  severity: Severity;
  status: IssueStatus;
  assignee: string;
  updated: string;
  description: string;
  expected: string;
}

export interface QualityMetric {
  label: string;
  value: string;
  change: string;
  tone: 'blue' | 'red' | 'amber' | 'green';
}
