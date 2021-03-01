import cipher from './cipher.js'


const buttonCipher = document.getElementById("buttonCipher");
buttonCipher.addEventListener("click", callEncode);
const buttonDecipher = document.getElementById("buttonDecipher");
buttonDecipher.addEventListener("click", callDecode);


function callEncode(){
  let textUser = document.getElementById("message-user").value.toUpperCase();
  let offset = Number(document.getElementById("offset-user").value);
  if (textUser===""){
      alert("Digite o texto para ser codificado");
  }
  else{
    let codedWord = cipher.encode(offset, textUser);
    document.getElementById("textarea-coded").innerHTML=codedWord;
    clearInput()  
  }
}

function callDecode(){
  let textControl = document.getElementById("message-control").value.toUpperCase();
  let offset = Number(document.getElementById("offset-control").value);
  if (textControl===""){
    alert("Digite o texto para ser decodificado");
  }
  else{
    let decodedWord = cipher.decode(offset, textControl);
    document.getElementById("textarea-decoded").innerHTML=decodedWord; 
    clearInput()  
  }
}

function clearInput(){
  document.querySelector("#message-control").value = "";
  document.querySelector("#message-user").value = "";
}





