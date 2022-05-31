import data from './data.js';

const h2element = `<h2>Posts:</h2>
                   <ul id="postsList">
                   </ul>`;

document.getElementById("posts").insertAdjacentHTML("afterbegin", h2element);

const ul = document.getElementById('postsList');

function createElement(data) { // отримуємо масив даних
      return data.map(element => { // перебираємо його
          let tags = element.tags.map(tag => {
              return `<li>${tag}</li>`;
            }).join(''); // створюємо розмітку з тегами
          return `<li>
                    <p>${element.text}</p>
                    <ul>${tags}</ul>
                    <div>
                        <h3>${element.author.name}</h3>
                        <img src="${element.author.avatar}" alt="${element.author.name}">
                    </div>
                </li>`;
        }).join(''); // повертаємо готову розмітку елементу разом з тегами
}
const list = createElement(data); // викликаємо функцію генерації розмітки
console.log(list);
ul.insertAdjacentHTML('afterbegin', list); // додаємо розмітку в DOM

// for(let i = 0; i < data.length; i++){
//     let listElement = createElement(i);
//     ul.innerHTML += listElement;
// };

// function createElement(id){
//     let output = '';
//     for(let i = 0; i < data[id].tags.length; i++){
//         output += `<li>${data[id].tags[i]}</li>`;
//     };
//     return `<li id="element${id+1}">
//                 <p>${data[id].text}</p>
//                 <ul>
//                   ${output}
//                 </ul>
//                 <div>
//                     <h3>${data[id].author.name}</h3>
//                     <img src="${data[id].author.avatar}" alt="${data[id].author.name}">
//                 </div>
//             </li>`;
// };