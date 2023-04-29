const dropdown = (() => {
  const itemList = ['New', 'Old', 'Happy', 'Sad', 'Options', 'Restrictions']; // An example of options.

  // Uses itemList to fill out the example items.
  function fillItemContent(element, item) {
    for (let count = 0; count < itemList.length; count += 1) {
      item.textContent = itemList[count];
      element.appendChild(item.cloneNode(true));
    }
  }

  // Toggle visibility of element, toggled by the click of toggle.
  function toggleVisibility(toggler, element) {
    toggler.addEventListener('click', () => {
      element.classList.toggle('visible');
    });
  }

  function createDropdownComponents(toAppend) {
    const createDropdownSection = document.createElement('div');
    createDropdownSection.classList.add('dropdown-section');

    const createDropdownBar = document.createElement('buttom');
    createDropdownBar.classList.add('dropdown-bar');
    createDropdownBar.textContent = 'Dropdown';
    createDropdownBar.addEventListener('click', () => {
      createDropdownBar.classList.toggle('shadow');
      createDropdownBar.classList.toggle('active');
    });

    const createDropdown = document.createElement('div');
    createDropdown.classList.add('dropdown');

    toggleVisibility(createDropdownBar, createDropdown);

    const createDropdownItem = document.createElement('button');
    createDropdownItem.classList.add('item');

    createDropdownSection.appendChild(createDropdownBar);
    createDropdownSection.appendChild(createDropdown);

    fillItemContent(createDropdown, createDropdownItem);

    toAppend.appendChild(createDropdownSection);
  }

  return { createDropdownComponents };
})();

export default dropdown;
