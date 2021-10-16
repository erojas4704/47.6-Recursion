/** product: calculate the product of an array of numbers. */

function product(nums, i = 0, result) {
  if (i >= nums.length) return result;

  if (i === 0) result = nums[0];
  else result *= nums[i];

  return product(nums, i + 1, result);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longestLength = 0) {
  if (i >= words.length) return longestLength;
  if (words[i].length > longestLength) longestLength = words[i].length;
  return longest(words, i + 1, longestLength);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, result = "") {
  if (i >= str.length) return result;
  if (i % 2 === 0) return everyOther(str, i + 1, result + str[i]);
  else return everyOther(str, i + 1, result);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0, backwards = "") {
  if (i >= str.length) return str === backwards;
  backwards += str[str.length - i - 1]
  return isPalindrome(str, i + 1, backwards);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i >= arr.length) return -1;
  if (arr[i] == val) return i;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0, backwards = "") {
  if (i >= str.length) return backwards;
  backwards += str[str.length - i - 1]
  return revString(str, i + 1, backwards);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, result = []) {
  for (const key in obj) {
    const val = obj[key];

    switch (typeof val) {
      case "string":
        result = [...result, val];
        break;
      case "object":
        result = [...gatherStrings(val, result)];
        break;
    }
  }

  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right) {
  if (right == undefined) {
    left = 0;
    right = arr.length;
  }
  let m = Math.floor((left + right) / 2);

  if (val === arr[m]) return m;
  if (right <= left) return -1;

  if (val > arr[m]) return binarySearch(arr, val, m + 1, right);
  else if (val < arr[m]) return binarySearch(arr, val, left, m - 1);

  return -1
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
