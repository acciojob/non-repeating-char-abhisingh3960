let obj ={};
function firstNonRepeatedChar(str) {
 // Write your code here
	for(let ch of str){
		if(obj[ch]){
			obj[ch]++;
		}
		else{
			obj[ch] =1;
		}
	}
	  for (let ch of str) {
        if (charCount[ch] === 1) {
            return ch;
        }
    }
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
