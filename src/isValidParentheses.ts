function isValidParentheses(str : string) : boolean {
  let brackets : Record<string, string> = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  let stack : string[] = [];
  for(let i = 0; i < str.length; i++) {
    if(str[i] in brackets) {
      stack.push(str[i]);
    } else {
      let leftBracket : string = stack.pop() as string;
      if(leftBracket && brackets[leftBracket] === str[i]) {
	continue;
      } else {
	return false;
      }
    }      
  }
  return stack.length === 0;
}

export default isValidParentheses;
