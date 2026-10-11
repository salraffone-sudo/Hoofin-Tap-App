# Hoofin': The Tap App — Product Brief v0.1

An audio-first rhythm tap trainer for adult beginners and returning dancers. The phone listens, keeps time, and gives feedback; a simple animated figure shows the movement that makes each sound.

Status: framing draft, October 11, 2026.

---

## 1. Locked decisions

| Area | Decision |
|---|---|
| Name | Hoofin': The Tap App (no apostrophe in technical names: `hoofin`, `hoofinapp`) |
| Style focus | Rhythm tap ("hoofing") first |
| Feedback | Audio-first: phone microphone handles listening and recording |
| Demonstration | Diagrammatic animated figure that moves and produces the step's sounds |
| Users | Adult beginners and returning tappers practicing at home |
| Intro | 5-card history fade on launch; skippable; can be disabled in Settings |
| Tap History | Always available as its own page; each name in the intro links to a detail page |
| Core modules | Step library, levels and unlocks, session builder, tempo engine, listening feedback, record and compare, musicality and routines |
| Business model | Free beta with a basic library; paid tier expands library and features |

---

## 2. Visual direction

### Principles
- Light, fun, refined. Off-white paper ground, soft navy ink, muted blue and red accents.
- Borrow Meathead's color logic (navy, pale blue, deep red) but desaturate it and remove the heavy dark contrast.
- Motion over muscle: highlights mark where the foot strikes and where weight sits, not which muscles work.

### Proposed palette (derived from Meathead)

