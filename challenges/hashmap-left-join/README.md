# Challenge Summary

<!-- Description of the challenge -->

Write a function that LEFT JOINs two hashmaps into a single data structure.

Write a function called left join
Arguments: two hash maps
The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic
NOTES:

Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row.
If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Traverse all the element of the left object, then use the key to search of the elements in the hashmap of the right

## Big O

Time: O(m+n)

Space: O(n)

## Solution

<!-- Show how to run your code, and examples of it in action -->

[Code Link](./hashmap-left-join.js)

install packages:

    npm i

run test:

    npm test hashmap-left-join

## Test

[Test link](./hashmap-left-join.test.js)
