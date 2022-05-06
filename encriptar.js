function encriptar(event){
    event.preventDefault();
    let pattern_checked = checkPattern();
    document.getElementById('warning').hidden = false;
    document.getElementById('copy').hidden = true;
    document.getElementById('message').innerText = "";
    if (pattern_checked){
        let texto = document.querySelector("#catcher").value;
        let text = new String(texto);
        let textoEncriptado = new String;
        for (let index = 0; index < text.length; index++) {
            switch (text[index]){
                case 'a':
                    textoEncriptado=textoEncriptado+"ai";
                    break;
                case 'e':
                    textoEncriptado=textoEncriptado+"enter";
                    break;
                case 'i':
                    textoEncriptado=textoEncriptado+"imes";
                    break;
                case 'o':
                    textoEncriptado=textoEncriptado+"ober";
                    break;
                case 'u':
                    textoEncriptado=textoEncriptado+"ufat";
                    break;
                
                default:
                    textoEncriptado=textoEncriptado+text[index];
            }
        }
        document.getElementById('message').innerText = textoEncriptado;
        document.getElementById('warning').hidden = true;
        document.getElementById('copy').hidden = false;
        document.querySelector("#catcher").value="";
        
    }
}

function desencriptar(event){
    event.preventDefault();
    let pattern_checked = checkPattern();
    document.getElementById('warning').hidden = false;
    document.getElementById('copy').hidden = true;
    document.getElementById('message').innerText = "";
    if (pattern_checked){
        let text = document.querySelector("#catcher").value;
        let unencryptedText = new String;
        for (let index = 0; index < text.length; index++) {
            switch (text[index]){
                case 'a':
                    unencryptedText=unencryptedText+"a";
                    index++;
                    break;
                case 'e':
                    unencryptedText=unencryptedText+"e";
                    index=index+4;
                    break;
                case 'i':
                    unencryptedText=unencryptedText+"i";
                    index=index+3;
                    break;
                case 'o':
                    unencryptedText=unencryptedText+"o";
                    index=index+3;
                    break;
                case 'u':
                    unencryptedText=unencryptedText+"u";
                    index=index+3;
                    break;
                
                default:
                    unencryptedText=unencryptedText+text[index];
            }
        }
        document.getElementById('message').innerText = unencryptedText;
        document.getElementById('warning').style.display = "none";
        document.getElementById('copy').hidden = false;
        document.querySelector("#catcher").value="";
    }
}
function copy(){
    let text = document.getElementById('message').innerHTML;
    navigator.clipboard.writeText(text);
}

function checkPattern(){
        let notification = document.getElementById('notify');
        let notificationText = document.getElementById('notification'); 
        let messageValidation = document.getElementById('catcher');
        let message = messageValidation.value;
        let re = new RegExp("[A-ZáéíóúäÿëïöüÁÉÍÓÚÄËÜÏÖ]");
        if (re.test(message)) {
            notification.className='invalid';
            notificationText.classList.add('invalid');
            return false;
        } else {
            notification.className='valid';
            notificationText.classList.remove('invalid');
            return true;
        }
    }

let encriptado = document.querySelector("#encrypt");
encriptado.addEventListener('click',encriptar);
let desencriptado = document.querySelector("#decrypt");
desencriptado.addEventListener('click',desencriptar);
let copiarTexto = document.querySelector('#copy');
copiarTexto.addEventListener('click',copy);
document.getElementById('catcher').addEventListener("keyup", checkPattern);
document.addEventListener('keypress', function(event) {
        if (event.code === 'Enter') {
            event.preventDefault();
            return false;
        }
    });


