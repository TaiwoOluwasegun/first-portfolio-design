 
// javascript cursor


const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.setAttribute('style', 'top :' +(e.pageY -9)+ 'px; left :' +(e.pageX- 9)+ 'px;')
})

document.addEventListener('click', () => {
    cursor.classList.add('expand');
    setTimeout(()=>{
        cursor.classList.remove('expand')
    },500)
})


//select dom items
const menubtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navitems = document.querySelectorAll('.nav-item');

//initial state of menu
let showmenu = false;

menubtn.addEventListener('click', togglemenu);

function togglemenu() {
    if (!showmenu) {
        menubtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navitems.forEach(item => item.classList.add('show'));

        //change menu state
        showmenu = true;
    } else {
        menubtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navitems.forEach(item => item.classList.remove('show'));

        //change menu state
        showmenu = false;
    }
}

// tech used toggle button

const toggleSkill = document.querySelector('.toggle-skills');
const toggleSkillcont = document.querySelector('.tech-used');

// initial toggle state 

toggleSkill.addEventListener('click', toggData);
let notshowing = true;


function toggData(e) {
    e.preventDefault();
    
    
    if (notshowing) {
        toggleSkillcont.classList.remove('notShowing');
        toggleSkillcont.classList.add('showing');

        //change menu state
        notshowing = false;
    } else {
        toggleSkillcont.classList.add('notShowing');
        toggleSkillcont.classList.remove('showing');
        
        notshowing = true;
    }
}

//toggle button 2

const toggleSkill2 = document.querySelector('.toggle-skills2');
const toggleSkillcont2 = document.querySelector('.tech-used2');

// initial toggle state 

toggleSkill2.addEventListener('click', toggData2);
let notshowing2 = true;


function toggData2(e) {
    
    e.preventDefault();
    
    
    if (notshowing2) {
        toggleSkillcont2.classList.remove('notShowing');
        toggleSkillcont2.classList.add('showing');

        //change menu state
        notshowing2 = false;
    } else {
        toggleSkillcont2.classList.add('notShowing');
        toggleSkillcont2.classList.remove('showing');
        
        notshowing2 = true;
    }
}


//toggle button 3

const toggleSkill3 = document.querySelector('.toggle-skills3');
const toggleSkillcont3 = document.querySelector('.tech-used3');

// initial toggle state 

toggleSkill3.addEventListener('click', toggData3);
let notshowing3 = true;


function toggData3(e) {
    
    e.preventDefault();
    
    
    if (notshowing3) {
        toggleSkillcont3.classList.remove('notShowing');
        toggleSkillcont3.classList.add('showing');

        //change menu state
        notshowing3 = false;
    } else {
        toggleSkillcont3.classList.add('notShowing');
        toggleSkillcont3.classList.remove('showing');
        
        notshowing3 = true;
    }
}


//toggle button 4

const toggleSkill4 = document.querySelector('.toggle-skills4');
const toggleSkillcont4 = document.querySelector('.tech-used4');

// initial toggle state 

toggleSkill4.addEventListener('click', toggData4);
let notshowing4 = true;


function toggData4(e) {
    e.preventDefault();

    
    if (notshowing4) {
        toggleSkillcont4.classList.remove('notShowing');
        toggleSkillcont4.classList.add('showing');

        //change menu state
        notshowing4 = false;
    } else {
        toggleSkillcont4.classList.add('notShowing');
        toggleSkillcont4.classList.remove('showing');
        
        notshowing4 = true;
    }
}


//toggle button 0

const toggleSkill0 = document.querySelector('.toggle-skills0');
const toggleSkillcont0 = document.querySelector('.tech-used0');

// initial toggle state 

toggleSkill0.addEventListener('click', toggData0);
let notshowing0 = true;


function toggData0(e) {
    e.preventDefault();

    
    if (notshowing0) {
        toggleSkillcont0.classList.remove('notShowing');
        toggleSkillcont0.classList.add('showing');

        //change menu state
        notshowing0 = false;
    } else {
        toggleSkillcont0.classList.add('notShowing');
        toggleSkillcont0.classList.remove('showing');
        
        notshowing0 = true;
    }
}


//toggle button 5

const toggleSkill5 = document.querySelector('.toggle-skills5');
const toggleSkillcont5 = document.querySelector('.tech-used5');

// initial toggle state 

toggleSkill5.addEventListener('click', toggData5);
let notshowing5 = true;


function toggData5(e) {
    e.preventDefault();

    
    if (notshowing5) {
        toggleSkillcont5.classList.remove('notShowing');
        toggleSkillcont5.classList.add('showing');

        //change menu state
        notshowing5 = false;
    } else {
        toggleSkillcont5.classList.add('notShowing');
        toggleSkillcont5.classList.remove('showing');
        
        notshowing5 = true;
    }
}


//toggle button 6

const toggleSkill6 = document.querySelector('.toggle-skills6');
const toggleSkillcont6 = document.querySelector('.tech-used6');

// initial toggle state 

toggleSkill6.addEventListener('click', toggData6);
let notshowing6 = true;


function toggData6(e) {
    e.preventDefault();

    
    if (notshowing6) {
        toggleSkillcont6.classList.remove('notShowing');
        toggleSkillcont6.classList.add('showing');

        //change menu state
        notshowing6 = false;
    } else {
        toggleSkillcont6.classList.add('notShowing');
        toggleSkillcont6.classList.remove('showing');
        
        notshowing6 = true;
    }
}





  




