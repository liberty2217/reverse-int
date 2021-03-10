module.exports = function reverse (n) {
  
    let stringN = n.toString().split('').reverse().join('')

    if (stringN.includes('-')) {
      return stringN.slice(0, -1);
      //если в строке есть знак "-" мы удаляем последний символ (этот минус)
    } else {
       return stringN;
    }

};