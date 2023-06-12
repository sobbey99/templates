function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    // TABS
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

          function hideTabeContent() {
            tabsContent.forEach(item => {
                item.style.display = 'none';
            });

            tabs.forEach(item => {
                item.classList.remove(activeClass);
            });
          }

          function showTabContent(i = 0) {
            tabsContent[i].style.display = 'block';
            tabs[i].classList.add(activeClass);
          }

          hideTabeContent();
          showTabContent();

          tabsParent.addEventListener('click', (e) => {
            const target = e.target;

            if(target && target.classList.contains(tabsSelector.slice(1))) {
                tabs.forEach((item, i) => {
                    if(target == item) {
                        hideTabeContent();
                        showTabContent(i);
                    }
                });
            }
          });   
}

export default tabs;