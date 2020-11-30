const ASC = Number (65);
const sizeAlphabet = Number(26);
const buttonCipher = document.getElementById("buttonCipher");
buttonCipher.addEventListener("click", cipher);
const buttonDecipher = document.getElementById("buttonDecipher");
buttonDecipher.addEventListener("click", decipher);


function cipher () {
  
  let textUser = document.getElementById("message-user").value.toUpperCase();
  let offset = Number(document.getElementById("offset-user").value);
  let codedWord ="";

  if(textUser==""){
     alert("Digite os dados para serem Codificados");
  }

  for (let i = 0; i < textUser.length; i++) {      
    let codeChar = textUser.charCodeAt(i);

    if (codeChar>= 48 && codeChar <= 57){
      document.getElementById("message-user").value=" "; 
      document.getElementById("textareaCoded").value=" ";   
      alert("Digite apenas letras");
    }
    if (codeChar>= 65 && codeChar <= 90){
      codedWord+=String.fromCharCode((codeChar- ASC + offset) % sizeAlphabet + ASC);
      document.getElementById("textareaCoded").innerHTML=codedWord; 
    } 
  }
return codedWord;
}

function decipher(){
  
  let textUser = document.getElementById("message-control").value.toUpperCase();
  let offset = Number(document.getElementById("offset-control").value);
  let decodedWord ="";

  if(textUser==""){
    alert("Digite os dedos para serem Decodificados");
  }

  for (let i = 0; i < textUser.length; i++) {
              
    let codeChar = textUser.charCodeAt(i);
    if (codeChar>= 48 && codeChar <= 57){
      document.getElementById("message-user").value=" "; 
      document.getElementById("textareaCoded").value=" ";   
      alert("Digite apenas letras");
    }
    if (codeChar>= 65 && codeChar <= 90){
      decodedWord+= String.fromCharCode((codeChar- ASC - offset) % sizeAlphabet + ASC);
      document.getElementById("textareaDecoded").innerHTML=decodedWord;
    }
  }
return decodedWord;
}

