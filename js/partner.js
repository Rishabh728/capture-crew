let API_KEY = '14M7xAqrXmGU3Ajj1EB9h33BcVhzv7n9kav98kkoWOaoMUKFZyVDj9JZ'

// fetch('https://api.pexels.com/v1/curated?page=2&per_page=40', {
//     method: 'GET',
//     headers: {
//         Authorization: API_KEY,
//     }
// }).then(response => response.json()).then(res =>{

//     let data = res.photos;
//     console.log(data)

// }
// )


let user = fetch('https://api.github.com/users')
user.then((e) => e.json()).then(data => {
    let section = document.getElementById('section-userData')
    let userData = data;
    userData.forEach(element => {
        console.log(element)
        let div = document.createElement('div')
        section.append(div)
        div.classList.add('div1')
        let img = document.createElement('img')
        div.append(img)
        img.classList.add('img')
        img.setAttribute('src', `${element.avatar_url}`)

        let divchild = document.createElement('div')
        div.append(divchild)
        divchild.classList.add('divChild')
        divchild.innerHTML = `<a><h1>${element.login}</h1></a>
                            <h2>Rank: ${element.id}</h2>
        `

        let buyNow = document.createElement('button')
        div.append(buyNow)
        buyNow.style.cssText='border-radius:20px; border:none; background:green'
        buyNow.innerHTML = `<marquee loop="infinite" direction="down">PORTFOLIO</marquee>`
        
    });
})
