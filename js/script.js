function myFunction(){
	// document.write(city);



	 document.write(temp);
	document.write("--my old array-----",city);


   document.getElementById("demo").innerHTML = "kanpur";
   console.log ("city value" ,city[3])
}





var demo={name:{name1:"aftab"},
	age:22,
	mob:9889440531
}



demo.name.name1


var person ={
	name:"gaurav",
	age:29,
	address:{state:"uttar pradesh",city:"kanpur"},
	mob:9889440531
};

var city =["kanpur","sultanpur","lucknow","jaipur","mumbai", "ahmedabad"]

city.push("data dalo"); // data add in last into array
city.pop(); // data remove from last array
city.shift(); // data remove in first array
city.unshift("unshift"); // add data starting in array

var temp=city.splice(1,3);



