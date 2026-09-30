/* Seed data for Next Three Hours.
   Library events pulled from Brooklyn Public Library's public event feed
   (discover.bklynlibrary.org/api/search/v2.php) on 2026-09-23. Times are UTC
   and converted to local time in the browser. "Always open" places are
   playgrounds with no schedule; coordinates are approximate.
   Each row: [id, title, startUTC, endUTC, venueKey, ageLabel, tags, registration, canceled, blurb] */

window.CHECKED_ON = "2026-09-27";

/* Where late arrivals sort: "bottom" or "top". Andan's hunch is bottom; flip to test. */
window.LATE_POSITION = "bottom";

window.VENUES = {
  "Leonard Library":          { lat: 40.7137, lng: -73.9482, addr: "81 Devoe St at Leonard St", url: "https://www.bklynlibrary.org/locations/leonard", kind: "library", indoor: true },
  "Williamsburgh Library":    { lat: 40.7066, lng: -73.9575, addr: "240 Division Ave at Marcy Ave", url: "https://www.bklynlibrary.org/locations/williamsburgh", kind: "library", indoor: true },
  "Greenpoint Library":       { lat: 40.7256, lng: -73.9497, addr: "107 Norman Ave at Leonard St", url: "https://www.bklynlibrary.org/locations/greenpoint", kind: "library", indoor: true },
  "DeKalb Library":           { lat: 40.6963, lng: -73.9297, addr: "790 Bushwick Ave at DeKalb Ave", url: "https://www.bklynlibrary.org/locations/dekalb", kind: "library", indoor: true },
  "Marcy Library":            { lat: 40.6913, lng: -73.9520, addr: "617 DeKalb Ave at Nostrand Ave", url: "https://www.bklynlibrary.org/locations/marcy", kind: "library", indoor: true },
  "Saratoga Library":         { lat: 40.6784, lng: -73.9161, addr: "8 Thomas S. Boyland St", url: "https://www.bklynlibrary.org/locations/saratoga", kind: "library", indoor: true },
  "Macon Library":            { lat: 40.6826, lng: -73.9358, addr: "361 Lewis Ave at Macon St", url: "https://www.bklynlibrary.org/locations/macon", kind: "library", indoor: true },
  "Bedford Library":          { lat: 40.6853, lng: -73.9576, addr: "496 Franklin Ave at Hancock St", url: "https://www.bklynlibrary.org/locations/bedford", kind: "library", indoor: true },
  "Clinton Hill Library":     { lat: 40.6877, lng: -73.9663, addr: "380 Washington Ave at Lafayette Ave", url: "https://www.bklynlibrary.org/locations/clinton-hill", kind: "library", indoor: true },
  "Washington Irving Library":{ lat: 40.6960, lng: -73.9126, addr: "360 Irving Ave at Woodbine St", url: "https://www.bklynlibrary.org/locations/washington-irving", kind: "library", indoor: true },
  "Cooper Park":              { lat: 40.7160, lng: -73.9385, walkOverride: 20, addr: "Maspeth Ave and Olive St", url: "https://www.nycgovparks.org/parks/cooper-park", kind: "playground", indoor: false },
  "Sternberg Park":           { lat: 40.7062, lng: -73.9440, addr: "Montrose Ave and Lorimer St", url: "https://www.nycgovparks.org/parks/sternberg-park", kind: "playground", indoor: false },
  "Maria Hernandez Park":     { lat: 40.7031, lng: -73.9256, addr: "Knickerbocker Ave and Starr St", url: "https://www.nycgovparks.org/parks/maria-hernandez-park", kind: "playground", indoor: false },
  "McCarren Park":            { lat: 40.7208, lng: -73.9520, addr: "Bedford Ave and N 12th St", url: "https://www.nycgovparks.org/parks/mccarren-park", kind: "playground", indoor: false },
  "Justice Gilbert Ramirez Park": { lat: 40.7079, lng: -73.9350, addr: "Johnson Ave and Bushwick Ave", url: "https://www.nycgovparks.org/parks/justice-gilbert-ramirez-park", kind: "playground", indoor: false },
  "Ten Eyck Playground":      { lat: 40.7095, lng: -73.9465, addr: "Ten Eyck St near Leonard St (approx.)", url: "https://www.nycgovparks.org/parks/ten-eyck-playground", kind: "playground", indoor: false },
  "Edamama":                  { lat: 40.7118, lng: -73.9510, addr: "568 Union Ave", url: "https://tinybeans.com/new-york/baby-toddler-drop-in-classes-brooklyn/", kind: "paid", indoor: true },
  "Flying Squirrel":          { lat: 40.7290, lng: -73.9575, addr: "87 Oak St, Greenpoint", url: "https://tinybeans.com/new-york/baby-toddler-drop-in-classes-brooklyn/", kind: "paid", indoor: true },
  "Artudio":                  { lat: 40.7255, lng: -73.9445, addr: "4 Diamond St, Greenpoint", url: "https://www.artudiony.com", kind: "paid", indoor: true },
  "Bushwick Playground":      { lat: 40.7000, lng: -73.9310, walkOverride: 40, addr: "Flushing Ave and Knickerbocker Ave", url: "https://www.nycgovparks.org/parks/bushwick-playground", kind: "playground", indoor: false }
};

/* Places with no schedule. Shown in "always open" when within walking range. */
window.ALWAYS = [
  { venue: "Sternberg Park", note: "Closest playground to Montrose & Graham. Toddler swings and a sprinkler area in warm months." },
  { venue: "Cooper Park", note: "Two playgrounds, a dog run to watch, and shade. Good for a long stroller loop." },
  { venue: "Maria Hernandez Park", note: "Big playground, lots of other families on weekend mornings." },
  { venue: "McCarren Park", note: "Largest park in range. Multiple playgrounds; the one at Driggs and N 12th suits toddlers." },
  { venue: "Justice Gilbert Ramirez Park", note: "Small park on the East Williamsburg side. Not a great playground, but close." },
  { venue: "Ten Eyck Playground", note: "Shared with the school in front of it, so expect it closed during school hours and open afternoons, weekends, and summer. Location approximate." },
  { venue: "Bushwick Playground", note: "Small and usually quiet on weekday mornings. Far on foot: 40 minutes measured." }
];

