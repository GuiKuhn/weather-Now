function changeBackground(info) {
    var fundo = document.getElementById("fundo");
  
    if (info === "informacao1") {
      fundo.classList.remove("fundo-padrao");
      fundo.classList.add("fundo-informacao1");
    } else if (info === "informacao2") {
      fundo.classList.remove("fundo-padrao");
      fundo.classList.add("fundo-informacao2");
    } else {
      fundo.classList.remove("fundo-informacao1", "fundo-informacao2");
      fundo.classList.add("fundo-padrao");
    }
  }
  