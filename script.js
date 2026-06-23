// ============================================================
// RENDER: process list (sidebar)
// ============================================================
const processListEl = document.getElementById('processList');
const detailPanelEl = document.getElementById('detailPanel');

function renderProcessList(activeId) {
  processListEl.innerHTML = PROJECTS.map(p => `
    <button class="process-item ${p.id === activeId ? 'active' : ''}" data-id="${p.id}">
      <div class="process-info">
        <span class="process-name">${escapeHtml(p.name)}</span>
        <span class="process-tagline">${escapeHtml(p.tagline)}</span>
      </div>
      <span class="process-badge ${p.status}">${p.status === 'live' ? 'live' : 'building'}</span>
    </button>
  `).join('');

  processListEl.querySelectorAll('.process-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      selectProject(id);
      closeMobileSidebar();
    });
  });
}

// ============================================================
// RENDER: detail panel
// ============================================================
function renderDetail(project) {
  const hasRepo = !!project.repo;
  const hasShots = project.screenshots && project.screenshots.length > 0;

  detailPanelEl.innerHTML = `
    <div class="detail-content">
      <div class="detail-eyebrow">
        <span>${escapeHtml(project.year)}</span>
        <span class="sep"></span>
        <span>${project.status === 'live' ? 'repository live' : 'currently building'}</span>
      </div>
      <h2 class="detail-title">${escapeHtml(project.name)}</h2>
      <p class="detail-tagline">${escapeHtml(project.tagline)}</p>

      <div class="stack-row">
        ${project.stack.map(s => `<span class="stack-chip">${escapeHtml(s)}</span>`).join('')}
      </div>

      <p class="detail-description">${escapeHtml(project.description)}</p>

      <div class="highlights-label">what it actually does</div>
      <ul class="highlights-list">
        ${project.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}
      </ul>

      <div class="action-row">
        ${hasRepo
          ? `<a href="${project.repo}" target="_blank" rel="noopener" class="btn btn-primary">view source &rarr;</a>`
          : `<span class="btn btn-disabled">repo uploading soon</span>`
        }
      </div>

      <div class="gallery-label">screenshots</div>
      ${hasShots ? `
        <div class="gallery-grid">
          ${project.screenshots.map((s, i) => `
            <div class="gallery-item" data-project="${project.id}" data-index="${i}">
              <img src="${s.src}" alt="${escapeHtml(s.caption)}" loading="lazy" onerror="this.onerror=null;this.style.display='none';this.parentElement.classList.add('img-missing');">
              <div class="gallery-caption">${escapeHtml(s.caption)}</div>
            </div>
          `).join('')}
        </div>
      ` : `
        <div class="empty-gallery">no screenshots uploaded yet — check back soon</div>
      `}
    </div>
  `;

  detailPanelEl.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      openLightbox(img.src, img.alt);
    });
  });
}

// ============================================================
// SELECTION STATE
// ============================================================
let currentProjectId = null;

function selectProject(id) {
  const project = PROJECTS.find(p => p.id === id);
  if (!project) return;
  currentProjectId = id;
  renderProcessList(id);
  renderDetail(project);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  detailPanelEl.scrollTop = 0;
}

// ============================================================
// LIGHTBOX
// ============================================================
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
  <div class="lightbox-close" id="lightboxClose">esc &times;</div>
  <img id="lightboxImg" src="" alt="">
`;
document.body.appendChild(lightbox);

function openLightbox(src, alt) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightboxImg').alt = alt;
  lightbox.classList.add('open');
}

function closeLightbox() {
  lightbox.classList.remove('open');
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// ============================================================
// MOBILE SIDEBAR TOGGLE
// ============================================================
const sidebarEl = document.querySelector('.sidebar');
const mobileToggle = document.getElementById('mobileNavToggle');

mobileToggle.addEventListener('click', () => {
  sidebarEl.classList.toggle('open');
});

function closeMobileSidebar() {
  if (window.innerWidth <= 860) {
    sidebarEl.classList.remove('open');
  }
}

// ============================================================
// LIVE CLOCK
// ============================================================
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${h}:${m}:${s}`;
}
updateClock();
setInterval(updateClock, 1000);

// ============================================================
// UTIL
// ============================================================
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ============================================================
// INIT
// ============================================================
renderProcessList(null);
selectProject(PROJECTS[0].id);
