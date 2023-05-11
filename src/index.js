import _ from 'lodash';

// Array
console.log(_.chunk([1, 2, 3, 4, 5], 2));
console.log(_.compact([0, 1, false, 2, '', 3]));
console.log(_.difference([2, 1], [2, 3]));
console.log(_.drop([1, 2, 3], 2));
console.log(_.fill([4, 6, 8, 10], '*', 1, 3));
console.log(_.flattenDeep([1, [2, [3, [4]], 5]]));
console.log(_.intersection([2, 1], [2, 3]));
console.log(_.reverse([1, 2, 3]));
console.log(_.uniq([1, 2, 2, 3, 3, 3]));

// Collection
console.log(_.countBy([6.1, 4.2, 6.3], Math.floor));
console.log(_.filter([1, 2, 3, 4], n => n % 2 == 0));
console.log(_.flatMap([1, 2], n => [n, n * 2]));
console.log(_.groupBy(['one', 'two', 'three'], 'length'));
console.log(_.map({ a: 4, b: 8 }, n => n * 2));
console.log(_.orderBy([{ name: 'foo' }, { name: 'bar' }], 'name', 'desc'));
console.log(_.partition([1, 2, 3, 4], n => n % 2 == 0));
console.log(_.reduce([1, 2, 3], (sum, n) => sum + n));
console.log(_.shuffle([1, 2, 3, 4]));
console.log(_.zipObject(['a', 'b'], [1, 2]));

// Date
console.log(_.now());

// Function
console.log(_.debounce(() => console.log('debounced'), 1000));
console.log(_.once(() => console.log('called once')));
console.log(_.partial((a, b, c) => console.log(a, b, c), 'a', 'b'));
console.log(_.throttle(() => console.log('throttled'), 1000));

// Lang
console.log(_.isEmpty(null));
console.log(_.isEqual([1, 2], [1, 2]));
console.log(_.isPlainObject({}));
console.log(_.isString('hello'));
console.log(_.toNumber('42'));

// Math
console.log(_.add(6, 4));
console.log(_.clamp(-10, -5, 5));
console.log(_.max([4, 2, 8, 6]));
console.log(_.random(0, 10));
console.log(_.sum([1, 2, 3, 4]));

// Number
console.log(_.ceil(4.006));
console.log(_.floor(4.006));
console.log(_.round(4.006));
console.log(_.random(0, 10, true));
console.log(_.toSafeInteger('3.2'));

// Object
console.log(_.get({ a: { b: 2 } }, 'a.b'));
console.log(_.invert({ a: 'x', b: 'y' }));
console.log(_.keys({ a: 1, b: 2 }));
console.log(_.omit({ a: 1, b: 2 }, 'a'));
console.log(_.set({ a: { b: 2 } }, 'a.b', 3));

// Sequence
console.log(_([1, 2, 3]).concat([4, 5, 6]).value());
console.log(_([1, 2, 3]).dropWhile(n => n < 3).value());
console.log(_([1, 2, 3]).filter(n => n % 2 == 0).value());
console.log(_([1, 2, 3]).flatMap(n => [n, n * 2]).value());
console.log(_([1, 2, 3]).map(n => n * 3).value());
console.log(_([1, 2, 3]).reverse().value());
console.log(_([1, 2, 3]).slice(1, 2).value());
console.log(_([1, 2, 3]).sortBy(n => -n).value());
console.log(_([1, 2, 3]).take(2).value());
console.log(_([1, 2, 3]).uniq().value());

// String
console.log(_.camelCase('foo bar'));
console.log(_.endsWith('abc', 'c'));
console.log(_.kebabCase('foo bar'));
console.log(_.lowerCase('FOO BAR'));
console.log(_.pad('abc', 5, '_'));
console.log(_.repeat('abc', 2));
console.log(_.replace('Hi Fred', 'Fred', 'Barney'));
console.log(_.snakeCase('foo bar'));
console.log(_.startsWith('abc', 'a'));
console.log(_.trim('  abc  '));

// Util
console.log(_.attempt(() => JSON.parse('{"x": 1}')));
console.log(_.defaultTo(undefined, 'default'));
console.log(_.identity('foo'));
console.log(_.noop());
console.log(_.times(3, n => n * 2));
console.log(_.toPairs({ a: 1, b: 2 }));
console.log(_.toPairsIn(Object.create({ a: 1 })));
console.log(_.toString(42));
console.log(_.uniqueId());
console.log(_.zip([1, 2], [3, 4]));