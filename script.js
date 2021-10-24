const bodyee = document.querySelector("body")
bodyee.style.fontFamily = "Arial, sans-serif"
bodyee.style.textAlign = 'center'


const span = document.querySelector("#nickname")
const span2 = document.querySelector("#favorite")
const span3 = document.querySelector("#hometown")
span.innerHTML = "JADOO"
span2.innerHTML = "CAT"
span3.innerHTML = "ALBAHA"



//const newnickname = span.replaceWith("JADOO")
//const favanmale = span2.replaceWith("CAT")
//const myhome = span3.replaceWith("albaha")


const listrr = document.querySelectorAll("li")
const mylist = listrr.forEach(function (listr) {
    listr.classList.add("listitem")
    listr.style.color = "dodgerblue"
    listr.style.listStyle = 'none'
})



const addimg = document.querySelector(".profilePicture")
addimg.innerHTML += `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOqJ-QoPE925aoz3B01c1FuROGr8bfO2X7Zw&usqp=CAU">`

const books = [
    {
        title: "The Design of Everyday Things",
        author: "Don Norman",
        alreadyRead: false,
        image: "https://miro.medium.com/max/1200/1*Qo27inBKBKY4Q4Pgk5KkbQ.png"
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true,
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg"
    },
    {
        title: "In Search of Lost Time",
        author: "Marcel Proust",
        alreadyRead: true,
        image: "https://m.media-amazon.com/images/I/51tRkYYlpaL.jpg"
    },
    {
        title: "Ulysses",
        author: "James Joyce",
        alreadyRead: true,
        image: "data:image/jpeg;base64,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"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        alreadyRead: true,
        image: "https://img.youm7.com/ArticleImgs/2021/5/10/71543-The-Great-Gatsby.jpg"
    }
]
const h1 = `<h1>MY book list</h1>`
const fivebook = document.querySelector(".favoriteBooks")

fivebook.innerHTML = h1
books.forEach(function (book) {
    let bookelement = `<img src="${book.image}" width="100px">`

    if (book.alreadyRead === true) {
        bookelement += `<p style="color:red">${book.title}</p> by ${book.author}</p>`


    } else {
        bookelement += `<p>${book.title}</p> by ${book.author}</p>`
    }
    fivebook.innerHTML += bookelement

})

