Meathead uses `#073763` navy, `#CFE2F3` pale blue, `#990000` deep red and `#e06666` light red on a near-black `#0e0f11` ground ([Meathead](https://meathead-app-ashen.vercel.app/)). Hoofin' keeps the same color families on a light ground:

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#F7F4EE` | Background (warm off-white) |
| `--card` | `#FFFFFF` | Cards and sheets |
| `--ink` | `#24303C` | Body text (soft navy-charcoal, never pure black) |
| `--mute` | `#6E7781` | Secondary text |
| `--line` | `#E3DED4` | Borders and dividers |
| `--blue` | `#3E5C7A` | Primary actions, active states (softened Meathead navy) |
| `--blue-soft` | `#DCE7F0` | Selected chips, beat grid, figure fill tint |
| `--red` | `#A8463E` | Strike highlight, accents, recording indicator (softened Meathead red) |
| `--red-soft` | `#F1D9D4` | Error and "off-beat" backgrounds |

Check all text pairs against WCAG AA contrast before build.

### The figure (the "automaton")
- Same approach as Meathead: SVG figure driven by pose keyframes, so every step is data, not a video file.
- Side view by default (shows heel vs. ball contact and knee bend clearly), with a front-view toggle for side-to-side steps like ball changes and cramp rolls.
- Translucent body in `--blue-soft` with a thin `--ink` outline; the upper body stays relaxed and mostly still so attention goes to the feet.
- Highlights are subtle:
  - A small `--red` pulse at the exact contact point (ball, heel, toe tip, or heel edge) at the moment of each sound.
  - A faint shaded ellipse under the foot carrying the weight.
  - Optional faint motion trail on the working foot for brushes and spanks.
- Each pulse triggers a synthesized tap sound so the user hears the rhythm and sees its source at the same moment.
- A beat strip under the figure shows counts ("& 1 & 2") with the current sound lit.
- Playback speeds: 50%, 75%, 100%; loop; mirror for the other foot.

---

## 3. Step library

### How each step is stored
Every step is an ordered list of sound events. This one structure drives the figure, the demo audio, and the listening feedback.

```json
{
  "id": "flap",
  "name": "Flap",
  "level": 1,
  "builtFrom": ["brush", "step"],
  "count": "& 1",
  "sounds": [
    { "beat": -0.5, "foot": "R", "part": "ball", "action": "brush", "weight": false },
    { "beat": 0,    "foot": "R", "part": "ball", "action": "step",  "weight": true }
  ],
  "cues": ["Brush from the knee, not the hip", "Land on the ball; heel stays up"],
  "commonFaults": ["Heel drops on landing (extra sound)"]
}
```

### Free beta library (Level 1, about 18 steps)

Order follows the standard progression from one-sound to multi-sound steps used by major syllabi ([ISTD](https://www.istd.org/documents/tap-dance-syllabus-outline/tap-syllabus-outline-july-2024.pdf); [Tap Dance Syllabus](https://tapdancesyllabus.com/)).

| Group | Steps |
|---|---|
| One sound | Step, Stamp, Stomp, Heel drop, Toe drop, Dig, Toe tip, Brush, Spank, Hop |
| Two sounds | Shuffle, Flap, Ball change, Step heel |
| Three sounds | Shuffle ball change, Flap heel |
| Four sounds | Cramp roll, Paradiddle (paddle and roll) |

Free beta also includes the history intro, Tap History pages, metronome and tempo engine, timing feedback, guided sessions, and a limited number of saved recordings.

### Paid tier (later)
- Levels 2–7: time steps (single, double, triple), riffs, pullbacks, wings, drawbacks, over-the-tops, and more.
- Repertory routines (Shim Sham and others) and original routines.
- Full practice-music library with tempo variants.
- Trading fours, Hoofer's Line, and a compose mode.
- Sound-type feedback (heel vs. toe), progress analytics, unlimited recordings.

---

## 4. Where library content comes from

### Steps: free to use, but write your own versions
Individual dance steps and simple routines are not copyrightable in the US; the Copyright Office cites basic steps like the waltz step and the grapevine as examples ([U.S. Copyright Office, Circular 52](https://www.copyright.gov/circs/circ52.pdf)). The standard tap vocabulary (shuffle, flap, paradiddle, and so on) is therefore open to use.

What is protected is other people's expression of it: their videos, written descriptions, practice combinations, and longer choreography. So:
- Author your own step definitions, cues, and figure animations.
- Use published syllabi and dictionaries as reference for terminology and ordering only, not as copied content.

### Expert validation (recommended for beta)
- Hire one experienced rhythm tap teacher as a paid content advisor to review every step's sound sequence, counts, cues, and common faults.
- Record that teacher performing each step on a tap board at several tempos. This gives:
  - Reference audio for the demo sounds.
  - Labeled training data for later heel/toe sound recognition.
  - Credibility in the tap community.

### Licensed partners (paid tier)
Existing teaching platforms already have deep libraries, such as United Taps' 315-step dictionary and 315 practice combinations ([United Taps](https://unitedtaps.com/All-Access-for-Students.html)) and Tap Academy Online's technique, improvisation, and music theory courses ([Tap Academy Online](https://tapacademyonline.com/)). A licensing or co-branding deal could fill out paid levels faster than producing everything in-house.

### Routines
- Longer, original choreography can be copyrighted, while short routines of a few steps cannot be registered ([U.S. Copyright Office, Circular 52](https://www.copyright.gov/circs/circ52.pdf)).
- Commission original routines from your advisor with a clear rights agreement.
- Treat traditional repertory like the Shim Sham as a candidate for paid tier after a quick rights check.

### Practice music
- **Best option: commission original tracks.** Swing and jazz grooves recorded at fixed tempos (for example 60, 80, 100, 120, 140 BPM), each as drums-only, drums plus bass, and full band. Fixed tempos keep feedback accurate.
- **New recordings of public-domain songs.** US compositions published in 1930 or earlier are public domain as of 2026 ([Duke Center for the Study of the Public Domain](https://cspd.law.duke.edu/publicdomainday/2026/)). A composition and a recording of it are separate copyrights, so a new studio recording of an old standard is the clean path ([LegalClarity](https://legalclarity.org/when-does-music-become-public-domain/)).
- **Vintage recordings.** US recordings published in 1925 or earlier are public domain as of January 1, 2026, and UCSB has digitized and made available thousands of them ([UCSB Library](https://adp.library.ucsb.edu/index.php/resources/detail/516)). They're great for the Tap History pages; their uneven tempo and sound quality make them weak for timed practice.

Verify the status of any specific title before shipping.

### History content
Write original text using sources like the Library of Congress's [Tap Dance in America: A Short History](https://www.loc.gov/item/ihas.200217630/). Photographs need their own rights clearance.

---

## 5. Listening, recording, and feedback

### What the beta measures (reliable with today's onset detection)
- **Timing:** each detected sound vs. the beat grid, shown as early/late in milliseconds and as a simple "on / rushing / dragging" read.
- **Evenness:** consistency of spacing and loudness across repeated sounds (the "clean shuffle" test).
- **Sound count:** did the user produce the expected number of sounds (a paradiddle should be four; an extra heel drop shows up as five).

Finding the start of each percussive sound is standard audio-analysis practice, usually done with spectral flux and peak picking ([MuDaR paper](https://arxiv.org/html/2207.03190v2)).

### Later (paid)
- **Sound-type recognition:** heel vs. toe vs. stamp, trained on the advisor's labeled recordings. A comparable finger-tapping study sorted strokes into four drum classes with about 90% accuracy ([UPF thesis](http://www.mtg.upf.edu/system/files/publications/Javier-Nistal-Master-thesis-2016.pdf)), which suggests it's achievable with good data.

### Technical notes
- Request raw microphone input (echo cancellation, noise suppression, and auto gain turned off) so tap transients aren't smoothed away.
- Schedule the metronome and measure sounds against the same audio clock.
- Calibrate latency once per device and per output (speaker vs. wired headphones).

### Record and compare
- Save a starting recording for each step or routine.
- Replay old and new side by side with their timing plots overlaid.
- A beat-aligned waveform makes extra or missing sounds visible.

---

## 6. Setup guide (in-app copy draft)

Shown on first launch after the intro, and always available from Settings.

1. **Floor.** A tap board or hard floor (wood, laminate, tile) gives the clearest sound. Carpet muffles taps and the app may miss them ([DIY.org](https://www.diy.org/challenges/tap-dance)). Protect nice floors with a board.
2. **Shoes.** Tap shoes are best. For your first sessions, hard-soled shoes work.
3. **Phone placement.** Set the phone on a stable surface 1–2 meters (3–6 feet) away, microphone facing you. Don't put it on the tap board; vibration confuses the microphone.
4. **Audio out.** Use the phone speaker or wired headphones. Avoid Bluetooth: it adds a delay between the click and what you hear.
5. **Quiet room.** Turn off fans, TVs, and music from other devices.
6. **Calibrate.** Tap 8 times along with the click so the app can measure your device's delay.
7. **Sound check.** Do a few toe taps and heel drops; the meter should light up for each.
8. **Warm up.** Roll your ankles and loosen your calves before every session.

---

## 7. Practice structure

### Session builder (15–30 minutes)
Based on a common beginner format of about 5 minutes of ankle warm-up, 10 of slow basic sounds, 10 of counting and rhythm drills, and 5 with music ([SF Conservatory of Dance](https://sfconservatoryofdance.org/blog/how-to-learn-tap-dance/)).

| Block | Default | Content |
|---|---|---|
| Warm-up | 3–5 min | Ankle rolls, heel-toe articulation |
| Sounds | 5–8 min | Single sounds and today's focus step, slow |
| Rhythm | 5–8 min | Tempo ladder or subdivision drill on the focus step |
| Combination | 3–5 min | Short combo using known steps |
| Music | 3–5 min | Dance with a practice track, call-and-response, or free jam |

### Tempo engine
- Start new material at half tempo; add 5–10 BPM only when sounds stay clean ([Terrence Taps](https://www.tapdanceman.com/tap-dance-tips-for-beginners/)).
- Auto-advance rule: 8 clean repetitions in a row unlocks the next +5 BPM ([Encore Academy](https://www.encoreacademyut.com/blogs/how-to-dance-tap)).
- Tempo ladders: the same pattern at 1×, 2×, 4× subdivision (60 / 120 / 240) ([r/TapDancing](https://www.reddit.com/r/TapDancing/comments/1qh1o06/teaching_tap_to_beginners/)).
- Straight vs. swing feel toggle.

### Levels and unlocks
- A step unlocks when its building blocks are "solid," for example clean at a target tempo across two sessions.
- A level completes when its steps and one level combination are solid.

---

## 8. Musicality and routines

The goal is to grow the user from "following the click" to "playing music with their feet," which is what rhythm tap is about ([LODance](https://www.lodance.app/lineage/theatrical-tap)).

### Musicality ladder

| Stage | Skill | App exercise |
|---|---|---|
| 1. Pulse | Hold a steady beat | Steps on every beat with metronome, then drums-only track |
| 2. Subdivision | Eighths, triplets, sixteenths | Same step at different subdivisions; count-aloud prompts |
| 3. Swing | Uneven "long-short" eighths | Toggle straight/swing on the same drill |
| 4. Accents | Control loud vs. soft | Accent moves through a pattern (first sound, then second, etc.) |
| 5. Phrasing | 8-bar phrases, song form | Dance 6 bars, "break" for 2; follow 32-bar song form |
| 6. Ear | Hear and repeat rhythms | Call-and-response: app plays a rhythm, user echoes, mic scores |
| 7. Voice | Improvise in time | Trading fours and Hoofer's Line |

Call-and-response and trading fours come straight from how tap was learned in practice rooms like the Hoofers Club ([Sadler's Wells](https://www.sadlerswells.com/discover-dance/more-about-dance/tap/)).

### Signature modes
- **Call and Response (beta):** the figure and audio play a 1–2 bar rhythm; the user answers; the app scores timing and sound count.
- **Trading Fours (paid):** the band plays 4 bars, the user improvises 4 bars; scored loosely (stayed in time, came in on beat 1).
- **Hoofer's Line (paid):** in the traditional Hoofer's Line, dancers in a row hold a steady paddle-and-roll groove and each steps out in turn to solo ([Jacob's Pillow](https://danceinteractive.jacobspillow.org/themes-essays/tap/savion-glover/)). In the app, a virtual line holds the groove and passes the solo to the user.
- **Compose (paid):** drag known steps into an 8-count; the figure dances it back. Users build their own combinations.

### How routines are taught
1. Break the routine into 8-count phrases.
2. Learn phrase 1 slowly; then 1+2; then 1+2+3 (building up phrase by phrase).
3. Each phrase has its own tempo progression.
4. Run the full routine with a drums-only track, then with full music.
5. Record a full run and compare against the starting recording.

---

## 9. Build approach

- **Format:** start as a phone web app (like Meathead): GitHub for source, Vercel for hosting, installable to the home screen.
- **When to go native:** move to iOS/Android only if audio delay or background recording becomes a blocker.
- **Prototype order:**
  1. Figure engine with 3 steps (flap, shuffle, ball change) and synced sounds.
  2. Metronome and tempo engine.
  3. Microphone timing feedback with calibration.
  4. Session builder and library.
  5. Intro fade and Tap History.
  6. Record and compare.
- **Test early:** five to ten adult tappers on real floors, including at least one teacher.

---

## 10. Open questions

- Content advisor: who, and on what terms (fee, revenue share, credit)?
- Paid-tier pricing: subscription vs. one-time purchase?
- Shim Sham and other repertory: rights check before including.
- Practice music: budget for commissioned tracks.
- Privacy: keep all recordings on the device by default (as Meathead does with history).
