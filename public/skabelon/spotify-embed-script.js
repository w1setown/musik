window.addEventListener('scroll', function() {
    var songs = document.querySelectorAll('.song');
    var fixedPlayer = document.querySelector('#fixed-player');
    
    songs.forEach(function(song) {
      var rect = song.getBoundingClientRect();
      
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        var embed = song.querySelector('.spotify-embed');
        fixedPlayer.src = embed.dataset.src;
      }
    });
  });