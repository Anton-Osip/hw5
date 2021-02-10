document.write(`1. Сделайте функцию, которая отнимает от первого числа второе и делит на
третье. Числа передаются параметром.<br><br>`)

function fuu(a, b, c) {
    return ((a - b) / c)
}

document.write('(25-7)/3 = ' + fuu(25, 7, 3));
document.write(`<br><br>`);

document.write(`2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
передается параметром.<br><br>`);

function sqbe(a) {
    let s = Math.pow(a, 2);
    let v = Math.pow(a, 3);

    document.write('<br> квадрат числа ' + a + ' = ' + s);
    document.write('<br> куб числа ' + a + ' = ' + v);
}

sqbe(5);


document.write(`<br><br>`);

document.write(`3. Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b.<br><br>`);

function min(a, b) {
    if (a < b) {
        document.write('a < b  ; ' + a + ' < ' + b);
    } else if (a > b) {
        document.write('b < a  ; ' + b + ' < ' + a)
    } else {
        document.write('они равны  ; ' + a + ' = ' + b)
    }

}

function max(a, b) {
    if (a > b) {
        document.write('a > b  ; ' + a + ' > ' + b);
    } else if (a < b) {
        document.write('b > a  ; ' + b + ' > ' + a)
    } else {
        document.write('они равны ; ' + a + ' = ' + b)
    }
}
min(5, 6)
document.write(`<br>`);

max(6, 6)


document.write(`<br><br>`);

document.write(`4. Напишите две функции: первая ф-ция должна возвращать массив с
числовыми значениями, диапазон которых должен вводиться пользователем
с клавиатуры; вторая – выводить полученный массив..<br><br>`);

function getArray(start, finish) {
    let arr = [];
    if (start < finish) {
        for (let i = start; i <= finish; i++) {
            arr.push(i)
        }
    } else {
        for (let i = start; i >= finish; i--) {
            arr.push(i)
        }

    }

    return arr;
}

function showArray(arr) {
    document.write(arr)
}

showArray(getArray(2, 25));
document.write(`<br>`);
showArray(getArray(-2, -25));

document.write(`<br><br>`);

document.write(`5. Сделайте функцию isEven() (even - это четный), которая параметром
принимает целое число и проверяет: четное оно или нет. Если четное - пусть
функция возвращает true, если нечетное — false.<br><br>`);

let num = prompt('Введите число', 5);

function isEven1(a) {
    a % 2 == 0 ? document.write(a + ' четное число') : document.write(a + ' нечетное число');
};

isEven1(num);


document.write(`<br><br>`);

document.write(`6. Напишите ф-цию, в которую передается массив с целыми числами.
Верните новый массив, где останутся лежать только четные из этих чисел.
Для этого используйте вспомогательную функцию isEven из предыдущей
задачи.<br><br>`);

function isEven(a) {
    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }
};

function getIsEvenArray(arr) {
    let evenArr = [];
    for (let elem of arr) {
        if (isEven(elem)) {
            evenArr.push(elem)
        }
    }
    return evenArr;
}


showArray(getIsEvenArray(getArray(-2, -25)));


document.write(`<br><br>`);

document.write(` 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
    циклы):
    1
    22
    333
    4444
    55555
    666666
    7777777
    88888888
    999999999
    Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
    параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
    кроме пробела, то пирамида должна быть нарисована этим символом,
    например:
    *
    **
    ***
    ****
    *****
    ******
    *******
    ********
    *********
    <br><br>`);

function buildPyramid(a) {
    if (arguments.length == 1) {

        for (let i = 1; i <= a; i++) {
            document.write('<br>')
            for (let x = 1; x <= i; x++) {
                document.write(i)
            }
        }

    } else if (arguments[arguments.length - 1] != ' ') {

        for (let i = 1; i <= arguments[0]; i++) {
            document.write('<br>')
            for (let x = 1; x <= i; x++) {
                document.write(arguments[arguments.length - 1])
            }
        }
    }

}
buildPyramid(5);
document.write(`<br>`);

buildPyramid(5, '*');

document.write(`<br><br>`);

document.write(`8. Напишите ф-цию, которая рисует равнобедренный треугольник из
звездочек:
*
***
*****
*******
*********
Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же фцию, но которая выведет перевернутый треугольник.<br><br>`);

