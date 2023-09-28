//ЗАДАНИЕ №1

function myFunction(a, b) {
   let sum = 0;
   let count = 0;

   for (let i = a; i <= b; i++) {
      if (i % 2 === 0) {
         sum += i;
         count++;
      }
   }

   console.log(`Сумма четных чисел в диапазоне от ${a} до ${b}: ${sum}`);
   console.log(`Количество четных чисел в диапазоне от ${a} до ${b}: ${count}`);
}


myFunction(1, 10);
myFunction(5, 15);

//ЗАДАНИЕ№2

function isPrime(num) {
   if (num <= 1) {
      return false;
   }

   for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
         return false;
      }
   }

   return true;
}


console.log(isPrime(11));
console.log(isPrime(9));

//ЗАДАНИЕ№3

// Метод последовательного подбора (getSqrtBySequentialSelection):


function getSqrtBySequentialSelection(number) {
   let result = 1;


   while (result * result <= number) {
      result++;
   }


   return result - 1;
}
//Метод бинарного поиска (getSqrtByBinarySearch):


function getSqrtByBinarySearch(number) {
   let left = 0;
   let right = number;


   while (left <= right) {
      let mid = Math.floor((left + right) / 2);


      if (mid * mid <= number) {
         left = mid + 1;
      } else {
         right = mid - 1;
      }
   }


   return right;
}

//ЗАДАНИЕ№4

function getFactorial(n) {
   if (n === 0 || n === 1) {
      return 1;
   }


   let factorial = 1;
   for (let i = 2; i <= n; i++) {
      factorial *= i;
   }


   return factorial;
}


console.log(getFactorial(4));
console.log(getFactorial(5));

//ЗАДАНИЕ№5

function digitSum(y) {
   let sum = 0;
   while (y > 0) {
      sum += y % 10;
      y = Math.floor(y / 10);
   }
   return sum;
}


console.log(digitSum(128));
console.log(digitSum(1));
console.log(digitSum(5659));
