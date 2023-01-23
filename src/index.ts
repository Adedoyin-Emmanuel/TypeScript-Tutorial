//using type in typescripts
type User = {
    name: string,
    age: number
    married ?: boolean
};

const user_1 : User = { name : "Emmanuel", age: 17, married: true}


//using interfaces

interface Employee {
    firstName: string,
    lastName: string,
    age: number,
    drive: () => string,
    
}

interface Driver extends Employee{
    job: string,
    carType: string
}


const Emp1: Employee = {
    firstName : "Emmanuel",
    lastName:"Adedoyin",
    age: 17,
    drive: () =>{
        return "i am driving"
    }
}


console.log(Emp1.drive());


const Driver1: Driver = {
    firstName : "Adeniyi",
    lastName:"Adedoyin",
    age: 20,
    drive: () =>{
        return "i am riding"
    },
    job:"Driver",
    carType:"Ferarri",
}