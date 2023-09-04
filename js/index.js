import service from "./services.js";
import { characterListTmpl, singleCharacterTmpl } from "./templates.js";

const theBoys = {}

theBoys.init = async () => {
    const pageCharacter = document.querySelector('.page-character')
    const characterListContainer = document.querySelector('.character-list-container')
    const characters = await service.getCharacter();
    
    if(characterListContainer){
        characters.forEach((character) => {
            characterListContainer.insertAdjacentHTML('beforeend', characterListTmpl(character))
        });
    }

    if(pageCharacter){
        let search = location.search;
        let characterID = new URLSearchParams(search).get('id')

        const characterContainer = document.querySelector('.character-container')
        const foundCharacter = characters.find((character) => character.id == characterID)

        characterContainer.insertAdjacentHTML('beforeend', singleCharacterTmpl(foundCharacter))
    }


    // Search

    const renderResult = (result) =>{
        characterListContainer.innerHTML = '';

        result.forEach(character => {
            characterListContainer.insertAdjacentHTML('beforeend', characterListTmpl(character))
        })

    }

    const searchInput = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const category = document.querySelector('#category').value;
        const result = characters.filter(character => character[category].toLowerCase().includes(searchTerm))

        renderResult(result)
    }

    const input = document.querySelector('#search')
    input.addEventListener('input', searchInput)
    
}

theBoys.init();