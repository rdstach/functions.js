![](https://github.com/theIYD/functions.js/blob/master/media/functionsjs.png)

# functions.js
[![npm](https://img.shields.io/npm/v/functions.js.svg)](https://www.npmjs.com/package/functions.js) [![npm](https://img.shields.io/npm/dy/functions.js.svg)](https://www.npmjs.com/functions.js) [![Build Status](https://travis-ci.org/theIYD/functions.js.svg?branch=master)](https://travis-ci.org/theIYD/functions.js) [![GitHub stars](https://img.shields.io/github/stars/theIYD/functions.js.svg)](https://github.com/theIYD/functions.js/stargazers) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/theIYD/functions.js/pulls) [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/theIYD/functions.js/blob/master/CONTRIBUTING.md) [![GitHub license](https://img.shields.io/github/license/theIYD/functions.js.svg)](https://github.com/theIYD/functions.js/blob/master/LICENSE)

> **functions.js** is a hub of various functions or methods which act differently according to their functionality.

 - Please feel free to contribute, read the <a href="https://github.com/theIYD/functions.js/blob/master/CONTRIBUTING.md">contributing guide</a>.
 - The code is written in ES6.

## Install

The project is up on <a href="https://www.npmjs.com/functions.js">npm</a> and can be used in a project by: 

```
npm install --save functions.js

```
## Usage

Below is an example on how to use the library into your projects.

```js

const func = require('functions.js');

const algo = new func.algorithms();
const mathematics = new func.mathematics();
const strings = new func.strings();

console.log(strings.camelize('john doe'));
//returns 'johnDoe'

console.log(mathematics.factorialOneLine(5));
//returns 120

console.log(algo.selectionSort([5,10,3,1]));
//returns [1,3,5,10]

```

## Client Side

The library can be loaded as a standalone script.

```html

<script type="text/javascript" src="https://unpkg.com/functions.js/umd/FJS.min.js"></script>
<script type="text/javascript">
	const algo = new FJS.algorithms();
	console.log(algo.nthLargest([5,6,9,8,4,2,1]));
	//=> returns 9
</script>
```

## Methods 

| Method Name | Category | Description | Return Type |
| ------------| ------------| ------------| ------------|
|`anagram(str1, str2)` |string |Both strings are anagrams |boolean |
|`average(arr)` |math |Calculates the average of an array |number |
|`binarySearch(arr, elem)` |algorithm |Search an element using binary search tehcnique |number(position) |
|`bubbleSort(arr)` |algorithm |Sort an array using bubble sort technique |array |
|`camelize(str)` |string |Camelize a string i.e CamelCase |string |
|`catalan(number)` |math |Catalan Number |number |
|`changeBase(number, original, final)` |math |Convert a base of a number to any base. |number |
|`chunk(arr, size)` |math |Split array into chunks of smaller arrays of the desired size. |array |
|`clamp(number, min, max)` |math |Clamp a number. |number |
|`collatz(number)` |algortihm |Collatz Algorithm. |number |
|`combination(number,rep)` |math |Calculates simple combination. |number |
|`concat(...arrs)` |algorithm |Concatenates into a single array. |arr |
|`cosineRule(sideOne, sideTwo, theta)` |math |Cosine Rule. |number |
|`countPrimeFactors(n)` |math |A function to count all prime factors of a given number. |number |
|`countVowels(str)` |string |Count the number of vowels in a string. |number |
|`degToRad(deg)` |math |Convert degrees to radians. |number |
|`differenceBetweenDates(date1, date2)` |math |Simple division function which returns an array of quotient & remainder. |array |
|`digitalRoot(number)` |math |Digital Root of a number |number |
|`division(dividend, divisor)` |math |Simple division function which returns an array of quotient & remainder. |array |
|`doublefactorial(n)` |math |Print semi-factorial or double factorial of number using the iterative approach. |number |
|`escape(str)` |string |Escape characters from string |string |
|`euclideanDistance(initial, final)` |math |Calculates the distance between two points in any plane. initial takes an array of initial points & final takes an array of final points. |number |
|`factorialRecursive(n)` |math |Print factorial of a number using recursive function approach. |number |
|`factorialIterative(n)` |math |Print factorial of a number using iterative approach. |number |
|`factorialOneLine(n)` |math |Print factorial of a number using a ternary operator. |number |
|`factCountTrailingZeroes(n)` |math |Print the count of trailing zeroes in n!. |number |
|`fibRecursion(n)` |math |Print nth fibonacci number using recursion. |number |
|`fibDynamic(n)` |math |Print nth fibonacci number using dynamic programming approach. |number |
|`filter(arr, elem)` |string |Filter out an element from an array |array |
|`filterFalsy(arr)` |string |Filter out falsy values from an array |array |
|`fisherYates(arr)` |math |Shuffle an array using the Fisher Yates Algorithm using a while loop. |array |
|`fizzBuzz(n)` |algorithm |FizzBuzz Algorithm: most famous asked question. |string |
|`flatten(arr, givenArr)` |algorithm |Flatten/Merge two arrays. |array |
|`geometricVariance(probability)` |math |Calculate geometric variance. |number |
|`gcd(numb1, numb2)` |math |Calculate the greatest common divisor among the two numbers using Euclideans algorithm. |number |
|`generateHexColor()` |string |Generate random hex color. |string |
|`generateRGBColor()` |string |Generate random RGB color. |string |
|`guid(len)` |string |Generate a Global Unique Identifier |string |
|`hammingDistance(number1, number2)` |math |Calculate hamming distance. |number |
|`hasAtleastOneUpperCaseLetter(str)` |string |String has atleast one upper-cased letter. |boolean |
|`hasAtleastOneLowerCaseLetter(str)` |string |String has atleast one lower-cased letter. |boolean |
|`hexToRgb(hex)` |string |Converts hex color to RGB. |array |
|`humanizeNumber(num)` |string |Humanize a number. |string |
|`insertionSort(arr)` |algorithm |Sort an array using the insertion sort technique. |array |
|`integerReversal(integer)` |mathematics |Reverse an integer. |number |
|`isASCII(str)` |string |String contains ASCII characters |boolean |
|`isBool(str)` |string |String contains true or false |boolean |
|`isDataURI(str)` |string |String is a data uri format. |boolean |
|`isDivisible(dividend, divisor)` |math |Check if the first number is divisible by second one. |boolean |
|`isEmoji(str)` |string |String is an emoji. |boolean |
|`isEmpty(str)` |string |String is empty. |boolean |
|`isEndWith(str, target)` |string |String ends with target. |boolean |
|`isEquals(str, elem)` |string |Compares the two strings entered. |boolean |
|`isEven(number)` |math |True if a number is even, false otherwise. |boolean |
|`isFunction(val)` |string |Value is a function. |boolean |
|`isHexaDecimal(str)` |string |String is hexadecimal. |boolean |
|`isHexColor(str)` |string |String is a hex color. |boolean |
|`isIPAddress(str)` |string |String is an IP address. |boolean |
|`isJSON(str)` |string |String is a JSON object. |boolean |
|`isLowerCase(str)` |string |String is all lower-cased. |boolean |
|`isMACAddress(str)` |string |String is a MAC Address. |boolean |
|`isMD5(str)` |string |String is a a MD5 type. |boolean |
|`initials(str)` |string |Get the initials of a persons name. |string |
|`isOdd(number)` |math |True if a number is odd, false otherwise. |boolean |
|`ISO8601WeekNumber(dateObj)` |string |Get ISO-8601 week number of a year. |number |
|`isPalindrome(str)` |string |String is a palindrome. |boolean |
|`isPrime(number)` |string |Number is a prime. |boolean |
|`isUpperCase(str)` |string |String is all upper-cased. |boolean |
|`isValidEmail(str)` |string |String is a valid email id. |boolean |
|`kebabCase(str)` |string |to Kebab Case. |string |
|`lcm(arr)` |math |Calculate LCM of an array of numbers |number |
|`leibniz(limit)` |math |Predict the value of PI |number |
|`linearSearch(arr, elem)` |algorithm |Search an element using linear search technique |number(position) |
|`lineFromPoints(initial, final)` |math |Create a line from [x1, y1] & [x2, y2] in XY plane. |string |
|`maxOrMin(arr, task)` |math |Get maximum or minimum of an array |number |
|`median(arr)` |math |Calculate median of a sorted number array |number |
|`modularExponential(base, power, mod)` |algorithm |Modular Exponential Algorithm |number |
|`nthRoot(number, n)` |math |Calculates the nth root of a positive number |number |
|`nthSGonalNumber(sides, number)` |math |Calculates the nth s-gonal number of 'sides' polygon |number |
|`nthLargest(arr, nth)` |algorithm |Find the nth largest number from an unsorted array |number |
|`permutation(num,rep)` |math |Calculates simple permutation. |number |
|`pythagorasDistance(arg1, arg2)` |math |Calculate the pythogorean distance if arg1 and arg2 are 2 sides of a right-angled triangle. |number |
|`radToDeg(rad)` |math |Convert radians to degrees |number |
|`remove(arr)` |algorithm |Remove an element from an array |arr |
|`removeDuplicate(arr)` |algorithm |Remove duplicates from an array |arr |
|`removeTags(str)` |string |Remove tags from an HTML statement |string |
|`reverse(arr)` |algorithm |Reverse an array |arr |
|`reverseInPlace(str)` |string |Reverse words of a sentence in place |string |
|`rgbToHex(red,green,blue)` |string |RGB to Hex format |string |
|`romanize(num)` |string |Romanize a number |string |
|`round(number)` |math |Round a number to two places |number |
|`secureEmail(str)` |string |Secures your email using asterisks |string |
|`securePassword(str)` |string |Secure password using astrisks |string |
|`segregate(arr)` |algorithm |Segregate 0's and 1's in an array |array |
|`selectionSort(arr)` |algorithm |Sort an array using the selection sort technique |arr |
|`sigmoid(number)` |math |Sigmoid Function |number |
|`sineRule(sideOne, angleOne, angleTwo)` |math |Sine Rule using two angles & one side |number |
|`slopeOfALine(arg)` |math |Calculates the slope of a line using points and angle of inclination. arg takes angle of inclination or an array of initial points and final points. Example arg = 60 degrees or [x0,y0,x1,y1] |number |
|`snakeCase(str)` |string |to Snake Case |string |
|`sortChar(str)` |string |Sort string characters in alphabetical order |string |
|`splitName(str)` |string |Return the first name and the last name of a person's name. |array |
|`stringHammingDistance(str1, str2)` |string |String Hamming Distance |number |
|`subtract(firstNum, secondNum)` |math |Subtract a number from another |number |
|`sumOfArray(arr)` |math |Addition of all the integers in an array |number |
|`thousandSeperator(num)` |string |Seperate thousands using commas |number |
|`toFloat(str)` |string |Parse string to float value |number |
|`toInt(str)` |string |Parse string to integer value |number |
|`toTitleCase(str)` |string |Convert string to titleCase |string |
|`truncate(str,pos)` |string |Truncate a string at provided position |string |
|`trailingAndLeading(arr)` |string |Remove leading and trailing zeroes from an array |array |
|`unescape(str)` |string |Unescape the string. |string |
|`uuid()` |string |Generate a UUID i.e universally unique identifier. |number |
|`zeroFill(number, len)` |string |Zerofill a number to the given length. |number |


### Documentation
You can find the documentation of the package over [here](https://github.com/theIYD/functions.js/blob/master/docs/api.md)
## Test

Run the following command:

```
npm run test

```

## About
 The project is a continuation to a package previously owned by me named **<a href="https://www.npmjs.com/okay-string">okay-string</a>**. I thought of renaming it to <em>functions</em> & learn more by actually practicing functions. That's how <code>functions.js</code> was created.😍

## FAQ🙋
Here are some solutions to frequently asked questions:

#### Q. How to use ?
Take a look over <a href="https://github.com/theIYD/functions.js#usage">here</a>.

#### Q. Another lodash or underscore ?
These two libraries are industry standards & are widely used. They have a ton of great, useful functions to use in a project. There is a **difference**. functions.js was created to learn predefined methods and make something out of it by creating a new method. So i think there is no comparison between this & the other two libraries. 

#### Q. How do i contribute ?
Read the guidelines mentioned <a href="https://github.com/theIYD/functions.js/blob/master/CONTRIBUTING.md">here</a>

## License📃
 The project is licensed under <a href="https://github.com/theIYD/functions.js/blob/master/LICENSE">MIT</a>

You can view the `license.md` file [here](https://github.com/theIYD/functions.js/blob/master/LICENSE).
