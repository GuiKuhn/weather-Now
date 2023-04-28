const src = document.getElementById("background");
//não chamar essa função
function codeToBackground(code) {
  
  switch (code) {
      case 0:
      case 1:
      case 2:
        return "url('../images/Dia-ensolarado.jpg')";
        break;
      case 3:
      case 45:
      case 48:
        return "url('../images/Dia-nublado.jpg')";
        break;
        
      case 51:
      case 53:
      case 55:
      case 56:
      case 57:
      case 61:
      case 63:
      case 65:
      case 66:
      case 67:
      case 71:
      case 73:
      case 75:
      case 77:
      case 80:
      case 81:
      case 82:
      case 85:
      case 86:
        return "url('../images/Dia-chuvoso.jpg')";
        break;

      case 95:
      case 96:
      case 99:
        return "url('../images/Dia-tempestade.jpg')";
        break;
      default:
        console.log("Código inválido");
    }
}


//chamar essa funcao
function changeBackground(code){
  const url = codeToBackground(code);
  src.style.backgroundImage =  url;

}
  