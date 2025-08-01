// const fetchGitData = async (users) =>{
//     let response = await fetch()
//     let gitData = response.json()
//     let userDetails = document.querySelector('#user-details')
//     userDetails.innerHTML = ``
// }


// let submitBtn = document.querySelector('#gitform')
// submitBtn.addEventListener('submit',(e)=>{
// e.preventDefault()

// let userName = document.querySelector('#gitform').value
// fetchGitData(userName)
// })

const fetchGitData = async (users)=>{
    let response = await fetch(`https://api.github.com/users/${users}`)
    let gitData = await response.json();
    let userDetails = document.querySelector('#user-details')
    gitData.id ? (userDetails.innerHTML = `<aside>
        <img src=${gitData.avatar_url} alt="loading...">
        </aside>
        <article id="aboutme">
        <h1>name: <span>${gitData.name}</span></h1>
        <p>Bio: <span>${gitData.bio}</span></p>
        <p>Location: <span>${gitData.location}</span></p>
        <div class="summary">
        <button>repos: <span>${gitData.public_repos}</span></button>
        <button>followers: <span>${gitData.followers}</span></button>
        <button>following: <span>${gitData.following}</span></button>
        </div>
        </article>`):(userDetails.innerHTML = `<h1 style="text-align: center;">No results found...</h1>`
        )
}
let submitBtn = document.querySelector('#gitform')
submitBtn.addEventListener('submit', (e)=>{
    e.preventDefault()
    let userName = document.querySelector('#gitusername').value
    fetchGitData(userName)
} )