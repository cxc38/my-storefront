export default function decorate(block) {
  const items = [...block.children];

  const ul = document.createElement('ul');

  items.forEach((item) => {
    const li = document.createElement('li');

    const title = item.querySelector('h1,h2,h3,h4,h5,h6,p');
    const img = item.querySelector('img');

    if (img) li.appendChild(img);
    if (title) li.appendChild(title);

    ul.appendChild(li);
  });

  block.textContent = '';
  block.appendChild(ul);
}