window.EVENTS = [
["844340","Playtime @ the Library","2026-09-23T19:30:00Z","2026-09-23T20:30:00Z","Leonard Library","Birth to Five Years","first five years",0,0,"Open play for children 0-5 and caregivers in the auditorium. Older kids will find something to do as well."],
["843949","Science Baby with Ms. Emma Gordon","2026-09-24T15:00:00Z","2026-09-24T16:00:00Z","Leonard Library","Birth to Five Years","first five years",0,0,"A special series for toddlers and preschoolers exploring STEM through play."],
["842367","ASL Family Storytime with Erin","2026-09-26T15:00:00Z","2026-09-26T15:30:00Z","Leonard Library","Birth to Five Years","first five years;sign language;storytime",0,0,"Saturday family storytime in American Sign Language with Deaf performer Erin. Stories, movement, and rhymes."],
["828951","Babies and Books, session 1","2026-09-28T14:30:00Z","2026-09-28T15:15:00Z","Leonard Library","Birth to Five Years","babies & books;story play",0,0,"Songs, rhymes, and books together. Designed for infants and babies who are not yet walking."],
["843308","ASL Babies & Books Storytime with Erin","2026-09-28T15:15:00Z","2026-09-28T16:00:00Z","Leonard Library","Birth to Five Years","first five years;sign language;storytime",0,0,"Babies & Books storytime in American Sign Language with Deaf performer Erin."],
["834055","Build with Lego & Duplo","2026-09-28T19:30:00Z","2026-09-28T20:15:00Z","Leonard Library","Kids","Build with Duplo;first five years",0,0,"An hour of building. Duplo blocks are set out for younger children."],
["838703","Toddler Storytime, session 2","2026-09-30T15:15:00Z","2026-09-30T16:00:00Z","Leonard Library","Birth to Five Years","storytime;toddler time",0,0,"Every Wednesday morning: stories and songs for children 16-32 months. Tickets at the information desk, so arrive early."],
["844341","Playtime @ the Library","2026-09-30T19:30:00Z","2026-09-30T20:30:00Z","Leonard Library","Birth to Five Years","first five years",0,0,"Open play for children 0-5 and caregivers in the auditorium."],
["843257","Spanish Storytime","2026-09-25T14:30:00Z","2026-09-25T15:30:00Z","Williamsburgh Library","Birth to Five Years","multilingual storytime",0,0,"Rimas, canciones y cuentos en español. Birth to five."],
["827243","Storytime","2026-09-30T14:30:00Z","2026-09-30T15:00:00Z","Williamsburgh Library","Birth to Five Years","storytime",0,0,"Books, rhymes, songs, and movement. Doors open at 10:00, come early for a spot."],
["843258","Spanish Storytime","2026-10-02T14:30:00Z","2026-10-02T15:30:00Z","Williamsburgh Library","Birth to Five Years","multilingual storytime",0,0,"Rimas, canciones y cuentos en español. Birth to five."],
["842606","Sunset Storytime","2026-09-24T22:00:00Z","2026-09-24T22:30:00Z","Greenpoint Library","Birth to Five Years","first five years;storytime",0,0,"All-ages storytime on Thursday evenings. Weather permitting, it is held in the rooftop garden."],
["842598","Sensory Garden Hour","2026-09-25T14:30:00Z","2026-09-25T15:30:00Z","Greenpoint Library","Birth to Five Years","first five years;storytime",0,0,"Short garden-themed storytime, then time together in the rooftop garden."],
["833512","Saturday Family StoryTime","2026-09-26T14:30:00Z","2026-09-26T15:00:00Z","Greenpoint Library","Kids","first five years;music;saturday storytime;storytime",0,1,"Saturday morning family storytime in the children's area."],
["841280","Story Play","2026-09-28T14:30:00Z","2026-09-28T15:15:00Z","DeKalb Library","Birth to Five Years","first five years;preschool storytime;story play;storytime",0,0,"Songs and stories, ages 0-5. Capacity 40; free tickets at the desk."],
["841285","Story Play","2026-09-29T20:00:00Z","2026-09-29T20:45:00Z","DeKalb Library","Birth to Five Years","first five years;preschool storytime;story play;storytime",0,0,"An afternoon of songs and stories, ages 0-5."],
["833553","Game On! for Kids, Babies and Toddlers","2026-09-23T19:00:00Z","2026-09-23T20:00:00Z","Marcy Library","Birth to Five Years","first five years",0,1,"Board games, chunky puzzles, and sensory tabletop toys. Ages 0-6."],
["833563","Baby/Toddler Playtime","2026-09-24T15:00:00Z","2026-09-24T16:00:00Z","Marcy Library","Birth to Five Years","first five years;story play",0,1,"Open play for babies and toddlers."],
["833577","Build with LEGO and DUPLO","2026-09-24T19:00:00Z","2026-09-24T20:00:00Z","Marcy Library","Birth to Five Years","Build with Duplo",0,0,"LEGO and DUPLO play for kids and toddlers."],
["833604","Toddler Yoga at the Library","2026-09-25T14:30:00Z","2026-09-25T16:00:00Z","Marcy Library","Birth to Five Years","first five years;toddler yoga",0,0,"A playful way to burn off morning energy with your toddler."],
["833591","Baby/Toddler Playtime","2026-09-25T15:00:00Z","2026-09-25T16:00:00Z","Marcy Library","Birth to Five Years","first five years;story play",0,0,"Open play for babies and toddlers."],
["833642","Baby/Toddler Playtime","2026-09-26T15:00:00Z","2026-09-26T16:00:00Z","Marcy Library","Birth to Five Years","first five years;story play",0,0,"Open play for babies and toddlers."],
["833630","Baby/Toddler Playtime","2026-09-28T15:00:00Z","2026-09-28T16:00:00Z","Marcy Library","Birth to Five Years","first five years;story play",0,0,"Open play for babies and toddlers."],
["833618","Kids Create","2026-09-29T19:00:00Z","2026-09-29T20:00:00Z","Marcy Library","Birth to Five Years","",0,0,"Arts and crafts for little makers."],
["843313","Story Play","2026-09-30T14:15:00Z","2026-09-30T14:45:00Z","Marcy Library","Birth to Five Years","first five years;story play",0,0,"Weekly storytime and playtime with Ms. Traci."],
["843341","Story Play","2026-09-30T15:00:00Z","2026-09-30T15:45:00Z","Marcy Library","Birth to Five Years","first five years;story play",0,0,"Weekly storytime and playtime with Ms. Traci, second session."],
["833554","Game On! for Kids, Babies and Toddlers","2026-09-30T19:00:00Z","2026-09-30T20:00:00Z","Marcy Library","Birth to Five Years","first five years",0,0,"Board games, chunky puzzles, and sensory tabletop toys. Ages 0-6."],
["833564","Baby/Toddler Playtime","2026-10-01T15:00:00Z","2026-10-01T16:00:00Z","Marcy Library","Birth to Five Years","first five years;story play",0,0,"Open play for babies and toddlers."],
["844705","Animales: Songs, Stories & Sounds from the Andes","2026-10-01T15:00:00Z","2026-10-01T15:59:00Z","Marcy Library","Kids","multilingual storytime",0,0,"A playful musical journey inspired by animal life and storytelling from Peru. Bilingual."],
["833578","Build with LEGO and DUPLO","2026-10-01T19:00:00Z","2026-10-01T20:00:00Z","Marcy Library","Birth to Five Years","Build with Duplo",0,0,"LEGO and DUPLO play for kids and toddlers."],
["839648","Read and Play","2026-09-24T17:00:00Z","2026-09-24T17:45:00Z","Saratoga Library","Birth to Five Years","first five years",0,0,"Inclusive storytime for children birth to 5 with and without disabilities. Group size limited."],
["841962","Story Play","2026-09-30T14:30:00Z","2026-09-30T15:15:00Z","Saratoga Library","Birth to Five Years","first five years;story play",1,0,"Stories and songs then free play, birth to 5. Online registration required."],
["839649","Read and Play","2026-10-01T17:00:00Z","2026-10-01T17:45:00Z","Saratoga Library","Birth to Five Years","first five years",0,0,"Inclusive storytime for children birth to 5 with and without disabilities. Group size limited."],
["832745","Saturday Storytime","2026-09-26T15:00:00Z","2026-09-26T16:00:00Z","Macon Library","Birth to Five Years","saturday storytime;storytime",0,0,"New stories and favorite tales read aloud. All ages."],
["838450","DUPLO Lego Time","2026-09-29T17:00:00Z","2026-09-29T18:00:00Z","Macon Library","Kids","first five years",0,0,"DUPLO for children 5 and under with caregivers."],
["837760","Macon Storytime","2026-09-30T14:15:00Z","2026-09-30T15:00:00Z","Macon Library","Birth to Five Years","babies & books;storytime",1,0,"Stories, songs, and rhymes for birth to 5. Online registration required."],
["837772","Macon Storytime","2026-09-30T15:15:00Z","2026-09-30T16:00:00Z","Macon Library","Birth to Five Years","babies & books;storytime",1,0,"Stories, songs, and rhymes for birth to 5. Online registration required."],
["843888","Build with LEGO and DUPLO","2026-09-24T19:30:00Z","2026-09-24T20:30:00Z","Bedford Library","Kids","Build with Duplo",0,0,"Get creative with LEGO and DUPLO."],
["843902","Sensory Playtime","2026-09-25T15:00:00Z","2026-09-25T15:45:00Z","Bedford Library","Birth to Five Years","first five years",0,0,"Open sensory play for children 0-5 and caregivers."],
["843881","Saturday Storytime","2026-09-26T15:00:00Z","2026-09-26T15:30:00Z","Bedford Library","Birth to Five Years","saturday storytime;storytime",0,0,"New stories and favorite tales read aloud. All ages."],
["843874","Story Play","2026-09-30T14:30:00Z","2026-09-30T15:15:00Z","Bedford Library","Birth to Five Years","first five years;story play",0,0,"Stories and songs then free play for children birth to 3."],
["843889","Build with LEGO and DUPLO","2026-10-01T19:30:00Z","2026-10-01T20:30:00Z","Bedford Library","Kids","Build with Duplo",0,0,"Get creative with LEGO and DUPLO."],
["843882","Saturday Storytime","2026-10-03T15:00:00Z","2026-10-03T15:30:00Z","Bedford Library","Birth to Five Years","saturday storytime;storytime",0,0,"New stories and favorite tales read aloud. All ages."],
["843875","Story Play","2026-10-07T14:30:00Z","2026-10-07T15:15:00Z","Bedford Library","Birth to Five Years","first five years;story play",0,0,"Stories and songs then free play for children birth to 3."],
["835486","Storytime!","2026-09-24T15:00:00Z","2026-09-24T15:30:00Z","Clinton Hill Library","Birth to Five Years","first five years;storytime",0,0,"Songs, stories, rhymes, and movement. Best for birth to 5."],
["835658","Toy Time","2026-09-25T19:00:00Z","2026-09-25T21:00:00Z","Clinton Hill Library","Birth to Five Years","first five years",0,0,"Free play toy time in the children's area to wrap up the week."],
["835492","Kids Create! First 5 Years","2026-09-30T15:00:00Z","2026-09-30T16:00:00Z","Clinton Hill Library","Birth to Five Years","first five years",0,0,"A new art project every week for little artists."],
["835487","Storytime!","2026-10-01T15:00:00Z","2026-10-01T15:30:00Z","Clinton Hill Library","Birth to Five Years","first five years;storytime",0,0,"Songs, stories, rhymes, and movement. Best for birth to 5."],
["835659","Toy Time","2026-10-02T19:00:00Z","2026-10-02T21:00:00Z","Clinton Hill Library","Birth to Five Years","first five years",0,0,"Free play toy time in the children's area to wrap up the week."],
["830699","Story Play","2026-09-24T15:00:00Z","2026-09-24T15:30:00Z","Washington Irving Library","Birth to Five Years","first five years;story play",0,0,"Stories and songs then free play for children birth to 5."],
["830700","Story Play","2026-09-28T15:00:00Z","2026-09-28T15:30:00Z","Washington Irving Library","Birth to Five Years","first five years;story play",0,0,"Stories and songs then free play for children birth to 5."],
["830701","Story Play","2026-10-01T15:00:00Z","2026-10-01T15:30:00Z","Washington Irving Library","Birth to Five Years","first five years;story play",0,0,"Stories and songs then free play for children birth to 5."],
["839552","Ready, Set, Kindergarten!","2026-10-03T15:00:00Z","2026-10-03T16:00:00Z","Washington Irving Library","Birth to Five Years","first five years",0,0,"Seven-session reading readiness series for families."],
["830702","Story Play","2026-10-05T15:00:00Z","2026-10-05T15:30:00Z","Washington Irving Library","Birth to Five Years","first five years;story play",0,0,"Stories and songs then free play for children birth to 5."],
["830703","Story Play","2026-10-08T15:00:00Z","2026-10-08T15:30:00Z","Washington Irving Library","Birth to Five Years","first five years;story play",0,0,"Stories and songs then free play for children birth to 5."]
];

