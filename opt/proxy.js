const fs = require('fs');
const PlayIt = require('playit.gg');

(async () => {
  const playit = await new PlayIt();

  const tunnel = await playit.createTunnel({ proto: 'UDP', port: 2023 });

  console.log(tunnel.url);
  fs.writeFileSync(`${__dirname}/url`, tunnel.url);
  console.log('after');
  console.log(fs.readFileSync(`${__dirname}/url`, { encoding: 'utf8' }));
})();
