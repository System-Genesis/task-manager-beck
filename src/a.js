let twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == target - nums[j]) {
        return [i, j];
      }
    }
  }
  // In case there is no solution, we'll just return null
  return null;
};

let isPalindrome = (str) => {
  if(str < 0) {
    return false;
  }

  str = str.toString();
  let reverse = '';
  for (let i = 0; i < (str.length / 2); i++) {
    reverse += str.charAt(str.length - i - 1);
  }
  if (reverse === str.substring(0, (str.length / 2).toFixed())) {
    return true;
  } else {
    return false;
  }
};


let isPalindrome2 = (str) => {
  if(str < 0) {
    return false;
  }
  str = str.toString();
  for (let i = 0; i < str.length / 2; i++) {
    const fromRight = str.charAt(str.length - 1 - i);
    const fromLeft = str.charAt(i);

    if (fromRight !== fromLeft) {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome(11));
console.log(isPalindrome(101));
console.log(isPalindrome(1001));
console.log(isPalindrome(1));
console.log(isPalindrome(12321));



var isValid = function (s) {
  const bracketsMap = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  const arrStack = [];
  if (s[0] === '}' || s[0] === ']' || s[0] === ')') return false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{' || s[i] === '[' || s[i] === '(') arrStack.push(s[i]);
    else {
      console.log(s[i]);
      if (arrStack[arrStack.length - 1] === bracketsMap[s[i]]) {
        arrStack.pop();
      } else arrStack.push(s[i]);
    }
  }
  if (!arrStack.length) return true;
  else return false;
};


// console.log(isValid1('({}[])'));
