// =============================================
//  FLAG QUIZ — script.js
//  Banderas via flagcdn.com (código ISO 2 letras)
// =============================================

const COUNTRIES = [
  // América
  { name: "México",               code: "mx", continent: "América" },
  { name: "Brasil",               code: "br", continent: "América" },
  { name: "Argentina",            code: "ar", continent: "América" },
  { name: "Colombia",             code: "co", continent: "América" },
  { name: "Chile",                code: "cl", continent: "América" },
  { name: "Perú",                 code: "pe", continent: "América" },
  { name: "Venezuela",            code: "ve", continent: "América" },
  { name: "Uruguay",              code: "uy", continent: "América" },
  { name: "Ecuador",              code: "ec", continent: "América" },
  { name: "Bolivia",              code: "bo", continent: "América" },
  { name: "Paraguay",             code: "py", continent: "América" },
  { name: "Cuba",                 code: "cu", continent: "América" },
  { name: "Costa Rica",           code: "cr", continent: "América" },
  { name: "Guatemala",            code: "gt", continent: "América" },
  { name: "Honduras",             code: "hn", continent: "América" },
  { name: "El Salvador",          code: "sv", continent: "América" },
  { name: "Nicaragua",            code: "ni", continent: "América" },
  { name: "Panamá",               code: "pa", continent: "América" },
  { name: "Jamaica",              code: "jm", continent: "América" },
  { name: "Haití",                code: "ht", continent: "América" },
  { name: "República Dominicana", code: "do", continent: "América" },
  { name: "Trinidad y Tobago",    code: "tt", continent: "América" },
  { name: "Barbados",             code: "bb", continent: "América" },
  { name: "Bahamas",              code: "bs", continent: "América" },
  { name: "Belice",               code: "bz", continent: "América" },
  { name: "Guyana",               code: "gy", continent: "América" },
  { name: "Surinam",              code: "sr", continent: "América" },
  { name: "Canadá",               code: "ca", continent: "América" },
  { name: "Estados Unidos",       code: "us", continent: "América" },

  // Europa
  { name: "España",               code: "es", continent: "Europa" },
  { name: "Francia",              code: "fr", continent: "Europa" },
  { name: "Alemania",             code: "de", continent: "Europa" },
  { name: "Italia",               code: "it", continent: "Europa" },
  { name: "Portugal",             code: "pt", continent: "Europa" },
  { name: "Reino Unido",          code: "gb", continent: "Europa" },
  { name: "Países Bajos",         code: "nl", continent: "Europa" },
  { name: "Bélgica",              code: "be", continent: "Europa" },
  { name: "Suiza",                code: "ch", continent: "Europa" },
  { name: "Austria",              code: "at", continent: "Europa" },
  { name: "Polonia",              code: "pl", continent: "Europa" },
  { name: "Rusia",                code: "ru", continent: "Europa" },
  { name: "Ucrania",              code: "ua", continent: "Europa" },
  { name: "Suecia",               code: "se", continent: "Europa" },
  { name: "Noruega",              code: "no", continent: "Europa" },
  { name: "Dinamarca",            code: "dk", continent: "Europa" },
  { name: "Finlandia",            code: "fi", continent: "Europa" },
  { name: "Grecia",               code: "gr", continent: "Europa" },
  { name: "Turquía",              code: "tr", continent: "Europa" },
  { name: "República Checa",      code: "cz", continent: "Europa" },
  { name: "Hungría",              code: "hu", continent: "Europa" },
  { name: "Rumanía",              code: "ro", continent: "Europa" },
  { name: "Bulgaria",             code: "bg", continent: "Europa" },
  { name: "Serbia",               code: "rs", continent: "Europa" },
  { name: "Croacia",              code: "hr", continent: "Europa" },
  { name: "Eslovaquia",           code: "sk", continent: "Europa" },
  { name: "Eslovenia",            code: "si", continent: "Europa" },
  { name: "Irlanda",              code: "ie", continent: "Europa" },
  { name: "Islandia",             code: "is", continent: "Europa" },
  { name: "Albania",              code: "al", continent: "Europa" },
  { name: "Bosnia y Herzegovina", code: "ba", continent: "Europa" },
  { name: "Macedonia del Norte",  code: "mk", continent: "Europa" },
  { name: "Moldova",              code: "md", continent: "Europa" },
  { name: "Bielorrusia",          code: "by", continent: "Europa" },
  { name: "Estonia",              code: "ee", continent: "Europa" },
  { name: "Letonia",              code: "lv", continent: "Europa" },
  { name: "Lituania",             code: "lt", continent: "Europa" },
  { name: "Luxemburgo",           code: "lu", continent: "Europa" },
  { name: "Malta",                code: "mt", continent: "Europa" },
  { name: "Montenegro",           code: "me", continent: "Europa" },
  { name: "Kosovo",               code: "xk", continent: "Europa" },
  { name: "Andorra",              code: "ad", continent: "Europa" },
  { name: "Mónaco",               code: "mc", continent: "Europa" },
  { name: "San Marino",           code: "sm", continent: "Europa" },
  { name: "Liechtenstein",        code: "li", continent: "Europa" },
  { name: "Chipre",               code: "cy", continent: "Europa" },

  // Asia
  { name: "Japón",                code: "jp", continent: "Asia" },
  { name: "China",                code: "cn", continent: "Asia" },
  { name: "India",                code: "in", continent: "Asia" },
  { name: "Corea del Sur",        code: "kr", continent: "Asia" },
  { name: "Corea del Norte",      code: "kp", continent: "Asia" },
  { name: "Indonesia",            code: "id", continent: "Asia" },
  { name: "Tailandia",            code: "th", continent: "Asia" },
  { name: "Vietnam",              code: "vn", continent: "Asia" },
  { name: "Filipinas",            code: "ph", continent: "Asia" },
  { name: "Malasia",              code: "my", continent: "Asia" },
  { name: "Singapur",             code: "sg", continent: "Asia" },
  { name: "Arabia Saudita",       code: "sa", continent: "Asia" },
  { name: "Israel",               code: "il", continent: "Asia" },
  { name: "Irán",                 code: "ir", continent: "Asia" },
  { name: "Iraq",                 code: "iq", continent: "Asia" },
  { name: "Pakistán",             code: "pk", continent: "Asia" },
  { name: "Afganistán",           code: "af", continent: "Asia" },
  { name: "Bangladés",            code: "bd", continent: "Asia" },
  { name: "Sri Lanka",            code: "lk", continent: "Asia" },
  { name: "Nepal",                code: "np", continent: "Asia" },
  { name: "Myanmar",              code: "mm", continent: "Asia" },
  { name: "Camboya",              code: "kh", continent: "Asia" },
  { name: "Laos",                 code: "la", continent: "Asia" },
  { name: "Mongolia",             code: "mn", continent: "Asia" },
  { name: "Kazajistán",           code: "kz", continent: "Asia" },
  { name: "Uzbekistán",           code: "uz", continent: "Asia" },
  { name: "Azerbaiyán",           code: "az", continent: "Asia" },
  { name: "Georgia",              code: "ge", continent: "Asia" },
  { name: "Armenia",              code: "am", continent: "Asia" },
  { name: "Jordania",             code: "jo", continent: "Asia" },
  { name: "Líbano",               code: "lb", continent: "Asia" },
  { name: "Siria",                code: "sy", continent: "Asia" },
  { name: "Yemen",                code: "ye", continent: "Asia" },
  { name: "Omán",                 code: "om", continent: "Asia" },
  { name: "Qatar",                code: "qa", continent: "Asia" },
  { name: "Kuwait",               code: "kw", continent: "Asia" },
  { name: "Bahréin",              code: "bh", continent: "Asia" },
  { name: "Emiratos Árabes",      code: "ae", continent: "Asia" },
  { name: "Taiwán",               code: "tw", continent: "Asia" },
  { name: "Timor Oriental",       code: "tl", continent: "Asia" },
  { name: "Brunéi",               code: "bn", continent: "Asia" },
  { name: "Bután",                code: "bt", continent: "Asia" },
  { name: "Maldivas",             code: "mv", continent: "Asia" },
  { name: "Kirguistán",           code: "kg", continent: "Asia" },
  { name: "Tayikistán",           code: "tj", continent: "Asia" },
  { name: "Turkmenistán",         code: "tm", continent: "Asia" },

  // África
  { name: "Egipto",               code: "eg", continent: "África" },
  { name: "Nigeria",              code: "ng", continent: "África" },
  { name: "Sudáfrica",            code: "za", continent: "África" },
  { name: "Kenia",                code: "ke", continent: "África" },
  { name: "Etiopía",              code: "et", continent: "África" },
  { name: "Ghana",                code: "gh", continent: "África" },
  { name: "Marruecos",            code: "ma", continent: "África" },
  { name: "Argelia",              code: "dz", continent: "África" },
  { name: "Tanzania",             code: "tz", continent: "África" },
  { name: "Angola",               code: "ao", continent: "África" },
  { name: "Mozambique",           code: "mz", continent: "África" },
  { name: "Camerún",              code: "cm", continent: "África" },
  { name: "Costa de Marfil",      code: "ci", continent: "África" },
  { name: "Senegal",              code: "sn", continent: "África" },
  { name: "Mali",                 code: "ml", continent: "África" },
  { name: "Burkina Faso",         code: "bf", continent: "África" },
  { name: "Zimbabue",             code: "zw", continent: "África" },
  { name: "Zambia",               code: "zm", continent: "África" },
  { name: "Uganda",               code: "ug", continent: "África" },
  { name: "Ruanda",               code: "rw", continent: "África" },
  { name: "Somalia",              code: "so", continent: "África" },
  { name: "Sudán",                code: "sd", continent: "África" },
  { name: "Libia",                code: "ly", continent: "África" },
  { name: "Túnez",                code: "tn", continent: "África" },
  { name: "Mauritania",           code: "mr", continent: "África" },
  { name: "Níger",                code: "ne", continent: "África" },
  { name: "Chad",                 code: "td", continent: "África" },
  { name: "República del Congo",  code: "cg", continent: "África" },
  { name: "RD del Congo",         code: "cd", continent: "África" },
  { name: "Madagascar",           code: "mg", continent: "África" },
  { name: "Guinea",               code: "gn", continent: "África" },
  { name: "Benín",                code: "bj", continent: "África" },
  { name: "Togo",                 code: "tg", continent: "África" },
  { name: "Sierra Leona",         code: "sl", continent: "África" },
  { name: "Liberia",              code: "lr", continent: "África" },
  { name: "Eritrea",              code: "er", continent: "África" },
  { name: "Sudán del Sur",        code: "ss", continent: "África" },
  { name: "República Centroafricana", code: "cf", continent: "África" },
  { name: "Guinea Ecuatorial",    code: "gq", continent: "África" },
  { name: "Gabón",                code: "ga", continent: "África" },
  { name: "Botsuana",             code: "bw", continent: "África" },
  { name: "Namibia",              code: "na", continent: "África" },
  { name: "Lesoto",               code: "ls", continent: "África" },
  { name: "Suazilandia",          code: "sz", continent: "África" },
  { name: "Malaui",               code: "mw", continent: "África" },
  { name: "Mauritius",            code: "mu", continent: "África" },
  { name: "Cabo Verde",           code: "cv", continent: "África" },
  { name: "Yibuti",               code: "dj", continent: "África" },
  { name: "Comoras",              code: "km", continent: "África" },

  // Oceanía
  { name: "Australia",            code: "au", continent: "Oceanía" },
  { name: "Nueva Zelanda",        code: "nz", continent: "Oceanía" },
  { name: "Papúa Nueva Guinea",   code: "pg", continent: "Oceanía" },
  { name: "Fiji",                 code: "fj", continent: "Oceanía" },
  { name: "Vanuatu",              code: "vu", continent: "Oceanía" },
  { name: "Samoa",                code: "ws", continent: "Oceanía" },
  { name: "Tonga",                code: "to", continent: "Oceanía" },
  { name: "Kiribati",             code: "ki", continent: "Oceanía" },
  { name: "Micronesia",           code: "fm", continent: "Oceanía" },
  { name: "Palaos",               code: "pw", continent: "Oceanía" },
  { name: "Islas Marshall",       code: "mh", continent: "Oceanía" },
  { name: "Nauru",                code: "nr", continent: "Oceanía" },
  { name: "Tuvalu",               code: "tv", continent: "Oceanía" },
];

