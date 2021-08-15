# **_Heroku [Among Us](https://innersloth.com/gameAmongUs.php) Buildpack_**

## _Version: 1.0.0_

This is a [Heroku Buildpack](https://devcenter.heroku.com/articles/buildpacks) for running a [Imposter server](https://github.com/Impostor/Impostor) in a [dyno](https://devcenter.heroku.com/articles/dynos) using [PlayIt](https://playit.gg) .

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Usage

Install the [Heroku toolbelt](https://toolbelt.heroku.com/). And create a Heroku app:

```sh-session
$ heroku create --buildpack https://github.com/TheBotlyNoob/Among-Us-Heroku.git
```

Open the app:

```sh-session
$ heroku open
```

And copy the URL from the Website

![UI](https://i.imgur.com/ZCGAa42.png)

After you copy the URL, go to https://Impostor.github.io/Impostor paste the URL without the colon or the numbers after the colon in the Server Address input, and paste the numbers after the colon in the Port input

![Impostor Website](https://i.imgur.com/X306g1N.png)

## Impostor Plugins

**_Note: I will not provide support for plugins, if you have issues with the plugin(s) please ask the plugin creator, NOT ME._**

Create an config variable called PLUGIN_URL, and set that variable to the download link to the plugin:

```sh-session
$ heroku config:set PLUGIN_URL="xxxxx"
```
