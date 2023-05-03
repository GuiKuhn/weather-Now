const src = document.getElementById("background");
//não chamar essa função
function codeToBackground(code, day) {
  
  if(weather === 0 || weather === 1 && day === 0)
    return "url('../images/Dia-noite.png')";
  else if(weather === 0 || weather === 1 && day === 1)
    return "url('../images/Dia-ensolarado.jpg')";
  else if (weather === 2 && day === 1)
    return "url'../images/Dia-nublado-novo.jpg'";
  else if(weather === 2 && day === 0)
    return "url('../images/Dia-noite-nublada.jpg')";
  else if(weather === 3 || weather === 45 || weather === 48 && day === 0)
    return "url('../images/Dia-noite-nublada.jpg')";
  else if(weather === 3 || weather === 45 || weather === 48 && day === 1)
    return "url'../images/Dia-nublado-novo.jpg'";

  switch (code) {
      
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
function changeBackground(code, day){
  const url = codeToBackground(code, day);
  src.style.backgroundImage =  url;

}
  