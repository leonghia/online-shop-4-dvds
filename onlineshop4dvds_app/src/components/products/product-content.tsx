export default function ProductContent({ productType }: { productType: string }) {
    if (productType.toUpperCase() === "ALBUM") {
        return (
            <div className="space-y-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Dive into the World of Music with Our Diverse Album Collection</h3>
                    <p>Immerse yourself in the captivating world of music with our extensive selection of albums! Whether you're a seasoned audiophile or just starting to explore different genres, we have something for everyone. Our collection boasts a vast array of musical styles, from the timeless classics of jazz and blues to the chart-topping hits of today's pop and rock stars. Delve into the soulful melodies of R&B or the energetic rhythms of hip-hop. We also cater to niche interests, offering a variety of soundtracks, world music, and even children's albums to keep the whole family entertained.</p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Experience the Artistry - Unveil the Story Behind the Music</h3>
                    <p>Each album in our collection is more than just a compilation of songs. It's a carefully crafted artistic statement, a journey through the artist's emotions and experiences. Explore the evolution of a band's sound through their discography, or discover hidden gems from up-and-coming musicians. Uncover the stories behind the lyrics, the inspiration behind the melodies, and the creative vision that brought the entire album to life. Get to know your favorite artists on a deeper level and appreciate their music in a whole new light.</p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Enhance Your Listening Experience - Physical Media Makes a Difference</h3>
                    <p>In today's digital age, where music is readily available at our fingertips, owning a physical album offers a unique and enriching experience. Hold the beautiful album artwork in your hands, meticulously crafted to represent the music within. Read the insightful liner notes, lyrics, and artist credits, gaining a deeper understanding of the creative process. The high-quality audio format of a DVD ensures a crisp and clear listening experience, allowing you to appreciate every nuance of the music. Owning an album is a way to connect with the music on a physical level, creating a tangible piece of your personal soundtrack.</p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Discover New Favorites - Explore Our Curated Collections</h3>
                    <p>Finding new music can be an exciting adventure. To help you navigate our extensive album collection, we've curated a variety of themed sections. Explore "Genre Essentials" to discover must-have albums within each musical style. Delve into "Artist Spotlights" to delve deeper into the works of your favorite musicians. Check out "Staff Picks" for personalized recommendations from our music enthusiasts. We're constantly updating our curated collections to ensure you have access to the freshest and most exciting music on the market.</p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Your One-Stop Shop for All Things Music</h3>
                    <p>Look no further than our online store for all your music needs! With our vast selection of albums, you're sure to find something to suit your taste and budget. We offer competitive prices, fast and reliable shipping, and a hassle-free shopping experience. So, put on your headphones, crank up the volume, and explore the world of music with our incredible album collection!</p>
                </div>

            </div>
        );
    } else if (productType.toUpperCase() === "MOVIE") {
        return (
            <div className="space-y-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Immerse Yourself in the Magic of Movies - A World of Entertainment Awaits</h3>
                    <p>Step into a world of limitless entertainment with our expansive collection of movies! Whether you're seeking a thrilling night of action and adventure, a heartwarming comedy to lift your spirits, a thought-provoking documentary to spark conversation, or a timeless classic to revisit, we have the perfect film for every mood and occasion. Our diverse selection caters to a wide range of genres, from pulse-pounding blockbusters and laugh-out-loud comedies to captivating dramas, suspenseful thrillers, and heart-wrenching romances.</p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Escape Reality - Embark on an Unforgettable Cinematic Journey</h3>
                    <p>Movies offer a powerful escape from the everyday. Transport yourself to fantastical worlds filled with mythical creatures and epic battles. Travel back in time to witness historical events unfold or explore the vast unknown reaches of space. Dive into the lives of compelling characters, experiencing their triumphs and heartbreaks as if they were your own. With every movie night, embark on a unique and unforgettable cinematic journey that will leave you entertained, inspired, and emotionally moved.</p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">The Power of Storytelling - Movies Captivate and Connect</h3>
                    <p>The art of cinema lies in its ability to tell powerful stories that resonate with audiences. Through captivating visuals, heart-stopping soundtracks, and compelling performances, movies have the power to transport us, educate us, and make us feel deeply. Explore the human experience through a variety of lenses, gaining new perspectives and fostering empathy for others. Movies can spark meaningful conversations, bring friends and family together, and create lasting memories.</p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Enhance Your Viewing Experience - The Magic of Physical Media</h3>
                    <p>In an age of streaming services, owning a physical movie offers a unique and rewarding experience. Hold the beautiful artwork of the DVD case in your hands, a collectible memento of your favorite films. Unwind with the anticipation of inserting the disc and settling in for a dedicated movie night, free from distractions. The high-quality audio and visual format of DVDs ensures a superior viewing experience, allowing you to fully appreciate the artistic vision of the filmmakers.</p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Your Trusted Source for Entertainment - Discover Your Next Favorite Film</h3>
                    <p>Finding the perfect movie for your next viewing session can be a breeze. We offer a variety of helpful features to make your search a joy. Browse through our curated collections by genre, director, release year, or actor. Explore user reviews and recommendations to discover hidden gems. With our extensive selection and user-friendly platform, you're sure to find your next cinematic obsession at our online store!</p>
                </div>
            </div>
        );
    } else if (productType.toUpperCase() === "GAME") {
        return (
            <div className="space-y-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Unleash Your Inner Gamer - Explore a World of Interactive Entertainment</h3>
                    <p>Dive into a world of endless possibilities with our incredible selection of video games! Whether you crave the thrill of competition, the satisfaction of solving puzzles, or the freedom to explore expansive virtual worlds, we have the perfect game to ignite your passion. Our diverse collection caters to all types of gamers, from seasoned veterans to curious newcomers. Challenge yourself with action-packed adventures, strategize your way to victory in real-time battles, lose yourself in captivating narratives, or unwind with relaxing simulation games.</p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Push Your Limits - Master the Challenge and Embrace the Fun</h3>
                    <p>Video games offer a unique blend of challenge and entertainment. Test your reflexes and problem-solving skills as you overcome obstacles, conquer enemies, and progress through increasingly difficult levels. Develop strategic thinking, enhance your hand-eye coordination, and unleash your creativity within the boundaries of the game world. But remember, gaming is not just about winning; it's about the journey itself. Embrace the fun, celebrate your victories, and learn from your defeats as you push your limits and refine your skills.</p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">A World of Stories - Immerse Yourself in Interactive Narratives</h3>
                    <p>The modern video game is more than just a form of entertainment; it's an interactive storytelling medium. Immerse yourself in captivating narratives that unfold as you play. Forge meaningful relationships with characters, make impactful choices that shape the story's direction, and experience the thrill of living within a fictional universe. From heart-wrenching dramas to side-splitting comedies, our collection offers a vast array of interactive stories to pique your curiosity and leave you wanting more.</p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Unparalleled Immersion - The Power of Physical Media</h3>
                    <p>In today's digital landscape, where games are readily available for download, owning a physical copy offers a unique advantage. Hold the game case in your hands, a tangible reminder of your favorite adventures. The high-quality graphics and immersive soundscapes of a DVD ensure a superior gaming experience, allowing you to fully appreciate the artistry and detail poured into each game. Plus, owning a physical copy means you can build a collection to cherish and revisit whenever the gaming mood strikes.</p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Your One-Stop Shop for All Things Gaming - Discover Your Next Adventure</h3>
                    <p>Finding the perfect game to match your mood and interests is simple with our user-friendly online store. Explore our curated collections by genre, platform, or release date. Read detailed reviews and watch gameplay trailers to get a feel for each game. We offer competitive prices, fast and reliable shipping, and a hassle-free shopping experience to ensure you can start your next gaming adventure as soon as possible!</p>
                </div>
            </div>
        );
    } else {
        return <div className="space-y-4"><p>Content is being updated......</p></div>
    }
}