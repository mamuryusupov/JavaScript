// [[1], [2, 3, 4], 5, [6]] => [1, 2, 3, 4, 5, 6]

//Привидение в плоски массив
//Option 1
const flatArray = (arr) => {
        const flatArray = arr.reduce((acc, elem) => {
            return acc.concat(elem);
        }, []);
        const flatArray = (arr) => {
            const flatArray = arr.reduce((acc, elem) => {
                return acc.concat(elem);
            }, []);

            const compare = (a, b) => {
                if (a < b) {
                    return -1;
                }
                if (a > b) {
                    return 1;
                }
                return 0;
            };

            return flatArray.slice().sort(compare);
        };
        const initArray = [1, [2, 3, 4], 5, [6]];

        console.log(flatArray(initArray));

        //Привидение в плоски массив
        //Option 2

        // const flatArray = (arr) => arr.flat();

        // const initArray = [1, [2, 3, 4], 5, [6]];

        // console.log(flatArray(initArray));

        //Конкат массива, не мутирует, создает новый массив

        //[1, 2].concat([3, 4], 3, [10]); //создается новый и возвращается плоский массив [1, 2, 3, 4, 3, 10]
        //[1, 2].concat(3); //[1, 2, 3]
        //[1, 2].concat(3, [2, 5]); //[1, 2, 3, 2, 5]

        //Функция reduce, суммирует элементы массива
        //[2, 3, 4] => 10;

        // [2, 3, 4].reduce(function(accumulator, num) {
        //     return accumulator + num;
        // }, 0);

        //1 : 0, 1 => 1
        //2 : 1, 2 => 3
        //3 : 3, 3 => 6
        //4 : 6, 4 => 10