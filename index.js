/*1) let numArr = [1, 3, -5, 7, -9]
Получить новый массив с квадратами этих чисел*/

let numArr = [1, 3, -5, 7, -9]
let numArrNew = numArr.map(item => item*2);

//let numArrNew = numArr.map(item => item*item);

console.log(numArrNew);



/*2)  [1, 2, 3, 4, 5] и ['Text', 'Audio', 'Video']. Объедините два массива в один В полученном массиве измените порядок на обратный*/

let numArray = [1, 2, 3, 4, 5];
let textArray = ['Text', 'Audio', 'Video'];

let mixArray = numArray.concat(textArray);
console.log(mixArray);
mixArray.reverse();
console.log(mixArray);


//3)
let dumbledoresArmy  = [
    {age: 15, name: `Harry`, wasThere: true},
    {age: 16, name: `Draco`, wasThere: false},
    {age: 15, name: `Ronald`, wasThere: true},
    {age: 17, name: `Luna`, wasThere: true},
    {age: 16, name: `Crabbe`, wasThere: false},
    {age: 16, name: `Hermione`, wasThere: true},
    {age: 15, name: `Neville`, wasThere: true},
];
//3.1 Получите средний возраст всех участников(!) отряда

let sum = 0;
dumbledoresArmy.forEach((item) => {
    sum += item.age/dumbledoresArmy.length;
});
console.log(sum.toFixed(2));

//3.2 Преобразовать только в массив имен

let dumbledoresArmyName = dumbledoresArmy.map (item =>
item.name);
console.log(dumbledoresArmyName);



/*4)*/

let arr = [14, 15, 1, -10, -8, 0, 12, -11];

/*4.1 Скопировать в переменную arrCopy и отсортировать массив в порядке возрастания*/

let arrCopy = arr.map(item => item);

arrCopy.sort(((a,b) => a-b));

console.log(arrCopy);

/*4.2 Перебрать массив так, чтобы остались только отрицательные числа. Затем расположить их в порядке убывания*/

// let arrCopy = arr.filter(item => item < 0);

// arrCopy.sort((a,b) => b-a);

// console.log(arrCopy);


/* 4.3 Возвести в квадрат каждый элемент массива, затем расположить по возрастанию, а потом вывести все строкой*/

// let arrCopy = arr.map(item => item * 2);
//
// arrCopy.sort();
//
// console.log(arrCopy);
//
// console.log(arrCopy.join());


/*5)*/
let students = [
    {name: 'John', id: 123, marks:  9 },
    {name: 'Kate', id: 101, marks:  5 },
    {name: 'Olya', id: 200, marks:  7 },
    {name: 'Dan', id: 115, marks: 10 }
];

/* 5.1 Выведите масииив имен в верхнем регистре*/

students.map(item =>
    console.log (item.name.toUpperCase())
);


/*5.2 Создайте массив, куда будут добавлены только оценки стедентов, а затем посчитайте их средний балл*/

let score = students.map(item =>
    item.marks
);
console.log(score);
console.log(score.length);

let caverageScore = 0;

score.forEach((item) => {
    caverageScore += item / score.length;
});
console.log(caverageScore);


/*6) let arr = [1, 2, 3, 0, 12, 1, 3]определить сколько первых элементов нужно сложить, чтобы сумма была больше 10*/

let arr = [1, 2, 3, 0, 12, 1, 3];

let sum = 0;
let newArr= [];

for (let item of arr) {
    sum += item ;
    newArr.push(item);
    if (sum > 10) {
        break;
    }
}
console.log (newArr.length)
console.log(newArr)

