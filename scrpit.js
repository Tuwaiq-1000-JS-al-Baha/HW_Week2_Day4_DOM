const body = document.body
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.textAlign = 'center';


const name = document.getElementById("nickname").innerHTML = "Lama"
const fav = document.getElementById("favorite").innerHTML = "Art"
const home = document.getElementById("hometown").innerHTML = 'albaha'


console.log(name)
console.log(fav)
console.log(home)

const color = document.querySelectorAll(".listitem")

color.forEach(function (li) {
    li.style.color = "dodgerblue"
})

const image = `<imgsrc="https://cdn.unifiedcommerce.com/content/product/large/Cinderella-poster-puzzle-MEGA.jpg" width="40px">`
const profilePicture = document.querySelector(".profilePicture")
profilePicture.innerHTML = imge

const books = [
    {
        title: "The Design of Everyday Things",
        author: "Don Norman",
        alreadyRead: false,
        image: "https://i1.rgstatic.net/publication/311934098_introduction_to_human_physiology/links/58637d6d08ae329d62039ada/largepreview.png"
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true,
        image: "https://images.immediate.co.uk/production/volatile/sites/25/2019/12/Space-2069-e71030a.png?quality=90&resize=620%2C496"
    },
    {
        title: "In Search of Lost Time",
        author: "Marcel Proust",
        alreadyRead: true,
        image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781534402515/fractured-futures-9781534402515_hr.jpg"
    },
    {
        title: "Ulysses",
        author: "James Joyce",
        alreadyRead: true,
        image: "https://cdn.shopify.com/s/files/1/0617/3965/products/9781789890228-cover_600x.jpg?v=1569922788"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        alreadyRead: true,
        image: "https://images-na.ssl-images-amazon.com/images/I/913hfpQDKoL.jpg"
    }
];

const h1 = `<h1>My Book List</h1>`
const favoriteBooks = document.querySelector(".favoriteBooks")
favoriteBooks.innerHTML = h1

books.forEach(function (book) {
    let bookElement = `<img src="${book.image}" width="100px">`
    if (book.alreadyRead == true) {
        bookElement += `<p style="color: red" >${book.title}, by ${book.author}</p> `
    } else {
        bookElement += `<p>${book.title}, by ${book.author}</p> `
    }
    favoriteBooks.innerHTML += bookElement
})

