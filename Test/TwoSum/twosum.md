PROBLEM:
Find two product prices whose sum equals the given budget.

Input:
prices = [120, 80, 300, 150, 200]
budget = 350

Output:
Return indexes of two prices whose sum = budget


====================================================
1) BRUTE FORCE APPROACH
====================================================

IDEA:
Check every possible pair using nested loops.

Example:

120 + 80 = 200
120 + 300 = 420
120 + 150 = 270
120 + 200 = 320
80 + 300 = 380
80 + 150 = 230
150 + 200 = 350 ← found

Return indexes


BRUTE FORCE CODE:

function isPrice(price, budget){
    for(let p = 0; p < price.length; p++){
        for(let b = p + 1; b < price.length; b++){
            if(price[p] + price[b] === budget){
                return [p, b]
            }
        }
    }
    return []
}


====================================================
BRUTE FORCE LINE BY LINE EXPLANATION
====================================================

function isPrice(price, budget)

→ Creates function
→ price = array
→ budget = target sum


for(let p = 0; p < price.length; p++)

→ Picks first element one by one

Example:
120
80
300
150


for(let b = p + 1; b < price.length; b++)

→ Checks remaining elements

Why p+1?

To avoid:

120 + 120
80 + 80

and duplicate comparisons


if(price[p] + price[b] === budget)

→ Checks if pair matches budget


return [p,b]

→ Return indexes


return []

→ If no pair found


====================================================
BRUTE FORCE COMPLEXITY
====================================================

Time Complexity:
O(n²)

Reason:
Nested loops


Space Complexity:
O(1)

Reason:
No extra storage


====================================================
BRUTE FORCE INTERVIEW EXPLANATION
====================================================

"My first approach is brute force.

I will check every possible pair using nested loops.

If sum matches budget,
I return indexes.

This works but it is inefficient
because nested loops take O(n²) time.

I can optimize this using HashMap."


====================================================
2) OPTIMIZED APPROACH
====================================================

IDEA:
Store previously seen prices in hashmap.

For current price:

Find remaining value needed

remaining = budget - currentPrice

Check if remaining already exists.


OPTIMIZED CODE:

function isPrice(price, budget){
    let account = {}

    for(let p = 0; p < price.length; p++){
        let savings = budget - price[p]

        if(account[savings] !== undefined){
            return [account[savings], p]
        }

        account[price[p]] = p
    }

    return []
}


====================================================
OPTIMIZED LINE BY LINE EXPLANATION
====================================================

function isPrice(price, budget)

→ Creates function


let account = {}

→ Create hashmap

Stores:

price → index


Example:

{
 120:0
}


for(let p = 0; p < price.length; p++)

→ Traverse array


let savings = budget - price[p]

→ Calculate remaining value needed

Example:

budget = 350
current = 150

remaining = 200


if(account[savings] !== undefined)

→ Check if remaining value already exists


return [account[savings], p]

→ Return indexes


account[price[p]] = p

→ Store current value


return []

→ No pair found


====================================================
OPTIMIZED COMPLEXITY
====================================================

Time Complexity:
O(n)

Reason:
Single loop


Space Complexity:
O(n)

Reason:
Hashmap storage


====================================================
OPTIMIZED INTERVIEW EXPLANATION
====================================================

"To optimize brute force solution,
I can use hashmap.

For every element,
I calculate remaining value needed.

Then I check whether that value
already exists in hashmap.

If yes,
I return pair indexes.

This reduces time complexity
from O(n²) to O(n)."


====================================================
FINAL REVIEW
====================================================

Brute Force:
Good logic
Need loop practice

Optimized:
Very strong

Your problem-solving skill is improving fast 🔥

Current level:
Ready for more JPMorgan-style hashmap questions

Next:
First repeating transaction ID
or
Find pair with given difference