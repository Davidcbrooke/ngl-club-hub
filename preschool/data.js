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
  const THEMES = [
    {n:1, name:'Alphabet', home:['Make the letter “O” with a skipping rope and jump in and out','Make shapes that look like letters: can you be an “X”?','A for arabesque, B for back support, C for crab']},
    {n:2, name:'Space', home:['Rocket: count down 5, 4, 3, 2, 1… blast off!','Spaceman: big moon-walk steps','Planet: the tightest tuck shape you can make']},
    {n:3, name:'Pirates', home:['Row the boat: sit in pike and row','Walk the plank on tiptoes along a line','Roll up the treasure map: log roll']},
    {n:4, name:'Under the Sea', home:['Crab: move sideways with nipper hands','Starfish: lie flat in a star','Pufferfish: sit in a tuck, then explode!']},
    {n:5, name:'Visiting the Zoo', home:['Flamingo: balance on one leg','Giraffe: up on your toes in a stretch shape','Penguin: waddle like a penguin']},
    {n:6, name:'Bean Bags', home:['Balance a bean bag (or a pair of socks) on your head and walk','Hold it in your feet and lift your legs','Throw it up and catch it']},
    {n:7, name:'Jungle', home:['Tree frog: frog jumps with hands on the floor','Crocodile: lie on your tummy in an arch and snap','Gorilla: walk low down on your knuckles']},
    {n:8, name:'Circus', home:['Tightrope walker: tiptoe along a line','Strong man: show your muscles!','Ringmaster: take a bow']},
    {n:9, name:'Explorer', home:['Bear walk on straight legs','Kangaroo jumps','Caterpillar walks from front support']},
    {n:10, name:'Transport', home:['Green = run, amber = jog on the spot, red = landing shape','Be a bridge: front support shape','Roundabout: spin around']},
    {n:11, name:'Dinosaurs', home:['Stegosaurus: walk with straight legs and straight arms','Pterodactyl: wings out, balance on one leg','T-Rex: stomp and roar!']},
    {n:12, name:'Farmyard', home:['Duck walks: 10 steps in a circle','Tuck rolls like a tractor wheel','Scarecrow: tuck, then jump to a star']},
    {n:13, name:'Food', home:['Popcorn: tuck small, then explode to a star','Sausage roll: log roll','Banana: arch, then roll to a dish shape']},
    {n:14, name:'Flight', home:['Aeroplane: run with your arms out','Hot air balloon: spin on your toes, arms above your head','Skydiver: lie on your tummy in a star arch']},
    {n:15, name:'Mini Beasts', home:['Snail: tuck, then stretch out of your shell','Spider: from straddle, walk out to front support','Beetle: wave your arms and legs, then flip over!']},
    {n:16, name:'Christmas', home:['Bauble: rock in a tuck shape','Snow angels on the floor','Walk around like Santa']},
    {n:17, name:'Easter', home:['Bunny hops round the room','Roll an egg (ball) down your legs in pike','Knee press-up: touch your nose to the egg']}
  ];
  const SEASONAL = {16:'autumn', 17:'spring'};

  const DAY = 864e5;
  const iso = d => d.toISOString().slice(0, 10);
  const parse = s => { const [y, m, d] = s.split('-').map(Number); return new Date(Date.UTC(y, m - 1, d)); };
  function season(start){ const m = parse(start).getUTCMonth(); return m >= 7 ? 'autumn' : m <= 3 ? 'spring' : 'summer'; }

  /* config: {club, pack (10|20), startLevel (1-20), startWeek (0-3), startTheme (index into the rotation),
              terms:[{name, start:'YYYY-MM-DD', weeks, half (weeks before half-term, 0 = none)}]}
     Returns one row per week across all terms, continuing from term to term. */
  function plan(cfg){
    const avail = THEMES.filter(t => t.n <= (cfg.pack >= 20 ? 20 : 10));
    const rotation = avail.filter(t => !SEASONAL[t.n]);
    let g = ((cfg.startLevel || 1) - 1) * 4 + (cfg.startWeek || 0);
    let tp = cfg.startTheme || 0;
    const rows = [];
    (cfg.terms || []).filter(t => t.start && t.weeks > 0).forEach((t, ti) => {
      const s = parse(t.start), seas = season(t.start);
      for(let i = 0; i < t.weeks; i++){
        const date = new Date(s.getTime() + (i + (t.half && i >= t.half ? 1 : 0)) * 7 * DAY);
        const lap = Math.floor(g / 80), gg = g % 80;
        const level = Math.floor(gg / 4) + 1, wk = gg % 4;
        let theme = null;
        if(i === t.weeks - 1) theme = avail.find(x => SEASONAL[x.n] === seas) || null;
        if(!theme){ theme = rotation[tp % rotation.length]; tp++; }
        const c = COUNTRIES[level - 1];
        rows.push({term:t.name || ('Term ' + (ti + 1)), termIndex:ti, week:i + 1, date:iso(date), level, country:c,
          levelWeek:wk + 1, skills:[c.skills[wk * 2], c.skills[wk * 2 + 1]], skillNos:[wk * 2 + 1, wk * 2 + 2],
          newLevel:wk === 0, lap, theme});
        g++;
      }
    });
    return rows;
  }
  function encode(cfg){ return btoa(unescape(encodeURIComponent(JSON.stringify(cfg)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
  function decode(s){ try{ s = s.replace(/-/g, '+').replace(/_/g, '/'); return JSON.parse(decodeURIComponent(escape(atob(s)))); }catch(e){ return null; } }

  root.NGLPS = {COUNTRIES, THEMES, plan, encode, decode, iso, parse};
})(typeof window !== 'undefined' ? window : globalThis);
