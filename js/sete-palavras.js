/* 7 PALAVRAS - lógica do jogo (usa js/banco-palavras.js) */
const $ = id => document.getElementById(id);
const LV = { facil: { n: 'Fácil', p: 1 }, medio: { n: 'Médio', p: 2 }, dificil: { n: 'Difícil', p: 3 } };
const MIX = ['facil', 'facil', 'facil', 'medio', 'medio', 'dificil', 'dificil'];
const rand = a => a[Math.floor(Math.random() * a.length)];

/* Sons gerados no navegador, sem arquivos externos */
const SFX = {
  ctx: null, muted: false,
  init() {
    const C = window.AudioContext || window.webkitAudioContext;
    if (!C) return;
    this.ctx = this.ctx || new C();
    if (this.ctx.state === 'suspended') this.ctx.resume();
  },
  tone(f, type = 'sine', d = .12, v = .06, at = 0) {
    if (this.muted || !this.ctx) return;
    const o = this.ctx.createOscillator(), g = this.ctx.createGain(), s = this.ctx.currentTime + at;
    o.type = type; o.frequency.value = f;
    g.gain.setValueAtTime(v, s); g.gain.exponentialRampToValueAtTime(.001, s + d);
    o.connect(g); g.connect(this.ctx.destination); o.start(s); o.stop(s + d);
  },
  click() { this.tone(600, 'sine', .08) },
  point(t) { this.tone(t === 'A' ? 660 : 880, 'triangle', .12, .08); this.tone(t === 'A' ? 880 : 1175, 'triangle', .15, .08, .08) },
  skip() { this.tone(220, 'sawtooth', .18, .04) },
  tick() { this.tone(1000, 'square', .05, .03) },
  end() { [0, .3, .6].forEach(a => this.tone(300, 'square', .25, .06, a)) },
  win() { [523, 659, 784, 1046].forEach((f, i) => this.tone(f, 'sine', .3, .1, i * .14)) }
};

/* Dados salvos no navegador */
const Store = {
  k: '7Palavras_V3',
  load() {
    const base = { matches: 0, points: 0, words: 0, hits: 0, setup: null };
    try { return Object.assign(base, JSON.parse(localStorage.getItem(this.k) || '{}')); } catch (e) { return base; }
  },
  save(o) { try { localStorage.setItem(this.k, JSON.stringify(o)); } catch (e) { } }
};

const G = {
  pick: { cat: 'geral', diff: 'misto', rounds: '3', time: '0' },
  max: 3, round: 1, time: 0, left: 0, timer: null,
  A: { name: '', score: 0 }, B: { name: '', score: 0 },
  board: [], active: null, log: [], used: new Set()
};

/* Sorteia uma palavra do nível pedido, evitando repetir na mesma partida */
function draw(lv) {
  const cats = G.pick.cat === 'geral' ? Object.keys(WordBank) : [G.pick.cat];
  const all = cats.flatMap(c => WordBank[c][lv]);
  const free = all.filter(w => !G.used.has(w));
  const word = rand(free.length ? free : all);
  G.used.add(word);
  return { word, lv, state: null };
}

