let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mozilla.png') {
      myImage.setAttribute('src','images/mozilogo.png');
    } else {
      myImage.setAttribute('src','images/mozilla.png');
    }
};

  


let mybutton=document.querySelector('button');
let myheading=document.querySelector('h1');

function setusername(){
    let myname=prompt('please enter your name.');
    localStorage.setItem('name',myname);
    myheading.textContent='mozilla is cool, '+myname;
    //localStorage.clear;
}
if(!localStorage.getItem('name')) {
    setusername();
  } else {
    let storedName = localStorage.getItem('name');
    myheading.textContent = 'Mozilla is cool, ' + storedName;
  }
mybutton.onclick = function() {
    setusername();
  }