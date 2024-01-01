/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
   
  // first check whether both the strings have same length if not then return false
  if(str1.length!==str2.length){
    return false;
  }

  // converting both strings to lowercase
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();

  //split the strings ,sort them and store them in the form of arr1 and arr2
  let arr1=str1.split("").sort();
  let arr2=str2.split("").sort();

  // checks if both arrays have the same elements at each index position or not
  function check(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
      if(arr1[i]!==arr2[i]){
        return false;
      }
    }
    return true;
  }

  let ans=check(arr1,arr2);
  return ans; 

}

module.exports = isAnagram;
