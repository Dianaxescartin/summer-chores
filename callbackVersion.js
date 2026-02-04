// Summer Chores

let minEnergy = 2000;
let maxEnergy = 10000;
let energyLevel = Math.floor(Math.random() * (maxEnergy - minEnergy + 1)) + minEnergy;
console.log(`Initial energy level: ${energyLevel}`);

function mowYard(name, callback){
    let energyRequired = 2000;
    setTimeout(() => {
        console.log(`${name} mowed the yard.`)
        energyLevel -= energyRequired;
        callback(name);
    }, 2000);
}

function weedEat(name, callback){
    let energyRequired = 1500;
    setTimeout(() => {
        if (energyLevel <= energyRequired) {
            console.log(`${name} fell asleep after mowing the yard.`);
        } else {
            console.log(`${name} finished using the weed eater.`)
            energyLevel -= energyRequired;
            callback(name);
        }
    }, 1500);
}

function trimHedges(name, callback){
    let energyRequired = 1000;
    setTimeout(() => {
        if (energyLevel <= energyRequired) {
            console.log(`${name} fell asleep after weed eating the yard.`);
        } else {
            console.log(`${name} finished trimming the hedges.`)
            energyLevel -= energyRequired;
            callback(name);
        }
    }, 1000);
}

function collectWood(name, callback){
    let energyRequired = 2500;
    setTimeout(() => {
        if (energyLevel <= energyRequired) {
            console.log(`${name} fell asleep after trimming the hedges.`);
        } else {
            console.log(`${name} finished collecting wood.`)
            energyLevel -= energyRequired;
            callback(name);
        }
    }, 2500);
}

function waterGarden(name, callback){
    let energyRequired = 500;
    setTimeout(() => {
        if (energyLevel <= energyRequired) {
            console.log(`${name} fell asleep after collecting wood.`);
        } else {
            console.log(`${name} finished watering the garden.`);
            energyLevel -= energyRequired;
            callback(name);
        }
    }, 500);
}

function doSummerChores(name){
    mowYard(name, () => {
        weedEat(name, () => {
            trimHedges(name, () => {
                collectWood(name, () => {
                    waterGarden(name, () => {
                        console.log(`${name} finished all their chores!`);
                    })
                })
            })
        })
    })
}

doSummerChores("Chopper");