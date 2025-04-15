const add = function (a: number, b: number, callback: (v: number) => {}) {
    setTimeout(() => {
        callback(a + b);
    }, 2000);
};

add(1, 2, (sum1) => {
    add(3, sum1, (sum2) => {
        add(4, sum2, (sum3) => {
            console.log(`The sum of first 4 natural numbers using callback is ${sum3}`);
        });
    });
});

const addPromise = function (a: number, b: number): string {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
};

addPromise(1, 2)
    .then((sum1) => {
        return addPromise(3, sum1);
    })
    .then((sum2) => {
        return addPromise(4, sum2);
    })
    .then((sum3) => {
        console.log(
            `The sum of 4 natural numbers using promise and then() is ${sum3}`
        );
    }); 