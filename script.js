const page=document.querySelector(".page")
const nickname=document.querySelector("#nickname")
const favorite=document.querySelector("#favorite")
const hometown=document.querySelector("#hometown")
const profilePicture=document.querySelector(".profilePicture")

page.style.fontFamily ="Arial, sans-serif"
page.style.textAlign='center'
nickname.innerHTML = "<span> Ghadah </span>"
console.log(nickname)
favorite.innerHTML = "<span> ktdral </span>"
console.log(favorite)
hometown.innerHTML = "<span> bahah </span>"
console.log(hometown)

profilePicture.innerHTML ='<img src="https://images.squarespace-cdn.com/content/v1/5f1f73abac55ec57db191a6e/1600312912127-JJ1IIQIRVMR72IP7F8AD/blog_animation_cost.jpg "height="200" alt>'
console.log(profilePicture)

const lilist =document.querySelectorAll("li")
lilist.forEach(function(li){
    li.classList.add("listitem")
    li.style.color = "dodgerblue"
    li.style.listStyle ="none"

})

const books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      alreadyRead: false,
      image: "https://m.media-amazon.com/images/I/410RTQezHYL._AC_SY780_.jpg"
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true,
      image:"https://images-na.ssl-images-amazon.com/images/I/41Z56GwEv9L._SX342_SY445_QL70_ML2_.jpg"
    },
    {
      title: "In Search of Lost Time",
      author: "Marcel Proust",
      alreadyRead: true,
      image:"https://m.media-amazon.com/images/I/51tRkYYlpaL.jpg"
    },
    {
      title: "Ulysses",
      author: "James Joyce",
      alreadyRead: true,
      image:"https://upload.wikimedia.org//wikipedia/commons/a/ab/JoyceUlysses2.jpg"
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      alreadyRead: true,
      image:"https://images-na.ssl-images-amazon.com/images/I/71FTb9X6wsL.jpg"
    }
  ];

  const h1 =`<h1>My Book List</h1>`
  const favoriteBooks =document.querySelector(".favoriteBooks")
  favoriteBooks.innerHTML =h1
   books.forEach(function(book){
       let bookElement =`<img src="${book.image}" width="100px"`
       if (book.alreadyRead === true){
           bookElement +=`<p style="color: red">${book.title},by ${book.author}</p>`
       }else{
           bookElement +=`<p>${book.title}, by ${book.author}</p>`
       }
       favoriteBooks.innerHTML +=bookElement
   })





