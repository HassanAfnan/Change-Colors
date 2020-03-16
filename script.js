const colorbtn = document.querySelector('.Btn_Color');
const colorbcg = document.querySelector('body');
const colors = ['yellow','red','green','blue','pink','gray','purple'];

colorbtn.addEventListener('click',changeColor);
function changeColor(){
	let random = Math.floor(Math.random()*colors.length);
	colorbcg.style.backgroundColor = colors[random];
}