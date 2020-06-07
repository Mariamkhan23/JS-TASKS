
// CHAP # 1 TASK NUMBER 1 //
alert("Hello! Welome");

// CHAP # 1 TASK NUMBER 2 //
alert("Error! Pleae enter a valid password");

// CHAP # 1 TASK NUMBER 3 //
alert("Welcome to JS Land... \nHappy Coding!");

// CHAP # 1 TASK NUMBER 4//
alert("Welcome to JS Land...");
alert("Happy Coding!\n Prevent this page from creating other dialogs")

// CHAP # 1 TASK NUMBER 5//
console.log("Hello... I can run JS through my web browser's console.")

// CHAP # 1 TASK NUMBER 6 AND 7//
/* HTML Code with ALERTS

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="app.js"></script>
</head>
<body>
    <h1> JAVASCRIPT BASICS</h1>
</body>
</html>
*/



// CHAP # 2 TASK NUMBER 1//
var username;

// CHAP # 2 TASK NUMBER 2//
var myName = "Mariam Khan";

// CHAP # 2 TASK NUMBER 3//
var message;
message = "hello world";
alert(message);

// CHAP # 2 TASK NUMBER 4 //
var studentName = "Mariam";
var age="15 Years Old";
var qualification="Certified Mobile Application Development";
alert(studentName);
alert(age);
alert(qualification);

// CHAP # 2 TASK NUMBER 5//
var food ="PIZZA";
alert(food + "\n" + food.slice(0,4) + "\n" + food.slice(0,3) + "\n" + food.slice(0,2) + "\n" + food.slice(0,1));

// CHAP # 2 TASK NUMBER 6//
var email = "mariam17cs@gmail.com";
alert("My Email address is " +email);


// CHAP # 2 TASK NUMBER 7//
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " +book);

// CHAP # 2 TASK NUMBER 8//
document.write("Yah! I can write HTML content through JavaScript")

// CHAP # 2 TASK NUMBER 9//
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");


// CHAP # 3 TASK 1 //
var age = 21;
alert("I am " +age + " years old.");

// CHAP # 3 TASK 2 //
var  visits = 28;
alert("You have visited this site " +visits + " times");

// CHAP # 3 TASK 3 //
var  birthYear = 1999;
document.write("\nMy birth year is " +birthYear +"\nData type of my declared variable is number.")

// CHAP # 3 TASK 4 //
var visitorsName = "Mariam";
var product = "Scarf";
var quantity = 5;
document.write(visitorsName +" ordered " +quantity +" " +product +"(s) on online Clothing store");

// CHAP # 4 TASK 1//
var name, number, address;

// CHAP # 4 TASK 2//

//legal variable's name
var name1;
var number_6;
var $address;
var rollNumber;
var _schoolName;
//illegal variable's name
var 1name;
var #number;
var alert;
var rollNumber#;
var school-Name;



// CHAP # 4 TASK 3//
document.write("<h1> Rules for naming JS variables </h1> \n Variable names can only contain numbers, $ and _. For example $my_1stVariable <br/> Variables must begin with a letter, $ and _. For example $name, _name or name <br/> Variable names are case sensitive. <br/> Variable names should not be JS keywords.")


// CHAP # 5 TASK 1 //
var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
var ans = +num1 + +num2;
document.write("Sum of " +num1 +" and " +num2 +" is " +ans);


// CHAP # 5 TASK 2 //
var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
var ans = +num1 - +num2;
document.write("<br>Sum of " +num1 +" and " +num2 +" is " +ans);
 ans = +num1 * +num2;
document.write("<br>Sum of " +num1 +" and " +num2 +" is " +ans);
 ans = +num1 / +num2;
document.write("<br>Sum of " +num1 +" and " +num2 +" is " +ans);
 ans = +num1 % +num2;
document.write("<br> Sum of " +num1 +" and " +num2 +" is " +ans);


// CHAP # 5 TASK 3 //
var test;
document.write("Value after variable declaration is " +test);
test = 5;
document.write("<br/>Initial value: " +test);
test++;
document.write("<br/>Value after increment is: "+test);
test = test+7;
document.write("<br/>Value after addition is: "+test);
test--;
document.write("<br/>Value after decrement is: "+test);
test = test%3;
document.write("<br/>The remainder is: "+test);



