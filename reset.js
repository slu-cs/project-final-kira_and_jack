// Script for setting up a database.
const mongoose = require('mongoose');
const connect = require('./db');
const Show = require('./models/shows');
const OpenMic = require('./models/open_mics');
const SignUp = require('./models/signups')

// Connect to the database
connect();

// Model a collection of shows
const shows = [
  new Show({date: Date.parse('09 Apr 2020 22:00:00'), performers: 'Mr. Charlie and Blues for Breakfast', description: 'Blues For Breakfast is now entering its 3rd decade of entertaining people in northern New England and New York. Started back in 1991 to play a Discover Jazz Festival blues jam, they have evolved into the Champlain Valleys Do It All band. Though focused mostly on Grateful Americana, the group loves to mix classic rock, reggae, Motown and originals into their shows if the room calls for it.', link: 'http://www.bluesforbreakfast.com/', image:'https://2ab9pu2w8o9xpg6w26xnz04d-wpengine.netdna-ssl.com/wp-content/uploads/legacy-band-images/blues-for-breakfast.jpg'}),
  new Show({date: '16 Apr 2020 22:00:00', performers: 'Vundabar', description: 'Vundabar is an American indie rock band from Boston, Massachusetts. Vundabar formed when Brandon Hagen and Drew McDonald were in high school. Vundabar released their first full-length album in 2013 titled Antics. In 2015, Vundabar released their second full-length album titled Gawk.', link: 'https://vundabar.bandcamp.com/', image:"https://miro.medium.com/max/5120/1*1eOPonPEPeEio_nqHLxNOA.jpeg"}),
  new Show({date: '23 Apr 2020 22:00:00' , performers: 'Acid Dad', description: 'NYC\'s Acid Dad has made waves in the rock scene for the last couple of years with their catchy blend of psych and punk rock. In addition to releasing their debut EP Lets Plan a Robbery in 2016, theyve toured across the country, sharing the stage with bands like White Reaper, Diarrhea Planet, and Meatbodies.', link:'https://open.spotify.com/artist/3iqOjs2iwL6ywtcENg1ppm?autoplay=true&v=A', image:"https://s3.amazonaws.com/ohmyrocknessdotcom/uploads/band/image/129031/acid1111.jpg"}),
  new Show({date: '30 Apr 2020 22:00:00' , performers: 'After Funk', description: 'Championing a new and unique sound, After Funk has been bringing their infectiously fun yet thoughtful music to audiences across North America since they formed in 2011. The Toronto based funk, rock and soul family have been touring relentlessly for years and have no plans of slowing down anytime soon. Hailed as "the grooviest band from north of the border", After Funk has been steadily on the rise. ', link:'https://afterfunk.ca/', image:"https://f4.bcbits.com/img/0005999204_10.jpg"}),
  new Show({date: '07 Jul 2020 22:00:00' , performers: 'Kat Wright', description: 'Kat Wright, whose voice is both sultry and dynamic, delicate yet powerful; gritty but highly emotive and nuanced, has been described as “a young Bonnie Raitt meets Amy Winehouse”. Add to that voice enough stage presence to tame lions, and the combination of feline femininity proves immediately enchanting. There’s soul flowing in and out of her rock ‘n’ roll with a serpentine seduction. Some of soul music’s sweet, grand dames belt, shout, seethe, and succumb, while Wright sings gently like a heartache’s apology. It’s funky in spots and beautiful all over. And it hurts a little … like it should.', link: 'https://www.katwright.com/', image:"https://i1.wp.com/liveatnectars.com/wp-content/uploads/2012/10/1186262_529824947086463_304314014_n.jpg?fit=960%2C823&ssl=1"})

];

// Model a collection of open mics
const open_mics = [
  new OpenMic({date: new Date('04 Apr 2020 22:00:00')}),
  new OpenMic({date: new Date('06 May 2020 22:00:00')}),
];

// Model a collection of sign ups
const sign_ups = [
  new SignUp({date: new Date('04 Apr 2020 22:00:00'), name: 'Natalie Pontikes', description: 'Singer with violin', approved: true}),
  new SignUp({date: new Date('04 Apr 2020 22:00:00'), name: 'Riley Doyle', description: 'Singer with guitar', approved: true}),
  new SignUp({date: new Date('04 Apr 2020 22:00:00'), name: 'The Twelve Steps', description: '3 Piece Rock Band', approved: true}),
  new SignUp({date: new Date('04 Apr 2020 22:00:00'), name: 'HUAC', description: 'Rock Band with Keys', approved: false}),
  new SignUp({date: new Date('06 May 2020 22:00:00'), name: 'Jessie Meyer', description: 'Singer with guitar', approved: true}),
  new SignUp({date: new Date('06 May 2020 22:00:00'), name: 'Will Von Mehren', description: 'Spoken word', approved: true})
];


// Reset the database
mongoose.connection.dropDatabase()
  .then(() => Promise.all(shows.map(show => show.save())))
  .then(() => Promise.all(open_mics.map(open_mic => open_mic.save())))
  .then(() => Promise.all(sign_ups.map(sign_up => sign_up.save())))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
