var subs =["Bangla", "English", "Math", "Biology", "Social-Science", "Higher-Math"];
var marks =[70, 80, 60, 40, 68, 32];

var num=0

while (num < marks.length){
    var sub = subs[num];
    var mark = marks[num];



if(mark >= 80){
 console.log(sub + " You Got A+ Your Grade Point Is 5.0 out of 5.0")
}else if(mark >= 70){
    console.log(sub + " You Got A Your Grade Point Is 4.0 out of 5.0")
}else if(mark >=60){
    console.log(sub + "  You Got A- Your Grade Point Is 3.5 out of 5.0")
}else if(mark >=50){
    console.log(sub + "  You Got B Your Grade Point Is 3.0 out of 5.0")
}else if(mark >=40){
    console.log(sub + "  You Got C Your Grade Point Is 2.0 out of 5.0")
}else if(mark >=33){
    console.log(sub + "  You Got D Your Grade Point Is 1.0 out of 5.0")
}
else{
    console.log(sub + " You are Failed Your Grade Point Is 0.0 out of 5.0")
}
num++;
}
