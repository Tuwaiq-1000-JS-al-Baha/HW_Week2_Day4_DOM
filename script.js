const body = document.body
body.style.fontFamily = "Arial,sans-seif"
body.style.textAlign = " center "

const h2 = document.querySelector("h1.title")
h2.style.fontSize = "100px"


const nickname = document.querySelector(".nickname")
nickname.innerHTML = " Rahaf "
const favorite = document.querySelector(".favorite")
favorite.innerHTML = "cat "
const hometown = document.querySelector(".hometown")
hometown.innerHTML = "ALbaha"

const liList = document.querySelectorAll("li")
liList.forEach(function (li) {

    li.classList.add("listitem")
    li.style.color = "dodgerblue"
    li.style.listStyle = "none"
})

const span = document.querySelectorAll("span") 
span.forEach(function(span3){
    span3.style.color = " black"
})


const image = `<img src = "https://www.lab111.nl/wp-content/uploads/2020/05/The-Shawshank-Redemption-Banner.jpg" width = 1000px/>`
const profilePicture = document.querySelector(".profilePicture")
profilePicture.innerHTML = image


const books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      alreadyRead: false,
      image : "https://mitpress.mit.edu/sites/default/files/9780262640374.jpg",
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true,
      image : "https://www.kurzweilai.net/images/themosthumanhuman.jpg",
    },
    {
      title: "In Search of Lost Time",
      author: "Marcel Proust",
      alreadyRead: true,
      image : " https://images.thestar.com/content/dam/thestar/entertainment/books/2013/11/07/marcel_proust_celebrated_100_years_after_in_search_of_lost_time/in_search_of_lost_time.jpg",
    },
    {
      title: "Ulysses",
      author: "James Joyce",
      alreadyRead: true,
      image : "https://www.audiofilemagazine.com/images/480x480/content/uploaded/images/covers/18108.jpg?&quality=99",
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      alreadyRead: true,
      image : "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781471173936/the-great-gatsby-9781471173936_hr.jpg",
    },
  ];

  const h1 = ` <h1> MY LIST BOOK </h1>`

  const favoriteBooks = document.querySelector(".favoriteBooks")
  favoriteBooks.innerHTML = h1


books.forEach(function (book) {
    let bookElement = `<img src = " ${book.image} width = 100px">  `

     if (book.alreadyRead === true ) {
         bookElement += `<p style = " color = red "> ${book.title}, by ${book.author}</p> `
     }else {
         bookElement += `<p> ${book.title}, by ${book.author}</p>`
     } 
     favoriteBooks.innerHTML += bookElement
})





