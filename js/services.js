const service = {};

service.getCharacter = async () => {
    try{
        const response = await fetch('./data/characters.json')
        const characters = await response.json();
        return characters;
    } catch (error) {
        console.error('Error fetching or parsing data:', error)
    }
}

export default service;