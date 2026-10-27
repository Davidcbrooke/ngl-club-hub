/* NGL Club Hub: floating "Chat with us" button that opens WhatsApp.
   Club Hub pages only (not the public website). Set the number below to switch it on. */
(function(){
  var WHATSAPP = '447962141932';          // international format, digits only, e.g. '447700900123' (UK 07700 900123)
  if(!WHATSAPP || window.self !== window.top || /[?&]embed=1\b/.test(location.search)) return;
  var css = '.ngl-chat{position:fixed;right:16px;bottom:16px;z-index:2147482000;display:flex;align-items:center;gap:9px;background:#25D366;color:#fff;text-decoration:none;font:700 15px/1 Roboto,system-ui,-apple-system,sans-serif;padding:12px 18px 12px 14px;border-radius:999px;box-shadow:0 10px 26px -8px rgba(0,0,0,.55);transition:transform .15s ease}' +
    '.ngl-chat:hover{transform:translateY(-2px)}.ngl-chat svg{width:24px;height:24px;flex:none}' +
    '@media(max-width:600px){.ngl-chat{padding:13px}.ngl-chat span{display:none}}' +
    '@media print{.ngl-chat{display:none}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var a = document.createElement('a'); a.className = 'ngl-chat'; a.target = '_blank'; a.rel = 'noopener';
  a.setAttribute('aria-label', 'Chat with the NGL on WhatsApp');
  a.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#fff" d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2.1 7L3 29l6.4-2c2 1.1 4.3 1.7 6.6 1.7 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.4c-2.1 0-4.1-.6-5.8-1.7l-.4-.3-3.8 1.2 1.2-3.7-.3-.4c-1.2-1.8-1.9-3.9-1.9-6 0-5.9 4.9-10.6 11-10.6s11 4.8 11 10.6-4.9 10.9-11 10.9zm6-7.9c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2l-1 1.3c-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.7-1.7-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-1-2.5c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.2 2.9 1.1 3.5.9 4.1.8.6-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.2-.4-.3-.7-.4z"/></svg><span>Chat with us</span>';
  function href(){
    var club = ''; try{ club = (window.nglChatClub && window.nglChatClub()) || ''; }catch(e){}
    var msg = club ? 'Hi Dave, it’s ' + club + ' (from the NGL Club Hub). ' : 'Hi Dave, I’m messaging from the NGL Club Hub. ';
    return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg);
  }
  a.href = href(); a.addEventListener('pointerdown', function(){ a.href = href(); }); a.addEventListener('focus', function(){ a.href = href(); });
  (document.body ? Promise.resolve() : new Promise(function(r){ document.addEventListener('DOMContentLoaded', r); })).then(function(){ document.body.appendChild(a); });
})();
