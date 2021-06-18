const spawn = require('child_process').spawn,
  puppeteer = require('puppeteer'),
  { writeFileSync, existsSync } = require('fs');

const proxy = spawn(`${__dirname}/proxy`, { cwd: __dirname });

if(existsSync(`${__dirname}/../bin/url`)) throw 'Already Claimed The URL!';

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
  await page.waitForSelector('input[name="email"], input[name="password"], button[type="submit"]');

  await page.type('input[name="email"]', 'auinheroku@gmail.com');
  await page.type('input[name="password"]', 'auinheroku123!');
  await page.click('button[type="submit"]');

  await page.waitForSelector('button[type="button"]:nth-of-type(2)');
  await page.click('button[type="button"]:nth-of-type(2)');
  await page.waitForNavigation({ waituntil: 'networkidle0' });

  // Now That We Have Authenticated, Make The Tunnel
  await page.goto(url, { waituntil: 'networkidle0' });
  await page.goto(`https://playit.gg/manage/set/custom-${type.toLowerCase()}`);
  
  //writeFileSync(file, playitURL);
}


function sleep(sleepDuration){while(new Date().getTime()<new Date().getTime()+sleepDuration){}}
