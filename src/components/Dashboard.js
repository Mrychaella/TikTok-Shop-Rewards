import React from 'react';

function Dashboard({ user, onLogout }) {
  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <div className="login-brand">
          <span className="brand-mark" aria-hidden="true">♪</span>
          <span>TikTok</span>
        </div>
        <button type="button" className="dashboard-logout" onClick={onLogout}>Log out</button>
      </header>

      <section className="dashboard-content">
        <p className="eyebrow">Creator workspace</p>
        <h1>Welcome back.</h1>
        <p className="dashboard-email">Signed in as {user.email}</p>
        <div className="dashboard-grid">
          <article className="dashboard-card dashboard-card-pink">
            <span className="dashboard-card-label">Shop views</span>
            <strong>24.8K</strong>
            <small>+18.4% this week</small>
          </article>
          <article className="dashboard-card dashboard-card-cyan">
            <span className="dashboard-card-label">Orders today</span>
            <strong>128</strong>
            <small>Ready to review</small>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;