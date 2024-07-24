let currentAudio = null;
let currentPlayBtn = null;

// load data for each html page
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const songPage = urlParams.get('songPage');
    fetch('songs.json')
        .then(response => response.json())
        .then(songs => {
            const song = songs.find(s => s.pagename === songPage);
            if (song) {
                document.getElementById('song-name').textContent = song.name;
                const songImg = document.getElementById('song-img').src = song.imgSrc;
                songImg.src = song.imgSrc;
                songImg.alt = `${song.name} song download for free`
                document.getElementById('song-audio').src = song.downloadLink;
                document.getElementById('download-link').href = song.downloadLink;
                // const p = document.createElement('p');
                // const pContainer = document.querySelector('.pagebuttons');
                // p.textContent = 'Due to technical issues, downloading is currently unavailable. Enjoy listening to Marathi songs online.';
                // pContainer.appendChild(p);
                document.getElementById('download-link').setAttribute('download', song.name);

            }
        })
        .catch(error => console.error('Error fetching song details:', error));
});

function Daynamicheader() {
    // create header
    const songpage = document.getElementById('songpage');
    // Create brand
    const brandDiv = document.createElement('div');
    brandDiv.className = 'brand';
    const brandH1 = document.createElement('h1');
      brandH1.textContent = 'Ganemarathi'
    const brandImg = document.createElement('img');
    brandImg.src = 'music1.png';
    brandImg.className = 'img-fluid';
    brandDiv.appendChild(brandImg)
    brandDiv.appendChild(brandH1);
    songpage.appendChild(brandDiv);
    // Create search bar
    const searchBarDiv = document.createElement('div');
    searchBarDiv.id = 'searchbar';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'searchsongs';
    searchInput.placeholder = 'Search Marathi Songs';

    searchBarDiv.appendChild(searchInput);
    songpage.appendChild(searchBarDiv);

    // Create search results
    const searchResultsUl = document.createElement('ul');
    searchResultsUl.id = 'search-results';
    songpage.appendChild(searchResultsUl);
    // Create home content
    const homeContentDiv = document.createElement('div');
    homeContentDiv.id = 'homeContent';
    const daynamicallycontainer = document.createElement("div");
    daynamicallycontainer.classList = 'container';
    daynamicallycontainer.appendChild(homeContentDiv)
    songpage.appendChild(daynamicallycontainer);
    // breadcrumbs
    const homeLink = document.createElement('a');
    homeLink.href = 'index.html';
    homeLink.classList = 'homeLink';
    homeLink.textContent = 'HOME'
    const breadimg = document.createElement('img');
    breadimg.src = 'icon/fast-forward.png'
    homeLink.appendChild(breadimg)
    breadimg.style.width = '20px'
    songpage.appendChild(homeLink)

    // search songs
    const resultsContainer = document.getElementById('search-results');
    fetch('songs.json')
        .then(response => response.json())
        .then(data => {
            // Function to perform search
            function searchsongs(query) {
                if (query === '') {
                    return [];
                } else {
                    const results = data.filter(song =>
                        song.name.toLowerCase().includes(query.toLowerCase())
                    );
                    return results.slice(0, 15);
                }
            }
            // Function to display search results
            function displayResults(results) {
                resultsContainer.innerHTML = '';
                if (results.length === 0) {
                    resultsContainer.style.height = '0px';
                } else {
                    resultsContainer.style.height = '20%';
                }
                results.forEach(song => {
                    const listItem = document.createElement('li');
                    listItem.classList = 'resultitems'
                    listItem.innerHTML = `<img src="${song.imgSrc}" alt="${song.name} song download mp3 image">
                                  <span>${song.name}</span>`;
                    listItem.style.cursor = 'pointer';
                    listItem.style.margin = '10px 15px'
                    resultsContainer.appendChild(listItem);
                    listItem.addEventListener('click', function () {
                        const songPage = song.pagename;
                        window.location.href = `${songPage}.html?songPage=${songPage}`;
                    });

                });
            }

            // Event listener for input changes
            document.getElementById('searchsongs').addEventListener('input', function () {
                const query = this.value;
                const searchResults = searchsongs(query);
                displayResults(searchResults);
            });
        })
        .catch(error => console.log('Error fetching for Search Allsongs JSON file:', error))
}

