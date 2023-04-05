let data = '';
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        data += '*'
    }
    data += '\n';

}
console.log(data)
data = '';
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        data += '*'
    }
    data += '\n';
}
console.log(data)

data = '';
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        data += j < i ? '*' : '+'
    }
    data += '\n';
}
console.log(data)