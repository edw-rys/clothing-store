const toggle=(_selector, _class)=>{
	document.querySelector(_selector).classList.toggle(_class);
}
const toggleChild=(_father, _nChild, _class)=>{
	if(!_father.children[_nChild]) return false;
	_father.children[_nChild].classList.toggle(_class);
}

var animationCharacteristic=(_btn,_nChild,_class)=>{
	toggleChild(_btn.parentNode, _nChild,_class);
	_btn.style.transition="transform 0.1s";
	_btn.style.transform="rotate(45deg)";
}



//crea elementos( nombre del elemento, arreglo atributos, text)
function createElement(_name,_atr, inner) {
	var node=document.createElement(_name);
	//compureba si el atributo tiene valores
	if(_atr)
		for(var a of _atr)
			node.setAttribute(a[0],a[1]);
	//comprueba si el atriuto tiene valores
	if(inner)
		node.innerHTML=inner;
	return node;
}


function getNumbersInString(string) {
	var tmp = string.split("");
	var map = tmp.map(function(current) {
	  if (!isNaN(parseInt(current))) {
		return current;
	  }
	});
  
	var numbers = map.filter(function(value) {
	  return value != undefined;
	});
	return parseInt(numbers.join(""));
}
  