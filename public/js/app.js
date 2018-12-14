const knapp = document.querySelector('#knapp')
// const resultat = document.querySelector('#resultat')

knapp.addEventListener('click', () => {
  const val = document.querySelector('#sok').value

  fetch(`http://localhost:7777/api/${val}`).then(res => res.json()).then(data => {
    data = data.slice(0, 5)
    const ol = document.querySelector('ol')
    ol.innerHTML = ''
    for (let page of data) {
      ol.innerHTML += `<li> <a href="${page.page}">${page.page}</a>

       <span>frequncy score: ${page.frequncyScore}</span> </li><hr>`
    }
  })
})