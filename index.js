//1.
let obj1 = {name:"person 1",age:5};
    let obj2 = {age:5 , name:"person 1"};
    JSON.stringify(obj1) === JSON.stringify(obj2);

//----------------------------------------------------------------------------------------------------------------
//2.All countrie flags
const getapi = () =>{
    try{
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https:restcountries.com/v3.1/all');
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = function(){
            let responseObj = xhr.response;
            setTimeout(function(){
                //for(let i in responseObj){
                    console.log(responseObj.map(item=> item.flag))
                        
                    
               // }
            },1000)
        };
    }catch(error){
        console.log(error)
    }
}
getapi()
//-----------------------------------------------------------------------------------------------------------------------
//q.n.3.names,region,subregions,populations
const getapi= async ()=>{
    const response = await fetch('https:restcountries.com/v3.1/all')
    let data = await response.json();
    console.log(data);
    console.log(data.map(item=> item.name));
}
getapi();
//3.regions
const getapi = () =>{
    try{
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https:restcountries.com/v3.1/all');
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = function(){
            let responseObj = xhr.response;
            setTimeout(function(){
                for(let i in responseObj){
                    console.log(responseObj[i].region)
                        
                    
                }
            },1000)
        };
    }catch(error){
        console.log(error)
    }
}
getapi()
//3.subregion
const getapi = () =>{
    try{
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https:restcountries.com/v3.1/all');
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = function(){
            let responseObj = xhr.response;
            setTimeout(function(){
                for(let i in responseObj){
                    console.log(responseObj[i].subregion)
                        
                    
                }
            },1000)
        };
    }catch(error){
        console.log(error)
    }
}
getapi()
//3.population
const getapi = () =>{
    try{
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https:restcountries.com/v3.1/all');
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = function(){
            let responseObj = xhr.response;
            setTimeout(function(){
                //for(let i in responseObj){
                    console.log(responseObj.map(item=> item.population))
                        
                    
               // }
            },1000)
        };
    }catch(error){
        console.log(error)
    }
}
getapi()

//---------------------------------------------------------------------------------------------------------------------
//4.task.1
var name;
var age;
var school;
var gender;
console.log(data)

//2
var myvar= 1;
console.log("myvar");

//3.
let name = 'priya'
let lastname = 'sathish'
let maritalstatus = 'yes'
let country = 'India'
let age = 15

//4
const person = {name:'priya',lastname:'sathish',maritalstatus:'yes',country:'India',age:'15'}
//let {name,lastname,maritalstatus,country,age} = person;
    console.log(name);
    console.log(lastname);
    console.log(maritalstatus);
    console.log(country);
    console.log(age);
//5
var a ='priya'//string
var b = 'a>b'//boolean
console.log(a)
var a= 10;
console.log(a);//undefine
//6.
let a = parseInt("100")//number
let a1= parseInt("hello world")//Nan
let b1 = Number("32.34")//number
let b2 = Number("Bajji")//Nan
//7.
falsyValue=(undefined , null , NaN , 0 , "" (empty string));
truthyValues=(-0 , 0n , "" , null , undefined , and NaN)

//Task2.
//1.
var num = 5
console.log(num*num)
//2.swapping of two number
 varx =10
 vary= 20
  letx = x+y
  lety= x-y
 let x= x-y
 console.log(x,y);
 //3aadition of 3 numbers
 let n1 =5
 let n2=10
 let n3=20
 console.log(n1+n2+n3)
 //4.celsius to fahrenheit
 let celsius =(userInput[0]);
 let fahrenheit=((celsius*1.8)+32)
 console.log(fahrenheit);
 //5.meter to miles
 let m=12
 let mi=(m/1,609.344)
 console.log(mi)
 //6.pounds to kg
 let pounds=userInput[0];
 var kilogram=(pounds*0.453592)
 console.log(kilograms);
 //7.batting average
 let runs =5000
 let matches= 250
 let not_out=50
 let Numberofdismissals=(matches-not_out);
 let average=(run /Numberofdismissals)
 console.log(average);
 //8.testcore print the average
 let t1=50
 let t2=70
 let t3=80
 let t4=90
 let t5=100
 let total=(t1+t2+t3+t4+t5)
average=(total/numberofvalues)
console.log(average);
//9.power of any numbers
let x=userInput[0]
let y= userInput[1]
console.log(Math.pow(4,2));
//10.simpleintrest
let a=userInput[0].split("");
let p=parseFloat(a[0]);
let n=parseFloat(a[1]);
let r=parseFloat(a[2]);
let si=((p*n*r)/100);
console.log(si);
//11.
let a=3
let equailateral =

//12.


