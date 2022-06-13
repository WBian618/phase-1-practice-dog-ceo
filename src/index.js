console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

//Challenge 1

fetch(imgUrl)
.then(resp => resp.json())
.then(data => {
    const dogs = data["message"];

    const cb = (element) => {
        let img = document.createElement('img');
        img.src = element;
        document.querySelector('#dog-image-container').append(img);
    }

    dogs.forEach(element => cb(element))
})
    

//Challenge 2

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
.then(resp => resp.json())
.then(datas => {
    const breeds = datas['message'];

    let objKeys = Object.keys(breeds) ;

    const callBack = (element) => {
        let type = document.createElement('li')
        type.innerText = element
        document.querySelector('ul').append(type)
    }
    
    objKeys.forEach( element => callBack( element ) )


})
//Challenge 3
.then(datas => {
    let dogList = document.getElementsByTagName('li');

    for (var i = 0; i < dogList.length; i++) {
        dogList[i].addEventListener("click", function(e) {
            e.target.style.color = 'blue';
            })
        }
})

// Challenge 4
.then(datas => {
    let select = document.querySelectorAll('option');
    console.log(select[0].value);
    
})


// Once we are able to load _all_ of the dog breeds onto the page, add JavaScript
// so that the user can filter breeds that start with a particular letter using a
// [dropdown](https://www.w3docs.com/learn-html/html-select-tag.html).

// For example, if the user selects 'a' in the dropdown, only show the breeds with
// names that start with the letter a. For simplicity, the dropdown only includes
// the letters a-d. However, we can imagine expanding this to include the entire
// alphabet.

// ---

// ![dog ceo](https://dog.ceo/img/dog.jpg)