/* Paid drop-in classes: weekly schedules, expanded into dated rows by the app.
   dow: 0=Sun..6=Sat. Times are local. Source: Tinybeans roundup; venue sites block automated reads.
   verified:false means "times from a third-party listing, confirm with the venue". */
window.PAID = [
  { venue: "Artudio", title: "ARTUDIO Minis (art, guided then open play)", price: "$40/class", ages: "1.5 to 3 years", minutes: 60, verified: true, until: "2026-10-28", bands: { baby: false, toddler: true },
    slots: [[3,"11:00"]], book: "https://www.hisawyer.com/artudio-1/schedules?schedule_id=drop-ins",
    blurb: "Paint, clay, watercolors, collage. 30 minutes guided, 30 minutes sensory open play. Grown-up stays. Dress for a mess. Thursday 9:30 session is waitlisted." },
  { venue: "Artudio", title: "Baby's First Art Play", price: "$34/class", ages: "6 to 14 months", minutes: 45, verified: true, until: "2026-10-29", bands: { baby: true, toddler: false },
    slots: [[4,"11:15"]], book: "https://www.hisawyer.com/artudio-1/schedules?schedule_id=drop-ins",
    blurb: "Taste-safe finger painting, cloud dough, tummy-time art, sensory bottles. Calm and small. Bring a change of clothes." },
  { venue: "Artudio", title: "Open Studio", price: "$25/class", ages: "1 and up", minutes: 60, verified: true, until: "2026-12-04", bands: { baby: false, toddler: true },
    slots: [[5,"9:00"],[5,"10:00"],[5,"11:00"]], book: "https://www.hisawyer.com/artudio-1/schedules?schedule_id=drop-ins",
    blurb: "Friday open studio, three hourly sessions. Materials out, no set project." },
  { venue: "Edamama", title: "Music, movement and singalong drop-ins", price: "$15 cash", ages: "babies and toddlers", minutes: 45, verified: false,
    slots: [[1,"9:30"],[1,"10:30"],[1,"12:00"],[2,"10:30"],[2,"12:00"],[3,"10:30"],[3,"12:00"],[3,"15:45"],[4,"10:30"],[4,"12:00"]],
    blurb: "Puppets, singalongs, and movement in the back of a kids' salon and shop. Cash only." },
  { venue: "Flying Squirrel", title: "Drop-in music class", price: "$10 to $15", ages: "mostly under 2, some older toddlers", minutes: 45, verified: false,
    slots: [[1,"10:30"],[2,"10:30"],[2,"13:30"],[3,"10:30"],[4,"11:15"],[5,"13:30"]],
    blurb: "Rotating instructors in a kids' consignment shop. Small room, arrive a few minutes early." }
];

