const fs = require('fs');
const PlayIt = require('playit.gg');

(async () => {
  const playit = await PlayIt();

  const tunnel = await playit.createTunnel({ proto: 'UDP', port: 2023 });

  fs.writeFileSync(`${__dirname}/url`, tunnel.url);
})();
