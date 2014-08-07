// window.onload = function() {
 //  app.init();
// };

$(document).ready(function() {
  console.log('ready');
  $('form').on('submit', function(e) {
    e.preventDefault();
    console.log($(this));
    console.log($(this).serialize());
    $.post('./', $(this).serialize(), function(data) {
      console.log(data);
      alert(data.msg);
    });
  });
});
