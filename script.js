const page = document.querySelector(".page")
const nickname = document.querySelector(".nickname")
const favorite = document.querySelector(".favorite")
const town = document.querySelector(".town")
const items = document.querySelector("ul")
const profilePicture = document.querySelector(".profilePicture")
const favoriteBooks = document.querySelector(".favoriteBooks")

// Question 1
page.style.fontFamily = "Arial, sans-serif"
page.style.textAlign = "center"
console.log(page)
nickname.innerHTML += "<span> Amjad </span>"
console.log(nickname)
favorite.innerHTML += "<span> cat </span>"
console.log(favorite)
town.innerHTML += "<span> baha </span>"
console.log(town)
items.style.color = "dodgerblue"
items.style.listStyle = "none"
console.log(items)
profilePicture.innerHTML = '<img src="https://i1.wp.com/wausaupilotandreview.com/wp-content/uploads/2020/06/Screen-Shot-2020-06-07-at-10.10.46-AM.png?fit=1154%2C646&ssl=1" height=200px >'
console.log(profilePicture)



// Bouns

favoriteBooks.innerHTML = "<h1> My Book List: </h1>"
console.log(favoriteBooks)

const books = [
    {
        title: "The Design of Everyday Things",
        author: "Don Norman",
        alreadyRead: false,
        cover: "http://pizlfilip.com/wp-content/uploads/2017/10/cover_The-Design-of-Everyday-Things.png"
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true,
        cover: "https://www.kurzweilai.net/images/The-Most-Human-Human-Paperback-Front-Cover.jpg"
    },
    {
        title: "In Search of Lost Time",
        author: "Marcel Proust",
        alreadyRead: true,
        cover: "https://img1.od-cdn.com/ImageType-400/6251-1/F57/7FE/20/%7BF577FE20-D9F8-413C-B578-EECE208BAC57%7DImg400.jpg"
    },
    {
        title: "Ulysses",
        author: "James Joyce",
        alreadyRead: true,
        cover: "https://2.bp.blogspot.com/-27fLKDscI-o/VuBouZIi5sI/AAAAAAAAB6U/rhNMYtvp3Fc/s1600/19221stedUlysses.jpg"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        alreadyRead: true,
        cover: "https://images.saymedia-content.com/.image/t_share/MTc0MjEyNDc1ODA4MzkyNzAw/nostalgia-in-the-great-gatsby.jpg"
    }
];


books.forEach(book => {

    booktitle = book.title
    bookauthor = book.author
    bookcover = book.cover
    favoriteBooks.innerHTML += `<p>  ${booktitle}, by ${bookauthor} </p>`

})



