/* Hoofin' prototype engine: step data, animated figure, audio, transport, mic onset detection. */
(function () {
  const H = (window.Hoofin = window.Hoofin || {});
  const C = { ink: '#2F3B47', navy: '#1F4A73', soft: '#D6E4F1', softBack: '#E8EDF2', inkBack: '#8D98A3', red: '#9E2A22', line: '#DDD7CB', mute: '#66707A' };
  H.colors = C;

  const shift = (keys, d, c) => keys.map(k => [(((k[0] + d) % c) + c) % c, ...k.slice(1)]).sort((a, b) => a[0] - b[0]);
  // keys: [t, x (forward), lift, pitch deg (heel raised)] in the step's own frame; phase maps frame t to count beat
  const flapR = [[0, -4, 0, 22], [0.22, 14, 9, 12], [0.5, 6, 0, 14], [0.9, 6, 0, 8], [1.35, 4, 0, 10], [1.6, -10, 7, 24], [1.8, -20, 12, 30]];
  H.STEPS = {
    flap: {
      id: 'flap', name: 'Flap', count: '& 1', cycle: 2, phase: 0.5, builtFrom: ['Brush', 'Step'], targetBpm: 120, trail: true,
      sounds: [
        { t: 0, foot: 'R', part: 'ball', action: 'brush' },
        { t: 0.5, foot: 'R', part: 'ball', action: 'step', weight: true },
        { t: 1, foot: 'L', part: 'ball', action: 'brush' },
        { t: 1.5, foot: 'L', part: 'ball', action: 'step', weight: true }
      ],
      keys: { R: flapR, L: shift(flapR, 1, 2) }, standing: 'L',
      cues: ['Brush from the knee, not the hip. Let the lower leg swing.', 'Land on the ball and keep the heel up. That keeps it to two sounds.', 'The brush should pull you forward into the step. Lean into it a little.'],
      faults: ['Heel drops on landing, which adds a third sound.']
    },
    shuffle: {
      id: 'shuffle', name: 'Shuffle', count: '& 1', cycle: 1, phase: 0.5, builtFrom: ['Brush', 'Spank'], targetBpm: 120, trail: true,
      sounds: [
        { t: 0, foot: 'R', part: 'ball', action: 'brush' },
        { t: 0.5, foot: 'R', part: 'ball', action: 'spank' }
      ],
      keys: { R: [[0, 0, 0, 22], [0.25, 18, 11, 6], [0.5, 0, 0, 22], [0.75, -17, 13, 40]], L: [[0, -2, 0, 0]] }, standing: 'L',
      cues: ['Let the knee do the work and keep the ankle loose.', 'Both sounds come from the ball of the foot, at the same volume.', 'Keep it small and close to the floor.'],
      faults: ['The spank (second sound) is quieter than the brush.']
    },
    ballchange: {
      id: 'ballchange', name: 'Ball change', count: '& 1', cycle: 1, phase: 0.5, builtFrom: ['Step', 'Step'], targetBpm: 120, trail: false,
      sounds: [
        { t: 0, foot: 'R', part: 'ball', action: 'ball', weight: true },
        { t: 0.5, foot: 'L', part: 'ball', action: 'change', weight: true }
      ],
      keys: { R: [[0, -16, 0, 40], [0.4, -16, 0, 38], [0.6, -8, 6, 30], [0.85, -18, 5, 42]], L: [[0, 4, 0, 4], [0.15, 4, 4, 8], [0.5, 4, 0, 0], [0.8, 4, 0, 0]] }, standing: 'L',
      cues: ['Keep the ball of the back foot quick and light.', 'Shift your weight all the way. Both sounds should be clear.', 'Stay on the balls of your feet with soft knees.'],
      faults: ["The back foot doesn't take weight, so its sound disappears."]
    }
  };

  H.LIBRARY = [
    { group: 'One sound', items: [['Step', 'solid'], ['Stamp', 'solid'], ['Stomp', 'solid'], ['Heel drop', 'solid'], ['Toe drop', 'solid'], ['Dig', 'learning'], ['Toe tip', 'learning'], ['Brush', 'solid'], ['Spank', 'solid'], ['Hop', 'learning']] },
    { group: 'Two sounds', items: [['Shuffle', 'learning', 'shuffle'], ['Flap', 'learning', 'flap'], ['Ball change', 'learning', 'ballchange'], ['Step heel', 'new']] },
    { group: 'Three sounds', items: [['Shuffle ball change', 'locked', null, 'Unlocks when Shuffle and Ball change are solid'], ['Flap heel', 'locked', null, 'Unlocks when Flap is solid']] },
    { group: 'Four sounds', items: [['Cramp roll', 'locked', null, 'Unlocks when Dig is solid'], ['Paradiddle', 'locked', null, 'Unlocks when Dig and Shuffle are solid']] }
  ];

  H.mirrorStep = function (s) {
    const sw = f => (f === 'R' ? 'L' : 'R');
    return Object.assign({}, s, { sounds: s.sounds.map(x => Object.assign({}, x, { foot: sw(x.foot) })), keys: { R: s.keys.L, L: s.keys.R }, standing: sw(s.standing) });
  };
  // Sound events in count-beat frame (beat 0 = "1")
  H.soundBeats = function (step, from, to) {
    const out = [];
    for (const s of step.sounds) {
      const b0 = s.t - step.phase;
      let k = Math.ceil((from - b0) / step.cycle);
      for (let b = b0 + k * step.cycle; b < to; b += step.cycle) out.push({ beat: b, sound: s, rep: Math.floor((b + step.phase) / step.cycle) });
    }
    return out.sort((a, b) => a.beat - b.beat);
  };
  H.countLabel = function (b) { const r = Math.round(b * 2) / 2; const m = ((r % 4) + 4) % 4; return m % 1 === 0 ? String(m + 1) : '&'; };
  H.slots = function (step) {
    return step.sounds.slice().sort((a, b) => a.t - b.t).map((s, i) => ({ i, count: H.countLabel(s.t - step.phase), foot: s.foot, action: s.action, part: s.part, label: H.countLabel(s.t - step.phase) + ' ' + s.foot + ' ' + s.action }));
  };

  function sample(keys, cycle, t) {
    const n = keys.length;
    if (n === 1) return keys[0].slice(1);
    t = ((t % cycle) + cycle) % cycle;
    let base = -1;
    for (let j = 0; j < n; j++) if (keys[j][0] <= t) base = j;
    const get = k => { const idx = ((k % n) + n) % n; const w = Math.floor(k / n); const kk = keys[idx]; return [kk[0] + w * cycle].concat(kk.slice(1)); };
    const p0 = get(base - 1), p1 = get(base), p2 = get(base + 1), p3 = get(base + 2);
    const dt = p2[0] - p1[0], u = (t - p1[0]) / dt;
    const u2 = u * u, u3 = u2 * u;
    const out = [];
    for (let d = 1; d < p1.length; d++) {
      const m1 = ((p2[d] - p0[d]) / (p2[0] - p0[0])) * dt, m2 = ((p3[d] - p1[d]) / (p3[0] - p1[0])) * dt;
      out.push((2 * u3 - 3 * u2 + 1) * p1[d] + (u3 - 2 * u2 + u) * m1 + (-2 * u3 + 3 * u2) * p2[d] + (u3 - u2) * m2);
    }
    return out;
  }
  function weightFoot(step, t) {
    const ws = step.sounds.filter(s => s.weight);
    if (!ws.length) return step.standing;
    t = ((t % step.cycle) + step.cycle) % step.cycle;
    let f = ws[ws.length - 1].foot;
    for (const s of ws) if (s.t <= t) f = s.foot;
    return f;
  }

  const FLOOR = 196, CX = 150, BASE = { R: 7, L: -7 };
  function footGeom(step, foot, t) {
    const [x, lift0, pitch] = sample(step.keys[foot], step.cycle, t);
    const lift = Math.max(0, lift0), p = (pitch * Math.PI) / 180;
    const u = [Math.cos(p), Math.sin(p)], n = [Math.sin(p), -Math.cos(p)];
    const B = [CX + BASE[foot] + x, FLOOR - lift];
    const Hh = [B[0] - 27 * u[0], B[1] - 27 * u[1]];
    const tp = p * 0.25;
    const T = [B[0] + 10 * Math.cos(tp), B[1] + 10 * Math.sin(tp)];
    const A = [Hh[0] + u[0] * 6 + n[0] * 15, Hh[1] + u[1] * 6 + n[1] * 15];
    return { x, lift, B, H: Hh, T, A, u, n };
  }
  function ik(h, a, l1, l2) {
    const dx = a[0] - h[0], dy = a[1] - h[1];
    const d = Math.min(Math.hypot(dx, dy), l1 + l2 - 0.01);
    const ang = Math.atan2(dy, dx);
    const c = Math.acos(Math.max(-1, Math.min(1, (l1 * l1 + d * d - l2 * l2) / (2 * l1 * d))));
    const k1 = [h[0] + l1 * Math.cos(ang - c), h[1] + l1 * Math.sin(ang - c)];
    const k2 = [h[0] + l1 * Math.cos(ang + c), h[1] + l1 * Math.sin(ang + c)];
    return k1[0] > k2[0] ? k1 : k2;
  }
  const P = pts => 'M' + pts.map(p => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' L');

  H.Figure = function Figure(props) {
    const R = window.React, e = R.createElement;
    const [, force] = R.useState(0);
    const st = R.useRef({ pulses: [], prev: null, t0: performance.now(), w: 0.5, cellFlash: {} }).current;
    R.useEffect(() => { let raf; const loop = () => { force(v => (v + 1) % 1e6); raf = requestAnimationFrame(loop); }; raf = requestAnimationFrame(loop); return () => cancelAnimationFrame(raf); }, []);
    let step = H.STEPS[props.stepId] || H.STEPS.flap;
    if (props.mirror) step = H.mirrorStep(step);
    const T = H.transport, now = performance.now();
    let beat = 0, active = true, moving = false;
    if (props.follow && T.running && T.stepId === step.id) { beat = T.beatNow(); active = T.active(beat) && beat >= -0.5; moving = true; if (!active) beat = st.hold != null ? st.hold : -0.5; else st.hold = beat; }
    else if (props.autoplay) { beat = ((now - st.t0) / 1000) * ((88 * (props.speed || 0.75)) / 60) - 0.5; moving = true; }
    else { beat = -0.5; }
    const t = beat + step.phase;
    const feet = { R: footGeom(step, 'R', t), L: footGeom(step, 'L', t) };
    // pulses for sound events crossed since last frame
    if (moving && active && st.prev != null && beat > st.prev && beat - st.prev < 0.5) {
      for (const ev of H.soundBeats(step, st.prev + 1e-6, beat + 1e-6)) {
        const g = footGeom(step, ev.sound.foot, ev.beat + step.phase);
        const pt = ev.sound.part === 'heel' ? g.H : g.B;
        st.pulses.push({ x: pt[0], y: Math.min(FLOOR, pt[1] + 2), born: now });
        st.cellFlash[Math.round((((ev.beat % 4) + 4) % 4) * 2) % 8] = now;
      }
    }
    st.prev = moving && active ? beat : null;
    st.pulses = st.pulses.filter(p => now - p.born < 420);
    const wf = weightFoot(step, t);
    st.w += ((wf === 'R' ? 1 : 0) - st.w) * 0.2;
    const hip = [CX - 4 + (st.w * feet.R.x + (1 - st.w) * feet.L.x) * 0.3, FLOOR - 113 + 1.5 * Math.sin(beat * Math.PI * 2)];
    const near = props.mirror ? 'L' : 'R', far = near === 'R' ? 'L' : 'R';
    const kids = [];
    // floor
    kids.push(e('line', { key: 'fl', x1: 30, y1: FLOOR + 1, x2: 270, y2: FLOOR + 1, stroke: C.ink, strokeWidth: 1.5 }));
    for (let x = 38; x <= 270; x += 9) kids.push(e('line', { key: 'h' + x, x1: x, y1: FLOOR + 2, x2: x - 6, y2: FLOOR + 8, stroke: '#B9B2A4', strokeWidth: 1 }));
    // weight shadows
    ['R', 'L'].forEach(f => { const g = feet[f]; const o = (f === 'R' ? st.w : 1 - st.w) * 0.22; kids.push(e('ellipse', { key: 'w' + f, cx: (g.B[0] + g.H[0]) / 2, cy: FLOOR + 1, rx: 22, ry: 4.5, fill: C.navy, opacity: o })); });
    const leg = (f, back) => {
      const g = feet[f], k = ik(hip, g.A, 60, 58);
      const fill = back ? C.softBack : C.soft, ink = back ? C.inkBack : C.ink;
      const d = P([hip, k, g.A]);
      const shoe = P([g.H, g.B, g.T, [g.T[0] + g.n[0] * 7, g.T[1] + g.n[1] * 7], [g.A[0] + g.u[0] * 10, g.A[1] + g.u[1] * 10], g.A, [g.H[0] + g.n[0] * 9, g.H[1] + g.n[1] * 9]]) + ' Z';
      return e('g', { key: 'leg' + f },
        e('path', { d, stroke: ink, strokeWidth: 17, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }),
        e('path', { d, stroke: fill, strokeWidth: 14, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }),
        e('path', { d: shoe, fill: back ? C.inkBack : C.ink, stroke: back ? C.inkBack : C.ink, strokeWidth: 1.5, strokeLinejoin: 'round' }));
    };
    kids.push(leg(far, true));
    // upper body: relaxed, mostly still
    const sh = [hip[0] + 5, hip[1] - 74], head = [sh[0] + 5, sh[1] - 25];
    const torso = P([hip, sh]);
    const arm = P([sh, [sh[0] - 3, sh[1] + 34], [sh[0] + 9, sh[1] + 60]]);
    kids.push(e('g', { key: 'up' },
      e('path', { d: torso, stroke: C.ink, strokeWidth: 29, strokeLinecap: 'round', fill: 'none' }),
      e('path', { d: torso, stroke: C.soft, strokeWidth: 26, strokeLinecap: 'round', fill: 'none' }),
      e('circle', { cx: head[0], cy: head[1], r: 15, fill: C.soft, stroke: C.ink, strokeWidth: 1.5 }),
      e('path', { d: arm, stroke: C.ink, strokeWidth: 11, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' }),
      e('path', { d: arm, stroke: C.soft, strokeWidth: 8, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' })));
    kids.push(leg(near, false));
    // motion trail on working foot
    if (step.trail && moving && active) {
      ['R', 'L'].forEach(f => {
        for (let i = 1; i <= 5; i++) {
          const g = footGeom(step, f, t - i * 0.03);
          const sp = Math.hypot(g.B[0] - feet[f].B[0], g.B[1] - feet[f].B[1]);
          if (sp > 2.5 * i) kids.push(e('circle', { key: 'tr' + f + i, cx: g.B[0], cy: g.B[1], r: 3, fill: C.navy, opacity: 0.22 - i * 0.035 }));
        }
      });
    }
    st.pulses.forEach((p, i) => {
      const a = (now - p.born) / 420;
      kids.push(e('circle', { key: 'pr' + i + p.born, cx: p.x, cy: p.y, r: 3 + a * 13, fill: 'none', stroke: C.red, strokeWidth: 2, opacity: 1 - a }));
      if (a < 0.4) kids.push(e('circle', { key: 'pc' + i + p.born, cx: p.x, cy: p.y, r: 3.5, fill: C.red, opacity: 1 - a * 2 }));
    });
    // beat strip: one bar of eighths
    if (props.strip !== false) {
      const marks = {};
      H.soundBeats(step, 0, 4).forEach(ev => { marks[Math.round(ev.beat * 2) % 8] = true; });
      H.soundBeats(step, -0.5, 0).forEach(ev => { marks[(Math.round(ev.beat * 2) + 8) % 8] = true; });
      const cur = Math.floor((((beat % 4) + 4) % 4) * 2) % 8;
      for (let i = 0; i < 8; i++) {
        const x = 22 + i * 32, lit = moving && i === cur;
        const fl = st.cellFlash[i] && now - st.cellFlash[i] < 220;
        kids.push(e('rect', { key: 'c' + i, x, y: 222, width: 30, height: 34, rx: 2, fill: lit ? C.soft : '#FFFFFF', stroke: lit ? C.navy : C.line, strokeWidth: lit ? 1.5 : 1 }));
        kids.push(e('text', { key: 't' + i, x: x + 15, y: 237, textAnchor: 'middle', fontFamily: 'Roboto, system-ui, sans-serif', fontSize: 12, fontWeight: i % 2 ? 400 : 600, fill: i % 2 ? C.mute : C.ink }, i % 2 ? '&' : String(i / 2 + 1)));
        if (marks[i]) kids.push(e('circle', { key: 'm' + i, cx: x + 15, cy: 248, r: 3.5, fill: fl ? C.red : active ? C.navy : 'none', stroke: fl ? C.red : C.navy, strokeWidth: 1.2 }));
      }
    }
    return e('svg', { viewBox: '0 -50 300 312', width: '100%', style: { display: 'block', maxHeight: props.maxHeight || 'none' } }, ...kids);
  };
  window.HoofinFigure = H.Figure;

  // ---------- audio ----------
  H.audio = {
    ctx: null,
    get() {
      if (!this.ctx) {
        const c = (this.ctx = new (window.AudioContext || window.webkitAudioContext)({ latencyHint: 'interactive' }));
        this.master = c.createGain(); this.master.gain.value = 0.85; this.master.connect(c.destination);
        const len = c.sampleRate * 0.2, buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
        for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
        this.noise = buf;
      }
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return this.ctx;
    },
    tap(when, part, vel) {
      const c = this.get(); vel = vel || 1;
      const n = c.createBufferSource(); n.buffer = this.noise;
      const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = part === 'heel' ? 1500 : 3000; bp.Q.value = 1.3;
      const g = c.createGain();
      g.gain.setValueAtTime(0.0001, when); g.gain.exponentialRampToValueAtTime(0.9 * vel, when + 0.002); g.gain.exponentialRampToValueAtTime(0.001, when + 0.07);
      n.connect(bp); bp.connect(g); g.connect(this.master); n.start(when); n.stop(when + 0.1);
      const o = c.createOscillator(); o.frequency.setValueAtTime(part === 'heel' ? 170 : 260, when); o.frequency.exponentialRampToValueAtTime(70, when + 0.05);
      const g2 = c.createGain(); g2.gain.setValueAtTime(0.35 * vel, when); g2.gain.exponentialRampToValueAtTime(0.001, when + 0.06);
      o.connect(g2); g2.connect(this.master); o.start(when); o.stop(when + 0.08);
    },
    click(when, accent) {
      const c = this.get();
      const o = c.createOscillator(); o.frequency.value = accent ? 1760 : 1320;
      const g = c.createGain(); g.gain.setValueAtTime(accent ? 0.2 : 0.13, when); g.gain.exponentialRampToValueAtTime(0.001, when + 0.035);
      o.connect(g); g.connect(this.master); o.start(when); o.stop(when + 0.05);
    }
  };

  // ---------- transport ----------
  H.transport = {
    running: false,
    start(o) {
      this.stop();
      const c = H.audio.get();
      this.bpm = o.bpm; this.stepId = o.stepId; this.mirror = !!o.mirror;
      this.clicks = o.clicks !== false; this.taps = o.taps !== false;
      this.period = o.period || null; this.len = o.len || null; this.countIn = o.countIn || 0;
      this.startTime = c.currentTime + 0.12 + (this.countIn * 60) / this.bpm;
      this.sched = -this.countIn - 0.01;
      this.running = true;
      this.timer = setInterval(() => this._tick(), 25);
      this._tick();
    },
    stop() { if (this.timer) clearInterval(this.timer); this.timer = null; this.running = false; },
    beatAt(time) { return ((time - this.startTime) * this.bpm) / 60; },
    timeAt(b) { return this.startTime + (b * 60) / this.bpm; },
    now() { return H.audio.get().currentTime; },
    beatNow() { const c = H.audio.ctx; return c ? this.beatAt(c.currentTime - (c.outputLatency || 0)) : 0; },
    active(b) { if (!this.period) return true; const m = (((b + 0.5) % this.period) + this.period) % this.period; return m < this.len; },
    _tick() {
      const c = H.audio.ctx; if (!c) return;
      const ahead = this.beatAt(c.currentTime + 0.12);
      if (ahead <= this.sched) return;
      if (this.clicks) for (let b = Math.ceil(this.sched + 1e-6); b <= ahead; b++) if (b >= -this.countIn) this.click(b);
      if (this.taps) {
        let step = H.STEPS[this.stepId]; if (this.mirror) step = H.mirrorStep(step);
        for (const ev of H.soundBeats(step, Math.max(this.sched, -0.5) + 1e-6, ahead + 1e-6)) {
          if (ev.beat < -0.5 || !this.active(ev.beat)) continue;
          const a = ev.sound.action, v = a === 'brush' || a === 'spank' ? 0.6 : a === 'ball' ? 0.75 : 1;
          H.audio.tap(this.timeAt(ev.beat), ev.sound.part, v);
        }
      }
      this.sched = ahead;
    },
    click(b) { H.audio.click(this.timeAt(b), ((b % 4) + 4) % 4 === 0); }
  };

  // ---------- microphone onset detection ----------
  H.mic = {
    on: false, level: 0,
    async start(onOnset) {
      const c = H.audio.get();
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } });
      this.src = c.createMediaStreamSource(this.stream);
      this.proc = c.createScriptProcessor(1024, 1, 1);
      let avg = 0.0004, last = 0;
      this.proc.onaudioprocess = ev => {
        const d = ev.inputBuffer.getChannelData(0), sr = c.sampleRate, tEnd = c.currentTime;
        let peak = 0;
        for (let i = 0; i + 128 <= d.length; i += 128) {
          let s = 0; for (let j = i; j < i + 128; j++) s += d[j] * d[j]; s /= 128;
          peak = Math.max(peak, s);
          const tt = tEnd - (d.length - i) / sr - (c.baseLatency || 0);
          if (s > avg * 9 && s > 0.0009 && tt - last > 0.075) { last = tt; onOnset({ time: tt, level: Math.sqrt(s) }); }
          avg = avg * 0.96 + s * 0.04;
        }
        this.level = Math.sqrt(peak);
        ev.outputBuffer.getChannelData(0).fill(0);
      };
      this.src.connect(this.proc); this.proc.connect(c.destination);
      this.on = true;
    },
    stop() {
      try { if (this.proc) this.proc.disconnect(); if (this.src) this.src.disconnect(); if (this.stream) this.stream.getTracks().forEach(t => t.stop()); } catch (e) {}
      this.proc = this.src = this.stream = null; this.on = false; this.level = 0;
    }
  };

  H.gauss = function (sd, mean) { let u = 0, v = 0; while (!u) u = Math.random(); while (!v) v = Math.random(); return (mean || 0) + sd * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
  window.dispatchEvent(new Event('hoofin-ready'));
})();