/* Venues we know exist but whose schedule is not loaded yet. Shown as a short list with a link. */
window.KNOWN_UNLISTED = [
  /* Artudio moved into PAID once its Sawyer schedule was supplied on Sept 27. */
  { name: "Artudio (semester classes)", venue: "Artudio", what: "Drop-in rows below are per-class prices from Sawyer; semesters run to Oct 29 (Minis, Baby's First Art) and Dec 4 (Open Studio). Thursday 9:30 Minis is waitlisted. Baby's First Art Play (6 to 14 months, 45 min, taste-safe materials) and ARTUDIO Minis (1.5 to 3 years, 60 min: 30 guided, 30 open sensory play). Grown-up stays. Hours vary; the weekly schedule and booking are on Sawyer. Price not listed on their site.", url: "https://www.artudiony.com", book: "https://www.hisawyer.com/explore?q=artudio" }
];

/* Stay-home creative activities for rainy days. Links are YouTube searches, not specific videos,
   so they stay useful as videos come and go. */
window.AT_HOME = [
  { title: "Kitchen band", ages: "0 to 3", mins: 15, how: "Pots, wooden spoons, a pot lid. Play a song and let her drum along. Babies: hold the spoon with her.", yt: "toddler kitchen band song along" },
  { title: "Contact-paper window art", ages: "1 to 3", mins: 20, how: "Tape a sheet of contact paper sticky-side out on a low window. Offer tissue paper, leaves, cut shapes. Wet toddlers stay busy for a long time.", yt: "contact paper sticky window art toddler" },
  { title: "Bath-time painting", ages: "1 to 3", mins: 20, how: "Shaving-cream paint (a squirt plus a drop of food coloring) on the tub wall. Rinses off. Do it before a bath you were going to give anyway.", yt: "bathtub shaving cream paint toddler" },
  { title: "Sensory bin, ten-minute version", ages: "1 to 3", mins: 25, how: "A baking tray, dry rice or oats, cups and a spoon. Sit on a towel. Babies: a tray of large pasta shapes to grab, with you right there.", yt: "simple sensory bin toddler rice scoop" },
  { title: "Storytime at home", ages: "0 to 3", mins: 15, how: "The library's own storytime songs, so it feels like the branch. Then three books of her choosing.", yt: "Brooklyn Public Library storytime songs" },
  { title: "Dance and freeze", ages: "1 to 3", mins: 10, how: "Music on, dance, pause the music, everyone freezes. Babies laugh at the freeze even if they cannot do it.", yt: "freeze dance song toddlers" },
  { title: "Cardboard box day", ages: "1 to 3", mins: 30, how: "One big box. Crayons for the outside, a blanket for the inside. It is a car, then a house, then a boat.", yt: "cardboard box play ideas toddler" }
];

