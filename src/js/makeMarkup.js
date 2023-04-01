const gallery = document.querySelector('.gallery');

export default function makeMarkup(user) {
  const {
    picture: { large, medium },
    name: { first, last },
    phone,
    email
  } = user;

  const userCard = `
    <div>
      <a class="user-image" href="${large}">
        <img src="${medium}" alt="${first} ${last} photo">
      </a>
      <p>${first} ${last}</p>
      <p><a href="tel:${phone}">${phone}</a></p>
      <p><a href="mailto:${email}">${email}</a></p>
    </div>`
  
  gallery.insertAdjacentHTML('beforeend', userCard);
}