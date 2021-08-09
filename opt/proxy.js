const fs = require('fs');
const PlayIt = require('playit.gg');

(async () => {
  const playit = await new PlayIt();

  fs.writeFileSync(
    `${__dirname}/url`,
    (await playit.createTunnel({ port: 22023, proto: 'UDP' })).url
  );
})();
