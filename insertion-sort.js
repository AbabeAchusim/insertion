function insertionSort(arr) {
    // Iterate through each element starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be inserted
        let current = arr[i];
        // Initialize a variable to track the position to insert the current element
        let j = i - 1;
        // Move elements of arr[0..i-1], that are greater than current,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Insert the current element into its correct position
        arr[j + 1] = current;
    }
    // Return the sorted array
    return arr;
}

// Example usage:
const array = [12, 11, 13, 5, 6];
console.log("Original array:", array);
console.log("Sorted array:", insertionSort(array.slice())); // Clone the array to avoid modifying the original
