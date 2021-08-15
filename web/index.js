'use strict';

(async () => {
  var _await$await$fetch$te;

  var url = await fetch('/url');
  if (!url || !url.ok)
    document.getElementById('tunnelurl').innerHTML =
      'Please Wait For The URI To Generate...';
  else {
    url = await url.text();
    document.getElementById(
      'tunnelurl'
    ).innerHTML = `<a rel='noopener noreferrer' href='${url}'>${url}</a>`;
  }
  document.getElementById('logs').innerHTML =
    (_await$await$fetch$te = await (await fetch('/log')).text()) !== null &&
    _await$await$fetch$te !== void 0
      ? _await$await$fetch$te
      : '';
})();
