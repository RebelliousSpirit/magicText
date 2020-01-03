

function magicText (obj) {

	const printTextOption = obj['selector'] != '' && obj['printText'] == true;
	let elems = getHtmlElements();


	if(printTextOption){
		initPrintedText(elems);
	}

	/**
	 * 
	 * @param  {array} elems 
	 * @return {[type]}       
	 */
	function initPrintedText(elems) {			

		let elemsText = getTextElems(elems);

		for (var i = 0; i < elems.length; i++) {
			printText(elems[i], elemsText[i]);
		}

	}	

	/**
	 * @param  {obj} elems 
	 * @return {array}       
	 */
	function getTextElems(elems) {
 		 
		const elemsText = [];
		
		elems.forEach((item)=>{
			elemsText.push(item.textContent);
		});

		return elemsText;

 	}				 	

 	/**
 	 * [printText description]
 	 * @param  {obj} field HTML element
 	 * @param  {[str]} text  
 	 */
	function printText(field, text) {
		
		let posLetter = 0;
		let string = '';
		let interval = getRandomInt(getRandomInt(250*2.5));
		let cursor = '<i class="magic-cursor"></i>';

		let printLetter = setInterval(()=>{
			
			string+=text[posLetter];
			field.innerHTML = string + cursor;
			posLetter++;
			if(posLetter >= text.length){
				clearInterval(printLetter);
			}

		}, interval);

	}

	/** 
	 * @param  {int} max 
	 * @return {int} 
	 */
	function getRandomInt(max) {

	  return Math.floor(Math.random() * Math.floor(max));

	}

	/**
	 * @return {obj} elems
	 */
	function getHtmlElements() {

		let elems = document.querySelectorAll(obj.selector);
		
		return elems;

	}
}