const navItems = [
  ["◫", "Overview", "/"], ["⌁", "My roadmap", "/roadmap"],
  ["◇", "Practice", "/practice"], ["◷", "Mock interviews", "/interviews"],
  ["▤", "Applications", "/applications"],
];

export function SectionPage({ active, title, description, children }: { active: string; title: string; description: string; children: React.ReactNode }) {
  return <main className="shell"><aside className="sidebar">
    <a className="brand" href="/"><span className="brand-mark">C</span><span>careerpilot<span className="brand-ai">.ai</span></span></a>
    <div className="nav-label">WORKSPACE</div><nav aria-label="Main navigation">{navItems.map(([icon, label, href]) => <a className={`nav-item${active === href ? " active" : ""}`} href={href} key={href}><span>{icon}</span> {label}</a>)}</nav>
    <div className="sidebar-bottom"><div className="plan-card"><span className="sparkle">✳</span><strong>Your next step</strong><p>Add a target job to build a role-specific plan.</p><a href="/roadmap">Build your plan <span>↗</span></a></div><div className="user-chip"><div className="avatar">A</div><div><strong>Alex Morgan</strong><small>Student account</small></div><span className="more">···</span></div></div>
  </aside><section className="main-panel"><header className="topbar"><div className="crumb">Workspace <span>/</span> <strong>{title}</strong></div><div className="top-actions"><button className="icon-button" aria-label="Notifications">♧<i /></button><div className="avatar small">A</div></div></header>
    <div className="content section-content"><p className="eyebrow">YOUR PLACEMENT WORKSPACE</p><h1>{title}</h1><p className="subhead">{description}</p>{children}<footer>CareerPilot AI <span>·</span> Your preparation, made personal.</footer></div>
  </section></main>;
}

export function EmptyState({ icon, title, description, action }: { icon: string; title: string; description: string; action: string }) {
  return <section className="section-empty"><div className="section-empty-icon">{icon}</div><h2>{title}</h2><p>{description}</p><button className="primary-button">＋ <span>{action}</span></button></section>;
}
