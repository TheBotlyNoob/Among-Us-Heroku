(async () => {
    var url = await fetch("/url");

    if(!url && !url.ok) document.getElementById("tunnelurl").innerHTML = "The URL Doesn't See, To Exist\n<br/>\nPlease <a href='https://github.com/TheBotlyNoob/Among-Us-Heroku/issues/new'>Make An Issue</a>!";
    
    else {
        url = await url.text();
        document.getElementById("tunnelurl").innerHTML = `<a href="${url}">${url}</a>`;
    }
})
