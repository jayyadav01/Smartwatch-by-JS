let mess = document.querySelector('#message');
let lan = document.querySelector('#lan');
let list = document.querySelector('#list');
let java = document.querySelector('#java');
let html = document.querySelector('#html');
let css = document.querySelector('#css');
let javatext = document.querySelector('#javatext');
let htmltext = document.querySelector('#htmltext');
let csstext = document.querySelector('#csstext');

function time()
{
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();

    if(hour.toString().length == 1)
    {
        hour = '0'+hour;
    }
    if(min.toString().length == 1)
    {
        min = '0'+min;
    }

    let realtime = `${hour} : ${min}`
    return realtime;
}

function week()
{
    let time = new Date();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayname = days[time.getDay()];
    return dayname;
}

setInterval(() => {
    currenttime = time();
    currentweek = week();
    document.getElementById('showtime').innerHTML = currenttime;
    document.getElementById('showtoptime').innerHTML = currenttime;
    document.getElementById('week').innerHTML = currentweek;
},1000);

    

mess.addEventListener('click' , () =>
{
    lan.classList.toggle('closelan');
    if(lan.classList.contains('closelan'))
    {
        lan.style.display = 'block'; 
    }
    else
    {
        lan.style.display = 'none';
        list.style.display = 'none';
        htmltext.style.display = 'none';
        csstext.style.display = 'none';
        javatext.style.display = 'none';
        musicbox.style.display = 'none';
        stopwatchbox.style.display = 'none';
    }
})
java.addEventListener('click', () =>
{
    list.style.display = 'block';
    lan.style.display = 'none';
    javatext.style.display = 'block';
    htmltext.style.display = 'none';
    csstext.style.display = 'none';
})

html.addEventListener('click', () =>
{
    list.style.display = 'block';
    lan.style.display = 'none';
    htmltext.style.display = 'block';
    javatext.style.display = 'none';
    csstext.style.display = 'none';
})

css.addEventListener('click', () =>
{
    list.style.display = 'block';
    lan.style.display = 'none';
    csstext.style.display = 'block';
    htmltext.style.display = 'none';
    javatext.style.display = 'none';
})

let music = document.querySelector('#music');
let musicbox = document.querySelector('#musicbox');
let timebox = document.querySelector("#time");

let firstsong = document.getElementById('get_low');
let secondsong = document.getElementById('on_my_way');
let thirdsong = document.getElementById('faded');
let fourthsong = document.getElementById('lily');
let fifthsong = document.getElementById('lean_on');

music.onclick = () => {

    musicbox.classList.toggle('closemusic');
    if(musicbox.classList.contains('closemusic'))
    {
        musicbox.style.display = 'block';
    }
    else
    {
        musicbox.style.display = 'none';
        stopwatchbox.style.display = 'none';
        lan.style.display = 'none';
        list.style.display = 'none';
        htmltext.style.display = 'none';
        csstext.style.display = 'none';
        javatext.style.display = 'none';
    }
}

let play = document.querySelector('#musicplay')

firstsong.addEventListener('click', () => {
    
    play.src = "../music/Get Low.mp3";
}) 
secondsong.addEventListener('click', () => {
    
    play.src = "../music/ON MY WAY.mp3";
}) 
thirdsong.addEventListener('click', () => {
    
    play.src = "../music/Faded.mp3";
}) 
fourthsong.addEventListener('click', () => {
    
    play.src = "../music/Lily lily.mp3";
}) 
fifthsong.addEventListener('click', () => {
    
    play.src = "../music/Lean.mp3";
}) 

let stopwatch = document.querySelector('#stopwatch');
stopwatch.addEventListener('click', () => {

    stopwatchbox.classList.toggle('closewatch');
    if(stopwatchbox.classList.contains('closewatch'))
    {
        stopwatchbox.style.display = 'block';
    }
    else
    {
        stopwatchbox.style.display = 'none';
        musicbox.style.display = 'none';
        lan.style.display = 'none';
        list.style.display = 'none';
        htmltext.style.display = 'none';
        csstext.style.display = 'none';
        javatext.style.display = 'none';
        
    }
})

let min = 0;
let sec = 0;
let count = 0;

let timer = false;

function start()
{
    timer = true;
    stoptime();
}
function stop()
{
    timer = false;
}
function reset()
{
    timer = false;

    min = 0;
    sec = 0;
    count = 0;

    document.querySelector('#minute').innerHTML = '00';
    document.querySelector('#second').innerHTML = '00';
    document.querySelector('#count').innerHTML = '00';
}

function stoptime()
{
    if(timer == true)
    {
        count = count + 1;

        if(count == 100)
        {
            sec = sec + 1;
            count = 0;
        }
        if(sec == 60)
        {
            min = min + 1;
            sec = 0;
        }
        if(min == 60)
        {
            min++;
        }

        let strmin = min;
        let strsec = sec;
        let strcount = count;

        if(min<10)
        {
            strmin = '0' + strmin;
        }
        if(sec<10)
        {
            strsec = '0' + strsec;
        }
        if(count<10)
        {
            strcount = '0' + strcount;
        }

        document.querySelector('#minute').innerHTML = strmin;
        document.querySelector('#second').innerHTML = strsec;
        document.querySelector('#count').innerHTML = strcount;

        setTimeout(stoptime , 10)
    }
}