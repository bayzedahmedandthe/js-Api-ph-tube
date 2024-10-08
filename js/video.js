function getTimeString(time){
    const hour = parseInt(time / 3600);
    let remainingSecend = time % 3600;
    const minute = parseInt(remainingSecend /60);
    remainingSecend = parseInt(remainingSecend % 60);
    return `${hour}  hour ${minute} minute ${remainingSecend} secend ago`;
    }

// categories functionals
// {
//     "status": true,
//     "message": "successfully fetched all the categories",
//     "categories": [
//       {
//         "category_id": "1001",
//         "category": "Music"
//       },
//       {
//         "category_id": "1003",
//         "category": "Comedy"
//       },
//       {
//         "category_id": "1005",
//         "category": "Drawing"
//       }
//     ]
//   }
const loadCategoriesVideos = (id) => {
    alert(id);
    const url = (`https://openapi.programming-hero.com/api/phero-tube/category/${id}`);
    fetch(url)
        .then(respons => respons.json())
        .then(data =>displayVideos(data.category))
        .catch(error => console.log(error))
}
const loadCategories = () => {
    const url = ('https://openapi.programming-hero.com/api/phero-tube/categories');
    fetch(url)
        .then(respons => respons.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))
}

const displayCategories = (categories) => {
    const categorieyContainer = document.getElementById('categories-container');
    categories.forEach(item => {
        const buttonContasiner = document.createElement('div');
        buttonContasiner.innerHTML = 
        `<button onclick="loadCategoriesVideos(${item.category_id})" class="btn">
        ${item.category}
        </button>
        
        `
        categorieyContainer.appendChild(buttonContasiner);
        
    });
}

// {
//     "category_id": "1003",
//     "video_id": "aaak",
//     "thumbnail": "https://i.ibb.co/ZNggzdm/cake.jpg",
//     "title": "Beyond The Pale",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/MZ2vbXR/jimm.jpg",
//             "profile_name": "Jim Gaffigan",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "2.6K",
//         "posted_date": "15400"
//     },
//     "description": "'Beyond The Pale' by Jim Gaffigan, with 2.6K views, is a comedic gem that explores everyday observations and family life with a light-hearted and witty approach. Jim's humor is accessible and delightful, making this show perfect for anyone who enjoys clean, observational comedy."
// }
// videos functionals
const loadVideo = () => {
    const url = ('https://openapi.programming-hero.com/api/phero-tube/videos');
    fetch(url)
        .then(response => response.json())
        .then(video => displayVideos(video.videos))
        .catch(error => console.log(error))
}

const displayVideos = (video) => {
    const cardsSection = document.getElementById('card-section');
    cardsSection.innerHTML = "";
    if(video.length === 0){
        cardsSection.classList.remove('grid')
        cardsSection.innerHTML = 
        `<div class="flex justify-center mx-auto items-center py-4">
        <img src="./assets/icon.png" />
        
        </div>
        <p class="flex justify-center text-4xl font-bold">Opps!! Sorry, There is no content here</p>
        
        `
        return;
    }
    else{
        cardsSection.classList.add('grid')  
    }
    video.forEach(item => {
        console.log(item);
        const card = document.createElement('div');
        card.classList = "card card-compact"
        card.innerHTML = `
      <figure class="h-[200px] relative">
    <img
    src=${item.thumbnail}
     class ="h-full w-full object-cover"   
     alt="Shoes" />
     ${item.others.posted_date?.length === 0 ? "" : `<p class="absolute bg-black rounded-md px-2 text-xs right-2 bottom-2 text-white">${getTimeString(item.others.posted_date)}</p>` }
    
  </figure>
  <div class="px-0 py-3 flex items-center gap-6">
     <div>
     <img class="h-10 w-10 rounded-full object-cover" src=${item.authors[0].profile_picture}/>
     </div>
     <div>
     <h2 class="font-bold">${item.title}</h2>
     <div class="flex gap-2 items-center">
     <p>${item.authors[0].profile_name}</p>
     ${item.authors[0].verified === true ? `<img class="w-4 h-4 " src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>`: ""}
     </div>
     <p>${item.others.views}</p>  
  </div>

    `
        cardsSection.appendChild(card)
    })
}


loadCategories();
loadVideo();
