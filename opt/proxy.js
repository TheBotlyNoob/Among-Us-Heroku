const fs = require('fs');
const PlayIt = require('playit.gg');
async () => {
  const playit = await new PlayIt({
    email: 'auinheroku@gmail.com',
    password: 'auinheroku123!'
  });

  fs.writeFileSync(
    `${__dirname}/url`,
    await playit.createTunnel({ port: 22023, type: 'UDP' }).connect_address
  );
};
