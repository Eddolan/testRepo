/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  var letters = string.split("");
  var result = [];
  var recurse = function(array, string){
    if (array.length === 0){
      result.push(string);
    }
    for (var i = 0; i < array.length; i++){
      var oldString = string;
      var letter = array.splice(i,1);
      var newString = oldString + letter;
      recurse(array, newString);
      array.splice(i,0,letter);
    }
  };

  recurse(letters, "");
  return result;
};