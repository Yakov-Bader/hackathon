//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGFkMjA2ZmM5MGIwZTBmODRlZmJhOWMiLCJhcHBJZCI6IjYwYWQxODAyYzkwYjBlMGY4NGVmYmE4ZCIsImlhdCI6MTYyMjE0NDI3Nn0.Y0OQx-CxLfJWJOkgSeH8s-3Jk5zSKtT6L8jVzZ27fhM
verifyForm=document.getElementById('conform');
verifyForm.addEventListener('submit', getVerify);

function getVerify(e){
    e.preventDefault();
    if(verifyForm[1].value=="sign In"){
        signUp();
        verifyForm[0].value="";
        verifyForm[1].value="Submit";
    }else{
        verify();
    }
}

function verify(){
    let token=verifyForm[0].value;

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    //.message.userId
    fetch('http://capslock-core.herokuapp.com/auth/verification/'+token, requestOptions)
        .then(response => response.json())
        .then(result => {user=result.message.userId
            window.location.href = "berger.html";
            window.location.replace("berger.html");
        })
        .catch(error => alert('sorry wrong password, try again', error));
}

function signUp(){
    signForm=document.getElementById('conform');

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "email": signForm[0].value,
    "app": "Banjax"
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://capslock-core.herokuapp.com/auth/token", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
function have(){
    verifyForm[1].value="Submit";
    verifyForm[0].value="";
}