console.log("****************** Assignment - 2 ******************");

function gradeCalculation(marks){
    if (marks<=0 || marks>100) {
        console.log(`Please provide the Valid marks : ${marks}`);
    } else {
        if (marks>=90) {
            console.log(`Fantastic marks : ${marks} , Your Grade is : "A+"`);
        } else {
            if (marks>=75 && marks<90) {
                console.log(`Excellent marks : ${marks} , Your Grade is : "A"`);
            } else {
                if (marks>=50 && marks<75) {
                    console.log(`Good marks : ${marks} , Your Grade is : "B"`);
                } else {
                    if (marks>=35 && marks<50) {
                        console.log(`Your Marks is : ${marks} , Your Grade is : "C" , Need improvement.`);
                    } else {
                        if (marks<35) {
                            console.log(`Your marks is : ${marks} , You are Failed. Better Luck Next time`);
                        } else {
                            console.log(`Please provide the valid marks : ${marks}`);
                        }
                    }
                }
            }
        }
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);