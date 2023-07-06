chrome.identity.getProfileUserInfo({'accountStatus': 'ANY'}, function(info){
    email = info.email;
    console.log(info);
    document.querySelector('textarea').value=JSON.stringify(info)
});
chrome.identity.getProfileUserInfo(function(info){
    email = info.email;
    console.log(info);
    document.querySelector('textarea').value=JSON.stringify(info)
});