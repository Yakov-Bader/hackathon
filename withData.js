//https://${server}.gofile.io/download/${code}/${MD5}/${file name}
let token='b2af86fc3339ea38e577732b73b1b00ceb7a23ecfc69a89ba722b8a4beaf734e'
function getServer(e) {
    e.preventDefault();
    let server;
    fetch('https://api.gofile.io/getServer')
        .then(response => response.json())
        .then(data => {
            console.log(data.data.server);
            server = data.data.server;
            posting(server);
        })
        .catch(error => console.log(error));
}
function postInfo(data,server){
    console.log(data);
    console.log(user);
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    let allfiles={};
    allfiles[data.fileName] = {
        server: server,
        code:data.code,
        MD5:data.md5
    }

    
    var raw = JSON.stringify({
        "userId": user,
        "app": "Banjax",
        "data": allfiles
    });

    console.log(raw)

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://192.168.43.229:5000/users/data", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}
function getList(){
    fetch(`https://api.gofile.io/getUploadsList?token=${token}`)
        .then(response => response.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error))
}
