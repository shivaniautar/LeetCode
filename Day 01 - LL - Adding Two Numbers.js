// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
var addTwoNumbers = function(l1, l2) {
    let mainNode = new ListNode(0); //new LL
    let node = mainNode; // node nw refers to the mainNode LL
    let sum = 0; // used to hold the sum
    let carry = 0; // if sum is 10+ then we put the extra in var carry

    while(l1 || l2 || sum > 0){

        if (l1){ //if node holds val then add to sum intially sum should have 0
            sum += l1.val; 
            l1 = l1.next; //points it to the next value
        }
        if (l2){
            sum += l2.val;
            l2 = l2.next;
        }
        if(sum > 9){ 
            carry = 1; //if the sum is >9 
            sum = sum - 10;
        }

        node.next = new ListNode(sum);
        node = node.next;

        sum = carry;
        carry = 0;
    }

    return mainNode.next;
    
 };