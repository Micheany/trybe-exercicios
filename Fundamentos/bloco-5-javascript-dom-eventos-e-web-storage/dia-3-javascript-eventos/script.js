function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]; 

  function createDezDay(){
    let getDayList =  document.querySelector("#days");

    for (let index = 0; index < dezDaysList.length; index += 1) {
        const dayNum = dezDaysList[index];
        const dezDay = document.createElement("li");

        if(dayNum == 24 || dayNum == 25 || dayNum == 31){
            dezDay.className = "day holiday";
            dezDay.innerHTML = dayNum;
        }else if( dayNum == 4 || dayNum == 11 || dayNum == 18 || dayNum == 25 ){
            dezDay.className = "day friday";
        dezDay.innerHTML = dayNum;
        }else {
            dezDay.className = "day";
            dezDay.innerHTML = dayNum;
        }     
        getDayList.appendChild(dezDay);
    };

  };

  createDezDay();
  
 
