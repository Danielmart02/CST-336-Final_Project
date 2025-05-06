
$('#infoModal').on('show.bs.modal', function (event) {
     var button = $(event.relatedTarget);
     var name = button.data('name');
     var image = button.data('image');
     var rank = button.data('rank');
     var lastWeek = button.data('lastweek');
     var peak = button.data('peak');
     var weeks = button.data('weeks');
  
     var modal = $(this);
     modal.find('#infoModalArtistName').text(name);
     modal.find('#infoModalArtistImage').attr('src', image);
     modal.find('#infoRank').text(rank);
     modal.find('#infoLastWeek').text(lastWeek);
     modal.find('#infoPeak').text(peak);
     modal.find('#infoWeeks').text(weeks);
});
