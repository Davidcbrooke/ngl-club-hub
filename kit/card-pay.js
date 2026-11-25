/* NGL card payments: adds "Pay by card" next to every unpaid invoice button in a hub.
   The hub sets window.NGL_PAY = {coll(id), status(id), uid(), token()} before or after this loads.
   The checkout is made by the "NGL card payments" Apps Script (Stripe), for that order's own total.
   Bank transfer stays available on the invoice. */
(function () {
  var URL_ = 'https://script.google.com/macros/s/AKfycbzMgKp3lYaaQSrTbcrbTI5W-epBnLWe48jpoP8ddXVTL2_c9tkpdyPvdaOGvE7AYdvI/exec';
  function add() {
    var P = window.NGL_PAY; if (!P) return;
    var bs = document.querySelectorAll('[data-act="invoice"][data-order],[data-act="gb-invoice"][data-order]');
    for (var i = 0; i < bs.length; i++) {
      var b = bs[i];
      if (b.getAttribute('data-card-done')) continue;
      var id = b.getAttribute('data-order'), st;
      try { st = P.status(id); } catch (e) { st = null; }
      if (st !== 'awaiting-payment') continue;
      b.setAttribute('data-card-done', '1');
      var c = document.createElement('button');
      c.type = 'button';
      c.className = (b.className || 'btn').replace(/\bghost\b/, '').replace(/\s+/g, ' ').trim();
      c.textContent = 'Pay by card';
      c.setAttribute('data-card-pay', id);
      c.style.marginLeft = '6px';
      b.insertAdjacentElement('afterend', c);
    }
  }
  var t = null;
  new MutationObserver(function () { clearTimeout(t); t = setTimeout(add, 60); }).observe(document.documentElement, {childList: true, subtree: true});
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-card-pay]'); if (!b) return;
    e.preventDefault(); e.stopPropagation();
    var P = window.NGL_PAY, id = b.getAttribute('data-card-pay'), label = b.textContent;
    b.disabled = true; b.textContent = 'Opening secure checkout…';
    Promise.resolve(P.token()).then(function (tok) {
      return fetch(URL_, {method: 'POST', headers: {'Content-Type': 'text/plain'},
        body: JSON.stringify({action: 'checkout', uid: P.uid(), idToken: tok, coll: P.coll(id), orderId: id, ret: location.href.split('#')[0]})});
    }).then(function (r) { return r.json(); }).then(function (j) {
      if (!j.ok) throw new Error(j.error || 'Something went wrong');
      location.href = j.url;
    }).catch(function (err) {
      b.disabled = false; b.textContent = label;
      alert('Card payment could not start: ' + (err.message || err) + '\nYou can still pay by bank transfer using the details on the invoice.');
    });
  }, true);
})();
