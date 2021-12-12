$(document).ready(function () {

  var currentFloor = 2; // переменная текущего этажа
  var floorPath = $(".home_image path") // каждый отдельный этаж в svg
  var counterUp = $(".counter_up") // кнопка увеичение этажа
  var counterDown = $(".counter_down") // кнопка уменьшения этажа

  //  при наведении мышки на этакж
  floorPath.on("mouseover",function(){
    floorPath.removeClass('current-floor') // удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); //получаем заненчение текущего этажа
    $(".counter").text(currentFloor) // записываем значение этажа в конспект справа
  })
  counterUp.on('click', function(){ // отслеживаем клик по кнопек вверх
    if(currentFloor<18){// проверяем значние этажа
          // console.log('Клик')
    currentFloor++;
    //  добавляем нолик к этажам при нажатии кнопки
    usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits:2,useGrouping:false})
    $(".counter").text(usCurrentFloor); // записываемзначение этажа в счетчик справа
    floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж добавив класс
    }
  })
  // отслежиаем нажатие на кнопку вверх
  counterDown.on('click', function(){
    if(currentFloor>2){
          // console.log('Клик')
    currentFloor--;
    //  добавляем нолик к этажам при нажатии кнопки
    usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits:2,useGrouping:false})
    $(".counter").text(usCurrentFloor) // записываемзначение этажа в счетчик справа
        floorPath.removeClass('current-floor') // удаляем активный класс у этажей
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж добавив класс
    }
  })
});