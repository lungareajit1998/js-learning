console.log("****************** Assignment - 1 ******************");

var voteEligible = function (age) {
    if (age<=0 || age>130) {
        console.log(`In Valid Data : ${age}`);
    } else {
        if (age>=18) {
            console.log(`Eligible for vote : ${age}`);
        } else {
            console.log(`Not Eligible for vote : ${age}`);
        }
    }
    
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);