// blocks/multifield-container-component/multifield-container-component.js
export default function decorate(block) {
  const wrapper = document.createElement('div');
  wrapper.className = 'mfc-items';

  // This example assumes you can extract the repeatable items as an array of objects.
  // Replace getItemsFromBlock() with the way your project exposes the multifield data.
  const items = getItemsFromBlock(block);

  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'mfc-item';

    if (item.image) {
      const img = document.createElement('img');
      img.src = item.image.src || item.image;
      img.alt = item.imageAlt || item.alt || '';
      card.appendChild(img);
    }

    if (item.title) {
      const h3 = document.createElement('h3');
      h3.textContent = item.title;
      card.appendChild(h3);
    }

    wrapper.appendChild(card);
  });

  // Keep the authored top/bottom content, but insert the rendered items between them.
  const children = [...block.children];
  const top = children[0];
  const middle = children[1];
  const bottom = children[2];

  block.textContent = '';

  if (top) block.appendChild(top);
  block.appendChild(wrapper);
  if (bottom) block.appendChild(bottom);

  if (middle) middle.remove();
}

function getItemsFromBlock(_block) {
  /**
   * Replace this with your project’s actual serialization shape.
   *
   * For example, if your editor stores the repeatable data as JSON in a raw field,
   * parse that here and return:
   * [
   *   { title: 'Item 1', image: '/path/to/img1.jpg', imageAlt: '...' },
   *   { title: 'Item 2', image: '/path/to/img2.jpg', imageAlt: '...' }
   * ]
   */
  return [{ title: 'Item 1', image: '/path/to/img1.jpg', imageAlt: '...' }];
}
