let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".list-group");
    let listpokemon = document.createElement("list-group-item");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add('text-capitalize');
    button.classList.add("btn-danger", "btn-lg", "btn-block");
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-bs-name', pokemon.name);
    button.setAttribute('data-target', '#pokemonModal')
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  function showModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    let modalHeader = $('modal-header')
    let modalId = $('#pokemon-id');

    modalTitle.empty();
    modalBody.empty();


    let pokemonId = document.createElement('p');
    pokemonId.innerText = `ID: ${pokemon.id}`;
    let pokemonImage = document.createElement('img');
    pokemonImage.setAttribute('src', pokemon.imageUrl);
    pokemonImage.classList.add('pokepic');
    let pokemonHeight = document.createElement('p');
    pokemonHeight.innerText = `Height: ${pokemon.height} units`;
    let pokemonTypes = document.createElement('p');
    pokemonTypes.innerText = `Type: ${pokemon.types}`;



    modalTitle.append(pokemon.name);
    modalBody.append(pokemonId);
    modalBody.append(pokemonImage);
    modalBody.append(pokemonHeight);
    modalBody.append(pokemonTypes);

  };

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
  };

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.other.dream_world.front_default;
      item.height = details.height;
      item.id = details.id;
      item.types = [];
      details.types.forEach(function (pokemonType) {
        item.types.push(pokemonType.type.name);
      });
    })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
    });
  }



  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();


pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

function showLoadMessage() {
  let loadMessage = document.createElement('img');
  loadMessage.src = 'img/loading.gif';
  loadMessage.classList.add('load-message');
  document.querySelector('body').appendChild(loadMessage);
}

function hideLoadMessage() {
  let loadMessage = document.querySelector('load-message');
  loadMessage.parentElement.removeChild(loadMessage);
}


function pokemonSearch() {
  let input = document.querySelector('pokemon-search')
  let filter = input.value.toUpperCase();
  ul = document.getElementById('list-group')
  li = ul.getElementsbyTaName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

window.addEventListener('keydown', function (e) {
  if (e.keyCode == '13') {
    e.preventDefault();
  }
})
