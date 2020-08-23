
let data = {};

class Obj {
    constructor(name, mail, msg) {
        this.name = name;
        this.mail = mail;
        this.msg = msg;
    }
}

function store() {
    $("#banner-message").toggleClass("alt");
    let name1 = document.getElementById("name").value;
    let mail1 = document.getElementById("mail").value;
    let msg1 = document.getElementById("msg").value;

    data = new Obj(name1, mail1, msg1);
}

function show() {
     for (var prop in data) {
         $("#outcome").append(`${prop}: ${data[prop]}<br>`);
     }
     setTimeout(function(){alert(JSON.stringify(data));},500);
}

document.getElementById("submitBtn").addEventListener("click", store);
            
document.getElementById("showBtn").addEventListener("click", show);
