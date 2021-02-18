$(document).ready(function () {
     $('.header__dashboard-username').click(function () {
          $('.header__dropdown').toggleClass('header__dropdown--hidden');
     });
     $('.header').click(function (event) {
          const classCollection = event.target.classList;
          const isClickForDropdown =
               classCollection.contains('header__dashboard-username') ||
               classCollection.contains('header__dashboard-img');
          const isOpenDropdown = $('.header__dropdown').hasClass('header__dropdown--hidden');
          if (!isClickForDropdown && !isOpenDropdown) {
               $('.header__dropdown').addClass('header__dropdown--hidden');
          }
     });
});