//13.volume of sphere
let r =userInput[0];
let volume=((4/3)*(22/7)*r*r*r)
console.log(volume);
//14.volume of prism
let b=12;
let h=10;
let v=(b*h);
console.log(v);
//15.area of triangle
let b=4
let h=7
let area=((1/2)*b*h)
console.log(area);
//16.

//17.
let radius = userInput[0]
let diameter = (2*radius)
let circumference=(2*3.14*radius)
area=(3.14*radius*radius)
console.log(area);
//18.
let n1=userInput[0]
let n2=userInput[1]
let sum=(n1+n2)
let sub=(n1-n2)
let mul=(n1*n2)
let div=(n1/n2)
console.log(sum,sub,mul,div);
//19.
let n=5;
for(leti=0;i<5;i++){
    let string="";
    for(let j=0; j<5; j++){
        string+="*"+" ";
        console.log(string);
    }
}

    //20.
    //21.
    let gradepoints=userInput[0]
    let numberofvalue=userInput[1]
    let cgpa=(gradepoints/numberofvalue)
    console.log(cgpa);
    //------------------------------------------------------------------------------------------------------------
    //task.3
    //1.
    for(let line="#";line.length<8;line+= "#")
    console.log(line)
    //2.
    for(i=0; i<SyntaxError.length; i++)
    console.log(strarray);
    //Array
    var myarray=[11,22,33,44,55]
    let total=0;
    for(let i=0; myarray.length; i++);{
        total++;
        console.log(total);

    
    //--------
    let foods=['Biriyani','pongal','poori','chicken','peppercurry','dhosai','dates','fruits','fish','vadai','chapathi','vegayam','tomatto','idiyappam',
    'currydhosai','bunparrota','chappathi','kuruma','fish','egg',]
    console.log(foods.length);
    console.log(foods[6]);

    let friends = [
        "Mari",
        "MarryaryJane”,
        "CaptianAmerica",
        "Munnabai",
        "Jeff",
       "AAK chandran",
        ];
        console.log(friends[0]=munnabai);
        for(i=0; i<=captainAmerica;i++){
        
            }
          console.log(i);  
        }

        //-----------------------
        const friends = [
            "Mari",
            "MaryJane",
            "CaptianAmerica",
            "Munnabai",
            "Jeff",
            "AAK chandran",
            ];
            for(i=0; i<friends.length; i++){
                if(i="jeff"){
                    console.log(print("yes"));
                }
                    
            }
            //---------------------------------------
            var friends1 = [
                "Mari",
                "MarryJane",
                "CaptianAmerica",
                "Munnabai",
                "Jeff",
                "AAK chandran",
                ];
                
                var friends2 = [
                "Gabbar",
                "Rajinikanth",
                "Mass",
                "Spiderman",
                "Jeff",
                "ET",
                ];
                console.log(friends1.concat(friends2))
                sorted=friends.sort();
                console.log(sorted);
                //1.
                const{0:first,[arraydata.length-1]:last,...rest}=friends;//rest-middle,length-1-last,first-first
                //2.
                console.log(friends.push(Mohanapriya))//last added
                console.log(friends.unshift(Mohanapriya))//first add
                //3.
                friends.forEach(item,index,arr)=>{
                    arr[index]='Mr+item'
                    console.log('friendsarray:',friends);
                }
                //4.
                console.log(friends.split(","));
                //5.
                function firsta(){
                    for(let i=0;i<friends.length;i++){
                        friends[i].startsWith("a")

                    }
                }
                let startwitha=friends.filter(firsta())
                //6.
                for(i=0;i<friends.length;i++){
                    console.log(i.length);

                    }
                let average =((i.length)/numberoffriends)
                console.log(average);
                //7.
                function firstM(){
                    for(let i=0;i<friends.length;i++){
                        friends[i].startsWith("M")

                    }
                }
                //8.
                max=Math.max(...arr);
                console.log(max);
                //9.
                min=Math.min(...arr);
                console.log(min);
                //-------------------------------------------------------
                const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
                var temparray=[];
                arr.forEach(element=>{
                    if(typeof(element)=="number"){
                        temparray.push(element);
                        let{sum = 0;temparray.forEach(item=>{sum+=item;

                        })} 


                    }
                });
                console.log(sum);
                //-------------------------------------------------------------


                var input = [
                    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                    ["0003", "Winona", "Ambon, "25/12/1965","Memasak"]
                    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
                ]
                    
                    
                    
                    for(var i = 0; i < input.length; i++) {
                        console.log(i)

                    }
                    //------------------------------------------------------------------------------------------------------
                    //object
                    myobject={1:one,"11":1,name:"arun"}
                    console.log(myobject.11); //output=1
                    console.log(myobject.name);//output=arun
                    myobject.ten="ten"
                    console,log(myobject);
                    //-----------------------------------------------------------------------------------------------------------------------


        
       
        
        
        





















    





