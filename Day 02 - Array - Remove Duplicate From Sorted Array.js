/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if(nums.length == 0) return 0; //takes care of initial case if nothing in array
    let i = 0; //2 runners i and j
    for (let j=1; j< nums.length; j++){
        if(nums[j] !== nums[i]){
           i++;
           nums[i] = nums[j];
        }
    }
    return i + 1
};


// DIFFERENT APPROACH:

 var removeDuplicates = function(nums) {
    let runner = 1;
    for(let i=0; i<nums.length; i++){
        if(nums[i]>nums[i-1]){
            nums[runner]=nums[i]
            runner++;
        }
    }
    return runner; 
};