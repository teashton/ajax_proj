var currentCharacterame = {}
var showForm = false;
var editingCharacter;

$(document).ready( function() {
  function toggle() {
    showForm = !showForm
    $('#game-characters').remove();
    $('#character-list').toggle();

    if (showForm) {
      $.ajax({
        url: '/game_characters',
        method: 'GET',
        data: { id: editingCharacter }
      }).done( function(html) {
        $('#toggle').after(html)
      });
    }
  };