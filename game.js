const canvas=document.getElementById("gameCanvas");const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;canvas.height=window.innerHeight;
let player={x:canvas.width/2,y:canvas.height/2,speed:3};let keys={};
document.addEventListener("keydown",e=>keys[e.key]=true);
document.addEventListener("keyup",e=>keys[e.key]=false);
function gameLoop(){ctx.clearRect(0,0,canvas.width,canvas.height);
if(keys["w"])player.y-=player.speed;if(keys["s"])player.y+=player.speed;
if(keys["a"])player.x-=player.speed;if(keys["d"])player.x+=player.speed;
ctx.fillStyle="cyan";ctx.beginPath();ctx.arc(player.x,player.y,20,0,Math.PI*2);ctx.fill();
requestAnimationFrame(gameLoop);}gameLoop();
const chatMessages=document.getElementById("chat-messages");
const chatInput=document.getElementById("chat-input");
chatInput.addEventListener("keydown",e=>{if(e.key==="Enter"&&chatInput.value.trim()!==""){
let msg=document.createElement("div");msg.textContent="Você: "+chatInput.value;
chatMessages.appendChild(msg);chatInput.value="";chatMessages.scrollTop=chatMessages.scrollHeight;}});