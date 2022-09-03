const fib = {
    n:10,
    [Symbol.iterator] : function(){
        let i= 1;
        let x=0, y=0;
        return{
            next : () =>{
                if(i++ <= this.n){
                    [x,y]= [y,(x+y) || 1];
                    return {value: x, done: false}
                }
                else{
                    return{ done: true}
                }

            }
        }
    }
}
// console.log([...fib]);

for(let num of fib){
    console.log(num);
};