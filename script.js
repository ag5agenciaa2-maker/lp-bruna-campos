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
    revelarNoScroll();
    contadores();
    acordeaoFaq();
    formulario();
  });

  /* ---------- header: encolhe e ganha profundidade ao rolar ---------- */
  function headerScroll() {
    const header = document.getElementById("header");
    if (!header) return;
    const aplicar = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
    aplicar();
    window.addEventListener("scroll", aplicar, { passive: true });
  }

  /* ---------- menu mobile ---------- */
  function menuMobile() {
    const btn = document.querySelector(".nav-toggle");
    const nav = document.getElementById("nav");
    if (!btn || !nav) return;
    btn.addEventListener("click", () => {
      const aberto = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(aberto));
    });
    nav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      }
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

  /* ---------- acordeão do FAQ ---------- */
  function acordeaoFaq() {
    const itens = Array.from(document.querySelectorAll(".faq__item"));
    const ajustar = (item) => {
      const painel = item.querySelector(".faq__resposta");
      const aberto = item.dataset.aberto === "true";
      painel.style.maxHeight = aberto ? painel.scrollHeight + "px" : "0px";
    };
    itens.forEach((item) => {
      const btn = item.querySelector(".faq__btn");
      ajustar(item);
      btn.addEventListener("click", () => {
        const aberto = item.dataset.aberto === "true";
        itens.forEach((outro) => {
          outro.dataset.aberto = "false";
          outro.querySelector(".faq__btn").setAttribute("aria-expanded", "false");
          ajustar(outro);
        });
        if (!aberto) {
          item.dataset.aberto = "true";
          btn.setAttribute("aria-expanded", "true");
          ajustar(item);
        }
      });
    });
    window.addEventListener("resize", () => itens.forEach(ajustar));
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

      const texto =
        `Olá, Dra. Bruna! Meu nome é ${nome} (${telBruto}).\n` +
        `Gostaria de agendar: ${servico}.` +
        (msg ? `\n${msg}` : "");

      aviso.textContent = "Abrindo o WhatsApp com a sua mensagem…";
      aviso.dataset.ok = "true";
      window.open(`https://wa.me/${WA}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
      form.reset();
    });
  }
})();
