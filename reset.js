// Script for setting up a database.
const mongoose = require('mongoose');
const connect = require('./db');
const Show = require('./models/shows');
const OpenMic = require('./models/open_mics');

// Connect to the database
connect();

// Model a collection of courses
const shows = [
  new Show({date: '04-09-20', time: '10:00 PM' , performers: 'Mr. Charlie and Blues for Breakfast', description: 'Blues For Breakfast is now entering its 3rd decade of entertaining people in northern New England and New York. Started back in 1991 to play a Discover Jazz Festival blues jam, they have evolved into the Champlain Valleys Do It All band. Though focused mostly on Grateful Americana, the group loves to mix classic rock, reggae, Motown and originals into their shows if the room calls for it.', link: 'http://www.bluesforbreakfast.com/'}),
  new Show({date: '04-16-20', time: '10:00 PM' , performers: 'Vundabar', description: 'Vundabar is an American indie rock band from Boston, Massachusetts. Vundabar formed when Brandon Hagen and Drew McDonald were in high school. Vundabar released their first full-length album in 2013 titled Antics. In 2015, Vundabar released their second full-length album titled Gawk.', link: 'https://vundabar.bandcamp.com/'}),
  new Show({date: '04-23-20', time: '10:00 PM' , performers: 'Acid Dad', description: 'NYC\'s Acid Dad has made waves in the rock scene for the last couple of years with their catchy blend of psych and punk rock. In addition to releasing their debut EP Lets Plan a Robbery in 2016, theyve toured across the country, sharing the stage with bands like White Reaper, Diarrhea Planet, and Meatbodies.', link:'https://open.spotify.com/artist/3iqOjs2iwL6ywtcENg1ppm?autoplay=true&v=A'}),
  new Show({date: '04-30-20', time: '10:00 PM' , performers: 'After Funk', description: 'Championing a new and unique sound, After Funk has been bringing their infectiously fun yet thoughtful music to audiences across North America since they formed in 2011. The Toronto based funk, rock and soul family have been touring relentlessly for years and have no plans of slowing down anytime soon. Hailed as "the grooviest band from north of the border", After Funk has been steadily on the rise. ', link:'https://afterfunk.ca/'}),
  new Show({date: '07-07-20', time: '10:00 PM' , performers: 'Kat Wright', description: 'Kat Wright, whose voice is both sultry and dynamic, delicate yet powerful; gritty but highly emotive and nuanced, has been described as “a young Bonnie Raitt meets Amy Winehouse”. Add to that voice enough stage presence to tame lions, and the combination of feline femininity proves immediately enchanting. There’s soul flowing in and out of her rock ‘n’ roll with a serpentine seduction. Some of soul music’s sweet, grand dames belt, shout, seethe, and succumb, while Wright sings gently like a heartache’s apology. It’s funky in spots and beautiful all over. And it hurts a little … like it should.', link: 'https://www.katwright.com/'})

];

// Model a collection of sections
const open_mics = [
  new OpenMic({date: '04-22-20', time:'10:00 PM', name: 'Natalie Pontikes', act: 'Singer with violin'}),
  new OpenMic({date: '04-22-20',time:'10:00 PM', name: 'Riley Doyle', act: 'Singer with guitar'}),
  new OpenMic({date:'04-22-20',time:'10:00 PM', name: 'The Twelve Steps', act: '3 Piece Rock Band'}),
  new OpenMic({date:'04-22-20',time:'10:00 PM', name: 'HUAC', act: 'Rock Band with Keys'}),
  new OpenMic({date:'05-06-20',time:'10:00 PM', name: 'Jessie Meyer', act: 'Singer with guitar'}),
  new OpenMic({date:'05-06-20',time:'10:00 PM', name: 'Will Von Mehren', act: 'Spoken word'}),

];

// Reset the database
mongoose.connection.dropDatabase()
  .then(() => Promise.all(shows.map(show => show.save())))
  .then(() => Promise.all(open_mics.map(open_mic => open_mic.save())))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
