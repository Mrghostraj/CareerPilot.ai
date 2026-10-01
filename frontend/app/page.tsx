const tasks = [
  { time: "15 min", title: "Review SQL window functions", tag: "Skill gap", color: "orange" },
  { time: "20 min", title: "Practice a project walkthrough", tag: "Interview prep", color: "violet" },
  { time: "10 min", title: "Revise probability fundamentals", tag: "Spaced review", color: "blue" },
];

export default function Home() {
  return (
    <main className="shell">
      <aside className="sidebar">
        <a className="brand" href="#home"><span className="brand-mark">C</span><span>careerpilot<span className="brand-ai">.ai</span></span></a>
        <div className="nav-label">WORKSPACE</div>
        <nav aria-label="Main navigation">
          <a className="nav-item active" href="/"><span>◫</span> Overview</a>
          <a className="nav-item" href="/roadmap"><span>⌁</span> My roadmap <b className="nav-count">4</b></a>
          <a className="nav-item" href="/practice"><span>◇</span> Practice</a>
          <a className="nav-item" href="/interviews"><span>◷</span> Mock interviews</a>
          <a className="nav-item" href="/applications"><span>▤</span> Applications</a>
        </nav>
        <div className="sidebar-bottom"><div className="plan-card"><span className="sparkle">✳</span><strong>Your next step</strong><p>Add a target job to build a role-specific plan.</p><a href="#target">Add a job <span>↗</span></a></div><div className="user-chip"><div className="avatar">A</div><div><strong>Alex Morgan</strong><small>Student account</small></div><span className="more">···</span></div></div>
      </aside>
      <section className="main-panel" id="overview">
        <header className="topbar"><div className="crumb">Workspace <span>/</span> <strong>Overview</strong></div><div className="top-actions"><button className="icon-button" aria-label="Notifications">♧<i /></button><div className="avatar small">A</div></div></header>
        <div className="content">
          <section className="welcome-row"><div><p className="eyebrow">THURSDAY, OCTOBER 1, 2026</p><h1>Good morning, Alex <span>✳</span></h1><p className="subhead">Small, focused steps add up. Here’s your plan for today.</p></div><button className="primary-button">＋ <span>Build my plan</span></button></section>
          <section className="readiness-card"><div className="readiness-copy"><div className="card-kicker">PLACEMENT READINESS <span className="info">i</span></div><h2>You’re building momentum.</h2><p>Add your resume and a target role to get a readiness view based on your actual skills and evidence.</p><a href="#profile" className="text-link">Complete your profile <span>→</span></a></div><div className="readiness-visual"><div className="ring"><div><strong>—</strong><small>not rated</small></div></div><span>Evidence-based profile</span></div></section>
          <section className="stats-grid"><article className="stat-card"><div className="stat-heading">ACTIVE TARGET <span>↗</span></div><strong className="stat-empty">Add a role</strong><small>See preparation tailored to a job</small><a href="#target">Set target job <span>→</span></a></article><article className="stat-card"><div className="stat-heading">THIS WEEK <span>◷</span></div><strong>0 <em>/ 5</em></strong><small>Preparation tasks completed</small><div className="progress-track"><i /></div></article><article className="stat-card"><div className="stat-heading">PRACTICE STREAK <span>✳</span></div><strong>0 <em>days</em></strong><small>Your next session starts the streak</small><a href="#practice">Start a practice session <span>→</span></a></article></section>
          <section className="lower-grid"><article className="tasks-card"><div className="section-heading"><div><h3>Today’s focus</h3><p>Your recommended preparation tasks</p></div><a href="#roadmap">View roadmap <span>→</span></a></div><div className="empty-focus"><div className="empty-icon">✳</div><div><strong>Your personalized plan starts here</strong><p>Complete your profile and add a target job. We’ll turn your skill gaps into manageable daily tasks.</p></div><button aria-label="Add target job">＋</button></div><div className="preview-tasks">{tasks.map((task) => <div className="task-row" key={task.title}><span className={`task-dot ${task.color}`} /><div><strong>{task.title}</strong><small>{task.tag}</small></div><span className="task-time">{task.time}</span></div>)}</div></article><article className="activity-card"><div className="section-heading"><div><h3>Recent activity</h3><p>Your progress, at a glance</p></div><button className="dots" aria-label="More options">···</button></div><div className="activity-empty"><div className="activity-art"><span>↗</span><i /><b /></div><strong>Your journey begins with one step</strong><p>Finish onboarding to see your practice history, skill progress, and interview feedback here.</p><a href="#profile">Set up your profile <span>→</span></a></div></article></section>
          <footer>CareerPilot AI <span>·</span> Your preparation, made personal.</footer>
        </div>
      </section>
    </main>
  );
}