// =============================================
//  ESTADO
// =============================================
let state = {
  questions:   [],
  current:     0,
  score:       0,
  streak:      0,
  bestStreak:  0,
  correct:     0,
  wrong:       0,
  rounds:      15,
  numOptions:  4,
  answered:    false,
};

// =============================================
//  DOM
// =============================================
const $ = id => document.getElementById(id);
const screens = {
  home:   $('screen-home'),
  game:   $('screen-game'),
  result: $('screen-result'),
};

// =============================================
//  NAVEGACIÓN
// =============================================
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

// =============================================
//  INICIO
// =============================================
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.rounds     = parseInt(btn.dataset.rounds);
    state.numOptions = parseInt(btn.dataset.options);
  });
});

$('btnStart').addEventListener('click', startGame);
$('btnRestart').addEventListener('click', startGame);
$('btnHome').addEventListener('click', () => showScreen('home'));
$('btnNext').addEventListener('click', nextQuestion);

// =============================================
//  TEMA
// =============================================
$('themeToggle').addEventListener('click', () => {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
});

// =============================================
//  LÓGICA DEL JUEGO
// =============================================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startGame() {
  state.questions  = shuffle(COUNTRIES).slice(0, state.rounds);
  state.current    = 0;
  state.score      = 0;
  state.streak     = 0;
  state.bestStreak = 0;
  state.correct    = 0;
  state.wrong      = 0;
  state.answered   = false;

  updateHUD();
  showScreen('game');
  renderQuestion();
}

