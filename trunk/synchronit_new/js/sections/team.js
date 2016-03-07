$(function(){
  $(".team-member-dialog").dialog({
      dialogClass:'team-member-dialog-container'
  });
  $(".team-open-dialog-item").click(function(){
      $(this).parents("li:first").find('.team-member-dialog').dialog('open');
  });
});
