// FUNCTION

function printHello() {
    console.log('Hello there!');
}

printHello();


// var age = 10;
// var myName = 'Eric';

// var operator = '-';

// var a = 10;
// var b = 15;

// if (age >= 21) {
//     console.log('Is old enough');
// } else if (age === 18) {
//     console.log('Old enough to party!');
// } else if (age < 18 && age > 12) {
//     console.log('You are a brat.');
// } else {
//     console.log('Not old enough!');
// }

/* Primitive Values - only used once */
var str = 'Some string';
var num = 15;
var bool = true;
var jsGivens = null || undefined;
var notANumber = NaN; /* will show up as type = number */
var parsed = parseInt(str); /* will return NaN because it is looking for a number */

console.log(parsed);

/* Reference Values - Items are stored in memory */
var colors = ['red', 'orange', 'yellow', ['apple', 'grape'], 'blue', 'indigo', 'violet']; /* array */
var fruits = colors[3]

/* Ternary Expression */
var result = colors[0] === 'orange' ? 'the color is orange' : 'the color is not orange';

console.log(result);

console.log(fruits[1]);


var names = ['bob', 'eric', 'sarah'];
names[2] = 'something'; /* renames 3rd item */

names.pop(); /* removes last item of array */
names.push('joe'); /* adds to array */
names.unshift('Cassandra'); /* adds item to beginning of array */

console.log(names);

// FOR LOOP

     //counter; condition; incrementor
for (var count = 0; count <= 10; count += 2) {
    console.log(count);
};

// += operator sets the value equal to itself (plus/minus/times/devided-by) the incremental value