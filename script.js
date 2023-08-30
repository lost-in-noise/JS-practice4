'use strict';

// 16.1;
// let languages = ['html', 'css', 'javascript', 'python', 'php'];

// let newArrayLanguages = languages.filter(item => item.length > 3);

// console.log(newArrayLanguages);

// 16.3;
// let arr = [-1, -2, -3, 4].some((item) => item > 0);
// console.log(arr);

// 16.4;
// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// let filteredWords = words.filter(word => word.includes('m') || word.includes('M'));

// console.log(filteredWords);


// 16.5;
let wrapperDiv = document.createElement('div');
wrapperDiv.classList.add ('wraper');

document.getElementById('fromJS').appendChild(wrapperDiv);


let imgElement = document.createElement('img');
imgElement.setAttribute('src', 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/tech-ninja-shirtom.jpg');
imgElement.setAttribute('alt', 'image');

let h2Element = document.createElement('h2');
h2Element.classList.add ('title');
h2Element.textContent = 'Happy Coding!';


wrapperDiv.appendChild(imgElement);
wrapperDiv.appendChild(h2Element);



// 16.6;
// let numbers = "12345";
// let numArray = numbers.split("").map(Number);
// let sumOfArray = numArray.reduce((acc, num) => acc + num, 0);
// console.log("Sum:", sumOfArray);

// let numAsNumber = parseInt(numbers);
// console.log("Number:", numAsNumber);


// 16.7;
// let array = ['html', 100, 'css', 'javascript', 25, 10, 'python', 11];

// for (let element of array) {
//     if (typeof element === 'number') {
//       console.log(element);
//     }
// }


// 16.8;
// let array2 = [14, 150, 'css', null, 'javascript', 25];

// let newArray = array2.map(element => (
//     typeof element === 'number' ? element * element :
//     typeof element === 'string' ? element.toUpperCase() :
//     element
//   ));

//   console.log(newArray);


// 16.9;
// let language = 'javascript';
// let reversed = '';

// for (let i = language.length - 1; i >= 0; i--) {
//   reversed += language[i];
// }

// console.log(reversed); // Output: tpircsavaj


// 16.10;
// let info = 'Good day';

// let newInfo = info.slice(5); 

// console.log(newInfo);


// 16.11;
// function getStringLength(stringParamet) {
//     return stringParamet.length;
// }
// let resultLength = getStringLength('Everything starts now!');

// console.log(resultLength);


// 16.12;
// let correctAnswer = "tbilisi";
// let userAnswer = prompt("საქართველოს დედაქალაქი?");
// userAnswer = userAnswer.toLowerCase();

// if (userAnswer === correctAnswer) {
//   console.log("სწორია");
// } else {
//   console.log("არასწორია");
// }



// 16.13;
// function checkLinkForHttps(link) {
//     if (link.indexOf("https://") !== -1) {
//       console.log("კი, მოიცავს");
//     } else {
//       console.log("არ მოიცავს");
//     }
//   }
  
//   let link = "https://google.com";
//   checkLinkForHttps(link);


// 16.14;
// let fruits = ['apple', 'mango', 'avocado', 'kiwi'];
// fruits.splice(fruits.length -2, 1, 'strawberry');
// console.log(fruits);