//Object Methods
//I want to add a method or things it can do to this object
//Use a key/value pair again.

let user = {
    name: 'Fran',
    age: 30,
    email: 'francislyon@gmail.com',
    location: 'Berlin',
    blogs: ['How to knit', 'How to train a bird'],
    login: function () {
        console.log('The user has logged in.');
    },
    logBlogs: () => {
        this.blogs
    }
};

user.logBlogs()

const books = [
    { name: 'book 1', text: 'some text' },
    {name: 'book 2', text: 'some other text'}
]






for (const book of books) {
    console.log(book.name)
    console.log(book.text);
}