// CHAP # 5 TASK 4 //
var ticketCost = 600;
document.write("The cost to buy 5 tickets to a movie is " +(ticketCost*5) +"PKR.");


// CHAP # 5 TASK 5 //
document.write("<h2>Table of 3 </h2>");
for(var i=1; i<=10; i++)
{
    document.write("<br/>3 * "+i +" = " +(3*i));
}

// CHAP # 5 TASK 6 //
var tempC = 25;
var tempF = (tempC * (9/5) + 32);
document.write(tempC +"<sup>0</sup>C is " +tempF+"<sup>0</sup>F.");
tempC = (tempF - 32 * (5/9));
document.write("<br>" +tempF +"<sup>0</sup>F is " +tempC+"<sup>0</sup>C.");


// CHAP # 5 TASK 7 Shopping Cart //
var price1 = 650;
var price2 = 100;
var quan1 = 3;
var quan2 = 7;
var shipping = 100;
document.write("<h1> SHOPPING CART </h1> <br>");
document.write("<br> Price of Item 1 is " +price1);
document.write("<br> Price of Item 1 is " +price2);
document.write("<br> Quantity of Item 1 is " +quan1);
document.write("<br> Quantity of Item 1 is " +quan2);
document.write("<br> Shipping Cgarges is 100");
var cost = (price1*quan1) + (price2*quan2) + shipping;
document.write("<br><br><br> Total Cost of your Order is " +cost);



// CHAP # 5 TASK 8 Marksheet //
var totMarks = 650;
var obtMarks = 500;
var per = (obtMarks/totMarks)*100;

document.write("<br> Total Marks: " +totMarks);
document.write("<br> Obtained Marks: " +obtMarks);
document.write("<br> Percentage: " +per);




// CHAP # 5 TASK 9  //
var dollar = 10;
var riyal = 25;
var rupees = (dollar*104.80) + (riyal * 28);
document.write("<h1> CURRENCY IN PKR </h1> <br>");
document.write("<br> Total currency in PKR is " +rupees);



// CHAP # 5 TASK 10//
var num = 10;
var result = ((((+num) + 5) *10 ) /2 );
document.write(result);




// CHAP # 5 TASK 11 //
var currentYear = 2020;
var birthYear = 1999;
document.write("<h1> AGE CALCULATOR </h1> <br>");
document.write("<br> Current Year " +currentYear);
document.write("<br> Current Year " +birthYear);
document.write("<br><br> Your Age is: " + (currentYear-birthYear));



// CHAP # 5 TASK 12 //
var radius = 10.4;
var circumference = 2 * 3.14 * radius;
var area = 3.14 * radius * radius;
document.write("<h1> The Geometrizer </h1> <br>");
document.write("<br> Radius of a Circle is " +radius);
document.write("<br> The circumference is " +circumference);
document.write("<br> The area is: " + area);


// CHAP # 5 TASK 12 //
var favSnake = "chips";
var currentAge = 21;
var maxAge = 50;
var estimatePerDay = 5;
var canEat = (maxAge - currentAge)*estimatePerDay;
document.write("<h1> The Life Time Supply Calculator </h1> <br>");
document.write("<br> Favourite Snake: " +favSnake);
document.write("<br> Current Age: " +currentAge);
document.write("<br> Maximum Age: " +maxAge);
document.write("<br> Amount of Snakes per day: " +estimatePerDay);
document.write("<br> You will need "+estimatePerDay +" " +favSnake +" to ;ast yopu until the ripe old age of  " +maxAge);




// CHAP # 6-9 TASK 1 //
var a = +prompt("Enter a Number");
document.write(" Result: <br/> The Value of a is: " +a +"<br/> .................................................");

document.write("<br/><br/> The value of ++a is: " + (++a));
document.write("<br/> Now the value of a is: " +a);

document.write("<br/><br/> The value of a++ is: " + (a++));
document.write("<br/> Now the value of a is: " +a);

document.write("<br/><br/> The value of --a is: " + (--a));
document.write("<br/> Now the value of a is: " +a);

document.write("<br/><br/> The value of a-- is: " + (a--));
document.write("<br/> Now the value of a is: " +a)



