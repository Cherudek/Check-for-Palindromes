function palindrome(str) {
  // Good luck!
  var strReplace = str.toLowerCase().replace(/[\W_]/g,"");
  var strReverse = strReplace.split("").reverse().join("");
  
   
  if (strReverse === strReplace) {
    return true;
  }
    return false;
}


palindrome("eye");
