# NGL Hub Kit

One look for every NGL hub: Club Hub, Pre-School, Schools, Recreational, General League, Performance League, University League and Masters. Agreed direction 25 Nov 2026; the General League Skills Book page is the reference.

**Files:** `ngl-hub.css` (the stylesheet every hub links to), `index.html` (live showcase with a pathway switcher), this spec.
**Use:** `<link rel="stylesheet" href="https://club.nationalgymnasticsleague.co.uk/kit/ngl-hub.css">` and `<body data-pathway="recreational">`. A hub never sets its own colours; the accent follows `data-pathway`.

## Principles
1. **Same skeleton everywhere.** A club moving between hubs should feel it never left the NGL: same header, tabs, cards, buttons, footer. Only the accent colour changes.
2. **Navy stage, white content.** Pages sit on the NGL navy gradient; content lives on white cards. Brand blue and red always read stronger than the pathway accent.
3. **One clear action per card.** The main action is the accent button; secondary actions are ghost buttons.
4. **Sell with benefits, not features.** Products use the product layout: cover, one-line promise, price, callout, quantity, Buy now, then benefit tiles.
5. **Phone first.** Everything collapses to one column; tabs scroll sideways; nothing important is hidden on a phone.

## Colour
| Role | Value |
|---|---|
| Stage (background) | Navy #28225c → #1e1a4c → #15123a |
| Brand red (money owed, alerts, footer) | #c6152e |
| Accent (buttons, card tops, icons, active tab) | the pathway colour |
| Pathways | Pre-School #e84187 · Schools #fbd43a · Recreational #e8822f · General #0073b3 · Performance #00aeb7 · University #6ba526 · Masters #8f286b |
| On Schools yellow | navy text, never white |
| Status | Live/ok green #1f8a4c · Soon grey · Warning amber · Owed red |

## Type
- Headlines: **Roboto Condensed Black (900), uppercase** (`.k-h1`, `.k-h2`, product titles).
- Card titles: Roboto Condensed 800, sentence case.
- Everything else: Roboto 400/500/700, 16px base; Arial fallback.
- Eyebrows and pills: Roboto 800, uppercase, letter-spaced.

## Layout and shape
- Content width 1120px, 18px side padding.
- Radius: 20px (hero/product), 14px (cards), 10px (notes, inputs), pills fully round.
- Cards: white, 5px accent top border, soft shadow. Grids: 4 / 3 / 2 / 1 columns by width.

## Components (class names)
- **Header:** `.k-bar` (7-colour 5px bar) → `.k-top` accent strap (`.k-strap`, "NGL <Pathway> · Club Hub") → `.k-band` navy band with the curved Sweep, `.k-logo` (NGL logo + pathway name), `.k-who` (club), `.k-hbtn` (NGL Home, NGL Club Hub).
- **Tabs:** `.k-tabs` pills; active tab filled with the accent; `.k-count` red badge.
- **Page:** `.k-eyebrow`, `.k-h1`, `.k-lead`, `.k-h2`.
- **Cards:** `.k-card` (+ `.plain`), `.k-stat` (+ `.alert`), `.k-actions`.
- **Buttons:** `.k-btn` (accent), `.navy`, `.ghost`, `.on-dark`, `.big`.
- **Pills:** `.k-pill` + `.ok` (Live / Available now), `.soon`, `.warn`, `.red`.
- **Notes:** `.k-note` (+ `.warn`, `.preview`).
- **Product:** `.k-product` with `.cover` + `.k-badge`, `.k-price`, `.k-callout`, `.k-qty`, `.k-btn.big` Buy now.
- **Features:** `.k-feature` with `.k-ic` (white line icon on the accent square; never emoji).
- **Data:** `.k-table`, `.k-field` + `.k-input`, `.k-gal` (book page gallery).
- **Footer:** `.k-foot` red Sweep band: NGL logo, white JustGo "Official sponsor", "Exclusively for British Gymnastics Clubs". No BG logo.

## Wording
- Tabs and buttons in sentence case, verbs first ("Reserve places", "Buy now", "Register interest").
- Status words: Live, Available now, Coming 2027, Action needed, Awaiting payment.
- Product names: Club Hub, Family Hub, Pre-School Hub, Schools Hub, Recreational Hub, Skills Book, Award Book.

## Rollout
1. General League hub (closest already) → 2. Recreational hub → 3. Schools hub → 4. Pre-School hub → 5. Club Hub.
Each hub: swap its own CSS for the kit, map its classes, check desktop + phone, Dave approves, push.