function buildPyramid1(a) {
    for (let i = 1; i <= a * 2; i++) {

        if (i % 2 != 0) {
            document.write('&nbsp;'.repeat(a * 2 - i))
        }

        if (i % 2 != 0) {
            document.write('*'.repeat(i))
            document.write('<br>')
        }

    }
}

function buildPyramidRiverse(a) {
    for (let i = a * 2; i >= 1; i--) {

        if (i % 2 != 0) {
            document.write('&nbsp;'.repeat(a * 2 - i))
        }

        if (i % 2 != 0) {
            document.write('*'.repeat(i))
            document.write('<br>')
        }

    }
}

buildPyramid1(5);
document.write(`<br>Перевернутая<br>`);
document.write(`<br>`);
buildPyramidRiverse(5);

document.write(`<br><br>`);

document.write(`9. Напишите ф-цию, которая возвращает массив заполненный числами
Фибоначи от 0 до 1000.<br><br>`);

function numFib() {

    let arr = [1, 2];

    for (let i = 2; arr[arr.length - 1] <= 1000; i++) {

        let lastElem = arr[i - 1] + arr[i - 2];

        if (lastElem >= 1000) {
            return arr;
        } else {
            arr.push(lastElem);
        }

    }

}
document.write(numFib())


document.write(`<br><br>`);

document.write(`10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
опять сложите его цифры. И так, пока сумма не станет однозначным числом
(9 и менее). Исп. Рекурсию.<br><br>`);

function getNum(num) {
    if (num <= 9) {

        document.write(num);

    } else {

        let arr = String(num).split('');
        let sum = 0;

        for (let elem of arr) {
            sum += +elem;
        }
        getNum(sum);
    }
}

getNum(256);


document.write(`<br><br>`);

document.write(`11. Дан массив с числами (передается параметром). Выведите
последовательно его элементы, используя рекурсию и не используя цикл..<br><br>`);

let arr1 = getArray(-2, -25);
let i = 0;

function getElemOfArray(arr) {
    if (i == arr.length - 1) {
        document.write(arr[i]);
    } else {
        document.write(arr[i] + ' ')
        i++;
        getElemOfArray(arr);
    }
}
getElemOfArray(arr1);


document.write(`<br><br>`);

document.write(`  12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер
группы студента и выводящую введённые данные в следующем виде:
*****************************
* Домашняя работа: «Функции» *
* Выполнил: студент гр. W4017 *
* Иванов Иван Иванович *
*****************************
Размер рамки должен определятся автоматически по самой длинной строке.
Рамку вывести в консоль. 
Курс «JS».<br><br>`);

function getCards() {
    let name = prompt('Введите имя', 'Иван');
    let surname = prompt('Введите фамилию', 'Иванов');
    let patronymic = prompt('Введите отчество', 'Иванович');
    let group = prompt('Введите номер группы', 'W4017');
    let space = ' &nbsp; ';

    let longString = 0;
    let dataArr = [
        `* Домашняя работа: «Функции»`,
        `* Выполнил: студент гр. ${group}`,
        `* ${surname} ${name} ${patronymic}`
    ];

    for (let elem of dataArr) {
        if (longString < elem.length) {
            longString = elem.length
        }
    }
    let border = '*'.repeat(longString);
    document.write(border + '<br>');

    for (let elem of dataArr) {

        let spa = longString + 1 - elem.length;

        document.write(elem + space.repeat(spa) + '*<br>')
    }
    document.write(border + '<br>');
}


getCards();


document.write(`<br><br>`);

document.write(`13. Напишите ф-цию, которая должна проверить правильность ввода адреса
эл. почты, неиспользуя регулярные выражения. Почта верна при условии:
a. весь адрес не должен содержать русские буквы и спецсимволы, кроме
одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут
быть первыми и последними в адресе, и идти подряд, например: «..», «@.»,
«.@» или «@@», «_@», «@-», «--» и т.п.
b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
имя может содержать только буквы, цифры, но не быть первыми и
единственными в имени, и точку;
c. после последней точки и после @, домен верхнего уровня (ru, by, com и
т.п.) не может быть длиной менее 2 и более 11 символов.<br><br>`);