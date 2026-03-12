const bars = document.querySelectorAll(".bar span");

bars.forEach(bar => {
    const width = bar.getAttribute("data-width");

    setTimeout(() => {
        bar.style.width = width;
    }, 300);
});

const text1 = "Hi, I'm Rajeev Mishra";
const text2 = "Electronics & Instrumentation Student | Developer";

let i = 0;
let j = 0;

function typeLine1() {
    if (i < text1.length) {
        document.getElementById("typing").innerHTML += text1.charAt(i);
        i++;
        setTimeout(typeLine1, 80);
    } else {
        typeLine2();
    }
}

function typeLine2() {
    if (j < text2.length) {
        document.getElementById("typing2").innerHTML += text2.charAt(j);
        j++;
        setTimeout(typeLine2, 50);
    }
}

typeLine1();

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];

for (let x = 0; x < columns; x++)
    drops[x] = 1;

function drawMatrix(){

    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#00ffcc47";
    ctx.font = fontSize + "px monospace";

    for(let i=0;i<drops.length;i++){

        const text = letters.charAt(Math.floor(Math.random()*letters.length));
        ctx.fillText(text,i*fontSize,drops[i]*fontSize);

        if(drops[i]*fontSize > canvas.height && Math.random()>0.975)
            drops[i]=0;

        drops[i]++;
    }
}

setInterval(drawMatrix,33);

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const rotateX = (y - centerY) / 10;
const rotateY = (centerX - x) / 10;

card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{
card.style.transform = "rotateX(0) rotateY(0)";
});

});

const input = document.getElementById("commandInput");
const output = document.getElementById("output");

input.addEventListener("keydown",function(e){

if(e.key==="Enter"){

const cmd = input.value.toLowerCase().trim();
let response="";

if(cmd==="clear"){
output.innerHTML="";
input.value="";
return;
}

else if(cmd==="help")
response='Commands: about, skills, contact, github, instagram, linkedin, clear, <span class="hire">hireme</span>';

else if(cmd==="about")
response="BTech Electronics & Instrumentation student learning development.";

else if(cmd==="skills")
response="Java, Python, HTML, CSS, JavaScript";

else if(cmd==="contact")
response="Email: your@email.com";

else if(cmd==="github"){
response="Opening GitHub...";
window.open("https://github.com/YOURUSERNAME","_blank");
}

else if(cmd==="instagram"){
response="Opening Instagram...";
window.open("https://instagram.com/YOURUSERNAME","_blank");
}

else if(cmd==="linkedin"){
response="Opening LinkedIn...";
window.open("https://linkedin.com/in/YOURUSERNAME","_blank");
}

else if(cmd==="hireme"){
response="Great choice. Downloading resume...";

const link = document.createElement("a");
link.href = "resume.pdf";
link.download = "resume.pdf";
link.click();
}

else
response="Command not found.";

output.innerHTML += `<p>> ${cmd}</p><p>${response}</p>`;

input.value="";

}

});

const boot = document.getElementById("boot");

const bootLines = [
"Initializing system...",
"Loading developer modules...",
"Connecting to portfolio interface...",
"Access granted.",
"Type 'help' to view commands."
];

let line = 0;

function bootSequence(){

if(line < bootLines.length){

const p = document.createElement("p");
p.textContent = bootLines[line];
boot.appendChild(p);

line++;

setTimeout(bootSequence,700);

}

}

bootSequence();