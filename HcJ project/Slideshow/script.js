var elements = document.querySelectorAll('.element')
let count = 1
setInterval(() => {
     count++
     let current = document.querySelector('.current')
     current.classList.remove('current')
     if (count>elements.length) {
          elements[0].classList.add('current')
          count = 1
     }
     else{
          current.nextElementSibling.classList.add('current')
     }
}, 2000);