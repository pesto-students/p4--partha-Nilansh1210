function createIncrement() {
    let count=0; //  Count is initialized as 0

    //count=count+1
    function increment() {
        count++;
    }

    let message=`Count is ${count}`; // Message string is created

   
    
    function log() {
        console.log(message);
    }

   
    return[increment,log];
};

const[increment,log] =createIncrement();

increment(); // Incrementing
increment();
increment();
log(); 

## The output will be - Count is 0

## Why? - 
##  When the message string is created, the count value is resolved immediately, which is 0. And then the log function logs it. Hence the message is only created once and the count keeps changing. Thus even after calling increment function multiple times, the message string still remains 0 .
