# README de Estrutura — Bruna Campos (LP)

> Leia isto ANTES de criar ou editar qualquer página `.html` neste projeto.
> Template pronto para copiar: [`_nav-footer-template.html`](./_nav-footer-template.html).

---

## 1. Mapa de páginas

| Arquivo | Pasta | Profundidade (`{{BASE}}`) | `noindex`? |
|---|---|---|---|
| `index.html` | raiz | `` (vazio) | Não — página principal indexável |
| `termos-e-condicoes.html` | raiz | `` (vazio) | Sim — `noindex, follow` |
| `politica-de-privacidade.html` | raiz | `` (vazio) | Sim — `noindex, follow` |

Todas as páginas atuais estão na raiz — nenhuma subpasta (`blog/`, etc.) existe ainda.
Se uma for criada no futuro, ela usa `{{BASE}} = "../"`.

---

## 2. Template canônico

Toda página nova (ou correção de página existente) parte de
[`_nav-footer-template.html`](./_nav-footer-template.html) — nunca copie o nav/footer de uma
página aleatória, que pode estar desatualizada.

**Placeholder `{{BASE}}`:**
- Página na **raiz** → substituir `{{BASE}}` por vazio (`""`).
  Ex.: `src="{{BASE}}Assets/..."` vira `src="Assets/..."`.
- Página em **subpasta** → substituir `{{BASE}}` por `../`.

**Âncoras internas (`#servicos`, `#faq` etc.):**
- No `index.html` (a própria página tem as seções) → `href="#servicos"` (sem `/` na frente).
- Em qualquer outra página → `href="{{BASE}}/#servicos"` (com `/` — volta pra home E rola até a seção).
- O template já vem escrito assim; ao gerar o `index.html` a partir dele, é preciso trocar
  `{{BASE}}/#` por `#` nas âncoras de nav/footer/drawer (única edição manual extra no index).

---

## 3. Itens obrigatórios em TODA página do site

- [ ] `<meta charset="utf-8">` + `<meta name="viewport">`
- [ ] `<link rel="icon" href="{{BASE}}Assets/favicon-bruna-campos-psiquiatria-rj.ico">`
- [ ] `<link rel="stylesheet" href="{{BASE}}style.css">` + `cookie-banner.css`
- [ ] Header/nav idêntico ao template (logo com `width`+`height`, 5 links, botão Agendar, hamburger)
- [ ] Footer idêntico ao template (4 colunas + créditos)
- [ ] Drawer mobile idêntico ao template
- [ ] Banner de cookie LGPD + modal de preferências + botão flutuante `#ck-prefs-btn`
- [ ] Scripts na ordem: `script.js` → `cookie-banner.js` → robô AG5 (`control-blog.ag5agencia.site/r.js`, `data-c="bruna-campos"`)
- [ ] Páginas que não são o `index` levam `<meta name="robots" content="noindex, follow">` e `<link rel="canonical">` **não é necessário** nelas (schema/OG só na home)

---

## 4. Dados fixos usados no nav/footer (não inventar, copiar exatamente)

- **WhatsApp**: `https://wa.me/5521975906877?text=...` (mensagem varia por CTA, sempre começando com "Olá, vim através do site e gostaria de...")
- **Google Maps (perfil)**: `https://maps.google.com/?cid=4122219039553274142` — URL canônica CID, **nunca** `share.google/...`
- **Instagram**: `https://www.instagram.com/dra_brunacampos/`
- **CRM**: 52.0123363-7 · **CNPJ**: 47.063.624/0001-11
- **Endereço**: Avenida das Américas, 18.000 — sala 605A, Recreio dos Bandeirantes, Rio de Janeiro/RJ

---

## 5. Armadilhas conhecidas deste projeto

- **Footer desatualizado nas páginas legais (resolvido em 17/08/2026)**: `termos-e-condicoes.html`
  e `politica-de-privacidade.html` tinham um footer antigo (ícones SVG diferentes, link
  `share.google` em vez do CID, coluna "Serviços" com "Agendar consulta" já removido do index,
  `footer__legal` na posição errada). Causa: o footer do `index.html` foi refinado em sessões
  posteriores e nunca foi replicado pras páginas secundárias. Sempre rodar a skill de sincronização
  depois de qualquer ajuste visual no footer da home.
- **`width`/`height` faltando nas logos**: o CLS (Core Web Vitals) depende disso. Toda `<img>` de
  logo no header/footer/drawer precisa dos dois atributos, não só `height`.
- **Link do Google Maps**: sempre usar a URL `maps.google.com/?cid=...`, nunca o link curto
  `share.google/...` (opaco pra SEO/schema).
- **`href` das âncoras**: nas páginas legais, todo link de seção do site usa `/#secao` (com barra),
  porque a página não tem essas seções — precisa voltar pra home primeiro. Só o `index.html` usa
  `#secao` puro.

---

## 6. Como verificar depois de editar

1. Abrir a página no navegador (desktop e mobile/DevTools).
2. Header aparece com blur/pill, logo nítida, hamburger no mobile alinhado à direita.
3. Clicar no hamburger → drawer abre com animação, fecha ao clicar fora ou no X.
4. Rolar até o footer → 4 colunas alinhadas, ícones coloridos (Google/Maps/WhatsApp), créditos com
   toggle de cookie funcionando.
5. Banner de cookie aparece na primeira visita; `Personalizar` abre o modal com os 5 toggles.
6. Checar console do navegador: zero 404 em CSS/JS/imagens.
7. Comparar visualmente com o `index.html` — devem ser indistinguíveis fora do conteúdo central.

---

> Este README descreve a ESTRUTURA; não substitui o template. Template = código pra colar.
> README = regras pra não errar de novo. Nenhum dos dois vai pro ar (pasta `Docs/` bloqueada no `robots.txt`).
