/**
 * get max number in array for max exponent used later
 * 
 * @param arr array of numbers
 * @returns max number in array
 */
function getMax(arr: Array<number>): number {
    let mx: number = arr[0];
    for (let i = 1; i < arr.length; i++)
        if (arr[i] > mx)
            mx = arr[i];
    return mx;
}

/**
 * Count and sort based on decimal place of number
 * 
 * @param arr array of numbers
 * @param exp exponent for deciaml place
 */
function countSort(arr: Array<number>, exp: number) {
    let output = new Array(arr.length);
    let count: Array<number> = new Array(10).fill(0);

    for (let i = 0; i < arr.length; i++)
        count[Math.floor(arr[i] / exp) % 10]++;
    
    for (let i = 1; i < 10; i++)
        count[i] += count[i - 1];

    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
        count[Math.floor(arr[i] / exp) % 10]--;
    }

    for (let i = 0; i < arr.length; i++)
        arr[i] = output[i];

    console.log(arr);
}

/**
 * Sorts the array
 * 
 * @param arr array of numbers
 */
function radixsort(arr: Array<number>) {
    let m = getMax(arr);

    for (let exp = 1; Math.floor(m /exp) > 0; exp *= 10)
        countSort(arr, exp);
}

export { radixsort }