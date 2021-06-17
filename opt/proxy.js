const spawn = require('child_process').spawn,
  puppeteer = require('puppeteer'),
  { writeFileSync } = require('fs');

const proxy = spawn(`${__dirname}/proxy`, { cwd: __dirname });

proxy.stderr.on('data', data => data.toString().match(/\bhttps?:\/\/[0-9a-z\/]*/gi) ? claimPlayit(data.toString().match(/https:\/\/[0-9a-z\.\/]*/gi)[0], 'UDP', 22023, `${__dirname}/../bin/url`): '')
proxy.on('exit', code => {
  console.log(`Proxy Exited With Code: ${code}`);
});

async function claimPlayit(url, type, port, file) {
  if(url instanceof String || type instanceof String || port instanceof Number) throw new Error('URL Must Be A String, Type Must Be A String, And The Port Must Be A Number!');

  const browser = await puppeteer.launch({   
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ]
  }),
    page = await browser.newPage();

  // Playit Needs Authentication From Discord
  await page.goto('https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fresponse_type%3Dtoken%26client_id%3D705634226527141919%26redirect_uri%3Dhttps%253A%252F%252Fplayit.gg%252Foauth%252Fdiscord%26scope%3Didentify')
  await page.waitForSelector('#app-mount > div.app-1q1i1E > div > div > div > form > div > div > div.mainLoginContainer-1ddwnR > div.block-egJnc0.marginTop20-3TxNs6 > div.marginBottom20-32qID7 > div > div.inputWrapper-31_8H8.inputWrapper-3aw2Sf > input, #app-mount > div.app-1q1i1E > div > div > div > form > div > div > div.mainLoginContainer-1ddwnR > div.block-egJnc0.marginTop20-3TxNs6 > div:nth-child(2) > div > input, #app-mount > div.app-1q1i1E > div > div > div > form > div > div > div.mainLoginContainer-1ddwnR > div.block-egJnc0.marginTop20-3TxNs6 > button.marginBottom8-AtZOdT.button-3k0cO7.button-38aScr.lookFilled-1Gx00P.colorBrand-3pXr91.sizeLarge-1vSeWK.fullWidth-1orjjo.grow-q77ONN');

  await page.type('#app-mount > div.app-1q1i1E > div > div > div > form > div > div > div.mainLoginContainer-1ddwnR > div.block-egJnc0.marginTop20-3TxNs6 > div.marginBottom20-32qID7 > div > div.inputWrapper-31_8H8.inputWrapper-3aw2Sf > input', 'auinheroku@gmail.com');
  await page.type('#app-mount > div.app-1q1i1E > div > div > div > form > div > div > div.mainLoginContainer-1ddwnR > div.block-egJnc0.marginTop20-3TxNs6 > div:nth-child(2) > div > input', 'auinheroku123!');
  await page.click('#app-mount > div.app-1q1i1E > div > div > div > form > div > div > div.mainLoginContainer-1ddwnR > div.block-egJnc0.marginTop20-3TxNs6 > button.marginBottom8-AtZOdT.button-3k0cO7.button-38aScr.lookFilled-1Gx00P.colorBrand-3pXr91.sizeLarge-1vSeWK.fullWidth-1orjjo.grow-q77ONN');

  await page.waitForSelector('#app-mount > div.app-1q1i1E > div > div.leftSplit-1qOwnR.nonEmbeddedLeftSplit-3z6mge > div > div > div.footer-3ZalXG > button.button-38aScr.lookFilled-1Gx00P.colorBrand-3pXr91.sizeMedium-1AC_Sl.grow-q77ONN');
  await page.click('#app-mount > div.app-1q1i1E > div > div.leftSplit-1qOwnR.nonEmbeddedLeftSplit-3z6mge > div > div > div.footer-3ZalXG > button.button-38aScr.lookFilled-1Gx00P.colorBrand-3pXr91.sizeMedium-1AC_Sl.grow-q77ONN');
  await page.waitForNavigation({ waituntil: 'networkidle0' });

  // Now That We Have Authenticated, Make The Tunnel
  await page.goto(url, { waituntil: 'networkidle0' });
  await page.goto(`https://playit.gg/manage/set/custom-${type.toLowerCase()}`);
  
  //writeFileSync(file, playitURL);
}


function sleep(sleepDuration){while(new Date().getTime()<new Date().getTime()+sleepDuration){}}
