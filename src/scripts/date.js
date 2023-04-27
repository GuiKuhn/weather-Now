function showDate(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var writtenDay = date.getDay();
  
    if(month === 0){
      month = 'Janeiro';
    }else if(month === 1){
      month = 'Fevereiro';
    }else if(month === 2){
      month = 'Março';
    }else if(month === 3){
      month = 'Abril';
    }else if(month === 4){
      month = 'Maio';
    }else if(month === 5){
      month = 'Junho';
    }else if(month === 6){
      month = 'Julho';
    }else if(month === 7){
      month = 'Agosto';
    }else if(month === 8){
      month = 'Setembro';
    }else if(month === 9){
      month = 'Outubro';
    }else if(month === 10){
      month = 'Novembro';
    }else if(month === 11){
      month = 'Dezembro';
    }
  
    if(writtenDay === 0){
      writtenDay = 'Domingo';
    }else if(writtenDay === 1){
      writtenDay = 'Segunda-feira'
    }else if(writtenDay === 2){
      writtenDay = 'Terça-feira'
    }else if(writtenDay === 3){
      writtenDay = 'Quarta-feira'
    }else if(writtenDay === 4){
      writtenDay = 'Quinta-feira'
    }else if(writtenDay === 5){
      writtenDay = 'Sexta-feira'
    }else if(writtenDay === 6){
      writtenDay = 'Sábado'
    }
  
    var wholeText = writtenDay + ', ' + day + ' de ' + month +'.'
  
    document.getElementById("date").innerText = wholeText;
    document.getElementById("date").textContent = wholeText;
    
  }

  showDate();