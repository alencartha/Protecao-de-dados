const ASC = Number (65);
const sizeAlphabet = Number(26);

const cipher = {

  encode(offset, text) {
    let codedWord=" ";
    if (typeof offset !='number' && typeof text !='string'){
      throw new TypeError();
    }
    else{
          for (let i = 0; i < text.length; i++) {      
            let codeChar = text.charCodeAt(i);

            if (codeChar>= 48 && codeChar <= 57){  
              alert("Digite apenas letras");
            }
            else if(codeChar>= 65 && codeChar <= 90){
              codedWord+=String.fromCharCode((codeChar- ASC + offset) % sizeAlphabet + ASC);
            }
          }
      return codedWord;
    } 
  },


  decode(offset,text){
    let decodedWord=" ";
    if (typeof offset !='number' && typeof text !='string'){
      throw new TypeError();
    }
    else{
          for (let i = 0; i < text.length; i++) {      
            let codeChar = text.charCodeAt(i);

            if (codeChar>= 48 && codeChar <= 57){  
              alert("Digite apenas letras");
            }
            else if (codeChar>= 65 && codeChar <= 90){
              decodedWord+=String.fromCharCode((codeChar+ ASC - offset) % sizeAlphabet + ASC);
            } 
          }
      return decodedWord;
    } 
  }
};

export default cipher;