function flagUrl(code) {
  return `https://flagcdn.com/w320/${code}.png`;
}

function getOptions(correct) {
  const others = shuffle(COUNTRIES.filter(c => c.code !== correct.code))
    .slice(0, state.numOptions - 1);
  return shuffle([correct, ...others]);
}

function renderQuestion() {
  state.answered = false;
  const q = state.questions[state.current];

  // Bandera
  const img = $('flagImg');
  img.style.opacity = '0';
  img.src = flagUrl(q.code);
  img.onload = () => { img.style.opacity = '1'; };
  img.onerror = () => {
    img.style.opacity = '1';
    img.alt = '🏳';
  };

  $('continentTag').textContent = q.continent;

  // Progreso
  const pct = (state.current / state.rounds) * 100;
  $('progressFill').style.width = pct + '%';
  $('progressText').textContent = `${state.current + 1} / ${state.rounds}`;

  // Opciones
  const grid = $('optionsGrid');
  grid.innerHTML = '';
  const opts = getOptions(q);

  // Columnas según cantidad de opciones
  grid.style.gridTemplateColumns = state.numOptions <= 4 ? '1fr 1fr' : '1fr 1fr 1fr';

  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.textContent = opt.name;
    btn.addEventListener('click', () => checkAnswer(btn, opt, q));
    grid.appendChild(btn);
  });

  // Ocultar feedback
  const fb = $('feedbackBar');
  fb.classList.remove('show');
  $('feedbackMsg').textContent = '';
  $('feedbackMsg').className = 'feedback-msg';
}

