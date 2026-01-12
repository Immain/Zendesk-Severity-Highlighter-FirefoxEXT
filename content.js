// Severity Color Mappings
const severityColors = {
  'Sev1': { bg: '#ff1744', text: '#ffffff', border: '#d50000', rowBg: 'rgba(255, 23, 68, 0.15)' },
  'Sev2': { bg: '#ff9100', text: '#ffffff', border: '#ff6d00', rowBg: 'rgba(255, 145, 0, 0.15)' },
  'Sev3': { bg: '#ffd600', text: '#000000', border: '#ffab00', rowBg: 'rgba(255, 214, 0, 0.15)' },
  'Sev4': { bg: '#00e676', text: '#000000', border: '#00c853', rowBg: 'rgba(0, 230, 118, 0.15)' }
};

function highlightSeverities() {
  // Find all cells in the "Global - Severity" column
  const severityCells = document.querySelectorAll('td');

  severityCells.forEach(cell => {
    const text = cell.textContent.trim();

    // Check if cell contains severity indicator
    if (text.match(/^Sev[1-4]$/)) {
      const colors = severityColors[text];

      if (colors) {
        // Apply styling to the cell
        cell.style.backgroundColor = colors.bg;
        cell.style.color = colors.text;
        cell.style.fontWeight = 'bold';
        cell.style.borderLeft = `4px solid ${colors.border}`;
        cell.style.padding = '4px 8px';
        cell.style.borderRadius = '4px';

        // Optionally highlight the entire row
        const row = cell.closest('tr');
        if (row) {
          row.style.borderLeft = `4px solid ${colors.border}`;
          row.classList.add(`severity-${text.toLowerCase()}`);
        }
      }
    }
  });
}

// Run on page load
highlightSeverities();

// Watch for DOM changes (for dynamically loaded content)
const observer = new MutationObserver((mutations) => {
  highlightSeverities();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Re-run when table updates
document.addEventListener('DOMContentLoaded', highlightSeverities);
window.addEventListener('load', highlightSeverities);
