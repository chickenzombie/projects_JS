const dnaToRna = (str) => {
	
	let result = ''
	
	if(str === '') return ''
	
	for (let i=0; i<str.length; i++) {
		switch (str[i]) {
  case 'G':
    result = result + 'C'
    break;
  case 'C':
     result = result + 'G'
    break;
  case 'T':
    result = result + 'A'
    break;
	case 'A':
    result = result + 'U'
    break;
  default:
    return null
		}
	}
	return result;	
}

console.log(dnaToRna('ACNTG'))