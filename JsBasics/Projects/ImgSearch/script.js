//API from UNSPLASH

const accessKey = "x6Nf4KZpNS3BWhh7D5XmbrS17NH8Zg_krQzhQfILTes"

//Important Elements
const formE1 = document.querySelector("form")
const inputE1 = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")

let inputData = "" //Stores keywords from search bar.
let page = 1;
async function searchImages(){
    inputData = inputE1.value;
    //Dynamic url
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&cliend_id=${accessKey}`;
    //fetch and response method
    const response = await fetch(url)
    const data = await response.json()
    
    const results = data.results

    if(page === 1){
        searchResults.innerHTML = ""
    }

    results.map((result) =>{
        //pushing data
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-result")
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.urls_description

        const imageLink = document.createElement('a')
        imageLink.href = result.links.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        imageWrapper.appendChild(imageWrapper)
    });

    page++
    if(page > 1){
        showMore.style.display = "block"
    }
}

//Event Listener
formE1.addEventListener("submit", (event) =>{
    event.preventDefault()
    page = 1;
    searchImages()
})

showMore.addEventListener("click", () =>{
    searchImages()
})