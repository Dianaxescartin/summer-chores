// Summer Chores

let minEnergy = 2000;
let maxEnergy = 10000;
let energyLevel = Math.floor(Math.random() * (maxEnergy - minEnergy + 1)) + minEnergy;
console.log(`Initial energy level: ${energyLevel}`);

function mowYard(name){
    let energyRequired = 2000;
    return new Promise((resolve) => {
        setTimeout(() => {
            if (energyLevel >= energyRequired) {
                resolve(`${name} mowed the yard.`)
                energyLevel -= energyRequired;
            } 
        })
    }, 2000);
}

function weedEat(name){
    let energyRequired = 1500;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (energyLevel >= energyRequired) {
                resolve(`${name} finished using the weed eater.`)
                energyLevel -= energyRequired;
            } else {
                reject(`${name} fell asleep after mowing the yard.`);
            }
        })
    }, 1500);
}

function trimHedges(name){
    let energyRequired = 1000;
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (energyLevel >= energyRequired) {
                resolve(`${name} finished trimming the hedges.`)
                energyLevel -= energyRequired;
            } else {
                reject(`${name} fell asleep after weed eating the yard.`);
            }
        })
    }, 1000);
}

function collectWood(name){
    let energyRequired = 2500;
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (energyLevel >= energyRequired) {
                resolve(`${name} finished collecting wood.`)
                energyLevel -= energyRequired;
            } else {
                reject(`${name} fell asleep after trimming the hedges.`);
            }
        })
    }, 2500);
}

function waterGarden(name){
    let energyRequired = 500;
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (energyLevel >= energyRequired) {
                resolve(`${name} finished watering the garden.`);
                energyLevel -= energyRequired;
            } else {
                reject(`${name} fell asleep after collecting wood.`);
            }
         })
    }, 500);
}

async function doSummerChores(name) {
    try{
        const chore1 = await mowYard(name);
        console.log(chore1);
        
        const chore2 = await weedEat(name);
        console.log(chore2);
        
        const chore3 = await trimHedges(name);
        console.log(chore3);
        
        const chore4 = await collectWood(name);
        console.log(chore4);
        
        const chore5 = await waterGarden(name);
        console.log(chore5);
    
        console.log(`${name} finished all their chores!`)
    }
    catch(error){
        console.error(error);
    }
}

doSummerChores("Chopper");