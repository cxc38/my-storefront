export default {
  transform: ({ document }) => {
    const main = document.querySelector('main') || document.body;

    return {
      content: main.innerHTML,
    };
  },
};
