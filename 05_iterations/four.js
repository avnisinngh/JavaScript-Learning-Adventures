const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const prog = ["js", "ruby", "cpp", "java"]
for (const key in prog) {
 //   console.log(prog[key]);
    
}

const map = new Map()
map.set('IN', "India")
map.set('CH', "China")
map.set('FR', "France")

for (const key in map) {
   // console.log(key);
    
}

