# QA Insights Dashboard

A responsive product-quality dashboard built with React and TypeScript. It turns test execution, release readiness and defect data into a focused interface for QA and engineering teams.

## Features

- Quality summary cards for test volume, open defects, retest queue and pass rate
- Responsive weekly pass-rate visualization built with semantic HTML and CSS
- Searchable and filterable defect table
- Severity and workflow-status indicators
- Accessible issue-detail drawer with observed and expected behaviour
- Release-readiness checklist
- Desktop, tablet and mobile layouts
- Fully typed data models and component props

## Technical stack

- React 19
- TypeScript
- Vite
- Modern CSS with custom properties, Grid and Flexbox
- Accessible semantic HTML

## Project structure

```text
src/
├── components/
│   ├── IssueDrawer.tsx
│   ├── IssueTable.tsx
│   ├── QualityChart.tsx
│   ├── Sidebar.tsx
│   └── SummaryCard.tsx
├── data/issues.ts
├── types/issue.ts
├── App.tsx
├── main.tsx
└── styles.css
```

## Run locally

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
```

## Frontend decisions

- Filtering uses derived state with `useMemo` rather than duplicating data.
- Reusable components keep layout and behaviour concerns separated.
- Issue data is strongly typed to protect severity and workflow values.
- The table remains usable on narrow screens through local horizontal scrolling.
- Focus styles, labels and semantic controls support keyboard navigation.
- The detail drawer stops click propagation so only the backdrop closes it.

## Quality perspective

The interface is designed around the information a QA team needs to make decisions: risk, reproducibility, ownership, expected behaviour and release confidence. All displayed issues are fictional portfolio data.

## Planned improvements

- Connect the dashboard to a REST API
- Add unit and component tests
- Add persistent URL-based filters
- Add form validation for defect creation
- Add accessible focus trapping inside the detail drawer
