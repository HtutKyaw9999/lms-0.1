function initSlick() {
  $(".slick-carousel").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
}

const books = [
  { title: "Book1", Author: "Mg Mg", Status: true },
  { title: "Book2", Author: "Mg Mg", Status: false },
  { title: "Book3", Author: "Mg Mg", Status: true },
  { title: "Book4", Author: "Mg Mg", Status: false },
  { title: "Book5", Author: "Mg Mg", Status: true },
  { title: "Book5", Author: "Mg Mg", Status: true },
  { title: "Book5", Author: "Mg Mg", Status: true },
];

const wrapper = document.querySelector(".slick-carousel");

function display(bookArray) {
  const wrapper = document.querySelector(".slick-carousel");
  wrapper.innerHTML = "";
  bookArray.forEach((book) => {
    const status = book.Status ? "success" : "danger";
    wrapper.innerHTML += `
    <div class="book">
    <div class="card" style="width: 18rem;">
      <img
        class="card-img-top"
        src="./Images/cover_1.jpg"
        alt="Card image cap"
      />
      <div class="card-body text-start">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </p>
        <a href="#" class="btn btn-${status}">
            ${book.Status}
        </a>
      </div>
    </div>
  </div> `;
  });
  initSlick();
}

display(books);

const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();
  console.log(searchInput);
  const res = books.filter((b) => {
    return (
      b.title.toLowerCase().includes(searchInput) ||
      b.Author.toLowerCase().includes(searchInput)
    );
  });
  console.log(res);
  display(res);
});
