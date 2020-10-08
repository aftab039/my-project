var corona_origin="china"

function myFunction(){
	// document.write(city);


// document.write(person.gender);
// 	//  document.write(temp);
// 	document.write("--my old array-----",city);


//    document.getElementById("demo").innerHTML = "kanpur";
//    console.log ("city value" ,city[3]);
}


myFunction();






var demo={name:{name1:"aftab"},
	age:22,
	mob:9889440531
}





var person ={
	name:"gaurav",
	age:29,
	address:{state:"uttar pradesh",city:"kanpur"},
	mob:9889440531
};

var city =["kanpur","sultanpur","lucknow","jaipur","mumbai", "ahmedabad"]
var test=["test1","test2","test3","test4"];

city.push(...test); // data add in last into array

// city.pop(); // data remove from last array
// city.shift(); // data remove in first array
// city.unshift("unshift"); // add data starting in array
// splice()
// slice ()
// sort()

var veg=[1,4,7,9,5,3,59,98]
function dd (a,b){
	return b-a;
	
}
	
var Sorted_veg=veg.sort(dd);
document.write("my sorted array",Sorted_veg);

// var temp=city.splice(1,3);



 person.gender="male1";

 function City(first,second) {
	 console.log(first);
	 console.log(second);
	 

 }

 City("kanpurrrrrr","lucknow");
 function Person(age){

	 return document.write( age);
	

 }
 Person();
 
// a > b
// a<b
// a=b;
// a==b;
// a===b;

 // type of errors 
//  undefined
//  null
//  is not define 
 let Cities="Sultanpur123"

function World() {
	this.Cities="kanpur"
console.log("test ki value", this.Cities);
}

function Covid(){
	this.corona_origin="Pak";
	console.log("value of this",this);
alert(corona_origin);
}

Covid();

var Employee ={
	name:"gaurav",
	age:28,
	mob:9889440531,
    married:"yes"	
}

Employee.name

var test_player=["sachin","rahul dravid","virat ","dhoni","raina"];

function Voter_Authenticity (age) {
if (age>=18)
{
	alert("wow you can vote !!!!");
}

else{
	alert("Sorry you can not  vote now!!!!");
}

for (i=0; i<test_player.length; i++  ){
//alert("Hello World");
}
}

Voter_Authenticity(18);

var Age=25;

function ChangeHost(){
	
	
console.log("My age  is",Age);
Age=32;
}

ChangeHost();
var name;
var age;
var salary;
var sex;
function Worker(name,age,salary,sex){

	this.name=name;
	this.age=age;
	this.salary=salary;
	this.sex=sex;
	console.log("employee name",name);
	console.log("employee age",age);
	console.log("employee salary",salary);
	console.log("employee sex",sex);
	



}

Worker("aftab",20,2000,"male");

Worker.prototype.city="kanpur";

var Worker1= new Worker ("Gaurav",31,5000,"male","lucknow");
console.log(Worker1.name);
console.log(Worker1.age);
console.log(Worker1.salary);
console.log(Worker1.sex);
console.log(Worker1.city);

var Worker2= new Worker ("somu",29,9000,"male","lucknow1");
console.log(Worker2.name);
console.log(Worker2.age);
console.log(Worker2.salary);
console.log(Worker2.sex);
console.log(Worker2.city);
x+= 5;

x+5==x;
var arr1= [10,20,30,40];
var arr2= new Array(10,20,30,40);
console.log("array1 value",arr1);
console.log("array2 value",arr2);