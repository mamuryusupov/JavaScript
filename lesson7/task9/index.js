//1. Learn requirement +
//2. Create step by step code (& input/output for functions) +
//3. Write draft solutions & testing +
//4. Refactoring & final testing

//Step 1
//  Check if user exists in the list of the clients
// 1) indexOf()
//input: Element name
//output:  Index(number)
//2) Save index in the variable client number
//input: index(user) from clients
//output:  index(user) from clients

//Step  2
// 1. Ittirate through array of Balances with  IndexOf (client number)
//input: index(client number)
//output:  number
// 2. check if (balance(element) with (client number)  >  amount)
//input: number, number
//output:  boolean
// 3. true: return balance(element) - amount and return  new balance
//4. false: return -1

const withdraw = (clients, balances, client, amount) => {
    let clientNum = clients.indexOf(client);
    console.log(clientNum);

    const isEnough = (num) => {
        if (num > amount) {
            return num - amount;
        }
        return -1;
    };
    const newBalances = balances.map(isEnough);
    return newBalances[clientNum];
};

console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50));
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10));


-1 : (balances[ind] -= amount);
};