function indexOfIgnoreCase(str, subStr) {
	
  // write your code here
	str = str.toLowerCase();
	subStr = subStr.toLowerCase();
	let len=subStr.length;

	for(let i=0;i<= str.length-len;i++){
		let ss = str.substring(i, i+len);

		if(check(ss, subStr)){
		return i;
		}
		
	}
		
	

return -1;

	
}

function check(s1, s2){
	for(let i=0;i<s1.length;i++){
		if(s1[i] !== s2[i])
			return false;
	}

		return true;
	}
	

// Please do not change the code below
const s1 = prompt("Enter s1:"); 
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
