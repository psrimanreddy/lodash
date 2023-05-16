import _ from 'lodash';

// Array
//creates an array of elements split into groups the length of size.
console.log(_.chunk([1, 2, 3, 4, 5], 2));

//creates an array with all falsey values removed (false, null, 0, "", undefined, and NaN).
console.log(_.compact([0, 1, false, 2, '', 3]));

//creates an array of unique values that are not included in the other arrays.
console.log(_.difference([2, 1], [2, 3]));

//creates a slice of array with n elements dropped from the beginning.
console.log(_.drop([1, 2, 3], 2));

//fills elements of an array with a given value, from start up to, but not including, end.
console.log(_.fill([4, 6, 8, 10], '*', 1, 3));

//flattens a nested array recursively.
console.log(_.flattenDeep([1, [2, [3, [4]], 5]]));

//returns the values that are present in both arrays.
console.log(_.intersection([2, 1], [2, 3]));

//reverses an array.
console.log(_.reverse([1, 2, 3]));

//returns a new array with only unique values from the original array.
console.log(_.uniq([1, 2, 2, 3, 3, 3]));





// Collection
//counts the number of elements in the array after applying the given function (in this case, Math.floor) to each element. Returns an object with the counts for each unique value.
console.log(_.countBy([6.1, 4.2, 6.3], Math.floor));

//creates a new array with all elements that pass the test implemented by the provided function (in this case, the test is whether the element is even).
console.log(_.filter([1, 2, 3, 4], n => n % 2 == 0));

//creates a new flattened array by running each element of the original array through the provided function (in this case, the function doubles each element and returns an array containing both the original element and its doubled value).
console.log(_.flatMap([1, 2], n => [n, n * 2]));

//groups the elements of the array by the result of the provided function (in this case, the length of each string element), returning an object with keys for each unique result and values containing arrays of the corresponding elements.
console.log(_.groupBy(['one', 'two', 'three'], 'length'));

//creates a new array with the results of running each property of the provided object through the provided function (in this case, each property value is doubled).
console.log(_.map({ a: 4, b: 8 }, n => n * 2));

//creates a new array of objects sorted by the value of the specified property (in this case, name) in descending order.
console.log(_.orderBy([{ name: 'foo' }, { name: 'bar' }], 'name', 'desc')); 

//separates the elements of the array into two groups based on whether they pass the test implemented by the provided function (in this case, the test is whether the element is even). Returns an array containing two sub-arrays, one with the passing elements and one with the failing elements.
console.log(_.partition([1, 2, 3, 4], n => n % 2 == 0)); 

//reduces the array to a single value by iterating over each element and accumulating a value based on the result of the provided function (in this case, summing all the values in the array).
console.log(_.reduce([1, 2, 3], (sum, n) => sum + n)); 

//creates a new shuffled array by randomly reordering the elements of the provided array.
console.log(_.shuffle([1, 2, 3, 4])); 

//creates a new object by pairing elements from the two provided arrays (in this case, the first array provides the property names and the second array provides the corresponding property values).
console.log(_.zipObject(['a', 'b'], [1, 2])); 





// Date
//gets the timestamp of the number of milliseconds that have elapsed since the Unix epoch (1 January 1970 00:00:00 UTC).
console.log(_.now()); 

//gets the current timestamp.	
const currentTimestamp = Date.now(); 

//creates a deep clone of a Date object.
const clonedDate = _.cloneDeepWith(new Date(currentTimestamp)); 
console.log('Cloned Date:', clonedDate);

//checks if two Dates are equal.
const date1 = new Date(currentTimestamp);
const date2 = new Date(currentTimestamp);
console.log('Are Dates equal:', _.isEqualWith(date1, date2)); 

//checks if a value is a Date object.
const isDate = _.isDate(new Date(currentTimestamp)); 
console.log('Is it a Date:', isDate);





// Function
//creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.
console.log(_.debounce(() => console.log('debounced'), 1000)); 

//creates a function that is restricted to invoking func once.
console.log(_.once(() => console.log('called once')));

//creates a function that invokes func with partials appended to the arguments it receives.
console.log(_.partial((a, b, c) => console.log(a, b, c), 'a', 'b'));

//creates a throttled function that only invokes func at most once per every wait milliseconds.
console.log(_.throttle(() => console.log('throttled'), 1000));





// Lang
//checks if a value is empty or not. Returns true if the value is null or undefined or has a length of 0.
console.log(_.isEmpty(null));

//compares two values and returns true if they are equal in value and type.
console.log(_.isEqual([1, 2], [1, 2])); 

//checks if an object is a plain object and returns true if it is.
console.log(_.isPlainObject({})); 

//checks if a value is a string and returns true if it is.
console.log(_.isString('hello'));

//converts a value to a number and returns it.
console.log(_.toNumber('42'));





// Math
//adds two numbers and returns the result.
console.log(_.add(6, 4)); 

