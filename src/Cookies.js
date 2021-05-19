//Expiration time is in hours
function setCookie(name, value, exp_time)
{
    if(exp_time !== undefined)
    {
        let now = new Date()
        now.setTime(now.getTime() + exp_time * 3600 * 1000)
        document.cookie = name + "=" + value + "; expires=" + now.toUTCString() + "; path=/";
    }
    else
    {
        document.cookie = name + "=" + value + "; path=/";
    }
}

function deleteCookie(name)
{
    document.cookie = name + "=" + "; expires=" + new Date().toUTCString();
}

function getCookie(name)
{
    let match = document.cookie.match(/theme\=[^;]*/);
    if(match)
        return match[0].slice(name.length + 1);
}

export {setCookie, getCookie, deleteCookie};