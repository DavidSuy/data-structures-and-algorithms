# HashTables

## Summary

<!-- Description of the challenge -->

The Hashtable class implements a hash table, which maps keys to values. Any non-null object can be used as a key or as a value. To successfully store and retrieve objects from a hashtable, the objects used as keys must implement the hashCode method and the equals method.

## API

<!-- Description of each method publicly available in each of your hashtable -->

set

- Arguments: key, value
- Returns: nothing
- This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
- Should a given key already exist, replace its value from the value argument given to this method.

get

- Arguments: key
- Returns: Value associated with that key in the table

has

- Arguments: key
- Returns: Boolean, indicating if the key exists in the table already.

keys

- Returns: Collection of keys

hash

- Arguments: key
- Returns: Index in the collection for that key

## Solution

[Code link](./hashtable.js)

install packages:

    npm i

run test:

    npm test tree-fizz-buzz

## Test

[Test link](./hashtable.test.js)