//clamps a number within the given range and returns it.
console.log(_.clamp(-10, -5, 5)); 

//returns the maximum value in an array.
console.log(_.max([4, 2, 8, 6])); 

//generates a random number between the given range and returns it.
console.log(_.random(0, 10)); 

//returns the sum of all the numbers in an array.
console.log(_.sum([1, 2, 3, 4])); 





// Number
//rounds a number up to the nearest integer and returns it.
console.log(_.ceil(4.006)); 

//rounds a number down to the nearest integer and returns it.
console.log(_.floor(4.006)); 

//rounds a number to the nearest integer and returns it.
console.log(_.round(4.006)); 

//generates a random number between the given range with a floating-point value and returns it.
console.log(_.random(0, 10, true)); 

//converts a value to a safe integer and returns it.
console.log(_.toSafeInteger('3.2')); 





// Object
//gets the value of a nested property from an object using a string path and returns it.
console.log(_.get({ a: { b: 2 } }, 'a.b')); 

//inverts the keys and values of an object and returns it.
console.log(_.invert({ a: 'x', b: 'y' })); 

//returns an array of all the keys of an object.
console.log(_.keys({ a: 1, b: 2 })); 

//returns a new object with all the properties of the original object except the specified ones.
console.log(_.omit({ a: 1, b: 2 }, 'a')); 

//sets the value of a nested property from an object using a string path and returns a new object.
console.log(_.set({ a: { b: 2 } }, 'a.b', 3)); 





// Sequence
//concatenates two arrays and returns the result.
console.log(_([1, 2, 3]).concat([4, 5, 6]).value()); 

//removes elements from an array until the given condition is false and returns the remaining elements.
console.log(_([1, 2, 3]).dropWhile(n => n < 3).value()); 

//filters an array based on the given condition and returns the filtered array.
console.log(_([1, 2, 3]).filter(n => n % 2 == 0).value()); 

//creates a new flattened array by running each element of the original array through iteratee and concatenating the result.
console.log(_([1, 2, 3]).flatMap(n => [n, n * 2]).value()); 

//creates a new array with the results of running each element of the original array through iteratee.
console.log(_([1, 2, 3]).map(n => n * 3).value()); 

//creates a new array with the elements of the original array in reverse order.
console.log(_([1, 2, 3]).reverse().value()); 

//creates a new array with a slice of the original array, starting at the specified start index and ending at the specified end index (but not including it).
console.log(_([1, 2, 3]).slice(1, 2).value()); 

//creates a new array, sorting the elements of the original array by the iteratees function(s).
console.log(_([1, 2, 3]).sortBy(n => -n).value()); 

//creates a new array with the first n elements of the original array.
console.log(_([1, 2, 3]).take(2).value()); 

//creates a new array with only the unique elements of the original array.
console.log(_([1, 2, 3]).uniq().value()); 





// String
//converts string to camel case.
console.log(_.camelCase('foo bar')); 

//checks if string ends with the given target string.
console.log(_.endsWith('abc', 'c')); 	

//converts string to kebab case.
console.log(_.kebabCase('foo bar')); 

//converts string to lowercase.
console.log(_.lowerCase('FOO BAR')); 

//pads string on the left and right sides if it's shorter than length.
console.log(_.pad('abc', 5, '_')); 

//repeats the given string n times.
console.log(_.repeat('abc', 2)); 

//_.replace([string=''], pattern, replacement): replaces matches for pattern in string with replacement.
console.log(_.replace('Hi Fred', 'Fred', 'Barney')); 

//converts string to snake case.
console.log(_.snakeCase('foo bar')); 

//checks if string starts with the given target string.
console.log(_.startsWith('abc', 'a')); 

//removes leading and trailing whitespace or specified characters from string.
console.log(_.trim('  abc  ')); 





// Util
//attempts to invoke func, returning either the result or the caught error object.
console.log(_.attempt(() => JSON.parse('{"x": 1}'))); 

//returns value if it's not null or undefined, else defaultValue.
console.log(_.defaultTo(undefined, 'default')); 

//returns the input value unchanged.
console.log(_.identity('foo')); 

//returns undefined. This is a function that does nothing.
console.log(_.noop()); 

//calls the iteratee function n times, returning an array of the results. In this case, it will invoke the function (n => n * 2) 3 times with n being 0, 1, and 2, and it will return an array of [0, 2, 4].
console.log(_.times(3, n => n * 2)); 

//creates an array of key-value pairs for the given object's own enumerable properties.
console.log(_.toPairs({ a: 1, b: 2 })); 

//creates an array of key-value pairs for the given object's own and inherited enumerable properties.
console.log(_.toPairsIn(Object.create({ a: 1 })));

//converts the input value to a string.
console.log(_.toString(42)); 

//generates a unique ID. In this case, it will return a string with a unique ID.
console.log(_.uniqueId());

//creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on. In this case, it will return an array of [[1, 3], [2, 4]].
console.log(_.zip([1, 2], [3, 4]));
