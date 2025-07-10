document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;
  
  toggleBtn.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlEl.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    toggleBtn.textContent = `${newTheme === 'dark' ? '☀️' : '🌙'} 主题`;
  });
  
  // 初始化按钮文本
  const currentTheme = htmlEl.getAttribute('data-theme');
  toggleBtn.textContent = `${currentTheme === 'dark' ? '☀️' : '🌙'} 主题`;
});