
let count = localStorage.getItem('page_opens');
count = parseInt(count) + 1;
localStorage.setItem('page_opens', count);
console.log('открыта раз: ' + count);

 localStorage.setItem("Hello","Hello again");
let saveWord = localStorage.getItem("Hello");

console.log(saveWord);


let savedColor = localStorage.getItem('userColor');


let pickedColor = prompt('Введите цвет ',savedColor);
localStorage.setItem('userColor', pickedColor);
console.log(pickedColor);   
// НАЗВАНИЯ цвета выводит и запоминает

// document.body.style.backgroundColor = "#FF0000";
// нашел но не придумал что с этим сделать

 let userName = 'Daniill';

    sessionStorage.setItem('tempUser', userName);
    let storedName = sessionStorage.getItem('tempUser');
    console.log('Привет, ' + storedName + '! Эти данные исчезнут, когда вы закроете вкладку.');
    sessionStorage.removeItem("tempUser");

    let seconds = 0;
    setInterval(() =>{

        seconds++;
        console.log(seconds,"sec, Пользователь находиться на странице")},1000)


        let Masiv = [];
        localStorage.getItem('masivy');
        localStorage.setItem('masivy', Masiv);


        let objact =[
            {
             volume: 7,
             muted: false
            }
        ];
        localStorage.getItem('pak');
        localStorage.setItem('pak', objact.volume);
        localStorage.setItem('pak', objact.muted);
        console.log(objact.volume);
        console.log(objact.muted);  

        localStorage.clear();


        if(!firstVisit){
            console.log(" Welcome!");
            localStorage.setItem('New itom', "itom")
        }










