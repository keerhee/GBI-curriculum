// Sticky footer progress + current section
(function(){
  const sections = document.querySelectorAll('[data-section]');
  const sfT = document.getElementById('sf-t');
  const sfP = document.getElementById('sf-p');
  if(!sfT || !sfP) return;
  const defaultTitle = sfT.textContent;
  function update(){
    const sy = window.scrollY;
    const dh = document.documentElement.scrollHeight - window.innerHeight;
    sfP.textContent = Math.round((sy / Math.max(dh, 1)) * 100) + '%';
    let cur = defaultTitle;
    sections.forEach(s => {
      if(sy >= s.getBoundingClientRect().top + sy - 120) cur = s.dataset.section;
    });
    if(sfT.textContent !== cur) sfT.textContent = cur;
  }
  window.addEventListener('scroll', update, {passive:true});
  update();
})();
