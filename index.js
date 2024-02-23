const communityButton = document.getElementById('communityButton');
const communityScreen = document.getElementById('communityScreen');
const chatsButton = document.getElementById('chatsButton');
const chatsScreen = document.getElementById('chatsScreen');
const updatesScreen = document.getElementById('updatesScreen')
const updatesButton = document.getElementById('updatesButton')
const callScreen = document.getElementById('callsScreen')
const callButton = document.getElementById('callButton');
const addchat = document.getElementById('addchat')
const addmorechat = document.getElementById('addmorechat')
const save = document.getElementById('save')
const username = document.getElementById('uname')
const date = document.getElementById('date')
let chats = document.querySelectorAll('#chats');
const chatField = document.getElementById('chatField');
let bdy = 0;
let back = 0;
let back1= 0;
let createMsg = 0;
let field = 0;
let subm = 0;
let lane=0;
let lane1=0;
let x = 0;
let y = 0;
let lm = 0;
let el =0;
let th = 0;

chatsScreen.style.display='flex';
chatsButton.style.borderBottom='3px solid #00b150'

communityButton.addEventListener('click',handleCommunity);
function handleCommunity(){
    communityButton.style.borderBottom='3px solid #00b150'
    chatsButton.style.borderBottom='0'
    updatesButton.style.borderBottom='0'
    callButton.style.borderBottom = '0'

    communityScreen.style.display ='flex';
    chatsScreen.style.display ='none';
    updatesScreen.style.display ='none';
    callScreen.style.display ='none';
}

chatsButton.addEventListener('click',handleChats);

function handleChats(){
    chatsButton.style.borderBottom='3px solid #00b150'
    communityButton.style.borderBottom='0'
    updatesButton.style.borderBottom='0'
    callButton.style.borderBottom = '0'
    
    communityScreen.style.display ='none';
    updatesScreen.style.display ='none';
    callScreen.style.display ='none';
    chatsScreen.style.display ='flex';
}

updatesButton.addEventListener('click',handleUpdates);
function handleUpdates(){
    updatesButton.style.borderBottom='3px solid #00b150'
    communityButton.style.borderBottom='0'
    chatsButton.style.borderBottom='0'
    callButton.style.borderBottom = '0'

    communityScreen.style.display ='none';
    updatesScreen.style.display ='flex';
    chatsScreen.style.display ='none';
    callScreen.style.display ='none';
}

callButton.addEventListener('click',handleCalls);
function handleCalls(){
    updatesButton.style.borderBottom='0'
    communityButton.style.borderBottom='0'
    chatsButton.style.borderBottom='0'
    callButton.style.borderBottom = '3px solid #00b150'

    communityScreen.style.display ='none';
    updatesScreen.style.display ='none';
    chatsScreen.style.display ='none';
    callScreen.style.display ='flex';
}

addchat.addEventListener('click',handleAdd);
function handleAdd(){
    addmorechat.style.display='flex'
}

