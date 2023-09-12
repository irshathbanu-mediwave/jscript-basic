let favMovies= [
    {
        id: "1",
        names: "Sweetsop",
        kg: "1kg",
      },
      {
        id: "2",
        names: "Finger lime",
        kg: "2kg",
      },
      {
        id: "3",
        names: "Passionfruit",
        kg: "3kg",
      },
      {
        id: "4",
        names: "Tangerine",
        kg: "4kg",
      },
      {
        id: "5",
        names: "Hog plum",
        kg: "5kg",
      },
    
      {
        id: "6",
        names: "Ice apple",
        kg: "6kg",
      },
    
      {
        id: "7",
        names: "Cherimoya",
        kg: "7kg",
      },
      {
        id: "8",
        names: "Jackfruit",
        kg: "8kg",
      },
      {
        id: "9",
        names: "Nectarine",
        kg: "9kg",
      },
      {
        id: "10",
        names: "Blueberries",
        kg: "10kg",
      }
    ];


  function makeMovieDiv(movie) {
    // outer div
    const div = document.createElement('div')
    div.setAttribute('class', 'card')
    const id = `${movie['id']}`
    div.setAttribute('id', id)
    // title
    const h2 = document.createElement('h2')
    h2.innerText = movie['names'];
    const h3 = document.createElement('h3')
    h3.innerText = movie['kg']
    const button = document.createElement("button");
    button.innerText = "delete";
    button.addEventListener('click', function(){
    div.remove();
})
    div.appendChild(h2)
    div.appendChild(h3)
    div.appendChild(button);
    return div;
  }
  function appendToApp(movieDiv) {
    const app = document.querySelector('#app');
    app.appendChild(movieDiv)
  }
  for(let i=0 ;i<favMovies.length; i++) {
    const movieDiv = makeMovieDiv(favMovies[i])
    appendToApp(movieDiv)
  }