(async () => {
    var url = await fetch("/url");

    if(!url || !url.ok) document.getElementById("tunnelurl").innerHTML = `The URL Doesn't See, To Exist\n<br/>\nPlease <a href="https://github.com/TheBotlyNoob/Among-Us-Heroku/issues/new?body=logs:\\n\`\`\`sh-session\\n${await (await fetch('/proxy.log')).text()}\\n\`\`\`&title=URL Doesn't Exist">Make An Issue</a>`;
    
    else {
        url = await url.text();
        document.getElementById("tunnelurl").innerHTML = `<a href="${url}">${url}</a>`;
    }
})()
