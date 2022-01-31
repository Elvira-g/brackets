module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let bracketsPair = {};
  let openBrackets = [];

  bracketsConfig.forEach(function(item){
    openBrackets.push(item[0]);
    bracketsPair[item[1]] = item[0];
  })

  for (let i = 0; i < str.length; i++) {
        
    let currentSymb = str[i];
        
    if (openBrackets.includes(currentSymb)) {
      if (stack.includes(currentSymb)){
        if (bracketsPair[currentSymb] === currentSymb) {
          stack.pop();
        } else {
          stack.push(currentSymb);
        }
      } else {
        stack.push(currentSymb);
      }
            
    } else {
      if (stack.length === 0) {
        return false;
      }

      let topEl = stack[stack.length - 1];

      if (bracketsPair[currentSymb] === topEl) {
        stack.pop();
      } else {
        return false
      }
    }
  }
     
  return stack.length === 0;
}
