// for loop
for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5) {
       // console.log("5 is best number");
        
    }
    console.log(element);
}
 

//  break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5) {
        console.log(`Detected 5`);
        break
        
    }
    console.log(`Value of i is ${index}`);
    
    
}

for (let index = 1; index <= 20; index++) {
    if(index == 5) {
        console.log(`Detected 5`);
        continue
        
    }
    console.log(`Value of i is ${index}`);
    
    
}
 