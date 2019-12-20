class HashMap {
    //constructor includes argument with initial capacity 8
    //establish length of 0
    //establish an empty hash table
    //establish a capacity set to initial
    //establish a deleted counter

    //get(key) 
    //sets the index using the _findSlot method
    //if the hash table is undefined at that index, throw a key error
    //returns the .value of the hash table at the given index

    //set(key, value)
    //sets a loadRatio of the (length + deleted + 1) divided by the capacity
    //if the load ratio is greater than the HashMap.MAX_LOAD_RATIO, resize using the current capacity * HashMap.SIZE_RATIO
    //set the index to the slot the key should be in
    //if the index of the hash table does not exist (so if it does not have a current value set), increment length
    //set the index of the hash table to include key, value, and deleted attributes

    //delete(key)
    //set the index to the slot where the key should be
    //set the slot to the found index in the hash table
    //if the slot is undefined, throw a 'key error'
    //set the DELETED attribute of the slot to true
    //decrement length
    //increment _deleted

    //_findSlot(key)
    //set the value of hash to HashMap._hashString(key)
    //set the start to hash % this._capacity
    //set up a for loop where i=start where i repeats until it reaches the total of the start + capacity 
    //(or until return condition is met)
    //set index to i%capacity
    //set slot to the hash table at the given index
    //if the slot is undefined (empty) OR the slot.key is equal to the key and has been deleted
    //return the index

    //_resize(size)
    //set oldSlots to the current hash table
    //update the capacity to the size given
    //reset the length, deleted, and hash table attributes
    //for loop through the slots of oldSlots
    //if a slot is undefined AND not deleted
    // use .set(slot.key, slot.value)

    //static _hashString(string) - use given algorithm
    static _hashString(string) {
        let hash = 5381;
        for (let i=0; i<string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i);
            hash = hash & hash
        }
        return hash >>> 0;
    }
}