const fs = require('fs');


fs.readFile('./hello.txt', "utf8", (err,data) => {
    console.time('f');

    //start on floor 0
    let floor = 0;
    for(let c=0; c<data.length; c++)
    {
        //up 1 floor
        if(data[c] ==='(')
        {
            floor++;
        }
        //down 1 floor
        else
        {
            floor--;
        }

        // if floor is -1 break and put c in floor
        if(floor === -1){
            //position are index of 1 so
            floor = c + 1;
            break;
        }
    } 

    console.timeEnd('f');

    console.log(floor);


})


// find position of first '(' or ')' that cause him to floor === -1
// positions are index of 1

