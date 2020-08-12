const axios = require('axios');

const render = (users)=> {
  const ul = document.querySelector('ul');
  const html = users.map( user => {
    return `
      <li ${ user.isFavorite ? 'class="favorite"':''} data-id='${ user.id }'>
        ${ user.name }
      </li>
    `;
  }).join('');
  ul.innerHTML = html;

  ul.addEventListener('click', async(ev)=> {
    if(ev.target.tagName === 'LI'){
      const isFavorite = ev.target.classList.contains('favorite');
      const id = ev.target.getAttribute('data-id');
      await axios.put(`/api/users/${id}`, {
        isFavorite: !isFavorite
      })
      ev.target.classList.toggle('favorite');
    }
  });
};

module.exports = {
  render
};
