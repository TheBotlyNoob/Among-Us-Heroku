# ***Heroku [Among Us](https://innersloth.com/gameAmongUs.php) Buildpack***

## *Version: 0.10*

This is a [Heroku Buildpack](https://devcenter.heroku.com/articles/buildpacks) for running a [Imposter server](https://github.com/Impostor/Impostor) in a [dyno](https://devcenter.heroku.com/articles/dynos) using [PlayIt](https://playit.gg) .

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Usage

Install the [Heroku toolbelt](https://toolbelt.heroku.com/). And create a Heroku app:

```sh-session
$ heroku create --buildpack https://github.com/TheBotlyNoob/Among-Us-Heroku.git
```

Finally, open the app:

```sh-session
$ heroku open
```

This will take a few minutes so be patient, will display the PlayIt claim URL:

```
Your URL Is: (The PlayIt URL)
```

Click on the URL and it should redirect you to playit.gg/manage. Scroll all the way down until you see Custom UDP, and click on add tunnel:

![Custom UDP](https://i.imgur.com/6LNGxmv.png)

Then you edit the number after the colon to 22023 and click add:

![Custom UDP Port](https://i.imgur.com/CzQ9V2R.png)

After you click add scroll all the way down until you see Custom UDP again. Then copy the URL.

![Custom UDP Connected](https://i.imgur.com/uvKeA8f.png)

After you copy the URL, go to https://Impostor.github.io/Impostor paste the URL without the colon or the numbers after the colon in the Server Address input, and paste the numbers after the colon in the Port input

![Impostor Website](https://i.imgur.com/X306g1N.png)

## Impostor Plugins

***Note: I will not provide support for plugins, if you have issues with the plugin(s) please ask the plugin creator, NOT ME.***

Create an config variable called PLUGIN_URL, and set that variable to the download link to the plugin:

```sh-session
$ heroku config:set PLUGIN_URL="xxxxx"
```
