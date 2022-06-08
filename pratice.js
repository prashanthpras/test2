//1.

// let randomValue={name:"Lydia"}
// randomValue=23
// if(!typeof randomValue === "string")
// {
//     console.log("It's not a string!")
// }else{
//     console.log("Yay it's a string")
// }

//output:Yay it's a string

//2.

// const createMember=({email,address={}})=>{
//     const vaildEmail=/.+\@.+\..+/.test(email)
//     if(!vaildEmail) throw new Error("Vaild email pls")

//     return {
//         email,
//         address:address ? address : null
//     }
// }
// const member=createMember({email:"my@email.com"})
// console.log(member)

//output:{email: 'my@email.com', address: { }}

//3.

// const keys=["name","age"]
// const values=["Lydia",22]

// // const method = /* ?? */
// let newObj=Object.fromEntries((keys.map((_,i) => {
//     return [keys[i],values[i]]
// })))
// console.log(newObj)



//output:{name: 'Lydia', age: 22}

//4.

// const promise1=Promise.resolve("first")
// const promise2=Promise.resolve("second")
// const promise3=Promise.reject("third")
// const promise4=Promise.resolve("fourth")

// const runPromises=async()=>{
// const res1=await Promise.all([promise1,promise2])
// const res2=await Promise.all([promise3,promise4])
// return [res1,res2]
// }

// runPromises()
// .then(res=>console.log(res))
// .catch(err=>console.log(err))

//output:third

//5.
// const user ={
//     email:"my@email.com",
//     updateEmail:email =>{
//         this.email=email;
//     }
// }
// user.updateEmail("new@email.com")
// console.log(user.email)

//output:my@email.com

//6.
// const fruit=["banana","orange","apple"]
// fruit.slice(0,1)
// fruit.splice(0,1)
// fruit.unshift("grapes")
// console.log(fruit)

//output:['grapes', 'orange', 'apple']

//7.
// const user={
//     email:"e@mail.com",
//     password:"12345"
// }
// const updateUser=({email,password})=>{
//     if(email){
//         Object.assign(user,{email})
//     }
//     if(password){
//     user.password=password
//     }
//     return user
// }
// const updatedUser=updateUser({email:"new@email.com"})
// console.log(updatedUser===user)

//output:true

//8.
// class Calc{
//     constructor()
//     {
//         this.count=0
//     }
//     increase(){
//         this.count++
//     }
// }
// const calc=new Calc()
// new Calc().increase()
// console.log(calc.count)

//output:0

//9.a

// let count=0;
// const nums=[0,1,2,3]
// nums.forEach(num=>{
//     if(num) count +=1
// })
// console.log(count)

//o/p:3

//9.b.

// class Bird{
//     constructor() {
//         console.log("I'm a bird.")
//     }
// }
// class Flamingo extends Bird {
//     constructor() {
//         console.log("I'm pink")
//         super();
//     }
// }
// const pet=new Flamingo();

//output:I'm pink 
//I'm bird

//10.
// const person={
//     name:"Lydia Hallie",
//     hobbies:["coding"],
// }
// function addHobby(hobby,hobbies = person.hobbies){
//     hobbies.push(hobby)
//     return hobbies;
// }
// addHobby("running",[])
// addHobby("dancing")
// addHobby("baking",person.hobbies)
// console.log(person.hobbies)

//output:['coding', 'dancing', 'baking']

//11.

// const teams=[
//     {name:"Team 1",members:["Paul","Lisa"]},
//     {name:"Team 2",members:["Laura","Tim"]},
// ]

// function* getMembers(members){
//     for(let i=0;i<members.length;i++)
//     {
//         yield members[i];
//     }
// }
// function* getTeams(teams){
//     for(let i=0;i<teams.length;i++){
//       getMembers(teams[i].members) //answer
//     }
// } 

// const obj=getTeams(teams)
// obj.next()
// obj.next()

//12.
// class Counter{
//     #number=10
//     increment(){
//         this.#number++
//     }
//     getNum(){
//         return this.#number
//     }
// }
// const counter =new Counter()
// counter.increment()
// console.log(counter.#number)

//output:error

//13.
// const myPromise=Promise.resolve(Promise.resolve("Promise"))

// function funcOne(){
//     setTimeout(()=>console.log("Timeout 1!"),0)
//     myPromise.then(res=>res).then(res=>console.log(`${res}1!`))
//     console.log("Last line 1!")
// }

// async function funcTwo(){
//     const res=await myPromise;
//     console.log(`${res} 2!`)
//     setTimeout(()=>console.log("Timeout 2!"),0)
//     console.log("Last line 2!")
// }
// funcOne()
// funcTwo()

//output:Last line 1!
//  Promise 2!
//  Last line 2!
//  Promise1!
//  Timeout 1!
//  Timeout 2!

//14.

// const name="Lydia Hallie"
// console.log(!typeof name==="object")
// console.log(!typeof name==="string")

//output:false
//false

//15.a.

// const myMap=new Map();
// const myfunc=()=> "greeting"

// myMap.set(myfunc,"hello world!")

// myMap.get("greeting")
// myMap.get(myfunc)
// myMap.get(()=>"greeting")

//16.

// const emojis=["star","fruit","emo"]

// console.log(emojis.map(x=>x+"star"))
// console.log(emojis.filter(x=>x!=="fruit"))
// console.log(emojis.map(x=>x!=="fruit"))
// console.log(emojis.map((acc,cur)=>acc+"star"))
// console.log(emojis.slice(1,2,"star"))
// console.log(emojis.splice(1,2,"star"))

//output:
// ['starstar', 'fruitstar', 'emostar']
// ['star', 'emo']
// [true, false, true]
// ['starstar', 'fruitstar', 'emostar']
// ['fruit']
// ['fruit', 'emo']

//17.
// const set=new Set()
// set.add(1);
// set.add("Lydia")
// set.add({name:"Lydia"})

// for(let item of set)
// {
//     console.log(item + 2)
// }
//output:
//3
//Lydia2
//[object Object]2

//18.a.

// function getItems(fruitList,...args,favoriteFruit){
//     return [...fruitList,...args,favoriteFruit]
// }
// getItems(["banana","apple"],"pear","orange")

//output:eeror

//19.a.
// fetch("https://www.website.com/api/user/1")
// .then(res=>res.json())
// .then(res=>console.log(res))

//output:typeError:error

//19.b.

// const box={x:10,y:20}
// Object.freeze(box)
// const shape=box;
// shape.x=100;
// console.log(shape)

//output:{x:10,y:20}


//20.
// console.log(Number(2)===Number(2))
// console.log(Boolean(false)===Boolean(false))
// console.log(Symbol("foo")===Symbol("foo"))

//output:
//true
//true
//false