let deno = [1, 2, 5];
let amm = 11;

function coinDeno(arr, amm) {
    let total = 0;
    let largest;
    while (amm > 0) {
        largest = Math.max(...arr)
        if (largest > amm) {
            arr = removeLargest(arr);
            if (!arr.length) return -1;
        }
        else {
            amm -= largest;
            total++;
        }
    }
    return total;
}

function removeLargest(arr) {
    let largest = Math.max(...arr)
    largest = arr.filter(arr => arr !== largest)
    return largest
}


console.log(coinDeno(deno, amm))