function checkAnswer(btn, selected, correct) {
  if (state.answered) return;
  state.answered = true;

  const isCorrect = selected.code === correct.code;

  // Marcar botones
  document.querySelectorAll('.opt-btn').forEach(b => {
    b.disabled = true;
    if (b.textContent === correct.name) b.classList.add('correct');
  });

  if (isCorrect) {
    state.score  += 10 + state.streak * 2; // bonus por racha
    state.streak++;
    state.correct++;
    if (state.streak > state.bestStreak) state.bestStreak = state.streak;
    showFeedback(true, state.streak >= 3 ? `¡Correcto! 🔥 Racha ×${state.streak}` : '¡Correcto!');
  } else {
    btn.classList.add('wrong');
    // Shake flag
    const wrap = $('flagWrap');
    wrap.classList.add('shake');
    wrap.addEventListener('animationend', () => wrap.classList.remove('shake'), { once: true });
    state.streak = 0;
    state.wrong++;
    showFeedback(false, `Era: ${correct.name}`);
  }

  updateHUD();

  // Auto-avanzar si es la última pregunta
  const fb = $('feedbackBar');
  if (state.current + 1 >= state.rounds) {
    $('btnNext').textContent = 'Ver resultado →';
  } else {
    $('btnNext').textContent = 'Siguiente →';
  }
}

function showFeedback(ok, msg) {
  const fb  = $('feedbackBar');
  const txt = $('feedbackMsg');
  txt.textContent = msg;
  txt.className = 'feedback-msg ' + (ok ? 'ok' : 'err');
  fb.classList.add('show');
}

function nextQuestion() {
  state.current++;
  if (state.current >= state.rounds) {
    showResult();
  } else {
    renderQuestion();
  }
}

function updateHUD() {
  $('hudScore').textContent  = state.score;
  $('hudStreak').textContent = state.streak;
}

// =============================================
//  RESULTADO
// =============================================
function showResult() {
  const pct = Math.round((state.correct / state.rounds) * 100);

  let emoji, title, msg;
  if (pct === 100) {
    emoji = '🏆'; title = '¡Perfecto!';
    msg = 'Conoces cada rincón del planeta. Impresionante.';
  } else if (pct >= 80) {
    emoji = '🌟'; title = '¡Excelente!';
    msg = 'Tienes un dominio de la geografía mundial muy sólido.';
  } else if (pct >= 60) {
    emoji = '😎'; title = '¡Muy bien!';
    msg = 'Buen conocimiento del mundo. Sigue practicando.';
  } else if (pct >= 40) {
    emoji = '🌍'; title = 'Nada mal';
    msg = 'El mundo es grande, ¡pero ya vas conociendo más!';
  } else {
    emoji = '📚'; title = 'A practicar';
    msg = 'Cada intento te hace más geógrafo. ¡Vuelve a intentarlo!';
  }

  $('resultEmoji').textContent = emoji;
  $('resultTitle').textContent = title;
  $('resultScore').textContent = `${state.correct} / ${state.rounds} correctas (${pct}%)`;
  $('resultMsg').textContent   = msg;
  $('statCorrect').textContent  = state.correct;
  $('statWrong').textContent    = state.wrong;
  $('statBestStreak').textContent = state.bestStreak;

  $('progressFill').style.width = '100%';
  $('progressText').textContent = `${state.rounds} / ${state.rounds}`;
  $('hudScore').textContent = state.score;

  showScreen('result');
}
