var names = ['John', 'Volodea', 'Uasea', 'Nelu'];
//
// names.forEach(function (name) {
//     console.log('forEach', name);
// });
//
// names.forEach((name) => {
//     console.log('arrow', name);
// });
//
// names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('John'));

var person = {
    name: 'John',
    greet: function () {
        names.forEach((name) => {
           console.log(this.name + ' says hi to ' + name);
        });
    }
}

person.greet();