// CHAP # 6-9 TASK 2 //
var a = 2, b = 1;

    var result = --a - --b + ++b + b--;
// Step by step execution //
       // --a - --b + ++b + b--;
     //     2 -  0  +  1  +  1
     //     2 -  0  +  1  +  0
     //     result =  3
document.write(result);



// CHAP # 6-9 TASK 2 //
var name = prompt("What is your Name?", "Enter Name");
alert("Hello "+name);



// CHAP # 6-9 TASK 4 //

var table_num = +prompt("Enter the number for table");
    if (table_num > 0){
        document.write("<h2>Table of " +table_num +"</h2>");
        for(var i=1; i<=10; i++)
            {
                document.write("<br/>"+table_num +"* " +i  +" = " +(table_num*i));
            }
    }
    else{
        document.write("<h2>Table of 5 </h2>");
        for(var i=1; i<=10; i++)
            {
                document.write("<br/> 5 * " +i  +" = " +(5*i));
            }
    }



// CHAP # 6-9 TASK 5 //

    var sub1 = prompt("Enter First Subject");
    var sub2 = prompt("Enter Second Subject");
    var sub3 = prompt("Enter Third Subject");
    var marks1 = +prompt("Enter Marks of First Subject");
    var marks2 = +prompt("Enter Marks of Second Subject");
    var marks3 = +prompt("Enter Marks of Third Subject");
    var total_marks = 100;
    var per1 = (marks1/100)*100;
    var per2 = (marks2/100)*100;
    var per3 = (marks3/100)*100;
    var totObtMarks = marks1 + marks2 + marks3;
    var tot_per = (totObtMarks/300)*100;

    document.write("<table> <tr> <th>Subjects</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th>  </tr> <tr> <td>"+sub1 +"</td> <td>100</td> <td>" +marks1 +"</td> <td>" +per1 +"%</td>  </tr> <tr> <td>"+sub2 +"</td> <td>100</td> <td>" +marks2 +"</td> <td>" +per2 +"%</td>  </tr> <tr> <td>"+sub3 +"</td> <td>100</td> <td>" +marks3 +"</td> <td>" +per3 +"%</td> </tr> <tr> <td></td> <td>300</td> <td>" +totObtMarks +"</td> <td>" +tot_per +"%</td>  </tr></table>");



// CHAP # 9-11 TASK 1 //
var cityName = prompt("Enter your City", "City Name");
if(cityName === "Karachi"){
    alert("Welcome to city of lights");
}



// CHAP # 9-11 TASK 2 //
var gender = prompt("Enter Gender");
if(gender === "Male" || gender === "male"){
    alert(" Good Morning Sir");
}
else{
    alert(" Good Morning Ma'am");
}


// CHAP # 9-11 TASK 3 //
var color = prompt("Enter color of traffic signal");
document.write("<table> <tr> <td> Signal Color </td> <td> Message </td></tr> <tr> <td> Red </td> <td> Must Stop </td></tr> <tr> <td> Yellow </td> <td> Ready to move </td></tr> <tr> <td> Green </td> <td> Move Now </td></tr></table>")


// CHAP # 9-11 TASK 4 //
var remainFuel = +prompt("Remaining Fuel", "Enter remaining fuel in liters");
if(remainFuel < 0.25){
    alert("Please refill the fuel in your car");
}
else{
    alert("You can travel");
}


// CHAP # 9-11 TASK 5 //
var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true"); 
  }
// Displayed//

var b = 82; 
if (b++ === 83){ 
    alert("given condition for variable b is true"); } 
    // Not Displayed //

var c = 12; 
    if (c++ === 13){ alert("condition 1 is true"); }  
    if (c === 13){ alert("condition 2 is true"); }  // Displayed //
    if (++c < 14){ alert("condition 3 is true"); } 
    if(c === 14){ alert("condition 4 is true"); }  // Displayed //

var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost)
{ alert("The cost equals"); } 
 // Displayed //

 if (true)
 { alert("True"); } // Displayed //
  if (false){ alert("False"); }  // Not Displayed //

  if("car" < "cat")
  { alert("car is smaller than cat"); }  // Displayed //
 
 

