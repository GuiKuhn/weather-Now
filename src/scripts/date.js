function showDate(futureDate){
    var date = new Date();
    var day = date.getDate() + futureDate;
    var month = date.getMonth();
    var writtenDay = date.getDay() + futureDate;
  
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

    if(month === 0 && day === 32){
      month++;
      day = 0;
    }else if(month === 1 && day === 29){
      month++
      day = 0;
    }else if(month === 2 && day === 32){
      month++
      day = 0;
    }else if(month === 3 && day === 31){
      month++
      day = 0;
    }else if(month === 4 && day === 32){
      month++
      day = 0;
    }else if(month === 5 && day === 31){
      month++
      day = 0;
    }else if(month === 6 && day === 32){
      month++
      day = 0;
    }else if(month === 7 && day === 32){
      month++
      day = 0;
    }else if(month === 8 && day === 31){
      month++
      day = 0;
    }else if(month === 9 && day === 32){
      month++
      day = 0;
    }else if(month === 10 && day === 31){
      month++
      day = 0;
    }else if(month === 11 && day === 32){
      month++
      day = 0;
    }  
      
  
    if(writtenDay === 0 || writtenDay === 7){
      writtenDay = 'Domingo';
    }else if(writtenDay === 1 || writtenDay === 8){
      writtenDay = 'Segunda-feira'
    }else if(writtenDay === 2 || writtenDay === 9){
      writtenDay = 'Terça-feira'
    }else if(writtenDay === 3 || writtenDay === 10){
      writtenDay = 'Quarta-feira'
    }else if(writtenDay === 4 || writtenDay === 11){
      writtenDay = 'Quinta-feira'
    }else if(writtenDay === 5 || writtenDay === 12){
      writtenDay = 'Sexta-feira'
    }else if(writtenDay === 6 || writtenDay === 13){
      writtenDay = 'Sábado'
    }
  
    var wholeText = writtenDay + ', ' + day  + ' de ' + month;

    
    return wholeText;
    
  }

  showDate();
  document.getElementById("date").innerText = showDate(0);
  document.getElementById("date").textContent = showDate(0);
  document.getElementById("dateDay1").innerText = showDate(1);
  document.getElementById("dateDay1").textContent = showDate(1);
  document.getElementById("dateDay2").innerText = showDate(2);
  document.getElementById("dateDay2").textContent = showDate(2);
  document.getElementById("dateDay3").innerText = showDate(3);
  document.getElementById("dateDay3").textContent = showDate(3);
  document.getElementById("dateDay4").innerText = showDate(4);
  document.getElementById("dateDay4").textContent = showDate(4);

  