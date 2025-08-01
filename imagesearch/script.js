const fetchImageFun = async (search)=>{
    let res = await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=15&query=${search}&client_id=doZDPRJZULN1IZGtFfO9MuGN3oha_M1c2f1M_FCrSEw`)
    let data = await res.json()
    let image = data.results
    console.log(image)
    let searchResults = document.querySelector('.search-results')

    image.forEach((elements)=>{
        let divElem = document.createElement('div')
        divElem.classList.add('search-result')
        elements.innerHTML = `<img
        src=${elements.urls.small}
        alt="image"
      />
      <a
        href=${elements.links.html}
        target="_blank"
        rel="noopener noreferrer"
        >${elements.alt_description}</a
      >`
      searchResults.appendChild(divElem)

    })
}


const searchImage = ()=>{
    let form = document.querySelector('#form')
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        let searchInput = document.querySelector('#search-input').value
        fetchImageFun(searchInput)
    })
}

searchImage()