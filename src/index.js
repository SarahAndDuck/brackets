module.exports = function check(str, bracketsConfig) {
  let arr = str.split("");
  let flag = true;
  while (flag) {
    flag = false;
    for (let i = 0; i < str.length; i++)
      for (let j = 0; j < bracketsConfig.length; j++) {
        if (
          arr[i] === bracketsConfig[j][0] &&
          arr[i + 1] === bracketsConfig[j][1]
        ) {
          arr.splice(i, 2);
          flag = true;
        }
      }
  }
  return arr.length === 0;
};