// CHAP # 9-11 TASK 6 //
var obtainedMarks = +prompt("Enter Obtained Marks of 3 Subjects", "Obtained Marks");
var totalMarks = +prompt("Enter Total Marks", "Total Marks");
var percent = (obtainedMarks/totalMarks)*100;
var grade = "null";
var remarks = "null";
if(percent >= 80)
{
    grade = "A-1";
    remarks = "Excellent";
}
else if(percent >= 70)
{
    grade = "A";
    remarks = "Good";
}
else if(percent >= 60)
{
    grade = "B";
    remarks = "You need to improve";
}
else{
    grade = "Fail";
    remarks = "Sorry";
}
document.write("<div> <h1> Mark Sheet </h1> <br> <br> Total Marks: " +totalMarks +"<br> Obtained Marks: " +obtainedMarks +" <br> Percentage: " +percent +"<br> Grade: " +grade +"<br> Remarks: " +remarks);



// CHAP # 9-11 TASK 7 //
var secret = 7;
var guess = +prompt("Guess the Secret Number from 1 to 10", "Enter Number");
if( guess === secret){
    alert("Bingo! Correct answer");
}
else if( guess === secret + 1){
    alert("Close enough to the correct answer");
}


// CHAP # 9-11 TASK 8 //

var inputNumber = +prompt("Enter any Number");
if( inputNumber % 3 === 0){
    alert("Number is divisible by 3");
}
else{
    alert("Number is not divisible by 3");
}


// CHAP # 9-11 TASK 9 //

var inputNumber = +prompt("Enter any Number");
if( inputNumber % 2 === 0){
    alert("Number is Even");
}
else{
    alert("Number is Odd");
}


// CHAP # 9-11 TASK 9 //

var Temp = +prompt("Enter Temperature");
if( Temp > 40 ){
    alert("It is too hot outside");
}
else if ( Temp > 30 ){
    alert("The Weather today is Normal.");
}
else if ( Temp > 20 ){
    alert("Today’s Weather is cool.");
}
else if ( Temp > 10 ){
    alert("OMG Today’s Weather is so cool." );
}
 

 // CHAP # 9-11 TASK 10 //
 var firstNumber = +prompt("Enter First Number");
 var secondNumber = +prompt("Enter Second Number");
 var operation = prompt("Enter Operation" , "Like (+, -, *, /, %) ");
 if(operation === "+")
 {
     alert("Sum of " +firstNumber +" and " +secondNumber +" is: "+(firstNumber+secondNumber));
 }
 else if(operation === "-")
 {
     alert("Subtraction of " +firstNumber +" and " +secondNumber +" is: "+(firstNumber-secondNumber));
 }
 else if(operation === "*")
 {
     alert("Multiplication of " +firstNumber +" and " +secondNumber +" is: "+(firstNumber*secondNumber));
 }
 else if(operation === "/")
 {
     alert("Division of " +firstNumber +" and " +secondNumber +" is: "+(firstNumber/secondNumber));
 }
 else if(operation === "%")
 {
     alert("Remainder From " +firstNumber +" to " +secondNumber +" is: "+(firstNumber%secondNumber));
 }
 
 */

 // CHAP # 12-13 TASK 1//
 var char = prompt("Enter any Character?");
 if( char >= "A" && char <= "Z"){
     alert("Uppercase Letter..!")
 }
 else{
     alert("Lowercase Letter..!")
 }
 

 // CHAP # 12-13 TASK 2 //
 var firstNumber = +prompt("Enter First Number");
 var secondNumber = +prompt("Enter Second Number");
 if(firstNumber > secondNumber){
     alert("Lager Number is " +firstNumber);
 }
 else if( firstNumber === secondNumber)
 {
     alert("Both Numbers are Equal.");
 }
 else{
     alert("Lager Number is " +secondNumber);
 }

 

 // CHAP # 12-13 TASK 3 //
 var Number = +prompt("Enter Number");
 
 if(Number > 0){
     alert("Number is Positive");
 }
 else if(Number < 0){
    alert("Number is Negative");
}
 else{
     alert("Number is Zero");
 }


