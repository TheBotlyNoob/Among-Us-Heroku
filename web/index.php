<!DOCTYPE html>
<html>
<head>
    <title>Among Us Heroku Server!</title>

    <link rel="icon" type="image/png" sizes="512x512" href="favicons/android-chrome-512x512.png">
    <link rel="icon" type="image/png" sizes="192x192" href="favicons/android-chrome-192x192.png">
    <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png">
    <link rel="icon" type="image/x-icon" href="favicons/favicon.ico">
  <link rel="stylesheet" href="style.css">
</head>
<body>
<div id="tunnel">
<h3 id="tunnelurl"><?php try {
    $url = json_decode(file_get_contents(__DIR__."/../.config/playit/config.json")) ?? false;
    if ($url !== false) {
        $url = "https://playit.gg/claim/v3/{$url->agent_key}";
        echo ("Your URL Is: \n<a target='_blank' rel='noopener noreferrer' href='{$url}'>{$url}</a>");
    }
    else {
        echo ("The URL File Doesn't Seem To Exist,\n<br>\nTry Deploying Again, If It Still Doesn't Work Then Make An Issue At\n<a target='_blank' rel='noopener noreferrer' href='https://github.com/TheBotlyNoob/Among-Us-Heroku/issues/new'>The GitHub Page</a>");
    }
} catch(Exception $e) {
    echo("{$e->getMessage()}\n<br>\nTry Deploying Again, If It Still Doesn't Work Then Make An Issue At <a target='_blank' rel='noopener noreferrer' href='https://github.com/TheBotlyNoob/Among-Us-Heroku/issues/new'>The GitHub Page</a>");
}
?>
</h>
</div>
<hr>
<a rel="noopener noreferrer" class="github" href="https://github.com/TheBotlyNoob/Among-Us-Heroku" target="_blank"><img src="https://img.icons8.com/nolan/128/github.png" alt="github"/>Visit The GitHub Page!</a>
</body>
</html>
