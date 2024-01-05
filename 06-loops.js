//LOOPS

//For loops

for(let i=0; i<=5; i++ /* i=i+1 */)
{
    console.log(i);
    console.log(`for loop no. - ${i}`)
};

//while

let i = 0;
while (i<=5)
{
    console.log(`while loop no. - ${i}`);
    i++
};



//loops in array

const goals = [
    {
        id: 1,
        task: "read",
        isCompleted:true,
    },

    {
        id:2,
        task: "write",
        isCompleted: true,
    },

    {
        id:3,
        task:"bath",
        isCompleted:false,
    }
];  

for(let i=0; i < goals.length; i++)
{
    console.log(goals[i].task);
};



// FOR OF LOOPS

//The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.

//In JavaScript, an iterable object is an object that can be iterated or looped over using a for...of loop. It means you can go through its elements one by one. Arrays, strings, maps, sets, and other built-in objects are iterable.

for(let g of goals)
{
    console.log(g);
};


for(let g of goals)
{
    console.log(g.task);
};

