

var nome   = document.getElementById('nome');
var email  = document.getElementById('endereco');
var tel    = document.getElementById('tel');
var data   = document.getElementById('data');
var senha  = document.getElementById('senha');
var senhaB = document.getElementById('2senha');



nome.onkeyup = function() {

    var nomeRegex = /^[a-zA-Z\u00C0-\u017F´]{2,}\s[a-zA-Z\u00C0-\u017F´]{2,}$/;
    var icon = document.getElementById('imagem3');

    if(nome.value.match(nomeRegex) ) {  
        icon.classList.remove("valid");
        icon.classList.add("invalid");
    }  
    
    else {
        icon.classList.remove("valid");
        icon.classList.add("valid");
    } 

}

email.onkeyup = function() {

    var emailRegex = /^([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    var icon1 = document.getElementById('imagem4');

    if(email.value.match(emailRegex) ) {  
        icon1.classList.remove("valid");
        icon1.classList.add("invalid");
    }  
    
    else{
        icon1.classList.remove("valid");
        icon1.classList.add("valid");
    } 

}

tel.onkeyup = function() {

    var telRegex1 = /^\d{9}$/;
    var telRegex2 = /^\+\d{12}$/;
    var nada = /^$/;
    var icon2 = document.getElementById('imagem5');

    if(tel.value.match(telRegex1) || tel.value.match(telRegex2) || tel.value.match(nada) ) {  
        icon2.classList.remove("valid");
        icon2.classList.add("invalid");
    }
        
    else {
        icon2.classList.remove("valid");
        icon2.classList.add("valid");
    } 
}

data.onkeyup = function() {

    var dataRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    var icon3 = document.getElementById('imagem6');
    var nada = /^$/;

    if(data.value.match(dataRegex) || data.value.match(nada)){  
        icon3.classList.remove("valid");
        icon3.classList.add("invalid");
    }
        
    else {
        icon3.classList.remove("valid");
        icon3.classList.add("valid");
    } 
}

senha.onkeyup = function() {

    var senhaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,12}$/;
    var icon4 = document.getElementById('imagem7');

    if(senha.value.match(senhaRegex)){  
        icon4.classList.remove("valid");
        icon4.classList.add("invalid");

      
    }

    else {
        icon4.classList.remove("valid");
        icon4.classList.add("valid");
    } 

}

senhaB.onkeyup = function() {

    var icon5 = document.getElementById('imagem8');

    if(senhaB.value === senha.value){  
        icon5.classList.remove("valid");
        icon5.classList.add("invalid");
    }
        
    else {
        icon5.classList.remove("valid");
        icon5.classList.add("valid");
    } 

     
window.addEventListener('load', function() {
    whenClick('submeter', submeterPOSTForm);

    function whenClick(id, handler) {
        document.getElementById(id).addEventListener('click', handler);

    }
});

async function submeterPOSTForm() {
    const dados = {
        name: document.getElementById('nome'),
        mail: document.getElementById('endereco'),
        cellphone: document.getElementById('tel'),
        birthdate: document.getElementById('data'),
        senha: document.getElementById('senha'),
        level: document.getElementById('nivel'),
        fetchURL: '${http://127.0.0.1:5500}/conexao'
    };

        const resp = await fetch('http://127.0.0.1:5500', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'aplication{x-www-form-urlencoded',
            },
            body: JSON.stringify(dados),
        });
        return responseAsJSON ? resp.json() : resp.text();
    
    }
}