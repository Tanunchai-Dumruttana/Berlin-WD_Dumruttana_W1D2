function sumNumbers(numbers){
  
    let totalSum = 0;
    
    
      for (let i = 0; i < numbers.length; i++) {
        totalSum=totalSum+numbers[i]
      }
      return totalSum;
    }
    
  
  const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 10, 12];
  
  sumNumbers(numbers)