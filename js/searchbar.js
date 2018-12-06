function searchBar() {
  //search stylings to be affected
  var mainHeader = document.querySelector('.header-main');
  var searchHeader = document.querySelector('.header-search');

  //buttons to trigger header
  var searchTrigger = document.querySelector('#search-trigger');
  var cancelTrigger = document.querySelector('#search-cancel');

  //event listeners for information technology modal
  searchTrigger.addEventListener('click', () => {
    mainHeader.style.display = "none";
    searchHeader.style.display = "flex";
  });

  cancelTrigger.addEventListener('click', () => {
    mainHeader.style.display = "flex";
    searchHeader.style.display = "none";
  });
}

export default searchBar;