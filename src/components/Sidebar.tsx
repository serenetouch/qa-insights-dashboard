const navigation = ['Overview', 'Test Runs', 'Defects', 'Releases', 'Reports'];

export function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="Quality Desk home">
        <span className="brand-mark">Q</span>
        <span>
          <strong>Quality Desk</strong>
          <small>Engineering workspace</small>
        </span>
      </a>

      <nav className="nav-list">
        {navigation.map((item, index) => (
          <a
            key={item}
            className={index === 0 ? 'nav-link active' : 'nav-link'}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
          >
            <span className="nav-dot" aria-hidden="true" />
            {item}
          </a>
        ))}
      </nav>

      <div className="sidebar-card">
        <span className="eyebrow">Sprint health</span>
        <strong>Release confidence</strong>
        <div className="progress-track" aria-label="Release confidence: 86 percent">
          <span style={{ width: '86%' }} />
        </div>
        <small>86% ready for release</small>
      </div>
    </aside>
  );
}
