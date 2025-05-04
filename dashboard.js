function generateDashboardContent() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const role = currentUser?.role || 'student';
  
  let widgetsHtml = `
    <div class="dashboard-grid">
      <div class="widget announcements-widget">
        <div class="widget-header">
          <h3 class="widget-title"><i class="fas fa-bullhorn"></i> Announcements</h3>
          <div class="widget-controls">
            <button class="widget-btn"><i class="fas fa-sync-alt"></i></button>
          </div>
        </div>
        <div class="widget-content">
          <div class="announcement">
            <div class="announcement-title">Final Exam Schedule Posted</div>
            <div class="announcement-date">Apr 01, 2025</div>
            <p>The final examination schedule for the current semester has been posted.</p>
          </div>
          <div class="update-msg">Last updated: Just now</div>
        </div>
      </div>`;
  
  // Student-specific widgets
  if (role === 'student') {
    widgetsHtml += `
      <div class="widget upcoming-widget">
        <div class="widget-header">
          <h3 class="widget-title"><i class="fas fa-clock"></i> Upcoming Deadlines</h3>
          <div class="widget-controls">
            <button class="widget-btn"><i class="fas fa-sync-alt"></i></button>
          </div>
        </div>
        <div class="widget-content">
          <div class="list-item">
            <div class="list-item-primary">Mathematics Assignment</div>
            <div class="list-item-secondary">Due: Apr 10, 2025</div>
          </div>
          <div class="update-msg">Last updated: Just now</div>
        </div>
      </div>
      <div class="widget grades-widget">
        <div class="widget-header">
          <h3 class="widget-title"><i class="fas fa-chart-bar"></i> Recent Grades</h3>
          <div class="widget-controls">
            <button class="widget-btn"><i class="fas fa-sync-alt"></i></button>
          </div>
        </div>
        <div class="widget-content">
          <div class="grade-item">
            <div class="grade-subject">Mathematics 101</div>
            <div class="grade-value">92</div>
          </div>
          <div class="update-msg">Last updated: Just now</div>
        </div>
      </div>`;
  }
  
  // Teacher-specific widgets
  if (role === 'teacher') {
    widgetsHtml += `
      <div class="widget class-management-widget">
        <div class="widget-header">
          <h3 class="widget-title"><i class="fas fa-users"></i> My Classes</h3>
          <div class="widget-controls">
            <button class="widget-btn"><i class="fas fa-sync-alt"></i></button>
          </div>
        </div>
        <div class="widget-content">
          <div class="list-item">
            <div class="list-item-primary">Mathematics 101</div>
            <div class="list-item-secondary">25 students</div>
          </div>
          <div class="update-msg">Last updated: Just now</div>
        </div>
      </div>
      <div class="widget grading-widget">
        <div class="widget-header">
          <h3 class="widget-title"><i class="fas fa-edit"></i> Pending Grading</h3>
          <div class="widget-controls">
            <button class="widget-btn"><i class="fas fa-sync-alt"></i></button>
          </div>
        </div>
        <div class="widget-content">
          <div class="list-item">
            <div class="list-item-primary">Physics 201 - Midterm</div>
            <div class="list-item-secondary">15/25 graded</div>
          </div>
          <div class="update-msg">Last updated: Just now</div>
        </div>
      </div>`;
  }
  
  // Admin-specific widgets
  if (role === 'admin') {
    widgetsHtml += `
      <div class="widget admin-tools-widget">
        <div class="widget-header">
          <h3 class="widget-title"><i class="fas fa-tools"></i> Admin Tools</h3>
          <div class="widget-controls">
            <button class="widget-btn"><i class="fas fa-sync-alt"></i></button>
          </div>
        </div>
        <div class="widget-content">
          <div class="list-item">
            <div class="list-item-primary">5 New User Requests</div>
            <button class="action-btn">Review</button>
          </div>
          <div class="update-msg">Last updated: Just now</div>
        </div>
      </div>
      <div class="widget system-status-widget">
        <div class="widget-header">
          <h3 class="widget-title"><i class="fas fa-server"></i> System Status</h3>
          <div class="widget-controls">
            <button class="widget-btn"><i class="fas fa-sync-alt"></i></button>
          </div>
        </div>
        <div class="widget-content">
          <div class="list-item">
            <div class="list-item-primary">All systems operational</div>
            <div class="status-pill status-paid">Online</div>
          </div>
          <div class="update-msg">Last updated: Just now</div>
        </div>
      </div>`;
  }
  
  widgetsHtml += `</div>`;
  
  return widgetsHtml;
}