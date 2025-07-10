document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;
  const getCurrentTheme = () => {
    return htmlEl.getAttribute('data-theme') || 'light';
  };
  const setTheme = (theme) => {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggleBtn.textContent = `${theme === 'dark' ? '☀️' : '🌙'} Style`;
  };
  toggleBtn.addEventListener('click', () => {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });
  setTheme(getCurrentTheme());
});
