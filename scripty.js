
// let count = localStorage.getItem('page_opens');
// count = parseInt(count) + 1;
// localStorage.setItem('page_opens', count);
// console.log('открыта раз: ' + count);

//  localStorage.setItem("Hello","Hello again");
// let saveWord = localStorage.getItem("Hello");

// console.log(saveWord);


// let savedColor = localStorage.getItem('userColor');


// let pickedColor = prompt('Введите цвет ',savedColor);
// localStorage.setItem('userColor', pickedColor);
// console.log(pickedColor);   
// // НАЗВАНИЯ цвета выводит и запоминает

// // document.body.style.backgroundColor = "#FF0000";
// // нашел но не придумал что с этим сделать

//  let userName = 'Daniill';

//     sessionStorage.setItem('tempUser', userName);
//     let storedName = sessionStorage.getItem('tempUser');
//     console.log('Привет, ' + storedName + '! Эти данные исчезнут, когда вы закроете вкладку.');
//     sessionStorage.removeItem("tempUser");

//     let seconds = 0;
//     setInterval(() =>{

//         seconds++;
//         console.log(seconds,"sec, Пользователь находиться на странице")},1000)


//         let Masiv = [];
//         localStorage.getItem('masivy');
//         localStorage.setItem('masivy', Masiv);


//         let objact =[
//             {
//              volume: 7,
//              muted: false
//             }
//         ];
//         localStorage.getItem('pak');
//         localStorage.setItem('pak', objact.volume);
//         localStorage.setItem('pak', objact.muted);
//         console.log(objact.volume);
//         console.log(objact.muted);  

//         localStorage.clear();


//         if(!firstVisit){
//             console.log(" Welcome!");
//             localStorage.setItem('New itom', "itom")
//         }






const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font="200000px Arial";
//body
ctx.fillStyle ="#6b3003";
ctx.fillRect(25, 50, 200, 200);

//windows
ctx.fillStyle ="#3b1a01";
ctx.fillRect(60, 120, 60, 60);
ctx.fillStyle ="#00bfff";
ctx.fillRect(64, 124, 24, 24);
ctx.fillRect(92, 124, 24, 24);
ctx.fillRect(64, 152, 24, 24);
ctx.fillRect(92, 152, 24, 24);


//dore
ctx.fillStyle ="#3b1a01";
ctx.fillRect(154, 120, 49, 125);

ctx.beginPath();
ctx.arc(161,184,2,0, Math.PI * 2, true);
ctx.stroke();


//border
 ctx.beginPath();
ctx.moveTo(120,10);
ctx.lineTo(225,50);
ctx.moveTo(120,10);
ctx.lineTo(25,50);
ctx.lineTo(225,50);
ctx.lineTo(225,250);
ctx.lineTo(25,250);
ctx.lineTo(25,50);
ctx.stroke();
//roof
ctx.beginPath();
ctx.moveTo(120,10);
ctx.lineTo(225,50);
ctx.lineTo(25,50);
ctx.fill();

//road
ctx.fillStyle ="#c6a500";
 ctx.beginPath();
ctx.moveTo(155,250);
ctx.quadraticCurveTo(140, 270, 114, 270);
ctx.quadraticCurveTo(70, 273, 0, 273);
ctx.quadraticCurveTo(0, 293, 0, 304);
ctx.quadraticCurveTo(200, 320, 204, 250);
ctx.quadraticCurveTo(125, 250, 155, 250);

ctx.fill();


//flue
ctx.fillStyle ="#7e0707";
ctx.fillRect(60, 15, 20, 20);

ctx.beginPath();
ctx.moveTo(60,35);
ctx.lineTo(60,43);
ctx.lineTo(80,35);
ctx.fill();



//smoke
ctx.beginPath();
ctx.moveTo(75,15);
ctx.quadraticCurveTo(55, 12.5, 75, 10);
ctx.quadraticCurveTo(55, 10, 74, 5);
ctx.quadraticCurveTo(55, 3, 73, 0);
ctx.stroke();




//cloud
ctx.fillStyle ="#2feeff";
ctx.beginPath();
ctx.moveTo(275,15);
ctx.quadraticCurveTo(287.5, 5, 300, 15);
ctx.quadraticCurveTo(312.5, 5, 325, 15);
ctx.quadraticCurveTo(337.5, 5, 350, 15);
ctx.quadraticCurveTo(360, 27, 350, 40);
ctx.quadraticCurveTo(337.5, 50, 325, 40);
ctx.quadraticCurveTo(312.5, 50, 300, 40);
ctx.quadraticCurveTo(287.5, 50, 275, 40);
ctx.quadraticCurveTo(265, 27, 275, 15);
ctx.fill();