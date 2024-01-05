// High Order Array Methods


// forEach -  it is a method used to iterate over elements in an array. It executes a provided function once for each array element.

goals.forEach(function(first)
{
    console.log(first);
});

// map - it is a method used with arrays to create a new array by applying a function to each element of the original array. 

const tasklists = goals.map(function(second)
{
    return second.task;
});

console.log(tasklists);



// filter - it is a method used with arrays to create a new array containing only the elements that satisfy a specified condition.

const completed = goals.filter(function(c)
{
    return c.isCompleted === true;
});

console.log(completed);


//filter + map
const notcompleted = goals.filter(function(not)
{
    return not.isCompleted === false;
}) .map(function(not)
{
    return not.task;
});

console.log(notcompleted);