const GameApp = {
  init() {
    const conta = k => (k === 'geral' ? Object.keys(WordBank) : [k]).reduce((t, c) => t + Object.values(WordBank[c]).reduce((x, l) => x + l.length, 0), 0);
    $('seg-cat').innerHTML = Object.entries(CATEGORIAS).map(([k, n]) =>
      `<button data-v="${k}"${TEMAS_ESPECIAIS.includes(k) ? ' class="tema"' : ''}>${n}<small>${conta(k)} palavras</small></button>`).join('');
    document.body.addEventListener('pointerdown', () => SFX.init(), { once: true });
    document.querySelectorAll('.seg').forEach(s => s.addEventListener('click', e => {
      const b = e.target.closest('button');
      if (b) this.setSeg(s.dataset.k, b.dataset.v, true);
    }));
    const st = Store.load();
    const pick = st.setup ? st.setup.pick : G.pick;
    Object.entries(Object.assign({}, G.pick, pick)).forEach(([k, v]) => this.setSeg(k, v));
    if (st.setup) { $('input-team-a').value = st.setup.a; $('input-team-b').value = st.setup.b; }
    this.homeStats();
  },

  setSeg(k, v, click) {
    G.pick[k] = v;
    document.querySelectorAll(`.seg[data-k="${k}"] button`).forEach(b => b.classList.toggle('on', b.dataset.v === v));
    if (click) SFX.click();
  },

  homeStats() {
    const st = Store.load();
    const total = Object.values(WordBank).reduce((t, c) => t + Object.values(c).reduce((x, l) => x + l.length, 0), 0);
    const base = `${total.toLocaleString('pt-BR')} palavras em ${Object.keys(WordBank).length} categorias. `;
    $('home-stats').textContent = base + (st.matches
      ? `Você já jogou ${st.matches} partidas e acertou ${st.hits} palavras.`
      : 'Monte a primeira partida!');
  },

  navigate(id) {
    SFX.click();
    if (id !== 'screen-game') clearInterval(G.timer);
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    $(id).classList.add('active');
    window.scrollTo(0, 0);
  },

  toggleSound() {
    SFX.muted = !SFX.muted;
    document.querySelectorAll('.snd').forEach(b => b.textContent = SFX.muted ? 'Som: desligado' : 'Som: ligado');
  },

  startMatch(reuse) {
    if (!reuse) {
      const a = $('input-team-a').value.trim(), b = $('input-team-b').value.trim();
      G.A.name = a || 'Equipe azul';
      G.B.name = b || 'Equipe laranja';
      const st = Store.load();
      st.setup = { a, b, pick: { ...G.pick } };
      Store.save(st);
    }
    G.max = +G.pick.rounds; G.time = +G.pick.time; G.round = 1;
    G.A.score = 0; G.B.score = 0; G.log = []; G.used.clear();
    this.newBoard();
    this.navigate('screen-game');
  },

  newBoard() {
    const lvs = G.pick.diff === 'misto' ? MIX : Array(7).fill(G.pick.diff);
    G.board = lvs.map(lv => draw(lv));
    this.render();
    this.startTimer();
  },

  render() {
    $('hud-name-a').textContent = G.A.name;
    $('hud-name-b').textContent = G.B.name;
    $('hud-score-a').textContent = G.A.score;
    $('hud-score-b').textContent = G.B.score;
    $('hud-round').textContent = `Rodada ${G.round} de ${G.max}`;
    $('board').innerHTML = G.board.map((w, i) =>
      `<button class="card lv-${w.lv}${w.state ? ' done ' + w.state : ''}" onclick="GameApp.open(${i})">` +
      `<i class="num">${i + 1}</i><span class="w">${w.word}</span><em class="pts">+${LV[w.lv].p}</em></button>`).join('');
    const last = G.round >= G.max;
    $('btn-next').textContent = last ? 'Ver resultado final' : 'Próxima rodada';
    $('btn-next').classList.toggle('green', last);
    $('btn-next').classList.toggle('blue', !last);
    $('btn-add').hidden = !last;
  },

  /* Cronômetro opcional por rodada */
  startTimer() {
    clearInterval(G.timer);
    const t = $('hud-timer');
    if (!G.time) { t.hidden = true; return; }
    t.hidden = false; G.left = G.time; this.drawTimer();
    G.timer = setInterval(() => {
      G.left--; this.drawTimer();
      if (G.left > 0 && G.left <= 5) SFX.tick();
      if (G.left <= 0) { clearInterval(G.timer); SFX.end(); }
    }, 1000);
  },
  drawTimer() {
    const t = $('hud-timer');
    t.textContent = `${Math.floor(G.left / 60)}:${String(G.left % 60).padStart(2, '0')}`;
    t.classList.toggle('low', G.left <= 10);
  },

  /* Janela de votação */
  open(i) {
    SFX.click();
    G.active = i;
    const w = G.board[i], p = LV[w.lv].p;
    $('modal-word').textContent = w.word;
    $('modal-lv').textContent = `${LV[w.lv].n}, vale ${p} ponto${p > 1 ? 's' : ''}`;
    const difficult = w.lv === 'dificil';
    $('swap-hint').hidden = !difficult;
    $('btn-swap').textContent = difficult ? 'Trocar por amarela (2 pts)' : 'Trocar palavra';
    $('modal').classList.add('on');
  },
  close() { G.active = null; $('modal').classList.remove('on'); },

  resolve(r) {
    const w = G.board[G.active];
    if (!w) return;
    w.state = r;
    G.log.push({ word: w.word, r, points: r === 'skip' ? 0 : LV[w.lv].p });
    if (r === 'skip') SFX.skip(); else { G[r].score += LV[w.lv].p; SFX.point(r); }
    this.close(); this.render();
  },

  swap() {
    const w = G.board[G.active];
    if (!w) return;
    SFX.click();
    const nextLevel = w.lv === 'dificil' ? 'medio' : w.lv;
    G.board[G.active] = draw(nextLevel);
    this.close(); this.render();
  },

  next() {
    SFX.click();
    if (G.round < G.max) { G.round++; this.newBoard(); } else this.finish();
  },

  addRound() { SFX.click(); G.max++; G.round++; this.newBoard(); },

  renderLog() {
    const log = $('log');
    const header = document.createElement('div');
    header.className = 'log-head';
    header.setAttribute('role', 'row');
    ['Palavra', 'Equipe', 'Pontos'].forEach(label => {
      const cell = document.createElement('span');
      cell.setAttribute('role', 'columnheader');
      cell.textContent = label;
      header.appendChild(cell);
    });

    const rows = G.log.map(item => {
      const row = document.createElement('div');
      row.className = `log-row${item.r === 'skip' ? ' skip' : ''}`;
      row.setAttribute('role', 'row');

      const word = document.createElement('span');
      word.className = 'log-word';
      word.setAttribute('role', 'cell');
      word.textContent = item.word;

      const team = document.createElement('span');
      team.className = `log-team ${item.r}`;
      team.setAttribute('role', 'cell');
      team.textContent = item.r === 'A' ? G.A.name : item.r === 'B' ? G.B.name : 'Ninguém acertou';

      const points = document.createElement('span');
      points.className = 'log-points';
      points.setAttribute('role', 'cell');
      points.textContent = item.r === 'skip' ? '0' : `+${item.points}`;

      row.append(word, team, points);
      return row;
    });

    if (!rows.length) {
      const empty = document.createElement('div');
      empty.className = 'log-empty';
      empty.textContent = 'Nenhuma palavra foi avaliada nesta partida.';
      rows.push(empty);
    }
    log.replaceChildren(header, ...rows);
  },

  async copyResult() {
    const winner = G.A.score > G.B.score ? G.A.name : G.B.score > G.A.score ? G.B.name : 'Empate';
    const lines = G.log.map(item => {
      const team = item.r === 'A' ? G.A.name : item.r === 'B' ? G.B.name : 'Ninguém acertou';
      const points = item.r === 'skip' ? '0 pontos' : `${item.points} ponto${item.points > 1 ? 's' : ''}`;
      return `• ${item.word} — ${team} (${points})`;
    });
    const text = [
      '7 Palavras',
      `${G.A.name} ${G.A.score} x ${G.B.score} ${G.B.name}`,
      `Resultado: ${winner}`,
      '',
      'Resumo das palavras:',
      ...(lines.length ? lines : ['Nenhuma palavra foi avaliada.'])
    ].join('\n');

    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        copied = true;
      }
    } catch (e) { }

    if (!copied && document.execCommand) {
      const area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.top = '0';
      area.style.left = '-9999px';
      document.body.appendChild(area);
      area.select();
      try { copied = document.execCommand('copy'); } catch (e) { }
      area.remove();
    }

    const button = $('btn-copy-result');
    button.textContent = copied ? 'Resultado copiado!' : 'Não foi possível copiar';
    clearTimeout(this.copyTimer);
    this.copyTimer = setTimeout(() => { button.textContent = 'Copiar resultado'; }, 2200);
  },

  /* Dois toques para encerrar, sem janela do navegador */
  abort() {
    SFX.click();
    const b = $('btn-abort');
    if (!G.abortTimer) {
      b.textContent = 'Toque de novo para encerrar';
      G.abortTimer = setTimeout(() => { G.abortTimer = null; b.textContent = 'Encerrar partida'; }, 3000);
      return;
    }
    clearTimeout(G.abortTimer); G.abortTimer = null; b.textContent = 'Encerrar partida';
    this.navigate('screen-home');
  },

  finish() {
    clearInterval(G.timer);
    SFX.win();
    const a = G.A.score, b = G.B.score, t = $('victory-team');
    t.textContent = a > b ? `${G.A.name} venceu!` : b > a ? `${G.B.name} venceu!` : 'Empate épico!';
    t.className = 'vtitle ' + (a > b ? 'A' : b > a ? 'B' : '');
    $('final-a').textContent = a; $('final-b').textContent = b;

    const hits = G.log.filter(l => l.r !== 'skip').length;
    const total = G.log.length;
    const st = Store.load();
    st.matches++; st.hits += hits; st.points += a + b; st.words += total;
    Store.save(st);

    $('stats').innerHTML =
      `<div><span>Palavras acertadas</span><b>${hits}</b></div>` +
      `<div><span>Palavras puladas</span><b>${total - hits}</b></div>` +
      `<div><span>Aproveitamento</span><b>${total ? Math.round(hits / total * 100) : 0}%</b></div>` +
      `<div><span>Partidas jogadas no total</span><b>${st.matches}</b></div>`;
    this.renderLog();
    this.homeStats();
    this.navigate('screen-victory');
  }
};

window.addEventListener('DOMContentLoaded', () => GameApp.init());