// CHAP # 12-13 TASK 4 //
var char = prompt("Enter any character");
if( char === "A" || char === "a" || char === "E" || char === "e" || char === "I" || char === "i" || char === "O" ||char === "o" || char === "U" || char === "u" );
{
    alert("TRUE...!");
}
else{
    alert("FALSE...!");
}



// CHAP # 12-13 TASK 5 //
var Password = "wer4";
var inpPassword = prompt("Enter Password");
if(inpPassword != ""){
if (inpPassword != Password){
    alert("Incorrect password.");
}
else{
    alert(" Correct! The password you entered matches the original password.");
}
}
else {
    alert(" Please enter your password.");
}


// CHAP # 12-13 TASK 6 //
var greeting; 
var hour = 13; 
if (hour < 18) 
{ greeting = "Good day"; 
else greeting = "Good evening"; } 

// Correct Code is Shown below  //
var greeting; 
var hour = 13; 
if (hour < 18) 
{ greeting = "Good day"; }
else 
{greeting = "Good evening"; } 
 
 

 // CHAP # 12-13 TASK 7 //
 var time = +prompt("Enter Time in 24 hour format", "Like 1900 = 7pm");
 
 if(time >= 0000 && time <= 1200){
     alert("Good Morning");
 }
 else if(time >= 1200 && time <= 1700){
    alert("Good Afternoon");
}
 else if(time >= 1700 && time <= 2100){
    alert("Good Evening");
}
else{
    alert("Good Night");
}



// chap # 14-15 task 1 //
var studentNames = [];

// chap # 14-15 task 2 //
var studentNames = new Array();

// chap # 14-15 task 3 //
var stringArray = ["apple" , "mango" , "banana"];

// chap # 14-15 task 4 //
var numberArray = [12, 23, 34, 45];

// chap # 14-15 task 5 //
var stringArray = [true, false, true];

// chap # 14-15 task 6 //
var booleanArray = ["apple" , 67 , true];

// chap # 14-15 task 7 //
var arr = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
document.write("Qualifications: <br>")
var j = 0;
for(var i =0; i<arr.length; i++){
    document.write("<br>"+(++j) +") " +arr[i]);
}



// chap # 14-15 task 8 //
var names = ["MARIAM", "AREEBA", "DUA"];
var score = [466, 330, 499];
for(var i =0; i<names.length; i++){
    document.write("<br> Score of " +names[i] +" is " +score[i]+ ". Percentage: " +(score[i]/500)*100);
}




// chap # 14-15 task 9 //
var colors = ["Yellow", " Purple", " Green"];
document.write(colors);
var addStart = prompt("what color he/she wants to add to the beginning");
colors.unshift(addStart);
document.write("<br>" +colors);
var addEnd = prompt("what color he/she wants to add at the end");
colors.push(addEnd);
document.write("<br>" +colors);
colors.unshift("brown", "black");
document.write("<br>" +colors);
colors.shift();
document.write("<br>" +colors);
colors.pop();
document.write("<br>" +colors);
var index =+prompt(" At which index You wants to add a color");
var colorName =prompt(" Enter color name");
colors.splice(index, 1,colorName);
document.write("<br>" +colors);
var index1 =+prompt(" From which index You wants to delete a color");
var colorNum =prompt(" How many colors you want to delete");
colors.splice(index1, colorNum);
document.write("<br>" +colors);
 


// chap # 14-15 task 10 //

var score = [466, 330, 499];
document.write(" Score of Students: " +score);
score.sort();
document.write("<br> Ordered Score of Students: " +score);


 

// chap # 14-15 task 11 //
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Pesshawar"];
document.write(" <h1>Cities List:</h1> <br> " +cities);
var selectedCities = cities.slice(2,4);
document.write("<br> <h1>Selected Cities List:</h1> <br> " +selectedCities);



// chap # 14-15 task 12 //
var arr =["This ", "is ", "my ", "cat "]; 
document.write(" <h1>Array:</h1> " +arr);
 
document.write(" <h1>String:</h1> " +arr.join(" "));



// chap # 14-15 task 13 //
var array = ["A", "B", "C", 1, 2, 3];
document.write("<h3> FIRST IN FIRST OUT </h3>");
for(var i =0; i<array.length; i++){
    document.write("<br> OUT: "+array[i]);
}


