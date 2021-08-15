const fs = require('fs');
const PlayIt = require('playit.gg');
const fetch = require('node-fetch');

(async () => {
  const playit = await PlayIt();

  const tunnel = await playit.createTunnel({ proto: 'UDP', port: 2023 });

  fs.writeFileSync(`${__dirname}/url`, tunnel.url);

  while (true)
    ((ms) => new Promise((res) => setTimeout(res, ms)))(1800000).then(
      async () => await fetch('http://127.0.0.1')
    );
})();
