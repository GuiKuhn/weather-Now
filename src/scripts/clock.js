function showTime(timeZone){
    var date = new Date();
    var h = date.getHours() + 3 + parseInt(timeZone, 10)/3600; // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    
    if(h >= 24)
      h = 0;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
  
    
    var time = h + ":" + m;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    
    setTimeout(showTime, 1000);
    
  }
  