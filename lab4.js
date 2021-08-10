function averageNumbers(numbers){
  
    let totalSum = 0;
    
    
      for (let i = 0; i < numbers.length; i++) {
        totalSum=totalSum+numbers[i]
      }
    
    let averageArray = totalSum/(numbers.length)
      return averageArray;
    
    
    }
    
  
  const numbers = [2, 6, 9, 10, 7, 4, 1, 9];
  
  averageNumbers(numbers)