// chap # 14-16 task 14 //
var array = ["A", "B", "C", 1, 2, 3];
document.write("<h3> LAST IN FIRST OUT </h3>");
for(var i = array.length-1; i>=0 ; i--){
    document.write("<br> OUT: "+array[i]);
}
 

// chap # 14-16 task 15 //
var array = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select> <option> Mobile Brands </option> <option>" +array[0] +" </option> <option>" +array[1] +" </option> <option>" +array[2] +" </option> <option>" +array[3] +" </option> <option>" +array[4] +" </option> <option>" +array[5] +" </option>  </select>");



// CHAP # 17-20 TASK 1 //
var multiDimensional = [];

// CHAP # 17-20 TASK 2 //
var multiDimensional = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]

];
for( var i=0; i<=multiDimensional.length; i++)
{   for( var j=0; j<=multiDimensional.length; j++){
    document.write(+multiDimensional[i][j] +" ");
}
document.write("<br>")
}
 

// CHAP # 17-20 TASK 3 //
for( var i=1; i<=10; i++)
{
    document.write("<br> "+i);

}


// CHAP # 17-20 TASK 4 //
var table_num = +prompt("Enter a Number to show it's Multiplication Table");
var length = +prompt("Enter length of a Table");
document.write("Multiplication Table of " +table_num +" Length "+length);
for(var i=1; i<=length; i++)
            {
                document.write("<br/>"+table_num +"* " +i  +" = " +(table_num*i));
            }



// CHAP # 17-20 TASK 5 //
var fruits = ["Apple", "Mango", "Banana", "Orange", "Strawberry"];
document.write("<div> ");
for(var i = 0; i<fruits.length; i++){
    document.write("<br> " +fruits[i]);
}

for(var i = 0; i<fruits.length; i++){
    document.write("<br> Element at index "+i +" is " +fruits[i]);
}
document.write("</div> ");

// CHAP # 17-20 TASK 6 //
document.write("<h3> COUNTING: </h3> <div>");
for( var i=1; i<=15; i++)
{
    document.write(" "+i +",");

}
document.write("<h3> REVERSSE COUNTING: </h3>");
for( var i=10; i>=1; i--)
{
    document.write(" "+i +",");

}

document.write("<h3> EVEN: </h3>");
for( var i=0; i<=20; i+=2)
{
    document.write(" "+i +",");

}

document.write("<h3> ODD: </h3>");
for( var i=1; i<=20; i+=2)
{
    document.write(" "+i +",");

}

document.write("<h3> SERIESS: </h3>");
for( var i=2; i<=20; i+=2)
{
    document.write(" "+i +"k,");

}
document.write("</div>")



// CHAP # 17-20 TASK 7 //
var A = ["CAKE", "APPLE PIE", "COOKIE", "CHIPS", "PATTIES"];
var order = prompt("Welcome to ABC Bakery. What do you want to order?");
var index = -1;
var item = "";
for(var i = 0; i< A.length; i++){
    if(order === A[i]){
        item = A[i];
        index = i;
        break;
    }
    
}
if(index != -1 && item != ""){
    document.write("<div> "+order +" is available at index "+i +" in our Bakery. </div>");
}

else{
    document.write("<div> We are Sorry. "+order +" is not available in our Bakery </div>");
}



// CHAP # 17-20 TASK 8 //
var arr = [24, 53, 78, 91, 12];
document.write("<div> Array Items:  "+arr);
var largest = arr[0];
for(var i = 1; i< arr.length; i++){

    if( largest < arr[i]){
        largest = arr[i];
    }

}
document.write(" <br> <br>The Largest Number is: "+largest +"</div>");



// CHAP # 17-20 TASK 9 //
var arr = [24, 53, 78, 91, 12];
document.write("<div> Array Items:  "+arr);
var smallest = arr[0];
for(var i = 1; i< arr.length; i++){

    if( smallest > arr[i]){
        smallest = arr[i];
    }

}
document.write(" <br> <br>The Smallest Number is: "+smallest +"</div>");



// CHAP # 17-20 TASK 10 //
document.write("<div>");
for(var i = 1; i <= 100; i++){
    if( i % 5 === 0){
        document.write(" "+i +",");
    }
}
document.write("</div>");


