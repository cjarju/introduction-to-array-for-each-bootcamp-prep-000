var animals = ["dog", "fish", "cat"],
    evens = [0, 2, 4, 6, 8, 10]

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}

function square(n) {
  console.log(n * n)
}

doToElementsInArray(evens, square)

doToElementsInArray(animals, changeCompletely)
console.log(animals)
