$('#rankingModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget);
      var name = button.data('name');
      var image = button.data('image');
      var modal = $(this);
      modal.find('#modalArtistName').text(name);
      modal.find('#modalArtistImage').attr('src', image);
      modal.find('#artistName').val(name);
});
  
document.getElementById("rankForm").addEventListener("submit", function (e) {
    const rank1 = document.getElementById("rankLyrics").value;
    const rank2 = document.querySelector('input[name="Replayability"]:checked');
    const rank3 = document.getElementById("Relevancy").value;
    const checked = document.querySelectorAll('.rankArtistTraits:checked');
    let rank4 =0;
    checked.forEach(trait =>{
        rank4+=parseInt(trait.value);
    });
    const rank5 = parseInt(document.getElementById("rankRecommend").value);

    if (!rank1 || !rank2 || !rank3 || rank4.length === 0 || !rank5) {
        e.preventDefault();
        alert("Please fill in all ranking fields.");
        return;
    }
  
    if(rank1>10||rank5>10){
        e.preventDefault();
        alert("Ranking values cannot be greater than 10!")
        return;
    }
      
});