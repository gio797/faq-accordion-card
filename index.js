const accordion = document.getElementsByClassName('accordion')
const panel = document.querySelectorAll('.panel')
const arrow = document.querySelectorAll('.arrow')


for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {

    if (this.nextElementSibling.style.maxHeight === this.nextElementSibling.scrollHeight + "px") { '' }
    else {
      Array.from(panel).forEach(pan => {
        pan.style.maxHeight = null

        Array.from(accordion).forEach(acc => {
          acc.style.fontWeight = '400'
        })

        Array.from(arrow).forEach(arr => {
          arr.style.transform = 'rotate(0deg)'
        })

      })
    }

    if (this.nextElementSibling.style.maxHeight) {

      this.nextElementSibling.style.maxHeight = null;
      this.childNodes[1].style.transform = 'rotate(0deg)'
      this.style.fontWeight = '400'
    } else {

      this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px"
      this.childNodes[1].style.transform = 'rotate(180deg)'
      this.style.fontWeight = 'bold'
    }
  });
}


