const getTotalRevenue = (transactions) => {
    // put your code here

    const enteriesArray = Object.values(transactions);

    const arrayWithAmount = enteriesArray.map((elem) => {
        return elem.amount;
    });
    //  console.log(arrayWithAmount);

    const sumOfAmounts = arrayWithAmount.reduce((accum, num) => {
        // console.log(num);
        let total = accum + num;
        return total;
    }, 0);
    //    console.log(sumOfAmounts);

    return sumOfAmounts;
};

// examples
const dayTransactions = [
    { userId: 22, amount: 60, operation: "sell" },
    { userId: 22, amount: 160, operation: "buy" },
    { userId: 44, amount: 90, operation: "sell" },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
console.log(getTotalRevenue(result));