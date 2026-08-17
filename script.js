/* Bruna Campos — interações do site (JS vanilla ES6) */
(() => {
  "use strict";

  const WA = "5521975906877";
  const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // marca que o JS está ativo (estados iniciais das animações só existem com .js)
  document.documentElement.classList.add("js");

  document.addEventListener("DOMContentLoaded", () => {
    menuMobile();
    headerScroll();
    parallaxHero();
    lequeFotos();
    trilhaProcesso();
    revelarNoScroll();
    contadores();
    acordeaoFaq();
    formulario();
  });

  /* ---------- processo: linha conectora anima ao entrar na tela ---------- */
  function trilhaProcesso() {
    const trilha = document.querySelector(".processo__trilha");
    if (!trilha) return;
    if (reduzido) { trilha.classList.add("is-vista"); return; }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          trilha.classList.add("is-vista");
          observer.unobserve(trilha);
        }
      });
    }, { threshold: 0.35 });
    observer.observe(trilha);
  }

  /* ---------- sobre: leque de fotos (carrossel 3D em baralho) ---------- */
  function lequeFotos() {
    const raiz = document.getElementById("sobre-leque");
    if (!raiz) return;

    const cartas = Array.from(raiz.querySelectorAll(".leque__carta"));
    const prev = raiz.querySelector(".leque__seta--prev");
    const next = raiz.querySelector(".leque__seta--next");
    const total = cartas.length;
    if (!total) return;

    let ativo = 0;
    let auto = null;

    const classes = ["is-prev2", "is-prev1", "is-ativa", "is-next1", "is-next2"];

    const render = () => {
      cartas.forEach((carta, i) => {
        classes.forEach((c) => carta.classList.remove(c));
        let delta = i - ativo;
        if (delta > total / 2) delta -= total;
        if (delta < -total / 2) delta += total;

        if (delta === 0) carta.classList.add("is-ativa");
        else if (delta === -1 || delta === total - 1) carta.classList.add("is-prev1");
        else if (delta === 1 || delta === -(total - 1)) carta.classList.add("is-next1");
        else if (delta === -2 || delta === total - 2) carta.classList.add("is-prev2");
        else if (delta === 2 || delta === -(total - 2)) carta.classList.add("is-next2");
      });
    };

    const ir = (indice) => {
      ativo = ((indice % total) + total) % total;
      render();
    };

    const reiniciarAuto = () => {
      if (reduzido) return;
      clearInterval(auto);
      auto = setInterval(() => ir(ativo + 1), 5000);
    };

    if (prev) prev.addEventListener("click", () => { ir(ativo - 1); reiniciarAuto(); });
    if (next) next.addEventListener("click", () => { ir(ativo + 1); reiniciarAuto(); });
    cartas.forEach((carta) => carta.addEventListener("click", () => {
      if (!carta.classList.contains("is-ativa")) { ir(Number(carta.dataset.carta)); reiniciarAuto(); }
    }));

    // swipe touch
    let xInicial = null;
    raiz.addEventListener("touchstart", (e) => { xInicial = e.touches[0].clientX; }, { passive: true });
    raiz.addEventListener("touchend", (e) => {
      if (xInicial === null) return;
      const dx = e.changedTouches[0].clientX - xInicial;
      if (Math.abs(dx) > 40) ir(dx > 0 ? ativo - 1 : ativo + 1);
      xInicial = null;
      reiniciarAuto();
    }, { passive: true });

    render();
    reiniciarAuto();
  }

  /* ---------- hero: parallax suave da foto ao rolar ---------- */
  function parallaxHero() {
    if (reduzido) return;
    const moldura = document.getElementById("hero-moldura");
    if (!moldura) return;
    const grande = window.matchMedia("(min-width: 769px)").matches;
    if (!grande) return;

    let ticking = false;
    const aplicar = () => {
      const deslocamento = Math.min(window.scrollY * 0.08, 40);
      moldura.style.setProperty("--parallax", `${deslocamento}px`);
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(aplicar);
        ticking = true;
      }
    }, { passive: true });
  }

  /* ---------- header: encolhe e ganha profundidade ao rolar ---------- */
  function headerScroll() {
    const header = document.getElementById("header");
    if (!header) return;
    const aplicar = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
    aplicar();
    window.addEventListener("scroll", aplicar, { passive: true });
  }

  /* ---------- menu mobile (drawer premium) ---------- */
  function menuMobile() {
    const btn = document.querySelector(".nav-toggle");
    const drawer = document.getElementById("drawer");
    const overlay = document.getElementById("drawer-overlay");
    const fechar = document.querySelector(".drawer__fechar");
    if (!btn || !drawer || !overlay) return;

    const abrir = () => {
      overlay.hidden = false;
      requestAnimationFrame(() => {
        overlay.classList.add("is-visible");
        drawer.classList.add("is-open");
      });
      drawer.setAttribute("aria-hidden", "false");
      btn.setAttribute("aria-expanded", "true");
      document.body.classList.add("drawer-open");
    };

    const fecharDrawer = () => {
      overlay.classList.remove("is-visible");
      drawer.classList.remove("is-open");
      drawer.setAttribute("aria-hidden", "true");
      btn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("drawer-open");
      setTimeout(() => { overlay.hidden = true; }, 420);
    };

    btn.addEventListener("click", abrir);
    overlay.addEventListener("click", fecharDrawer);
    if (fechar) fechar.addEventListener("click", fecharDrawer);
    drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", fecharDrawer));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("is-open")) fecharDrawer();
    });
  }

  /* ---------- revelar elementos no scroll ---------- */
  function revelarNoScroll() {
    const alvos = Array.from(document.querySelectorAll(".rv"));
    if (!alvos.length) return;
    const mostrarTodos = () => alvos.forEach((n) => n.classList.add("is-visible"));
    if (reduzido || !("IntersectionObserver" in window)) return mostrarTodos();

    const io = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada, i) => {
        if (!entrada.isIntersecting) return;
        setTimeout(() => entrada.target.classList.add("is-visible"), i * 100);
        io.unobserve(entrada.target);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

    alvos.forEach((n) => io.observe(n));
    // rede de segurança: nada fica invisível por falha de observer
    setTimeout(mostrarTodos, 4000);
  }

  /* ---------- contadores ---------- */
  function contadores() {
    const nums = Array.from(document.querySelectorAll("[data-count]"));
    if (!nums.length) return;
    if (reduzido || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        io.unobserve(entrada.target);
        animarNumero(entrada.target);
      });
    }, { threshold: 0.4 });
    nums.forEach((n) => io.observe(n));
  }

  function animarNumero(el) {
    const fim = parseInt(el.dataset.count, 10);
    if (!fim) return;
    const ini = fim > 1000 ? fim - 12 : 0;
    const dur = 1200;
    const t0 = performance.now();
    const passo = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(ini + (fim - ini) * eased));
      if (p < 1) requestAnimationFrame(passo);
    };
    requestAnimationFrame(passo);
  }

  /* ---------- faq: cartas pessoais (pergunta → carta assinada) ---------- */
  function acordeaoFaq() {
    const container = document.getElementById("faq-cartas");
    if (!container) return;
    const perguntas = Array.from(container.querySelectorAll(".carta-pergunta"));
    const cartas = Array.from(container.querySelectorAll(".carta"));
    if (!perguntas.length || !cartas.length) return;

    // no mobile a resposta começa fechada; no desktop a 1ª pergunta segue aberta
    const ehMobile = () => window.matchMedia("(max-width: 768px)").matches;
    if (ehMobile()) {
      perguntas.forEach((p) => { p.classList.remove("is-ativa"); p.setAttribute("aria-expanded", "false"); });
      cartas.forEach((c) => c.classList.remove("is-ativa"));
    }

    perguntas.forEach((btn) => {
      btn.addEventListener("click", () => {
        const alvo = btn.dataset.carta;
        const jaAtiva = btn.classList.contains("is-ativa");
        const fechar = ehMobile() && jaAtiva;

        perguntas.forEach((p) => {
          p.classList.toggle("is-ativa", !fechar && p === btn);
          p.setAttribute("aria-expanded", String(!fechar && p === btn));
        });
        cartas.forEach((c) => c.classList.toggle("is-ativa", !fechar && c.dataset.carta === alvo));
      });
    });
  }

  /* ---------- formulário → WhatsApp ---------- */
  function formulario() {
    const form = document.getElementById("form-agendamento");
    const aviso = document.getElementById("form-aviso");
    if (!form || !aviso) return;

    const erro = (msg, campo) => {
      aviso.textContent = msg;
      aviso.dataset.ok = "false";
      if (campo) campo.focus();
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = form.nome.value.trim();
      const telBruto = form.telefone.value.trim();
      const tel = telBruto.replace(/\D/g, "");
      const servico = form.servico.value;
      const msg = form.mensagem.value.trim();

      if (nome.length < 3) return erro("Por favor, informe seu nome completo.", form.nome);
      if (tel.length < 10 || tel.length > 13) return erro("Informe um telefone válido com DDD.", form.telefone);
      if (!servico) return erro("Escolha o tipo de atendimento desejado.", form.servico);

      // ▼ MENSAGEM OBRIGATÓRIA — padrão AG5 (estrutura fixa) ▼
      let texto = `Olá, me chamo ${nome}, vim através do site e gostaria de uma informação.\n`;
      texto += `\n- Telefone: ${telBruto}`;
      texto += `\n- Tipo de Atendimento: ${servico}`;
      if (msg) texto += `\n- Mensagem: ${msg}`;
      // ▲ ────────────────────────────────────────── ▲

      aviso.textContent = "Abrindo o WhatsApp com a sua mensagem…";
      aviso.dataset.ok = "true";
      window.open(`https://wa.me/${WA}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
      form.reset();
    });
  }
})();

/* ──────────────────────────────────────────────
   WHATSAPP PREMIUM — Balão flutuante (AG5 V4)

   Timeline:
     • t=0s  → usuário chega na 3ª seção (servicos) → botão verde aparece imediatamente
     • t=25s → balão sobe ("digitando..." por 2.5s → mensagem real)
     • t=40s → balão some automaticamente (visível por 15s)
     • t=45s → badge vermelho "1" aparece (5s depois de sumir) — só em nicho tranquilo

   Nicho médico (Psiquiatria/Clínica Geral/Psicanálise) = regulado (CFM) → Compliance Mode ativo:
   sem badge, sem "Online agora", sem bolinha verde de status.
─────────────────────────────────────────────── */
(function initWaPremium() {
  // ─── CONFIGURAÇÃO POR PROJETO ───
  const MODO_COMPLIANCE = true; // nicho médico (CFM) → SEM badge

  const bubble        = document.getElementById('wa-message-bubble');
  const typing        = document.getElementById('wa-typing');
  const realMessage   = document.getElementById('wa-real-message');
  const badge         = document.getElementById('wa-notification');
  const closeBtn      = document.getElementById('wa-close-btn');
  const mainBtn       = document.getElementById('wa-main-btn');
  const targetSection = document.getElementById('servicos');

  if (!bubble || !typing || !realMessage || !closeBtn || !mainBtn || !targetSection) return;

  const DELAY_BALAO            = 25000; // 25s após entrar na seção
  const DURATION_TYPING        = 2500;  // 2.5s de "digitando..."
  const DURATION_BALAO_VISIVEL = 15000; // 15s exibido depois de aparecer
  const DELAY_BADGE_APOS_SUMIR = 5000;  // 5s após sumir → badge

  let triggered = false;
  let autoHideTimer = null;
  let badgeTimer = null;
  let userClosed = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !triggered) {
        triggered = true;

        // Botão flutuante aparece imediatamente
        mainBtn.classList.add('visible');

        // t=25s → balão sobe
        setTimeout(() => {
          if (userClosed) return;
          bubble.classList.add('show');

          // 2.5s de "digitando..." → mensagem real (via classes utilitárias, sem inline style)
          setTimeout(() => {
            if (userClosed) return;
            typing.classList.add('is-hidden');
            realMessage.classList.add('is-visible');
            requestAnimationFrame(() => realMessage.classList.add('is-in'));
          }, DURATION_TYPING);

          // t=40s → balão some automaticamente
          autoHideTimer = setTimeout(() => {
            if (userClosed) return;
            bubble.classList.remove('show');

            // t=45s → badge "1" aparece (só se NÃO for Compliance)
            if (!MODO_COMPLIANCE && badge) {
              badgeTimer = setTimeout(() => {
                if (userClosed) return;
                badge.classList.add('show');
              }, DELAY_BADGE_APOS_SUMIR);
            }
          }, DURATION_BALAO_VISIVEL);
        }, DELAY_BALAO);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(targetSection);

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userClosed = true;
    bubble.classList.remove('show');
    if (autoHideTimer) clearTimeout(autoHideTimer);
    if (badgeTimer) clearTimeout(badgeTimer);
    // Badge pós-close: só em nicho tranquilo
    if (!MODO_COMPLIANCE && badge) {
      setTimeout(() => { badge.classList.add('show'); }, DELAY_BADGE_APOS_SUMIR);
    }
  });

  mainBtn.addEventListener('click', () => {
    bubble.classList.remove('show');
    if (badge) badge.classList.remove('show');
    if (autoHideTimer) clearTimeout(autoHideTimer);
    if (badgeTimer) clearTimeout(badgeTimer);
  });
})();
