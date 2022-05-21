//Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

function min (list){
    return (Math.min(... list))
}

function max (list){
    return (Math.max(...list))
}

//create two functions, one returning the highest number in an array and the other returning the lowest

min([42, 54, 65, 0, -1, -10]) //should return -10
max([4,6,2,1,9,63,-134,566]) //should return 566