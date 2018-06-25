function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div')
}

function increaseRankBy(n) {
  let list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i=0; i<list.length; i++) {
    list[i].innerHTML = Number((i+1))
  }
}

function deepestChild() {
  
}