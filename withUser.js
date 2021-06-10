//https://gofile.io/d/XuixNu
//response.data.data.server
// date, about, name, file, send

const form = document.getElementById('fileForm');
form.addEventListener('submit', getServer);

function posting(server){ 
    let formData = new FormData();
    formData.append("file", form[3].files[0]);
    formData.append("email", 'yakovbader@gmail.com');
    console.log("the file",form[3].files[0])
    fetch(`https://${server}.gofile.io/uploadFile`,{method:'POST',body: formData})
        .then(response => console.log("response",response.json()))
        .then(data =>{
            console.log(data.data);
            postInfo(data.data, server)
        })
        .catch(error => console.log(error));
}

function getting(){
    fetch('https://api.gofile.io/getUploadsList?token=b2af86fc3339ea38e577732b73b1b00ceb7a23ecfc69a89ba722b8a4beaf734e')
        .then(response => response.json())
        .then(data=>console.log(data.data))
        .catch(error => console.log(error));
}

