const firstbtn = document.querySelector('#first') 
const secondbtn = document.querySelector('#second')
const span = document.querySelector('.btns span')
let num = 0


firstbtn.addEventListener("click", () => {
    num++
    span.innerText = num
})

secondbtn.addEventListener("click", () => {
    if (num > 0) {
     num--
    span.innerText = num
    }
})



const coordinatesElem = document.querySelector(".coordinates");
const coordinatesValue = document.querySelector(".value2");

coordinatesElem.addEventListener("mousemove", (event) => {
  const rect = coordinatesElem.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  coordinatesValue.textContent = `X: ${x}, Y: ${y}`;
});

coordinatesElem.addEventListener("mouseleave", () => {
  coordinatesValue.textContent = "X: 0, Y: 0";
});


const input = document.querySelector('#Field')

input.addEventListener('input', (event) => {
    const color = event.target.value

    document.body.style.backgroundColor = color

    if (document.body.style.backgroundColor === '') {
        document.body.style.backgroundColor = 'white'
    }
})
