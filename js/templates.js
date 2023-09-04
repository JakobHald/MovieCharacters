export const characterListTmpl = (char) => `
<div class="charBox">
<p class="charTitle"><b>${char.name}</b></p>
<img src="${char.image}"></img>
<div><a href="character.html?id=${char.id}">Gå til karakter</div>
</div>
`;

export const singleCharacterTmpl = (char) => `
<div class="charBox">
<p class="charTitle"><b>${char.name}</b></p>
<img src="${char.image}"></img>
<p class="description">${char.description}</p>
<div><a href="index.html">Gå tilbage</div>
</div>
`;