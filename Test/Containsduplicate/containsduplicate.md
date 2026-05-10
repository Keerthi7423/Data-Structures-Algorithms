DAY 2 — HASHSET / DUPLICATE DETECTION
Equivalent LeetCode Problem:
:contentReference[oaicite:0]{index=0}

Pattern:
Duplicate Detection
HashSet
Fast Lookup


====================================================
PROBLEM 1 — JPMORGAN VERSION
====================================================

Problem:

A bank stores transaction IDs.

Return true if any transaction ID appears more than once.

Input:
[101, 205, 333, 101]

Output:
true

Explanation:
101 appears twice


====================================================
JPMORGAN BRUTE FORCE
====================================================

IDEA:
Compare every transaction ID with every other transaction ID.

Code:

function duplicateID(ids){
    for(let t1 = 0; t1 < ids.length; t1++){
        for(let t2 = t1 + 1; t2 < ids.length; t2++){
            if(ids[t1] === ids[t2]){
                return true;
            }
        }
    }
    return false;
}


====================================================
JPMORGAN BRUTE FORCE LINE BY LINE
====================================================

function duplicateID(ids)
→ Takes transaction array

for(let t1 = 0; t1 < ids.length; t1++)
→ Picks first transaction

for(let t2 = t1 + 1; t2 < ids.length; t2++)
→ Checks remaining transactions

if(ids[t1] === ids[t2])
→ Duplicate found

return true
→ Duplicate exists

return false
→ No duplicate exists


====================================================
JPMORGAN BRUTE FORCE COMPLEXITY
====================================================

Time Complexity:
O(n²)

Space Complexity:
O(1)


====================================================
JPMORGAN OPTIMIZED
====================================================

IDEA:
Use HashSet

Code:

function duplicateID(ids){
    const seen = new Set();

    for(let id of ids){
        if(seen.has(id)){
            return true;
        }

        seen.add(id);
    }

    return false;
}


====================================================
JPMORGAN OPTIMIZED LINE BY LINE
====================================================

const seen = new Set()
→ Create HashSet

for(let id of ids)
→ Loop through transactions

if(seen.has(id))
→ Check duplicate

return true
→ Duplicate found

seen.add(id)
→ Store current ID

return false
→ No duplicate found


====================================================
JPMORGAN OPTIMIZED COMPLEXITY
====================================================

Time Complexity:
O(n)

Space Complexity:
O(n)


====================================================
PROBLEM 2 — GOOGLE VERSION
====================================================

Problem:

A platform stores usernames.

Return FIRST username that appears more than once.

Input:
["alex","john","emma","alex","mike"]

Output:
alex


====================================================
GOOGLE BRUTE FORCE
====================================================

IDEA:
Compare every username with remaining usernames

Code:

function platform(users){
    for(let i = 0; i < users.length; i++){
        for(let j = i + 1; j < users.length; j++){
            if(users[i] === users[j]){
                return users[i];
            }
        }
    }
    return null;
}


====================================================
GOOGLE BRUTE FORCE LINE BY LINE
====================================================

function platform(users)
→ Takes usernames array

for(let i = 0; i < users.length; i++)
→ Pick first username

for(let j = i + 1; j < users.length; j++)
→ Check remaining usernames

if(users[i] === users[j])
→ Duplicate found

return users[i]
→ Return first duplicate username

return null
→ No duplicate found


====================================================
GOOGLE BRUTE FORCE COMPLEXITY
====================================================

Time Complexity:
O(n²)

Space Complexity:
O(1)


====================================================
GOOGLE OPTIMIZED
====================================================

IDEA:
Use HashSet

Code:

function platform(users){
    let verify = new Set();

    for(let user of users){
        if(verify.has(user)){
            return user;
        }

        verify.add(user);
    }

    return false;
}


====================================================
GOOGLE OPTIMIZED LINE BY LINE
====================================================

let verify = new Set()
→ Create HashSet

for(let user of users)
→ Loop usernames

if(verify.has(user))
→ Check duplicate

return user
→ Return first duplicate username

verify.add(user)
→ Store username

return false
→ No duplicate found


====================================================
GOOGLE OPTIMIZED COMPLEXITY
====================================================

Time Complexity:
O(n)

Space Complexity:
O(n)


====================================================
YOUR PERFORMANCE REVIEW
====================================================

Strengths:

✅ Good brute force thinking

You quickly understood:

nested loops = brute force

Very good pattern transfer from
:contentReference[oaicite:1]{index=1}

--------------------------------------------

✅ Good optimization thinking

You correctly used:

Set

This shows strong improvement

--------------------------------------------

✅ You understood O(n) optimization

This is important for
:contentReference[oaicite:2]{index=2}
and :contentReference[oaicite:3]{index=3} interviews


====================================================
WHAT TO IMPROVE
====================================================

1. Read problem carefully

Your biggest mistake today:

You returned:

true

for Google problem

But question asked:

return first duplicate username

Always check:

- return boolean?
- return value?
- return index?
- return count?

Google loves changing output format.


--------------------------------------------

2. Improve naming

Example:

verify

Better naming:

seenUsers

More readable in interviews.


--------------------------------------------

3. Explain before coding

In interviews say:

"My brute force solution uses nested loops."

Then:

"I can optimize using HashSet."

This improves communication.


--------------------------------------------

4. Dry run faster

Practice tracing arrays quickly:

[1,2,3,1]

This helps avoid mistakes.


====================================================
INTERVIEW ANSWER
====================================================

"My first solution uses brute force
with nested loops.

Time complexity is O(n²).

To optimize,
I use HashSet for fast lookup.

This reduces time complexity to O(n)."


====================================================
TODAY'S FINAL RATING
====================================================

Brute Force:
7.5/10

Optimized:
8.5/10

Pattern Recognition:
9/10

Requirement Reading:
Needs improvement


====================================================
NEXT DAY
====================================================

Tomorrow:
:contentReference[oaicite:4]{index=4}

JPMorgan version
+
Google version

END DAY 2 🔥