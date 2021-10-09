let countBtn = document.getElementById('count-btn')
let saveBtn = document.getElementById('save-btn')
let saveEl = document.getElementById('save-el')
let count = 0

//increment function

function increment() {
    // console.log("clicked")
    count = count + 1
    countBtn.textContent = count
}

//save function

function save() {
    console.log(count)
    saveEl.textContent += count + ' - '
    countBtn.textContent = 0;
    count = 0
}

