function account() {

  //account stylings to be affected
  var accountModal = document.querySelector('.account');

  //buttons to trigger account modal
  var accountNavTrigger = document.querySelector('#account-nav-trigger');
  var accountTrigger = document.querySelector('#account-trigger');
  var cancelAccountTrigger = document.querySelector('#account-content-header-close');



  //event listeners for account modal
  accountTrigger.addEventListener('click', () => {
    accountModal.style.display = "block";
  });

  accountNavTrigger.addEventListener('click', () => {
    accountModal.style.display = "block";
  });

  cancelAccountTrigger.addEventListener('click', () => {
    accountModal.style.display = "none";
  });
}

export default account;