const djSongs = [
    {
        title: "Ag Bai Ag Bai Janu Vina",
        description: "Experience the electrifying beats of 'Ag Bai Ag Bai Janu Vina.' Download this track for free and add it to your playlist to get the party started.",
        play_url: "https://ganemarathi.in/janu-vina-rangch-nay-DJ.html?songPage=janu-vina-rangch-nay-DJ"
    },
    {
        title: "Aho Mami Tumchi Mulgi",
        description: "'Aho Mami Tumchi Mulgi' is a fun and peppy track that will keep everyone dancing. Download this song for free and enjoy the lively beats.",
        play_url: "https://ganemarathi.in/aho-mami-tumchi-mulgi-DJ.html?songPage=aho-mami-tumchi-mulgi-DJ"
    },
    {
        title: "Bag Bag Sakhe Kas",
        description: "Add some zest to your playlist with 'Bag Bag Sakhe Kas.' This song is available for free download, ensuring you have the best tracks at your fingertips.",
        play_url: "https://ganemarathi.in/bag-bag-sakhe-kas-DJ.html?songPage=bag-bag-sakhe-kas-DJ"
    },
    {
        title: "Bai G Pichli Mazi Bangdi",
        description: "'Bai G Pichli Mazi Bangdi' is a vibrant track that brings traditional Marathi beats to the dance floor. Download it for free now.",
        play_url: "https://ganemarathi.in/bai-g-mazi-bangdi-DJ.html?songPage=bai-g-mazi-bangdi-DJ"
    },
    {
        title: "Bai Wadyavar Ya",
        description: "Get ready to groove to 'Bai Wadyavar Ya.' This song is perfect for any celebration and is available for free download.",
        play_url: "https://ganemarathi.in/bai-wadyavar-ya-DJ.html?songPage=bai-wadyavar-ya-DJ"
    },
    {
        title: "Bap To Bap Rahega",
        description: "'Bap To Bap Rahega' combines catchy lyrics with a dynamic beat. Download this track for free and keep your playlist fresh.",
        play_url: "https://ganemarathi.in/bap-to-bap-rahega-DJ.html?songPage=bap-to-bap-rahega-DJ"
    },
    {
        title: "Bol Mai Halgi Bajau Kya",
        description: "'Bol Mai Halgi Bajau Kya' is a crowd favorite with its energetic beats. Download this song for free and enjoy.",
        play_url: "https://ganemarathi.in/bol-mai-halgi-bajau-kya-DJ.html?songPage=bol-mai-halgi-bajau-kya-DJ"
    },
    {
        title: "Chandra DJ",
        description: "Light up your dance floor with 'Chandra DJ.' This track is available for free download, adding a modern twist to your playlist.",
        play_url: "https://ganemarathi.in/Chandra-DJ.html?songPage=Chandra-DJ"
    },
    {
        title: "Dhagala Lagli Kala",
        description: "The classic 'Dhagala Lagli Kala' is a must-have for any DJ set. Download the free version and enjoy this timeless hit.",
        play_url: "https://ganemarathi.in/dhagala-lagli-kala-DJ.html?songPage=dhagala-lagli-kala-DJ"
    },
    {
        title: "Disla G Bai Disla",
        description: "'Disla G Bai Disla' is a vibrant track that will keep everyone on their feet. Download it for free and add it to your collection.",
        play_url: "https://ganemarathi.in/disla-g-bai-disla-DJ.html?songPage=disla-g-bai-disla-DJ"
    },
    {
        title: "Hridayi Vasant Fultana",
        description: "'Hridayi Vasant Fultana' is a beautiful song with a great remix version available for free download. Add it to your playlist today.",
        play_url: "https://ganemarathi.in/hridayi-vasant-fultana-DJ.html?songPage=hridayi-vasant-fultana-DJ"
    },
    {
        title: "Mazya Dolyatil Kajal",
        description: "'Mazya Dolyatil Kajal' is a beautiful track with a modern DJ twist. Download it for free and enjoy the melodious beats.",
        play_url: "https://ganemarathi.in/kombli-palali-DJ.html?songPage=kombli-palali-DJ"
    },
    {
        title: "Mazya Premach Phulpakhara",
        description: "'Phulpakhara' is a romantic yet upbeat number perfect for dance lovers. Download it for free and add it to your playlist.",
        play_url: "https://ganemarathi.in/mazya-dolyatil-kajal-DJ.html?songPage=mazya-dolyatil-kajal-DJ"
    },
    {
        title: "Mere Collage Ki Ek Ladki Hai",
        description: "Originally a Hindi song, this Marathi version is perfect for DJ sets. Download it for free and enjoy the beats.",
        play_url: "https://ganemarathi.in/mere-collage-ki-ek-ladki-hai-DJ.html?songPage=mere-collage-ki-ek-ladki-hai-DJ"
    },
    {
        title: "Sutla Maza Padar",
        description: "'Sutla Maza Padar' is a lively song perfect for any celebration. Download this track for free and keep the party going.",
        play_url: "https://ganemarathi.in/sutla-maza-padar-bai-mi-nvhate-bhanat-DJ.html?songPage=sutla-maza-padar-bai-mi-nvhate-bhanat-DJ"
    },
    {
        title: "Tila Firvin Mazya Gadivar",
        description: "'Tila Firvin Mazya Gadivar' is a beautiful song with a great remix version available for free download. Add it to your playlist today.",
        play_url: "https://ganemarathi.in/tila-firvin-mazya-gadivar-DJ.html?songPage=tila-firvin-mazya-gadivar-DJ"
    },
    {
        title: "Tuza Zaga G",
        description: "'Tuza Zaga G' is a fun track that’s sure to liven up any event. Download this song for free and enjoy.",
        play_url: "https://ganemarathi.in/tuza-zaga-g.html?songPage=tuza-zaga-g"
    }
];
// Function to fetch and display songs
async function loadSongs() {

    try {
        // Fetch the JSON data
        const response = await fetch('songs.json');
        const songs = await response.json();

        // Get the container element
        const topSongs = document.getElementById('topSongs');

        // Clear existing content
        topSongs.innerHTML = '';
        let count = 0; // Initialize a counter

        // Loop through the songs and create HTML elements
        songs.forEach((song, index) => {
            const songDiv = document.createElement('div');
            songDiv.className = 'song';
            songDiv.id = 'song'

            const img = document.createElement('img');
            img.className = 'songimg';
            img.src = song.imgSrc;
            img.id = 'songimg'
            img.alt = `${song.name} song download free`
            songDiv.appendChild(img)
            const textCenterDiv = document.createElement('div');
            textCenterDiv.style.width = '220px'
            const nameSpan = document.createElement('span');
            nameSpan.style.fontSize = 'large';
            nameSpan.id = 'name';
            nameSpan.style.fontWeight = 'bold'
            nameSpan.innerHTML = `${song.name}`;
            textCenterDiv.appendChild(nameSpan);
            textCenterDiv.appendChild(document.createElement('br'));

            songDiv.appendChild(textCenterDiv);

            // Create audio element
            const audio = document.createElement('audio');
            audio.src = song.downloadLink;
            audio.id = `audio-${song.name}`;
            songDiv.appendChild(audio);

            // Create play/pause button
            const playBtn = document.createElement('button');
            playBtn.className = 'button';
            playBtn.innerHTML = '<img src="icon/play.png" alt="play song" />';
            playBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                if (audio.paused) {
                    // Pause the current audio if there is one
                    if (currentAudio && currentAudio !== audio) {
                        currentAudio.pause();
                        currentPlayBtn.innerHTML = '<img src="icon/play.png" alt="play song" />';
                    }
                    // Play the new audio and set it as current
                    audio.play();
                    playBtn.innerHTML = '<img src="icon/pause.png" alt="Pause song" />';
                    currentAudio = audio;
                    currentPlayBtn = playBtn;
                } else {
                    audio.pause();
                    playBtn.innerHTML = '<img src="icon/play.png" alt="Play song" />';
                    currentAudio = null;
                    currentPlayBtn = null;
                }
            });

            document.querySelectorAll('.button').forEach(link => {
                link.addEventListener('click', function (event) {
                    event.stopPropagation();
                });
            });
            const buttons = document.createElement('button');
            buttons.id = 'homebuttons'
            buttons.appendChild(playBtn)
            const playsound = document.createElement('input');
            playsound.type = 'range';
            playsound.style.width = '80%';
            playsound.min = 0;
            playsound.max = 100;
            playsound.value = 0;

            // Update range input as audio plays
            audio.addEventListener('timeupdate', () => {
                playsound.value = (audio.currentTime / audio.duration) * 100;
            });

            // Seek audio when range input changes
            playsound.addEventListener('input', () => {
                audio.currentTime = (playsound.value / 100) * audio.duration;
            });
            playsound.addEventListener('click', (event) => {
                event.stopPropagation(); // Stop propagation
            });
            // Event listener for when audio starts playing
            audio.addEventListener('play', function () {
                playsound.style.background = '#4CAF50'; // Change track background color to green when playing
            });

            // Event listener for when audio is paused or ended
            audio.addEventListener('pause', function () {
                playsound.style.background = '#000'; // Revert track background color to black when paused
            });

            audio.addEventListener('ended', function () {
                playsound.style.background = '#000'; // Revert track background color to black when ended
            });
            buttons.appendChild(playsound);
            songDiv.appendChild(buttons)

            // Make the song element clickable
            songDiv.addEventListener('click', () => {
                const songPage = song.pagename;
                window.location.href = `${songPage}.html?songPage=${songPage}`;
            });
            topSongs.appendChild(songDiv);
            count++; // Increment the counter

            // Check if we've processed 46 items
            if (count === 46) {
                const heading = document.createElement('h2');
                heading.textContent = `Song of Shivaji Maharaj`;
                heading.id = 'songsOfShivaji'
                topSongs.appendChild(heading);
                // list of shivaji songs
                const shivajiSongs = [
                    {
                        title: "आले मराठे (Aale Marathe)",
                        description: "A spirited tribute celebrating the valor and resilience of Maratha warriors."
                    },
                    {
                        title: "शिवबा राजा (Shivba Raja)",
                        description: "A powerful anthem honoring Shivaji Maharaj, highlighting his leadership and bravery."
                    },
                    {
                        title: "राजा आला (Raja Aala)",
                        description: "A rhythmic invocation welcoming the arrival of the revered king, Shivaji Maharaj."
                    },
                    {
                        title: "शूरवीर (Shoorveer)",
                        description: "A stirring melody that exalts the heroic deeds and fearless spirit of warriors."
                    },
                    {
                        title: "सवरी भवानी चौका मंदी (Savari Bhavani Chouka Mandi)",
                        description: "A devotional hymn dedicated to Goddess Bhavani, invoking her blessings and protection."
                    },
                    {
                        title: "युगत मांडली (Yugat Mandali)",
                        description: "A song celebrating the unity and strength of Shivaji Maharaj's army, known for its camaraderie and loyalty."
                    },
                    {
                        title: "झुलवा पाळणा बाल शिवाजीचा (Jhulva Palna Bal Shivajicha)",
                        description: "A lullaby depicting the nurturing and upbringing of young Shivaji Maharaj, infused with maternal affection."
                    },
                    {
                        title: "चाकर शिवबाच होणार (Chakar Shivabach Honar)",
                        description: "An ode to the unwavering devotion and loyalty of Shivaji Maharaj's followers, known as his 'Chakar'."
                    },
                    {
                        title: "माझ्या राजा र (Majhya Raja R)",
                        description: "A heartfelt expression of reverence and admiration for Shivaji Maharaj, portraying him as a beloved and revered king."
                    }
                ];
                const songsList = document.createElement('ul');
                shivajiSongs.forEach(song => {
                    const li = document.createElement("li");
                    const strong = document.createElement('strong');
                    strong.textContent = song.title;
                    li.appendChild(strong);
                    const p = document.createElement("p");
                    p.textContent = song.description;
                    li.appendChild(p);
                    songsList.appendChild(li);
                });
                const description = document.createElement('p');
                description.textContent = "Explore and download inspiring songs dedicated to the Chhatrapati Shivaji Maharaj, a symbol of courage, valor, and leadership in Indian history. Our collection of Shivaji Maharaj songs pays homage to his legacy, capturing the spirit of his heroic deeds and enduring influence. You can see some song collections and their descriptions below:";
                const devotionalContainer = document.createElement('div');
                devotionalContainer.appendChild(heading);
                devotionalContainer.appendChild(description);
                devotionalContainer.appendChild(songsList);
                devotionalContainer.style.backgroundColor = 'white'
                devotionalContainer.style.padding = '15px 10px'
                topSongs.appendChild(devotionalContainer);
            }
            if (count === 56) {
                const heading = document.createElement('h2');
                heading.textContent = `Indian God's songs - Devotional Songs`;
                heading.style.backgroundColor = 'white'
                heading.style.padding = '15px 10px'
                heading.id = 'songsofGods'
                // List of devotional songs
                const devotionalSongs = [
                    {
                        title: "नटरंग उभा",
                        description: "A melodious tribute invoking the divine presence, resonating with spiritual fervor and joyous devotion."
                    },
                    {
                        title: "नाम तुझे घेता देवा होई समाधान",
                        description: "A soulful hymn praising the name of the deity, bringing solace and spiritual fulfillment to the listener."
                    },
                    {
                        title: "माऊली माऊली",
                        description: "An enchanting chant dedicated to the divine mother, expressing reverence and seeking blessings for inner peace."
                    },
                    {
                        title: "माझे माहिर पंढरी",
                        description: "A serene melody paying homage to the sacred place of Pandharpur and the deity Vithoba, inspiring deep spiritual connection."
                    },
                    {
                        title: "माझी पंढरीची माय",
                        description: "A heartfelt ode to the greatness and grace of Pandharpur, celebrating the divine essence permeating the holy town."
                    },
                    {
                        title: "लल्लाटी भंडार",
                        description: "A rhythmic invocation to Goddess Mahalakshmi, invoking her blessings and prosperity with joyful devotion."
                    },
                    {
                        title: "तुळशी माळ हि श्वासाची",
                        description: "A devotional song honoring the sacred Tulsi plant, symbolizing purity and spiritual auspiciousness."
                    },
                    {
                        title: "विठू माऊली तू माऊली जगाची",
                        description: "A prayerful melody dedicated to Lord Vithoba, depicting him as the protector and nurturer of the world."
                    }
                ];
                const songsList = document.createElement('ul');
                devotionalSongs.forEach(song => {
                    const li = document.createElement("li");
                    const strong = document.createElement('strong');
                    strong.textContent = song.title;
                    li.appendChild(strong);
                    const p = document.createElement("p");
                    p.textContent = song.description;
                    li.appendChild(p);
                    songsList.appendChild(li);
                });
                const description = document.createElement('p');
                description.textContent = "Welcome to Ganemarathi.in! If you are looking for Marathi devotional songs (devanche gane), including those dedicated to Vittal Rakhumai, all Marathi God's songs, or the Hanuman Chalisa, you have come to the right place. Our site gane marathi offers easy navigation to quickly find your favorite tracks. Discover the latest devotional (devachi gani) songs, all available for free download. Explore some collections here with their description:";
                const devotionalContainer = document.createElement('div');
                devotionalContainer.appendChild(heading);
                devotionalContainer.appendChild(description);
                devotionalContainer.appendChild(songsList);
                devotionalContainer.style.backgroundColor = 'white'
                devotionalContainer.style.padding = '15px 10px'
                topSongs.appendChild(devotionalContainer);
            }
            if (count === 80) {
                const heading = document.createElement('h2');
                heading.textContent = `Marathi DJ Songs for Download`;
                heading.style.backgroundColor = 'white'
                heading.style.padding = '15px 10px'
                heading.id = 'songsofGods'
                // List of devotional songs
                const songsList = document.createElement('ul');

                djSongs.forEach(song => {
                    const li = document.createElement("li");
                    const strong = document.createElement('strong');
                    strong.textContent = song.title;
                    li.appendChild(strong);
                    const p = document.createElement("p");
                    p.textContent = song.description;
                    li.appendChild(p);
                    const a = document.createElement("a");
                    a.style.textDecoration = 'none'
                    a.href = song.play_url;
                    a.textContent = "Play Song";
                    p.appendChild(a);
                    songsList.appendChild(li);
                });
                const description = document.createElement('p');
                description.textContent = "Welcome to GaneMarathi.in! Whether you are searching for Marathi DJ songs, Marathi MP3 DJ songs, old Marathi DJ songs, Marathi-Hindi remix songs, or Dhinchak Marathi songs, we cater to you here. Our website gane marathi  offers fast and easy downloading service, you can download your song with just one click, for free. Whether you're looking for specific tracks like 'Mungla DJ song,' 'Chandra DJ song,' 'Rashtrawadi Punha DJ song,' 'Aho Mami Tumchi Mulgi Lai Sundar DJ song,' 'O Sheth song,' 'Pakhra Aazad Kela Tula DJ song,' or 'Bag Bag Sakhe Kas Gubu Gubu DJ song,' our site offers a comprehensive collection. Explore some collections below.";
                const devotionalContainer = document.createElement('div');
                devotionalContainer.appendChild(heading);
                devotionalContainer.appendChild(description);
                devotionalContainer.appendChild(songsList);
                devotionalContainer.style.backgroundColor = 'white'
                devotionalContainer.style.padding = '15px 10px'
                topSongs.appendChild(devotionalContainer);
            }
                    const isplaying = false;
                    // When audio ends, play the next song
                    audio.addEventListener('ended', () => {
                        playBtn.innerHTML = '<img src="icon/play.png" alt="Play song" />';
                        currentAudio = null;
                        currentPlayBtn = null;
                    
                        // Define a function to handle playing the next song
                        const playNextSong = (currentIndex, offset) => {
                            const nextSongDiv = topSongs.children[currentIndex + offset];
                            if (nextSongDiv) {
                                const nextAudio = nextSongDiv.querySelector('audio');
                                const nextPlayBtn = nextSongDiv.querySelector('.button');
                                if (nextAudio && nextPlayBtn) {
                                    currentAudio = nextAudio;
                                    currentPlayBtn = nextPlayBtn;
                                    nextAudio.play();
                                    nextPlayBtn.innerHTML = '<img src="icon/pause.png" alt="Pause song" />';
                                    
                                    nextAudio.addEventListener('ended', () => {
                                        alert(currentIndex)
                                        nextPlayBtn.innerHTML = '<img src="icon/play.png" alt="Play song" />';
                                        currentAudio = null;
                                        currentPlayBtn = null;
                                        playNextSong(currentIndex + offset,2);  // Move to the next song in sequence
                                    });
                                }
                            }
                        };
                    
                        if (index === 45) {
                            playNextSong(index, 2);
                        } else if (index === 55) {
                            playNextSong(index, 3);
                        } else if (index === 79) {
                            playNextSong(index, 4);
                        } else {
                            playNextSong(index, 1);
                        }
                    
                        console.log(index);
                    });
                    
        });
    } catch (error) {
        console.error('Error fetching the songs:', error);
    }

    // search songs
    const resultsContainer = document.getElementById('search-results');
    fetch('songs.json')
        .then(response => response.json())
        .then(data => {
            // Function to perform search
            function searchsongs(query) {
                if (query === '') {
                    return [];
                } else {
                    const results = data.filter(song =>
                        song.name.toLowerCase().includes(query.toLowerCase())
                    );
                    return results.slice(0, 15);
                }
            }
            // Function to display search results
            function displayResults(results) {
                resultsContainer.innerHTML = '';
                if (results.length === 0) {
                    resultsContainer.style.height = '0px';
                } else {
                    resultsContainer.style.height = '20%';
                }
                results.forEach(song => {
                    const listItem = document.createElement('li');
                    listItem.style.listStyle = 'none'
                    listItem.innerHTML = `<img src="${song.imgSrc}" alt="${song.name} song download mp3 image">
                         <span>${song.name}</span>`;
                    listItem.style.cursor = 'pointer';
                    listItem.style.margin = '10px 15px'
                    resultsContainer.appendChild(listItem);
                    listItem.addEventListener('click', function () {
                        const songPage = song.pagename;
                        window.location.href = `${songPage}.html?songPage=${songPage}`;
                    });

                });
            }

            // Event listener for input changes
            document.getElementById('searchsongs').addEventListener('input', function () {
                const query = this.value;
                const searchResults = searchsongs(query);
                displayResults(searchResults);
            });
        })
        .catch(error => console.log('Error fetching for Search Allsongs JSON file:', error))

}


