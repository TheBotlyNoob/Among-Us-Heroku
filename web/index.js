(async () => {
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
})();
