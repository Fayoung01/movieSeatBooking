const movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value;

const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");

// Update total and count
function UpdateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  UpdateSelectedCount();
});

// Seat click event
container.addEventListener("click", (e) => {
  let hasSeatClass = e.target.classList.contains("seat");
  let notOccupied = !e.target.classList.contains("occupied");

  // To select seats
  if (hasSeatClass && notOccupied) {
    e.target.classList.toggle("selected");
  }

  UpdateSelectedCount();
});
