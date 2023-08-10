let btn = document.getElementById('btn');
let output = document.getElementById('output');
console.log(output);
let quotes =
[
'“Every child is an artist; the problem is staying an artist when you grow up” – Pablo Picasso',
'“Don’t think about making art, just get it done. Let everyone else decide if it’s good or bad, whether they love it or hate it. While they are deciding, make even more art.” – Andy Warhol',
'“Art is a collaboration between God and the artist, and the less the artist does the better.” – Andre Gide',
'“Every artist was first an amateur.” – Ralph Waldo Emerson',
'“I found I could say things with color and shapes that I couldn’t say any other way – things I had no words for.” – Georgia O’Keeffe',
'“Don’t think. Thinking is the enemy of creativity. It’s self-conscious, and anything self-conscious is lousy. You can’t try to do things. You simply must do things.” – Ray Bradbury',
'“Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.” – Scott Adams',
'“The one thing that you have that nobody else has is you. Your voice, your mind, your story, your vision. So, write and draw and build and play and dance and live only as you can.” – Neil Gaiman',
'“To create one’s own world takes courage.” – Georgia O’Keeffe',
'“Whether you succeed or not is irrelevant, there is no such thing.  Making your unknown known is the important thing.” – Georgia O’Keeffe',
'“If people take anything from my music, it should be motivation to know that anything is possible as long as you keep working at it and don’t back down.” – Eminem',
'“One thing I have learned is that I am not the owner of my talent, I am the manager of it.” - Madonna',
'“If everything was perfect you would never learn and you would never grow.” - Beyonce',
'“‘It’s like if you want something so badly go out and grab, just keep on doing it.” – Ed Sheeran',
'“My songs are a reflection of how I think and how I feel at that moment. But I’m conscious of the fact that artists have a responsibility before the masses and they have to take care of their words.” - Shakira',
'“There are always going to be bad things. But you can write it down and make a song out of it’.” – Billie Eilish',
'“The moment you start thinking about what other people and other artists think, you’re going to start writing like other people.” – Rex Orange County',
'“I don’t make music for eyes; I make music for ears.” - Adele',
'“I don’t know where 565 I’m going from here, but I promise it won’t be boring.” – David Bowie',
'“I used to get upset by people not understanding me, but I’ve made a career out of it now.” – Ozzie Osbourne',
'“I want to touch people with my art. I want them to say, ‘he feels deeply, he feels tenderly.” – Vincent Van Gogh',
'“Art is a lie that makes us realize truth.” – Pablo Picasso',
'“An artist is not paid for his labor but for his vision.” – James McNeill Whistler',
'“The artist’s world is limitless. It can be found anywhere, far from where he lives or a few feet away. It is always on his doorstep.” – Paul Strand',
'“It took me four years to paint like Raphael, but a lifetime to paint like a child.” – Pablo Picasso',
'“There is no must in art because art is free.” – Wassily Kandinsky',
'“Poor is the pupil who does not surpass his master.” – Leonardo da Vinci',
'“If people knew how hard I worked to get my mastery, it wouldn’t seem so wonderful at all.” – Michelangelo',
'“One can have no smaller or greater mastery than mastery of oneself.” –Leonardo da Vinci',
'“The aim of art is to represent not the outward appearance of things, but their inward significance.”– Aristotle',
]


btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
     output.innerHTML = randomQuote; 
}
)