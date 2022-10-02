function createStack() {
    const items = [];
    return {
        push: function (item) {
            items.push(item)
        },
        pop: function () {
            return items.pop()
        }
    }
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items);