save.addEventListener('click',handleSave);
function handleSave(e){
    e.preventDefault();
    addmorechat.style.display='none';
    if(username.value==''){
        username.value='No name'
    }
    if(date.value==''){
        date.value= '1111-11-11';
    }
    const addchats = document.createElement('div');

    const addChatField = document.createElement('div');
    addChatField.setAttribute('id',`chatF${x}`);
    addChatField.style.width = "100vw"
    addChatField.style.width = "100vh"
    addChatField.style.display = "none";
    
    addChatField.innerHTML = `<header class="cn"><div class="messageHinfo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="back"><path fill="white" d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"/></svg><img src="nodp.png" alt="error" id='img'><span id='nme'>name</span></div><div class="disabledOptions"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="white" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path fill="#ffffff" d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg></div></header><div class="messageBody"><span class="today">Today</span><span class="enc"><svg class="lockS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="rgb(255, 196, 0)" d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>Messages and calls are end to end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more</span><div class="body"></div></div><div class="writeMessage"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="lil" class="lane"><path fill="rgba(255, 255, 255, 0.521)" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM96.8 314.1c-3.8-13.7 7.4-26.1 21.6-26.1H393.6c14.2 0 25.5 12.4 21.6 26.1C396.2 382 332.1 432 256 432s-140.2-50-159.2-117.9zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><input type="text" placeholder="Message" class="createMsg"><i></i><i></i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="lil" class="sub lil"><path fill="white" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg></div>`;

    chatField.appendChild(addChatField);
    addchats.setAttribute('id','chats');
    addchats.setAttribute('class',`chatF${x}`);
    let m = document.querySelectorAll('.body');
    m[x].setAttribute('id',`msg${x}`);
    let i = document.querySelectorAll('.createMsg');
    i[x].setAttribute('id',`createMsg${x}`);
    let s = document.querySelectorAll('.sub');
    s[x].setAttribute('id',`sub${x}`);
    let img = `https://picsum.photos/id/${Math.round(Math.random()*700)}/200/300`;

    let imgH = document.querySelectorAll('#img');
    imgH[x].setAttribute('src',`${img}`);
    let nme = document.querySelectorAll('#nme');
    nme[x].textContent=username.value;
    lane = document.querySelectorAll('.lane');
    back = document.querySelectorAll('.back');

    addchats.innerHTML= `<div class='chatF${x}'><header class='chatF${x}'><main class='chatF${x}'><img src='${img}' alt="error" class='chatF${x}'><div id="name" class='chatF${x}'>${username.value}</div></main><i class='chatF${x}'>${date.value}</i></header><span id="lm" class='chatF${x}'></span></div>`;
    x++;
    chatsScreen.appendChild(addchats)
    chats = [addchats, ...chats];
    for(let i = 0 ; i < chats.length; i++){
        chats[i].addEventListener('click',handleMessages);
    }
    lm = document.querySelectorAll(`#lm`);
}

function handleMessages(event){
    for(let i=0; i<chats.length; i++){
       if(event.target.className==`chatF${i}`){
         const getBox = document.getElementById(`chatF${i}`);
         getBox.style.display='flex';
         field=getBox;
         bdy = document.getElementById(`msg${i}`);
         createMsg = document.getElementById(`createMsg${i}`);
         subm = document.getElementById(`sub${i}`)
         lane1 = lane[i];
         back1 = back[i];
         el = lm[i];
         th=i;
         break;
       }
    }
    createMsgs(bdy,createMsg,subm,lane1,back1,field,el,th);
}

function createMsgs(bdy,creation,subm,lane1,back1,field,el,th){
    back1.addEventListener('click', function(){
        field.style.display='none';
        y=0;
    })
    lane1.addEventListener('click',function(){
        if(y==1){
            y=0;
        }else{
            y=1;
        }
    })
    subm.addEventListener('click',cre)
        function cre(){
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am'; 
        let createE = document.createElement('div');
        hours = hours%12;
        hours = hours ? hours : 12;
        if(y==0){
        createE.setAttribute('class',`sent`);
        createE.innerHTML = `<div>${creation.value}</div> <span>${hours + ":" + minutes + " " + ampm}<svg id="see" fill="rgb(69, 184, 230)" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="rgb(69, 184, 230)" d="M2.305,11.235a1,1,0,0,1,1.414.024l3.206,3.319L14.3,7.289A1,1,0,0,1,15.7,8.711l-8.091,8a1,1,0,0,1-.7.289H6.9a1,1,0,0,1-.708-.3L2.281,12.649A1,1,0,0,1,2.305,11.235ZM20.3,7.289l-7.372,7.289-.263-.273a1,1,0,1,0-1.438,1.39l.966,1a1,1,0,0,0,.708.3h.011a1,1,0,0,0,.7-.289l8.091-8A1,1,0,0,0,20.3,7.289Z"/></svg></span>`;
        }
        if(y==1){
        createE.setAttribute('class',`recieved`);
        createE.innerHTML= `<div>${creation.value}</div>  <span>${hours + ":" + minutes + " " + ampm}</span>`
        }
        createE.setAttribute('id',`ch${th}`);
        if(creation.value!='')
        bdy.appendChild(createE);
        let mee = document.querySelectorAll(`#ch${th}`);
        if(mee[mee.length-1]!=undefined)
        el.textContent = mee[mee.length-1].textContent
        creation.value='';
    };
}