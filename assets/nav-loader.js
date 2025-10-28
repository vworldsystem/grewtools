// /assets/nav-loader.js : 공통 네비 로더
(function(){
  const NAV_PATH = '/assets/nav.html';
  function injectNav(html){
    var holder = document.getElementById('gt-nav');
    if(!holder){
      holder = document.createElement('div');
      holder.id = 'gt-nav';
      document.body.prepend(holder);
    }
    holder.innerHTML = html;
  }
  fetch(NAV_PATH, {cache:'no-store'})
    .then(r=>r.text())
    .then(injectNav)
    .catch(()=>{ console.warn('nav load failed'); });
})();