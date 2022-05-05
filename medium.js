// for (i = 5; i <= 30; i++) {
//     console.log(i);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const shuffledArray = arr.sort((a, b) => 0.5 - Math.random());

// for (i = 0; i <= arr.indexOf(5); i++) {
//     console.log(arr[i])
// }

// for (i = 0; i <= arr.length; i++) {
//     if (i === 5) {
//         console.log(arr.indexOf(i))
//         break;
//     }
// }

// var arr = [4,5,6,7,0,1,2];
// var i = 0;
// while (i <= arr.length) {
//     if (i !== arr[6]) {
//         console.log(-1)
//         break;


//     } else {
//         console.log(arr.indexOf(i))
//         i++
//         break;

//     }
// }


var nums = [4, 5, 6, 7, 0, 1, 2];

function myFunc(arr, target) {
    for (i = 0; i <= arr.length; i++) {
        if (i = target) {
            let index = console.log(arr.indexOf(target));
            return index;

        } else {
            return -1
        }
    }
}
myFunc(nums, 2)
myFunc(nums, 32)









