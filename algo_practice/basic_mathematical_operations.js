//make function that can take in string op and return value of corrisponding evaluation

const basicOp = (operation, value1, value2) => {
    switch (operation) {
        case "+":
            return value1 + value2
        case "-":
            return value1 - value2
        case "*":
            return value1 * value2
        case "/":
            return value1 / value2
        default:
            return "not a number!"
    }
}