/* //Object destructuring

const book = {
    title: 'Ego is the Enemy',
    author: 'Giorgos Manousakis',
    publisher: {
       //name: 'Me, myself and my journey'
    }
};

//console.log(`${book.publisher.name}`);

const {name: PublisherName = 'Me'} = book.publisher;

console.log(PublisherName);

//Array destructuring!

const coffee = [ 'Capuccino', '$ 1,8', '2,2', '3,2'];

const [type, , , alcoholic] = coffee;

console.log(`This ${type} costs ${alcoholic} `);

incrementBy:5;

const what = ({incrementBy = 1} = {});

console.log({incrementBy});
console.log(what); */