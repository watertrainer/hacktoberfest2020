function insertion_sort(ar) {
    for (let i = 0; i < ar.length; i++) {
        let temp = ar[i];
        let j = i
        while (j > 0 && ar[j - 1] > temp) {
            ar[j] = ar[j - 1]
            j--
        }
        ar[j] = temp
    }
    return ar;
}
function randomArray(length) {
    let arr = new Array()
    for (let i = 0; i < length; i++) {
        arr[i] = Math.floor(Math.random() * 200)
    }
    return arr
}
let ar = randomArray(10)
insertion_sort(ar)
console.log(ar)
