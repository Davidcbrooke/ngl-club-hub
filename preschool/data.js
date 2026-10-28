/* NGL Pre-School: Around the World with Somi & Flic
   Shared data and term planner for the Club Hub and the family app.
   Each country is one level: 8 skills, 2 taught each week, so a level takes 4 weeks. */
(function (root) {
  const COUNTRIES = [
    {n:1, name:'France', city:'Paris', flag:'🇫🇷', skills:['Show a landing shape','Tiptoe walking on a line','Log roll on the floor in a straight shape','Pull yourself along a bench on your tummy','Show a star shape','Show a chin-up shape on the bars','Identify different shapes: circle, square, triangle','Walk forwards on the low-high beam']},
    {n:2, name:'England', city:'London', flag:'🏴', skills:['Hopscotch: open and close feet','Reverse handstand','Balance on one foot','Walk sideways on the floor','Show a front support shape','Tuck hang on the bars','Walk sideways in front support, hands on the floor bar','Front support on the bars (supported)']},
    {n:3, name:'Egypt', city:'Cairo', flag:'🇪🇬', skills:['Squat on to a small block','Forward roll down a slope (supported)','Show a straddle shape','Bunny hops','Hands and feet walking','Short-step runs to targets','Arch shape','Run along the tumble track']},
    {n:4, name:'Switzerland', city:'the Alps', flag:'🇨🇭', skills:['Sort objects into the correct colour or shape','Circle down with support','Jump and show a landing shape','Hang in a straight shape','Swing on the rings in a tuck','Run with ribbons (with arm action)','Straddle on to a small block','Run and jump from the board with an arm swing']},
    {n:5, name:'Brazil', city:'Rio', flag:'🇧🇷', skills:['Throw and catch a scarf','Kick to handstand: hands and feet on blocks','Show a tuck shape','Balance on 3 body parts','Sideways jumps','Show forward grip and backward grip on a floor bar','Dumper truck','Jump with correct landing arms']},
    {n:6, name:'Australia', city:'Sydney', flag:'🇦🇺', skills:['Climb over the parallel bars','Hands and knees, leaning side to side on the “surfboard”','Backward roll prep: bean bag in feet, roll back and put it in the hoop','Backward roll down a slope (supported)','Walk feet up the slope on the bars','Climb on and show a squat shape on a low block','Cartwheel (supported)','Circle down by themselves']},
    {n:7, name:'China', city:'Beijing', flag:'🇨🇳', skills:['Count to 5','Balance standing up on a floor bar','Correct backward roll hand placement','Hold a front support shape on the bar (unsupported)','Show a straddle shape','Climb on and show a straddle shape','Jump from a small block and show a landing shape','Jump up and explode into a star shape']},
    {n:8, name:'Japan', city:'Tokyo', flag:'🇯🇵', skills:['Long jumps from spot to spot','Show a squat shape on the floor line','Walk along the beam on toes','Climb sideways over the parallel bars','Balance in a tuck shape with feet off the floor','Rock onto your back, staying in a tuck shape','Straddle hang on the bars','Forward roll down a slope (unsupported)']},
    {n:9, name:'Canada', city:'Toronto', flag:'🇨🇦', skills:['Side-to-side rocks, standing in a star shape','Lie on your back in a straight shape, feet together','Sideways bunny hops','Walk backwards on a beam','Jump from one foot to two feet','Throw a bean bag to a target','Jump with ribbons, arms swinging','Creep and freeze: tiptoe walking, then freeze']},
    {n:10, name:'Iceland', city:'Reykjavík', flag:'🇮🇸', skills:['Swing forwards and backwards on a bar','Straddled bunny hops','Half-turn jump','Sit down and stand up from a small block without hands','Make a pattern with the ribbons','Hands and feet walking sideways','Lie on your front on the block; the coach lifts you up on to your hands','High jumps on to spots']},
    {n:11, name:'America', city:'New York', flag:'🇺🇸', skills:['Show a back support shape','Hop on one foot','Tuck jump','Star jump','Jumping jacks','Walk backwards on the low beam (widener)','Marching with high knees','Long-step runs to targets']},
    {n:12, name:'Hawaii', city:'Honolulu', flag:'🌺', skills:['Sideways bunny hops over a padded bench or block','Walk forwards, turn around and continue along the bench','Backward jumps','L-hang on the bar','Straddle on to a medium-sized block','Supported circle up','Forward roll on the floor','Squat on to a medium block']},
    {n:13, name:'The Bahamas', city:'Nassau', flag:'🇧🇸', skills:['Hold a dish shape','Walk forwards on the brown low-high beam on toes','Climb halfway up the wall bars','Sit down and stand up from the floor without hands','Walk forwards on the brown low-high beam','Throw and catch a bean bag','Balance on 2 body parts','Dancing feet: hop from one foot to the other']},
    {n:14, name:'Greece', city:'Athens', flag:'🇬🇷', skills:['Jump up high to reach a target','Pull-up shape (supported)','Front support, jump into a squat shape','Show a V-sit shape','Swing forwards and backwards to blocks, star shape to star shape','Show a squat shape on the floor line','Rock in tuck, backwards and forwards','Front support with shrugs on the bars (no bent arms)']},
    {n:15, name:'Italy', city:'Venice', flag:'🇮🇹', skills:['Backward roll on a mat (supported)','Sideways walking on the low-high beam','Swing feet forwards and backwards in front support on the bars','Walk forwards, turn around and continue on the brown low-high beam','Handstand (supported)','Chin hold by themselves (coach spotting)','Lift toes up to the bar in a pike shape (legs bent)','Hopscotch with one foot']},
    {n:16, name:'India', city:'Agra', flag:'🇮🇳', skills:['Backward roll down the slope (unsupported)','Walk backwards on the low-high beam (widener)','Straddle shape with straight legs on the floor','Forward roll on a mat','Climb up the wall bars to the taped line','Piked handstand hold','Balance on hands between the P-bars, count to 3','Forward roll with a bean bag between the knees']},
    {n:17, name:'Scotland', city:'Edinburgh', flag:'🏴', skills:['Hands and feet walking on a thin floor beam','Forward roll down a slope, stand up at the end without hands','Cartwheel (unsupported)','Stand on the wobble board for 3 seconds','Straddle bunny hops with straight legs','Point and flex toes x 3','Press-up on knees','Jump over obstacles on the beam']},
    {n:18, name:'Ireland', city:'Dublin', flag:'🇮🇪', skills:['Balance along the beam with a partner','Stationary sloth hold on the bars','Lie on your back, feet up on a block, lift hips off the floor','Turning jumps: tucked and star','Pull-up hold (spotted)','Climb the rope ladder','Backward roll from a low block or folded panel mat','Walk up two sloped beams on hands and feet']},
    {n:19, name:'Wales', city:'Cardiff', flag:'🏴', skills:['Balance on one foot on the beam and pick up an object','Hang on the bar and move hands sideways along it','Float swing prep','Tap out a rhythm, copying a coach','Show a seal shape','Wind-up string bar','Cat leap','Tuck hold on the parallettes']},
    {n:20, name:'Spain', city:'Madrid', flag:'🇪🇸', skills:['Hang on the bar with legs over, upside down','Feet on a block, hold a front support shape for 3 seconds','Bounce along the fast track in a tight shape, hands on hips','Lunge to T shape','Stand and balance on the floor bar for 3 seconds, toes on the bar','Caterpillar walks','Duck walks','From lying on your tummy, push up to hands and knees, then jump up to feet']}
  ];

  // Lesson plan themes. home = moves families can try at home.
  // 40 core lesson plans: plan n = programme week n. Week n teaches Book 1 skills and Book 2 skills side by side.
  const THEMES = [
    {n:1, name:"Alphabet", file:'01_Alphabet', home:["Make the letter “O” with a skipping rope and jump in and out", "Make shapes that look like letters: can you be an “X”?", "A for arabesque, B for back support, C for crab"]},
    {n:2, name:"Space", file:'02_Space', home:["Rocket: count down 5, 4, 3, 2, 1… blast off!", "Spaceman: big moon-walk steps", "Planet: the tightest tuck shape you can make"]},
    {n:3, name:"Pirates", file:'03_Pirates', home:["Row the boat: sit in pike and row", "Walk the plank on tiptoes along a line", "Roll up the treasure map: log roll"]},
    {n:4, name:"Under the Sea", file:'04_Under_the_Sea', home:["Crab: move sideways with nipper hands", "Starfish: lie flat in a star", "Pufferfish: sit in a tuck, then explode!"]},
    {n:5, name:"Visiting the Zoo", file:'05_Visiting_the_Zoo', home:["Flamingo: balance on one leg", "Giraffe: up on your toes in a stretch shape", "Penguin: waddle like a penguin"]},
    {n:6, name:"Bean Bags", file:'06_Bean_Bags', home:["Balance a bean bag (or a pair of socks) on your head and walk", "Hold it in your feet and lift your legs", "Throw it up and catch it"]},
    {n:7, name:"Jungle", file:'07_Jungle', home:["Tree frog: frog jumps with hands on the floor", "Crocodile: lie on your tummy in an arch and snap", "Gorilla: walk low down on your knuckles"]},
    {n:8, name:"Circus", file:'08_Circus', home:["Tightrope walker: tiptoe along a line", "Strong man: show your muscles!", "Ringmaster: take a bow"]},
    {n:9, name:"Explorer", file:'09_Explorer', home:["Bear walk on straight legs", "Kangaroo jumps", "Caterpillar walks from front support"]},
    {n:10, name:"Transport", file:'10_Transport', home:["Green = run, amber = jog on the spot, red = landing shape", "Be a bridge: front support shape", "Roundabout: spin around"]},
    {n:11, name:"Dinosaurs", file:'11_Dinosaurs', home:["Stegosaurus: walk with straight legs and straight arms", "Pterodactyl: wings out, balance on one leg", "T-Rex: stomp and roar!"]},
    {n:12, name:"Farmyard", file:'12_Farmyard', home:["Duck walks: 10 steps in a circle", "Tuck rolls like a tractor wheel", "Scarecrow: tuck, then jump to a star"]},
    {n:13, name:"Food", file:'13_Food', home:["Popcorn: tuck small, then explode to a star", "Sausage roll: log roll", "Banana: arch, then roll to a dish shape"]},
    {n:14, name:"Flight", file:'14_Flight', home:["Aeroplane: run with your arms out", "Hot air balloon: spin on your toes, arms above your head", "Skydiver: lie on your tummy in a star arch"]},
    {n:15, name:"Mini Beasts", file:'15_Mini_Beasts', home:["Snail: tuck, then stretch out of your shell", "Spider: from straddle, walk out to front support", "Beetle: wave your arms and legs, then flip over!"]},
    {n:16, name:"Weather", file:'16_Weather', home:["Tornado: spin on the spot, then the other way", "Snow angels on the floor", "Rain: tuck jumps in the puddles"]},
    {n:17, name:"Colours", file:'17_Colours', home:["Find something red, blue and yellow and stand on it", "Rise onto your toes and hold for 3", "Straddle sit and reach for a colour in the middle"]},
    {n:18, name:"Shapes", file:'18_Shapes', home:["Make a circle with a rope and jump in and out", "Show a tuck, straddle and pike shape", "Balance a soft toy on your head and walk"]},
    {n:19, name:"Teddy Bears’ Picnic", file:'19_Teddy_Bears_Picnic', home:["Lift teddy above your head and walk on tiptoes", "Pass teddy round your waist 3 times", "Press-up to give teddy a hug"]},
    {n:20, name:"Superhero", file:'20_Superhero', home:["Super jumps: tuck, star and straight", "Superhero arch shape", "Count down from 5 and blast off!"]},
    {n:21, name:"Topsy Turvy", file:'21_Topsy_Turvy', home:["Walk backwards, then sideways", "Crab walk backwards", "Find the opposite: tall and small, fast and slow"]},
    {n:22, name:"Sports", file:'22_Sports', home:["Long jumps from spot to spot", "Egg and spoon walk", "Roll a ball down your legs in pike"]},
    {n:23, name:"Seaside", file:'23_Seaside', home:["Crab walks", "Starfish: rock side to side in a star", "Hermit crab: hide in a tuck, then pop out!"]},
    {n:24, name:"People Who Help Us", file:'24_People_Who_Help_Us', home:["Firefighter: stop, drop and roll", "Helicopter: spin around with arms out", "Build a tower from blocks"]},
    {n:25, name:"Numbers", file:'25_Numbers', home:["Count down from 10 with stretches", "Balance on one foot and count how long", "Roll a dice and do that many jumps"]},
    {n:26, name:"Nature", file:'26_Nature', home:["Hedgehog: tuck balance on your bottom", "Plant a seed: stretch, then crouch small and grow tall", "Walk along a log (a line) on tiptoes"]},
    {n:27, name:"Garden", file:'27_Garden', home:["Seed to sunflower: curl up small, then grow tall", "Wriggle like a worm on your tummy", "Buzz around on tiptoes like a bee"]},
    {n:28, name:"Magic", file:'28_Magic', home:["Phoenix jump: crouch, then explode", "Make your toes point with a magic wand", "Cat leaps like a galloping unicorn"]},
    {n:29, name:"Fantasy", file:'29_Fantasy', home:["Troll: half-turn jumps", "Dragon: hide your egg in a tuck", "King and queen: walk with a crown on your head"]},
    {n:30, name:"Robots", file:'30_Robots', home:["Robot walk with stiff arms and legs", "Freeze in a robot shape when someone says “pause”", "Low battery: sink to the floor, then recharge into a star!"]},
    {n:31, name:"Building Site", file:'31_Building_Site', home:["Dumper truck: push your bottom up and tip", "Build a tower of soft toys", "Steamroller: log roll"]},
    {n:32, name:"Camping", file:'32_Camping', home:["Hike with high knees", "Put up the tent: pike shape", "Bedtime: lie straight in your sleeping bag, then jump up!"]},
    {n:33, name:"Arctic", file:'33_Arctic', home:["Penguin waddle", "Polar bear walk on straight legs", "Snowstorm: spin, then freeze"]},
    {n:34, name:"Music", file:'34_Music', home:["Musical statues", "Copy a clapping rhythm", "Star shape: tap one side, then the other"]},
    {n:35, name:"Castles & Knights", file:'35_Castles_Knights', home:["Gallop like a knight’s horse", "Walk tall wearing a crown", "Drawbridge down: lie flat. Up: stand tall!"]},
    {n:36, name:"Bakery", file:'36_Bakery', home:["Rising bread: crouch small, then grow tall", "Pop the popcorn: tuck jump!", "Pancake flip: half-turn jump"]},
    {n:37, name:"Toy Shop", file:'37_Toy_Shop', home:["Jack-in-the-box: crouch, then jump up into a star", "Toy soldier march", "Spinning top: spin round"]},
    {n:38, name:"Rainbow", file:'38_Rainbow', home:["Draw a rainbow in the sky with your arms", "Star shape like the sun", "Hop like a green frog"]},
    {n:39, name:"Birthday Party", file:'39_Birthday_Party', home:["Musical statues", "Balloon pop: crouch, then POP into a star", "Blow out the candles on your toes in pike"]},
    {n:40, name:"Woodland Animals", file:'40_Woodland_Animals', home:["Bunny hops", "Hedgehog: curl into a tight ball", "Owl: flap your wings and look around"]}
  ];
  // Seasonal Pack: swapped in on the right weeks; the passport journey pauses for that week.
  const SEASONAL = [
    {id:'S1', name:"Christmas", file:'Seasonal_1_Christmas', seasonal:true, last:'autumn', home:["Bauble: rock in a tuck shape", "Snow angels on the floor", "Walk around like Santa"]},
    {id:'S2', name:"Easter", file:'Seasonal_2_Easter', seasonal:true, last:'spring', home:["Bunny hops round the room", "Roll an egg (ball) down your legs in pike", "Knee press-up: touch your nose to the egg"]},
    {id:'S3', name:"Summer", file:'Seasonal_3_Summer', seasonal:true, last:'summer', home:["Surfing: from your tummy, push up and jump to your feet", "Sun: star jump!", "Sunbathing: hold a dish shape"]},
    {id:'S4', name:"Halloween", file:'Seasonal_4_Halloween', seasonal:true, from:'10-17', to:'10-31', home:["Pumpkin: tuck rocks with a silly face", "Bat: shoulder stand, hanging upside down", "Black cat: cat stretch on all fours"]},
    {id:'S5', name:"Bonfire Night", file:'Seasonal_5_Bonfire_Night', seasonal:true, from:'10-30', to:'11-08', home:["Rocket: stretch jump", "Explode: tuck to star", "Catherine wheel: spin around"]},
    {id:'S6', name:"Harvest", file:'Seasonal_6_Harvest', seasonal:true, from:'09-20', to:'10-12', home:["Scarecrow: jump up into a star", "Stamp in the muddy puddles", "Bat swing: lie on your back, lift your toes to the sky"]}
  ];

  const DAY = 864e5;
  const iso = d => d.toISOString().slice(0, 10);
  const parse = s => { const [y, m, d] = s.split('-').map(Number); return new Date(Date.UTC(y, m - 1, d)); };
  function season(start){ const m = parse(start).getUTCMonth(); return m >= 7 ? 'autumn' : m <= 2 ? 'spring' : 'summer'; }

  /* config: {club, startWeek (1-40 programme week), packs: highest core plan owned (10/20/30/40), seasonal: bool,
              terms:[{name, start:'YYYY-MM-DD', weeks, half (weeks before half-term, 0 = none)}]}
     One row per teaching week. Seasonal weeks pause the passport journey; each term carries on from the last. */
  function weekInfo(w){
    const c = Math.floor((w - 1) / 4), k = (w - 1) % 4;
    const mk = ci => ({country:COUNTRIES[ci], skills:[COUNTRIES[ci].skills[k * 2], COUNTRIES[ci].skills[k * 2 + 1]], nos:[k * 2 + 1, k * 2 + 2]});
    return {w, levelWeek:k + 1, newLevel:k === 0, b1:mk(c), b2:mk(c + 10), theme:THEMES[w - 1]};
  }
  function plan(cfg){
    let g = Math.max(0, (cfg.startWeek || 1) - 1);
    const used = {}, rows = [];
    (cfg.terms || []).filter(t => t.start && t.weeks > 0).forEach((t, ti) => {
      const s = parse(t.start), seas = season(t.start);
      for(let i = 0; i < t.weeks; i++){
        const date = new Date(s.getTime() + (i + (t.half && i >= t.half ? 1 : 0)) * 7 * DAY);
        const d = iso(date), md = d.slice(5), y = d.slice(0, 4);
        let sp = null;
        if(cfg.seasonal){
          if(i === t.weeks - 1) sp = SEASONAL.find(x => x.last === seas) || null;
          if(!sp) sp = SEASONAL.find(x => x.from && md >= x.from && md <= x.to && !used[x.id + y]) || null;
          if(sp) used[sp.id + y] = 1;
        }
        const base = {term:t.name || ('Term ' + (ti + 1)), termIndex:ti, week:i + 1, date:d};
        if(sp){ rows.push(Object.assign(base, {seasonal:true, theme:sp})); continue; }
        const w = (g % 40) + 1, lap = Math.floor(g / 40);
        rows.push(Object.assign(base, weekInfo(w), {lap}));
        g++;
      }
    });
    return rows;
  }
  function encode(cfg){ return btoa(unescape(encodeURIComponent(JSON.stringify(cfg)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
  function decode(s){ try{ s = s.replace(/-/g, '+').replace(/_/g, '/'); return JSON.parse(decodeURIComponent(escape(atob(s)))); }catch(e){ return null; } }

  /* Is today in a break between teaching weeks? Half term = the break is inside a term; holiday = between terms.
     Returns {half, holiday, next (row index of the week classes restart), back ('YYYY-MM-DD')} or null. */
  function breakNow(rows, today){
    let i = -1; rows.forEach((r, k) => { if(r.date <= today) i = k; });
    if(i < 0 || i >= rows.length - 1) return null;
    const ends = iso(new Date(parse(rows[i].date).getTime() + 6 * DAY));
    if(today <= ends) return null;
    const half = rows[i + 1].termIndex === rows[i].termIndex;
    return {half, holiday: !half, next: i + 1, back: rows[i + 1].date};
  }
  root.NGLPS = {COUNTRIES, THEMES, SEASONAL, plan, weekInfo, encode, decode, iso, parse, breakNow};
})(typeof window !== 'undefined' ? window : globalThis);
