module.exports = function check(str, bracketsConfig) {
  

  const openBrackets = [];
  const closeBrackets = [];
  const arrStr = str.split('');
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
  }
  
  const stack = [];
  const arrIndex = [];
  
  for (let i = 0; i < arrStr.length; i++) {
    
    if ( openBrackets.indexOf(arrStr[i]) != -1) {
      var index = openBrackets.indexOf(arrStr[i]);
        arrIndex.push(index);
        stack.push(arrStr[i]);  
  
        continue;
      } 
    if (arrStr[i] == closeBrackets[arrIndex[arrIndex.length-1]]) {
      if (stack.length != 0) {
        stack.pop();
        arrIndex.pop();
  
        continue;
        
      } else return false
    }  
    
  }
  if (stack.length === 0) return true
  else return false
  
  
}