function loadSongPageDetails() {
    const heading = document.createElement('h2');
    heading.innerHTML = 'popular marathi songs';
    const songcontainer = document.getElementById('song-details')
    const recomdedSongs = document.createElement('div');
    recomdedSongs.style.margin = '40px 10px'
    recomdedSongs.appendChild(heading)
    heading.style.textAlign = 'left'
    djSongs.forEach(song => {
        const li = document.createElement("li");
        li.style.display = 'flex'
        li.style.justifyContent = 'space-between'
        li.style.borderBottom = '1px solid black'
        li.style.marginBottom = '10px'
        const strong = document.createElement('strong');
        strong.style.width = '60%'
        strong.textContent = song.title;
        li.appendChild(strong);
        const p = document.createElement("p");
        li.appendChild(p);
        const a = document.createElement("a");
        a.style.textDecoration = 'none'
        a.href = song.play_url;
        a.textContent = "Play Song";
        a.classList = 'buttonStyle'
        p.appendChild(a);
        recomdedSongs.appendChild(li);
        songcontainer.appendChild(recomdedSongs);
    });
    // footer
    const footer = document.createElement('footer');
    footer.style.margin = '30px 0 0 0 '
    const footerContent = document.createElement('div');
    footerContent.classList.add('footer-content');

    const footerText = document.createElement('p');
    footerText.textContent = '© 2024 ganemarathi.in';

    const nav1 = document.createElement('nav');
    const nav2 = document.createElement('nav');

    const links1 = [
        { href: 'index.html', text: 'Home' },
        { href: 'about.html', text: 'About' },
        { href: 'contact.html', text: 'Contact' }
    ];

    const links2 = [
        { href: 'Privacy-policy.html', text: 'Privacy' },
        { href: 'disclaimer.html', text: 'Disclaimer' },
        { href: 'Terms-condition.html', text: 'Terms' },
         { href: 'DMCA.html', text: 'DMCA' }
    ];

    links1.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        nav1.appendChild(a);
        if (link !== links1[links1.length - 1]) {
            nav1.appendChild(document.createTextNode(' | '));
        }
    });

    links2.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        nav2.appendChild(a);
        if (link !== links2[links2.length - 1]) {
            nav2.appendChild(document.createTextNode(' | '));
        }
    });

    footerContent.appendChild(footerText);
    footerContent.appendChild(nav1);
    footerContent.appendChild(nav2);
    footer.appendChild(footerContent);
    songcontainer.appendChild(footer)

}
// Main function to initialize everything
function main() {
    if (document.getElementById('topSongs')) {
        loadSongs();
    }

    if (document.getElementById('songpage')) {
        Daynamicheader();
    }

    if (document.getElementById('song-details')) {
        loadSongPageDetails();
    }
}
// Initialize everything when the DOM content is loaded
document.addEventListener('DOMContentLoaded', main);

// Initialize everything when the DOM content is loaded
document.addEventListener('DOMContentLoaded', main);
// notification
document.addEventListener('DOMContentLoaded', function() {
    const banner = document.querySelector('.announcement-banner');
    banner.style.opacity = '0';
    banner.style.transition = 'opacity 1s';

    setTimeout(() => {
        banner.style.opacity = '1';
    }, 500);
});