/* Further afield: a train ride, not a walk. "confirmed" means the venue's own page showed it on 2026-09-27. */
window.FAR = [
  { name: "MoMA Family Story Time", where: "MoMA, 11 W 53rd St, Manhattan (L to 8th Ave, then E)", when: "Wednesdays 10:30 to 11:00, Education Center floor 1", cost: "Free with admission; kids 16 and under free (admission detail not re-checked)", confirmed: true, url: "https://www.moma.org/calendar/" },
  { name: "Brooklyn Children's Museum", where: "145 Brooklyn Ave, Crown Heights", when: "Wed to Sun 10 to 5. Free every Thursday 2 to 5 (reserve online or same day)", cost: "$15 per person; Thursday afternoons free", confirmed: true, url: "https://www.brooklynkids.org/visit/" },
  { name: "The Strand kids reading", where: "828 Broadway, Manhattan (L to Union Square)", when: "Reported Saturdays 11 am; not on their events page this fall", cost: "Free", confirmed: false, url: "https://www.strandbooks.com/events" },
  { name: "Books of Wonder story time", where: "42 W 17th St, Manhattan", when: "Reported weekend mornings; not on their events page", cost: "Free", confirmed: false, url: "https://booksofwonder.com/blogs/upcoming" },
  { name: "Talea Beer Co. family events", where: "Williamsburg taproom", when: "Occasional weekend kids' events; nothing listed right now", cost: "Varies", confirmed: false, url: "https://www.taleabeer.com/blogs/events" }
];

/* NYPL branches reachable by the L train. transit = door-to-door minutes from Montrose & Graham, estimated. */
Object.assign(window.VENUES, {
  "Tompkins Square Library": { lat: 40.7266, lng: -73.9821, addr: "331 E 10th St, Manhattan", url: "https://www.nypl.org/events/calendar?location=86", kind: "library", indoor: true, transit: 22, system: "NYPL" },
  "Ottendorfer Library": { lat: 40.7297, lng: -73.9885, addr: "135 2nd Ave, Manhattan", url: "https://www.nypl.org/events/calendar?location=109", kind: "library", indoor: true, transit: 24, system: "NYPL" },
  "Hamilton Fish Park Library": { lat: 40.7194, lng: -73.982, addr: "415 E Houston St, Manhattan", url: "https://www.nypl.org/events/calendar?location=66", kind: "library", indoor: true, transit: 30, system: "NYPL" },
  "Seward Park Library": { lat: 40.7146, lng: -73.9884, addr: "192 E Broadway, Manhattan", url: "https://www.nypl.org/events/calendar?location=119", kind: "library", indoor: true, transit: 35, system: "NYPL" },
  "Epiphany Library": { lat: 40.7409, lng: -73.9787, addr: "228 E 23rd St, Manhattan", url: "https://www.nypl.org/events/calendar?location=60", kind: "library", indoor: true, transit: 32, system: "NYPL" },
  "Kips Bay Library": { lat: 40.7418, lng: -73.9764, addr: "446 3rd Ave, Manhattan", url: "https://www.nypl.org/events/calendar?location=96", kind: "library", indoor: true, transit: 33, system: "NYPL" },
  "Muhlenberg Library": { lat: 40.7433, lng: -73.9962, addr: "209 W 23rd St, Manhattan", url: "https://www.nypl.org/events/calendar?location=105", kind: "library", indoor: true, transit: 32, system: "NYPL" },
  "Jefferson Market Library": { lat: 40.7345, lng: -73.9998, addr: "425 6th Ave, Manhattan", url: "https://www.nypl.org/events/calendar?location=93", kind: "library", indoor: true, transit: 28, system: "NYPL" },
  "Stavros Niarchos Foundation Library": { lat: 40.7532, lng: -73.9822, addr: "455 5th Ave at 40th St, Manhattan", url: "https://www.nypl.org/events/calendar?location=100", kind: "library", indoor: true, transit: 35, system: "NYPL" },
  "Mulberry Street Library": { lat: 40.7215, lng: -73.9963, addr: "10 Jersey St, Manhattan", url: "https://www.nypl.org/events/calendar?location=106", kind: "library", indoor: true, transit: 35, system: "NYPL" },
  "Chatham Square Library": { lat: 40.7138, lng: -73.9967, addr: "33 E Broadway, Manhattan", url: "https://www.nypl.org/events/calendar?location=53", kind: "library", indoor: true, transit: 40, system: "NYPL" },
});

