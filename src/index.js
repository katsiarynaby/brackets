module.exports = function check(str, bracketsConfig) {

  const arrStr = str.split('');

  if (arrStr.length % 2 == 1) {
    return false
  } else {

    const openBrackets = [];
    const closeBrackets = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
      openBrackets.push(bracketsConfig[i][0]);
      closeBrackets.push(bracketsConfig[i][1]);
    }

    const stack = [];
    const arrIndex = [];


    for (let i = 0; i < arrStr.length; i++) {
      //можно indexof или includes
      // если скобка открытая, то идем по этой ветке
      if (openBrackets.includes(arrStr[i])) {

        var index = openBrackets.indexOf(arrStr[i]);

        arrIndex.push(index);
        stack.push(arrStr[i]);

        // если одинаковые рядом
        if (stack[stack.length - 1] == stack[stack.length - 2]) {
          if (openBrackets[index] == closeBrackets[index]) {

            stack.pop();
            arrIndex.pop();
            stack.pop();
            arrIndex.pop();
          }
        };
        continue;
      }

      // если первая закрытая
      if (!closeBrackets[arrIndex[arrIndex.length - 1]]) {
        return false
      }
      // если после открытой идет такая же закрытая
      if (arrStr[i] == closeBrackets[arrIndex[arrIndex.length - 1]]) {
      // и есть еще что удалять
        if (stack.length !== 0) {
          stack.pop();
          arrIndex.pop();
        } else return false
//если после открытой идет закрытая, но не такая как нужна
      } else return false

    }
//когда прошлись по всему и стек пусть
    if (stack.length === 0) return true

    else return false;

  }

}
