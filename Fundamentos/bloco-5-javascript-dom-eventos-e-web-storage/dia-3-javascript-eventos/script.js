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

//1. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" e marque as classes de feriados e sextas feiras.

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

//2. unção que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

  function createButtonFeriado(feriados){
    let holidayButton = document.createElement("button");
    holidayButton.id = "btn-holiday";
    holidayButton.innerHTML = feriados;
    document.querySelector(".buttons-container").appendChild(holidayButton);
  };

  createButtonFeriado('feriados');

//3. botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que são feriados

  let buttonFeriados = document.querySelector('#btn-holiday');
  let feriados = document.querySelectorAll(".holiday");
  buttonFeriados.addEventListener('click', changeBackgButton);
 
  function changeBackgButton(){
    let inicial = 'white';
    for (let index = 0; index < feriados.length; index++) {
        if(feriados[index].style.backgroundColor === inicial){
            feriados[index].style.backgroundColor = 'rgb(238,238,238)';
        }else{
        feriados[index].style.backgroundColor = inicial;
        }
    } 
  }

//4. Função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

function createbuttonFriday(friday){
    let buttonFriday = document.createElement("button");
    buttonFriday.id = "btn-friday";
    buttonFriday.innerHTML = friday;
    document.querySelector(".buttons-container").appendChild(buttonFriday);
}
createbuttonFriday('Sexta-Feira');


  
 
