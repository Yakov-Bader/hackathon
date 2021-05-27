const { info } = require("node:console");



//https://${server}.gofile.io/download/${code}/${MD5}/${file name}
let token='b2af86fc3339ea38e577732b73b1b00ceb7a23ecfc69a89ba722b8a4beaf734e'
let titles=[];
let information=[];
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
        MD5:data.md5,
        date:form[0],
        name:form[1],
        subtitle:form[2],
        title:"title"
    }
    allfiles[data.fileName]

    
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

    fetch("http://capslock-core.herokuapp.com/users/data", requestOptions)
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

function getUsers(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://capslock-core.herokuapp.com/users/?Accept=application/json&Content-Type=application/json", requestOptions)
        .then(response => response.json())
        .then(result => collect(result))
        .catch(error => console.log('error', error));
}

function collect(data){
    for(person in data){
        let myUserData = person.banjex;
        for(info in myUserData){
            information.push(info)
            tit=info.title;
            if(myUserData == undefined) {
                continue;
            }else{
                for(let i=0;i<titles.length;i++){
                    if(tit==titles[i]){
                        break;
                    }else if(i==titles.length-1){
                        titles.push(tit);
                    }
                }
            }
        } 
    }
}
