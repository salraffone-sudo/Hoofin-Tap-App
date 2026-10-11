Hoofin': The Tap App
An audio-first rhythm tap trainer for adult beginners and returning dancers. The phone listens, keeps time, and gives feedback; an animated figure shows the movement behind each sound.
Beta 0.1: one guided session (warm-up, step demo, tempo-ladder practice with timing feedback, call and response, record and compare) for Flap, Shuffle and Ball change.
Run locally
No build step. Serve the folder over HTTP (the microphone needs `localhost` or HTTPS):
```
npx serve .
```
Open http://localhost:3000.
Deploy to Vercel
Push this folder to a GitHub repo.
In Vercel: Add New → Project → import the repo.
Framework preset: Other. Build command: none. Output directory: `.` (root).
Deploy. On a phone, open the URL and use Add to Home Screen.
Files
Path	What it is
`index.html`	The app: template + logic in one Design Component file
`hoofin-engine.js`	Step data, animated figure, tap synth, metronome/transport, mic onset detection
`support.js`	Design Component runtime (loads React 18 from unpkg)
`ds/`	OAC design system: fonts, tokens, component bundle
`icons/`	PWA and Apple touch icons
`manifest.webmanifest`	Home-screen install metadata
`docs/product-brief.md`	Product brief v0.1
Where to change things
Steps: `Hoofin.STEPS` in `hoofin-engine.js`. Each step is a list of sound events plus foot keyframes `[beat, forward x, lift, heel pitch]`; the figure, demo audio and scoring all read from it.
Library list: `Hoofin.LIBRARY` in `hoofin-engine.js`.
Timing window / clean-rep target / default input: the `data-props` JSON at the bottom of `index.html` (`timingWindow`, `cleanTarget`, `inputMode`).
Onset detection: `Hoofin.mic` (energy-jump detector on raw input, echo cancellation and noise suppression off).
Known limits
No latency calibration yet; timing may read late on some devices.
With the phone speaker on, the mic can hear the metronome. Wired headphones avoid that.
Figure data exists for 3 of the 18 Level 1 steps.
Recordings and progress are kept in memory only; nothing leaves the device.