/* NYPL events pulled from scout.nypl.org/api/graphql (CalendarEventList) on 2026-09-27, audience filtered to Infant/Toddler. */
window.EVENTS_NYPL = [
["nypl-1790604000-Kips B", "Toddler Open Play", "2026-09-28T14:00:00Z", "2026-09-28T16:00:00Z", "Kips Bay Library", "Birth to Five", "nypl", 0, 0, "Library playdate; meet other caregivers and explore play materials."],
["nypl-1790604000-Jeffer", "Little Movers Storytime: Books and Rhymes", "2026-09-28T14:00:00Z", "2026-09-28T15:00:00Z", "Jefferson Market Library", "Toddler", "nypl", 0, 0, "Books and songs to get the wiggles out. Best for new walkers and toddlers."],
["nypl-1790605800-Kips B", "Toddler and Caregiver Storytime", "2026-09-28T14:30:00Z", "2026-09-28T15:00:00Z", "Kips Bay Library", "Birth to Five", "nypl", 0, 0, "Stories, songs, and movement for active toddlers."],
["nypl-1790605800-Stavro", "Lapsit Storytime: Baby and Me", "2026-09-28T14:30:00Z", "2026-09-28T15:00:00Z", "Stavros Niarchos Foundation Library", "Infant", "nypl", 0, 0, "Books, songs, gentle movement. Child on your lap; best for pre-walkers."],
["nypl-1790607600-Kips B", "Toddler and Caregiver Storytime", "2026-09-28T15:00:00Z", "2026-09-28T15:30:00Z", "Kips Bay Library", "Birth to Five", "nypl", 0, 0, "Second session. Stories, songs, and movement for active toddlers."],
["nypl-1790609400-Stavro", "Lapsit Storytime: Baby and Me", "2026-09-28T15:30:00Z", "2026-09-28T16:00:00Z", "Stavros Niarchos Foundation Library", "Infant", "nypl", 0, 0, "Second session. Child on your lap; best for pre-walkers."],
["nypl-1790609400-Ottend", "Playdate / Open Play", "2026-09-28T15:30:00Z", "2026-09-28T16:30:00Z", "Ottendorfer Library", "Birth to Five", "nypl", 0, 0, "Library playdate and open play with other caregivers."],
["nypl-1790613000-Epipha", "Little Movers Storytime", "2026-09-28T16:30:00Z", "2026-09-28T17:30:00Z", "Epiphany Library", "Toddler", "nypl", 0, 0, "Stories, songs, and wiggles for active toddlers."],
["nypl-1790622000-Muhlen", "Coloring Corner", "2026-09-28T19:00:00Z", "2026-09-28T20:00:00Z", "Muhlenberg Library", "Birth to Five", "nypl", 0, 0, "Paper, crayons, and coloring pencils. Families welcome."],
["nypl-1790625600-Mulber", "Family Storytime", "2026-09-28T20:00:00Z", "2026-09-28T20:30:00Z", "Mulberry Street Library", "Birth to Five", "nypl", 0, 0, "Stories, songs, and rhymes for children 5 and under with a caregiver."],
["nypl-1790692200-Mulber", "Lapsit Storytime", "2026-09-29T14:30:00Z", "2026-09-29T15:00:00Z", "Mulberry Street Library", "Infant", "nypl", 0, 0, "Books, songs, gentle movement. Best for pre-walkers on a lap."],
["nypl-1790692200-Epipha", "Little Movers Storytime: Bitty Book Buddies + Open Play", "2026-09-29T14:30:00Z", "2026-09-29T15:30:00Z", "Epiphany Library", "Toddler", "nypl", 0, 0, "Stories and songs, then open play."],
["nypl-1790692200-Chatha", "Mandarin Bilingual Storytime", "2026-09-29T14:30:00Z", "2026-09-29T15:30:00Z", "Chatham Square Library", "Birth to Five", "nypl", 0, 0, "Mandarin and English stories, songs, and rhymes, birth to five. No registration."],
["nypl-1790692200-Jeffer", "Little Movers Storytime: Books and Rhymes", "2026-09-29T14:30:00Z", "2026-09-29T15:00:00Z", "Jefferson Market Library", "Toddler", "nypl", 0, 0, "Books and songs for new walkers and toddlers."],
["nypl-1790694000-Muhlen", "Baby Lapsit Storytime", "2026-09-29T15:00:00Z", "2026-09-29T16:00:00Z", "Muhlenberg Library", "Infant", "nypl", 0, 0, "First come, first served, maximum 10 spots, pre-walkers only."],
["nypl-1790694900-Seward", "Tuesday Family Storytime", "2026-09-29T15:15:00Z", "2026-09-29T15:45:00Z", "Seward Park Library", "Birth to Five", "nypl", 0, 0, "Books, songs, and rhymes every Tuesday, up to age 5."],
["nypl-1790694900-Jeffer", "Little Movers Storytime: Books and Rhymes", "2026-09-29T15:15:00Z", "2026-09-29T15:45:00Z", "Jefferson Market Library", "Toddler", "nypl", 0, 0, "Second session. Books and songs for new walkers and toddlers."],
["nypl-1790695800-Mulber", "Lapsit Storytime", "2026-09-29T15:30:00Z", "2026-09-29T16:00:00Z", "Mulberry Street Library", "Infant", "nypl", 0, 0, "Second session. Best for pre-walkers on a lap."],
["nypl-1790695800-Tompki", "Music and Play", "2026-09-29T15:30:00Z", "2026-09-29T16:15:00Z", "Tompkins Square Library", "Toddler", "nypl", 0, 0, "Music and play, recommended for ages 2 to 5. Second floor."],
["nypl-1790776800-Kips B", "Toddler Open Play", "2026-09-30T14:00:00Z", "2026-09-30T16:00:00Z", "Kips Bay Library", "Birth to Five", "nypl", 0, 0, "Library playdate; meet other caregivers and explore play materials."],
["nypl-1790778600-Kips B", "Toddler and Caregiver Storytime", "2026-09-30T14:30:00Z", "2026-09-30T15:00:00Z", "Kips Bay Library", "Birth to Five", "nypl", 0, 0, "Stories, songs, and movement for active toddlers."],
["nypl-1790778600-Chatha", "Family Storytime with Chatham Square", "2026-09-30T14:30:00Z", "2026-09-30T15:30:00Z", "Chatham Square Library", "Birth to Five", "nypl", 0, 0, "Live storytime every Wednesday in the Storytime Room, 3rd floor."],
["nypl-1790778600-Muhlen", "Outdoor Storytime at Chelsea Green Park", "2026-09-30T14:30:00Z", "2026-09-30T15:30:00Z", "Muhlenberg Library", "Toddler", "nypl", 0, 0, "At Chelsea Green Park, 140 W 20th St. Stories and songs outdoors."],
["nypl-1790780400-Kips B", "Toddler and Caregiver Storytime", "2026-09-30T15:00:00Z", "2026-09-30T15:30:00Z", "Kips Bay Library", "Birth to Five", "nypl", 0, 0, "Second session. Stories, songs, and movement for active toddlers."],
["nypl-1790782200-Ottend", "Little Learners: Lavender Blues", "2026-09-30T15:30:00Z", "2026-09-30T16:15:00Z", "Ottendorfer Library", "Birth to Five", "nypl", 0, 0, "Music and movement class for babies and toddlers, free at the library."],
["nypl-1790863200-Stavro", "Little Movers: Toddler Time", "2026-10-01T14:00:00Z", "2026-10-01T14:30:00Z", "Stavros Niarchos Foundation Library", "Toddler", "nypl", 0, 0, "Stories, songs, and wiggles for active toddlers."],
["nypl-1790865000-Mulber", "Little Movers Storytime", "2026-10-01T14:30:00Z", "2026-10-01T15:00:00Z", "Mulberry Street Library", "Toddler", "nypl", 0, 0, "Books and songs for new walkers and toddlers."],
["nypl-1790865900-Stavro", "Little Movers: Toddler Time", "2026-10-01T14:45:00Z", "2026-10-01T15:15:00Z", "Stavros Niarchos Foundation Library", "Toddler", "nypl", 0, 0, "Second session."],
["nypl-1790866800-Muhlen", "Music and Movement Storytime", "2026-10-01T15:00:00Z", "2026-10-01T16:00:00Z", "Muhlenberg Library", "Toddler", "nypl", 0, 0, "First come, first served. Best for walkers up to 5."],
["nypl-1790866800-Kips B", "Baby Storytime", "2026-10-01T15:00:00Z", "2026-10-01T15:30:00Z", "Kips Bay Library", "Infant", "nypl", 0, 0, "Thursdays at 11. Best for pre-walkers. First come, first served."],
["nypl-1790867700-Seward", "Thursday Family Storytime", "2026-10-01T15:15:00Z", "2026-10-01T15:45:00Z", "Seward Park Library", "Birth to Five", "nypl", 0, 0, "Books, songs, and rhymes every Thursday, up to age 5."],
["nypl-1790868600-Mulber", "Little Movers Storytime", "2026-10-01T15:30:00Z", "2026-10-01T16:00:00Z", "Mulberry Street Library", "Toddler", "nypl", 0, 0, "Second session."],
["nypl-1790868600-Stavro", "Little Movers: Toddler Time", "2026-10-01T15:30:00Z", "2026-10-01T16:00:00Z", "Stavros Niarchos Foundation Library", "Toddler", "nypl", 0, 0, "Third session."],
["nypl-1790868600-Tompki", "Little Movers Storytime", "2026-10-01T15:30:00Z", "2026-10-01T16:15:00Z", "Tompkins Square Library", "Toddler", "nypl", 0, 0, "Books and songs for new walkers and toddlers. Second floor."],
["nypl-1790951400-Epipha", "Lapsit Storytime: Itty Bitty Book Buddies + Open Play", "2026-10-02T14:30:00Z", "2026-10-02T15:30:00Z", "Epiphany Library", "Infant", "nypl", 0, 0, "Bond with your little one and meet other caregivers, then open play."],
["nypl-1790953200-Muhlen", "Little Learners: Esther Crow, Move n' Groove with Puppets", "2026-10-02T15:00:00Z", "2026-10-02T15:45:00Z", "Muhlenberg Library", "Birth to Five", "nypl", 0, 0, "Handmade puppets, music, and early literacy."],
["nypl-1790954100-Seward", "Bilingual Spanish Storytime", "2026-10-02T15:15:00Z", "2026-10-02T15:45:00Z", "Seward Park Library", "Birth to Five", "nypl", 0, 0, "English and Spanish books, songs, and words."],
["nypl-1790967600-Muhlen", "Coloring Corner", "2026-10-02T19:00:00Z", "2026-10-02T20:00:00Z", "Muhlenberg Library", "Birth to Five", "nypl", 0, 0, "Paper, crayons, and coloring pencils. Families welcome."],
["nypl-1791037800-Stavro", "Family Storytime: Stories, Songs and Rhymes for Little Ones", "2026-10-03T14:30:00Z", "2026-10-03T15:00:00Z", "Stavros Niarchos Foundation Library", "Birth to Five", "nypl", 0, 0, "Saturday. Children 5 and under with a caregiver."],
["nypl-1791039600-Kips B", "Saturday Family Storytime", "2026-10-03T15:00:00Z", "2026-10-03T15:30:00Z", "Kips Bay Library", "Birth to Five", "nypl", 0, 0, "Saturday. Songs, rhymes, and read-alouds for young children of all ages."],
["nypl-1791040500-Seward", "Saturday Family Storytime", "2026-10-03T15:15:00Z", "2026-10-03T15:45:00Z", "Seward Park Library", "Birth to Five", "nypl", 0, 0, "Saturday. Books, songs, and rhymes, up to age 5."],
["nypl-1791208800-Kips B", "Toddler Open Play", "2026-10-05T14:00:00Z", "2026-10-05T16:00:00Z", "Kips Bay Library", "Birth to Five", "nypl", 0, 0, "Library playdate; meet other caregivers and explore play materials."],
["nypl-1791208800-Jeffer", "Little Movers Storytime: Books and Rhymes", "2026-10-05T14:00:00Z", "2026-10-05T15:00:00Z", "Jefferson Market Library", "Toddler", "nypl", 0, 0, "Books and songs for new walkers and toddlers."],
["nypl-1791210600-Kips B", "Toddler and Caregiver Storytime", "2026-10-05T14:30:00Z", "2026-10-05T15:00:00Z", "Kips Bay Library", "Birth to Five", "nypl", 0, 0, "Stories, songs, and movement for active toddlers."],
["nypl-1791210600-Stavro", "Lapsit Storytime: Baby and Me", "2026-10-05T14:30:00Z", "2026-10-05T15:00:00Z", "Stavros Niarchos Foundation Library", "Infant", "nypl", 0, 0, "Child on your lap; best for pre-walkers."],
["nypl-1791212400-Kips B", "Toddler and Caregiver Storytime", "2026-10-05T15:00:00Z", "2026-10-05T15:30:00Z", "Kips Bay Library", "Birth to Five", "nypl", 0, 0, "Second session."],
["nypl-1791214200-Stavro", "Lapsit Storytime: Baby and Me", "2026-10-05T15:30:00Z", "2026-10-05T16:00:00Z", "Stavros Niarchos Foundation Library", "Infant", "nypl", 0, 0, "Second session."],
["nypl-1791214200-Ottend", "Baby Lapsit Storytime", "2026-10-05T15:30:00Z", "2026-10-05T16:30:00Z", "Ottendorfer Library", "Infant", "nypl", 0, 0, "Bond with your little one and meet other caregivers."],
["nypl-1791226800-Muhlen", "Coloring Corner", "2026-10-05T19:00:00Z", "2026-10-05T20:00:00Z", "Muhlenberg Library", "Birth to Five", "nypl", 0, 0, "Paper, crayons, and coloring pencils. Families welcome."],
["nypl-1791230400-Mulber", "Family Storytime", "2026-10-05T20:00:00Z", "2026-10-05T20:30:00Z", "Mulberry Street Library", "Birth to Five", "nypl", 0, 0, "Children 5 and under with a caregiver."],
["nypl-1791297000-Epipha", "Little Movers Storytime: Bitty Book Buddies + Open Play", "2026-10-06T14:30:00Z", "2026-10-06T15:30:00Z", "Epiphany Library", "Toddler", "nypl", 0, 0, "Stories and songs, then open play."],
["nypl-1791297000-Jeffer", "Little Movers Storytime: Books and Rhymes", "2026-10-06T14:30:00Z", "2026-10-06T15:00:00Z", "Jefferson Market Library", "Toddler", "nypl", 0, 0, "Books and songs for new walkers and toddlers."],
["nypl-1791297000-Mulber", "Lapsit Storytime", "2026-10-06T14:30:00Z", "2026-10-06T15:00:00Z", "Mulberry Street Library", "Infant", "nypl", 0, 0, "Best for pre-walkers on a lap."],
["nypl-1791298800-Muhlen", "Baby Lapsit Storytime", "2026-10-06T15:00:00Z", "2026-10-06T16:30:00Z", "Muhlenberg Library", "Infant", "nypl", 0, 0, "First come, first served, maximum 10 spots, pre-walkers only."],
["nypl-1791299700-Jeffer", "Little Movers Storytime: Books and Rhymes", "2026-10-06T15:15:00Z", "2026-10-06T15:45:00Z", "Jefferson Market Library", "Toddler", "nypl", 0, 0, "Second session."],
["nypl-1791299700-Seward", "Tuesday Family Storytime", "2026-10-06T15:15:00Z", "2026-10-06T15:45:00Z", "Seward Park Library", "Birth to Five", "nypl", 0, 0, "Books, songs, and rhymes every Tuesday, up to age 5."],
["nypl-1791300600-Tompki", "Music and Play", "2026-10-06T15:30:00Z", "2026-10-06T16:15:00Z", "Tompkins Square Library", "Toddler", "nypl", 0, 0, "Music and play, recommended for ages 2 to 5."],
["nypl-1791300600-Mulber", "Lapsit Storytime", "2026-10-06T15:30:00Z", "2026-10-06T16:00:00Z", "Mulberry Street Library", "Infant", "nypl", 0, 0, "Second session."],
["nypl-1791381600-Kips B", "Toddler Open Play", "2026-10-07T14:00:00Z", "2026-10-07T16:00:00Z", "Kips Bay Library", "Birth to Five", "nypl", 0, 0, "Library playdate; meet other caregivers and explore play materials."],
["nypl-1791383400-Kips B", "Toddler and Caregiver Storytime", "2026-10-07T14:30:00Z", "2026-10-07T15:00:00Z", "Kips Bay Library", "Birth to Five", "nypl", 0, 0, "Stories, songs, and movement for active toddlers."],
["nypl-1791385200-Kips B", "Toddler and Caregiver Storytime", "2026-10-07T15:00:00Z", "2026-10-07T15:30:00Z", "Kips Bay Library", "Birth to Five", "nypl", 0, 0, "Second session."],
["nypl-1791386100-Seward", "Infant Lapsit Storytime", "2026-10-07T15:15:00Z", "2026-10-07T15:45:00Z", "Seward Park Library", "Infant", "nypl", 0, 0, "Movement, books, and songs for babies and caregivers."],
["nypl-1791387000-Ottend", "Little Movers Storytime", "2026-10-07T15:30:00Z", "2026-10-07T16:30:00Z", "Ottendorfer Library", "Toddler", "nypl", 0, 0, "Stories, songs, and wiggles for active toddlers."],
["nypl-1791399600-Jeffer", "Process Art: Arts and Crafts", "2026-10-07T19:00:00Z", "2026-10-07T20:30:00Z", "Jefferson Market Library", "Birth to Five", "nypl", 0, 0, "Colors, shapes, motor skills, and imagination for young artists."],
["nypl-1791399600-Epipha", "Spooky Little Crafters", "2026-10-07T19:00:00Z", "2026-10-07T20:00:00Z", "Epiphany Library", "Toddler", "nypl", 0, 0, "Crafts for ages 2 to 5; take something home."],
["nypl-1791468000-Stavro", "Little Movers: Toddler Time", "2026-10-08T14:00:00Z", "2026-10-08T14:30:00Z", "Stavros Niarchos Foundation Library", "Toddler", "nypl", 0, 0, "Stories, songs, and wiggles for active toddlers."],
["nypl-1791469800-Mulber", "Little Movers Storytime", "2026-10-08T14:30:00Z", "2026-10-08T15:00:00Z", "Mulberry Street Library", "Toddler", "nypl", 0, 0, "Books and songs for new walkers and toddlers."],
["nypl-1791470700-Stavro", "Little Movers: Toddler Time", "2026-10-08T14:45:00Z", "2026-10-08T15:15:00Z", "Stavros Niarchos Foundation Library", "Toddler", "nypl", 0, 0, "Second session."],
["nypl-1791471600-Muhlen", "Music and Movement Storytime", "2026-10-08T15:00:00Z", "2026-10-08T16:00:00Z", "Muhlenberg Library", "Toddler", "nypl", 0, 0, "First come, first served. Best for walkers up to 5."],
["nypl-1791471600-Kips B", "Baby Storytime", "2026-10-08T15:00:00Z", "2026-10-08T15:30:00Z", "Kips Bay Library", "Infant", "nypl", 0, 0, "Thursdays at 11. Best for pre-walkers. First come, first served."],
["nypl-1791472500-Seward", "Thursday Family Storytime", "2026-10-08T15:15:00Z", "2026-10-08T15:45:00Z", "Seward Park Library", "Birth to Five", "nypl", 0, 0, "Books, songs, and rhymes every Thursday, up to age 5."],
["nypl-1791473400-Stavro", "Little Movers: Toddler Time", "2026-10-08T15:30:00Z", "2026-10-08T16:00:00Z", "Stavros Niarchos Foundation Library", "Toddler", "nypl", 0, 0, "Third session."],
["nypl-1791473400-Tompki", "Little Movers Storytime", "2026-10-08T15:30:00Z", "2026-10-08T16:15:00Z", "Tompkins Square Library", "Toddler", "nypl", 0, 0, "Books and songs for new walkers and toddlers. Second floor."],
["nypl-1791473400-Mulber", "Little Movers Storytime", "2026-10-08T15:30:00Z", "2026-10-08T16:30:00Z", "Mulberry Street Library", "Toddler", "nypl", 0, 0, "Second session."],
["nypl-1791556200-Epipha", "Lapsit Storytime: Itty Bitty Book Buddies + Open Play", "2026-10-09T14:30:00Z", "2026-10-09T15:30:00Z", "Epiphany Library", "Infant", "nypl", 0, 0, "Bond with your little one, then open play."]
];
