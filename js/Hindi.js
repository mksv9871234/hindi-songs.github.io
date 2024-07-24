document.addEventListener('DOMContentLoaded', function() {
    let currentActiveStar = null;
    let currentActiveArtist = null;
    fetch('actors-and-actresses.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(song => {
            // songs by popular stars section 
            const starsContainer = document.getElementById('songsByPopularStars');
            const stars = document.createElement('div');
            stars.className = 'starsCircle'
            const starsImage = document.createElement('img')
            starsImage.src = song.image;
            const starName = document.createElement('p');
            starName.textContent = song.name
            stars.appendChild(starsImage);
            stars.appendChild(starName)
            starsContainer.appendChild(stars);
                
            stars.addEventListener('click', function() {
                // Remove the "active" class and close button from the previously active star
                if (currentActiveStar) {
                    currentActiveStar.classList.remove('active');
                    const existingCloseButton = currentActiveStar.querySelector('.close-btn');
                    if (existingCloseButton) {
                        currentActiveStar.removeChild(existingCloseButton);
                    }
                }

                // Add the "active" class to the clicked star
                stars.classList.add('active');
                currentActiveStar = stars;
                const bio = document.getElementById('bioArtist-actors');
                bio.innerHTML = `<h2>${song.name} Biography -</h2> ${song.bio}`
                // Add a close button to the star
                const closeButton = document.createElement('button');
                closeButton.className = 'close-btn';
                closeButton.textContent = 'x';

                closeButton.addEventListener('click', function(event) {
                    event.stopPropagation();
                    clearSongs();
                    fetchAllSongs();
                    stars.classList.remove('active');
                    stars.removeChild(closeButton);
                    currentActiveStar = null;
                    bio.textContent = '';
                });

                stars.appendChild(closeButton);

                fetch('Hindi.json')
                    .then(response => response.json())
                    .then(songs => {
                        // Filter songs based on the selected actor/actress
                        const filteredSongs = songs.filter(actor => 
                            actor.cast && actor.cast.includes(song.name)
                        );
                        clearSongs();
                        // Display filtered songs
                        if(filteredSongs.length > 0){
                            displaySongs(filteredSongs);
                        }else{
                            displayNoSongsMessage(song.name);
                        }
                    });
            });
        })
    })

    fetch('Artist.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(song => {
                // songs by popular stars section 
                const ArtistContainer = document.getElementById('songsByPopularArtist');
                const Artist = document.createElement('div');
                Artist.className = 'ArtistCircle'
                const ArtistImage = document.createElement('img')
                ArtistImage.src = song.image;
                const ArtistName = document.createElement('p');
                ArtistName.textContent = song.name;
                Artist.appendChild(ArtistImage);
                Artist.appendChild(ArtistName)
                ArtistContainer.appendChild(Artist);

                Artist.addEventListener('click', function() {
                    // Remove the "active" class and close button from the previously active star
                    if (currentActiveArtist) {
                        currentActiveArtist.classList.remove('active');
                        const existingCloseButton = currentActiveArtist.querySelector('.close-btn');
                        if (existingCloseButton) {
                            currentActiveArtist.removeChild(existingCloseButton);
                        }
                    }
    
                    // Add the "active" class to the clicked star
                    Artist.classList.add('active');
                    currentActiveArtist = Artist;
           const bio = document.getElementById('bioArtist-actors');
                bio.innerHTML = `<h2>${song.name} Biography -</h2> ${song.bio}`
                    // Add a close button to the star
                    const closeButton = document.createElement('button');
                    closeButton.className = 'close-btn';
                    closeButton.textContent = 'x';
    
                    closeButton.addEventListener('click', function(event) {
                        event.stopPropagation();
                        clearSongs();
                        fetchAllSongs();
                        Artist.classList.remove('active');
                        Artist.removeChild(closeButton);
                        currentActiveArtist = null;
                        bio.textContent = '';
                    });
    
                    Artist.appendChild(closeButton);
    
                    fetch('Hindi.json')
                        .then(response => response.json())
                        .then(songs => {
                            // Filter songs based on the selected actor/actress
                            const filteredSongs = songs.filter(Artist => 
                                Artist.artist && Artist.artist.includes(song.name)
                            );
                            clearSongs();
                            // Display filtered songs
                            if(filteredSongs.length > 0){
                                displaySongs(filteredSongs);
                            }else{
                                displayNoSongsMessage(song.name);
                            }
                        });
                });
        })
    })

    function displayNoSongsMessage(name){
        const p = document.createElement('h1');
        p.textContent = `No songs available for ${name}`;
        nightysSongs.appendChild(p)
        fetchAllSongs();
    }

    const nightysSongs = document.getElementById('90s-songs');
    let currentplaybutton;
    let currentAudio;

    function clearSongs() {
        // Remove all children from nightysSongs
        while (nightysSongs.firstChild) {
            nightysSongs.removeChild(nightysSongs.firstChild);
        }
    }

        function displaySongs(data){
            const songContainer = document.createElement('div');
            songContainer.className = 'songContainer';
            data.forEach(song => {
                const songBody = document.createElement('div');
                songBody.className = 'songBody'
                const audio = document.createElement('audio');
                audio.src = song.downloadLink;
                audio.controls = true; 
                const songTitle = document.createElement('div');
                const SongName = document.createElement('strong')
                const SongMovie = document.createElement('strong');
                const SongArtist = document.createElement('strong');
                SongMovie.textContent = `movie: ${song.movie}` || 'Untitled';
                SongArtist.textContent = `artist: ${song.artist}` || 'Untitled';
                SongName.textContent = `Title: ${song.name}` || 'Untitled'; 
                songTitle.appendChild(SongName);
                songTitle.appendChild(SongMovie);
                songTitle.appendChild(SongArtist);
                songTitle.id = 'songTitle'
                const songImage = document.createElement('img')
                songImage.src = song.imageSrc
                songImage.id = 'songImage'
                const SongTitleImageContainer = document.createElement('div');
                SongTitleImageContainer.id = 'SongTitleImageContainer'
                SongTitleImageContainer.appendChild(songTitle);
                SongTitleImageContainer.appendChild(songImage);
                songBody.appendChild(SongTitleImageContainer);
                const playbutton = document.createElement('button');
                playbutton.className = 'button';
                playbutton.innerHTML = '<img src="../icon/play.png" alt="play song" />';
                playbutton.addEventListener('click', (event) => {
                    event.stopPropagation();
                    if (audio.paused) {
                        // Pause the current audio if there is one
                        if (currentAudio && currentAudio !== audio) {
                            currentAudio.pause();
                            currentplaybutton.innerHTML = '<img src="icon/play.png" alt="play song" />';
                        }
                        // Play the new audio and set it as current
                        audio.play();
                        playbutton.innerHTML = '<img src="icon/pause.png" alt="Pause song" />';
                        currentAudio = audio;
                        currentplaybutton = playbutton;
                    } else {
                        audio.pause();
                        playbutton.innerHTML = '<img src="icon/play.png" alt="Play song" />';
                        currentAudio = null;
                        currentplaybutton = null;
                    }
                });

                // song range
                const songrange = document.createElement('input');
                songrange.type = 'range';
                songrange.style.width = '80%';
                songrange.min = 0;
                songrange.max = 100;
                songrange.value = 0;
    
                // Update range input as audio plays
                audio.addEventListener('timeupdate', () => {
                    songrange.value = (audio.currentTime / audio.duration) * 100;
                });
    
                // Seek audio when range input changes
                songrange.addEventListener('input', () => {
                    audio.currentTime = (songrange.value / 100) * audio.duration;
                });
                songrange.addEventListener('click', (event) => {
                    event.stopPropagation(); // Stop propagation
                });
                // Event listener for when audio starts playing
                audio.addEventListener('play', function () {
                    songrange.style.background = '#4CAF50'; // Change track background color to green when playing
                });
    
                // Event listener for when audio is paused or ended
                audio.addEventListener('pause', function () {
                    songrange.style.background = '#000'; // Revert track background color to black when paused
                });
    
                audio.addEventListener('ended', function () {
                    songrange.style.background = '#000'; // Revert track background color to black when ended
                });
                const SongRangeContainer = document.createElement('div')
                SongRangeContainer.id = 'songrangecontainer'
                SongRangeContainer.appendChild(songrange)
                SongRangeContainer.appendChild(playbutton)
                songBody.appendChild(SongRangeContainer)
                songContainer.appendChild(songBody);
            });
            nightysSongs.appendChild(songContainer);
        }
      function fetchAllSongs(){
            fetch('Hindi.json')
        .then(response => response.json())
        .then(data => {
            displaySongs(data)
        })
        .catch(error => {
            console.log('Server not responding', error);

            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Could not load songs. Please try again later.';
            nightysSongs.appendChild(errorMessage);
        });
    }
    fetchAllSongs();
});
