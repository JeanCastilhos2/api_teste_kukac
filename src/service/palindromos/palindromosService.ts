function isPalindrome(num: number): boolean {
    const strNum = num.toString();
    const reversedStr = strNum.split('').reverse().join('');
    return strNum === reversedStr;
  }
  
  function palindromosService(noInicio: number, noFim: number): number[] {
    const palindromos: number[] = [];
  
    for (let i = noInicio; i <= noFim; i++) {
      if (isPalindrome(i)) {
        palindromos.push(i);
      }
    }
  
    return palindromos;
  }
  
  export { palindromosService };
  