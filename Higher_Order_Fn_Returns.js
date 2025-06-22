function Odd_Even(request) {
    if (request === "odd") {
        return function(n) {
            console.log(n % 2 !== 0); // true if odd
        };
    } else if (request === "even") {
        return function(n) {
            console.log(n % 2 === 0); // true if even
        };
    } else {
        console.log("Wrong request");
    }
}
