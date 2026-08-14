# Catálogo de Imagens — Bruna Campos (Clínica Geral, Psiquiatria e Psicanálise)

> Documento gerado automaticamente. Descreve todas as imagens da pasta `Assets/` para referência, acessibilidade e SEO.
> Atualizado em: 14/08/2026

---

## Resumo

| Arquivo atual | Novo nome SEO | Uso atual | Uso recomendado |
|---|---|---|---|
| `favicon-bruna-campos.ico` | `favicon-bruna-campos-psiquiatria-rj.ico` | Favicon (aba do navegador) + monograma decorativo na seção Sobre | Favicon / selo decorativo em fundo claro |
| `logo-mobile-bruna-campos.webp` | `logo-bruna-campos-psiquiatria-psicanalise.webp` | Logo no header (navbar) | Header / navbar / cabeçalho de e-mail |
| `logo-desktop-bruna-campos.webp` | `logo-bruna-campos-clinica-geral-psiquiatria-rodape.webp` | Logo no rodapé | Rodapé / materiais sobre fundo escuro |
| `bruna-campos-psiquiatria,clínica-geral-psicanalise-recreio-dos-banderantes.webp` | `dra-bruna-campos-medica-psiquiatra-retrato.webp` | Foto na seção Sobre/Credenciais | Sobre, OG Image, depoimentos |

---

## Descrições Detalhadas

### `favicon-bruna-campos.ico`

**Descrição:** Selo circular na paleta rosé da marca (`#D1B9B4`), com anel de borda mais escuro. No topo do círculo, em caixa alta rastreada, o texto "BRUNA CAMPOS"; na parte inferior, contornando a borda, "CLÍNICA GERAL, PSIQUIATRIA E PSICANÁLISE", separados por pequenos pontos decorativos. No centro, um monograma caligráfico fino "BC" entrelaçado, em traço branco/off-white, ao lado de uma pequena silhueta estilizada que lembra um cérebro/miolo, com duas borboletas brancas delicadas sobrepostas — reforçando o motivo de transformação da identidade visual. Fundo sólido rosé, sem textura ou gradiente. Estilo minimalista, elegante e feminino, coerente com o branding "editorial delicado" do projeto.

**Contexto de uso atual:** Favicon do site (`<link rel="icon">`) e monograma decorativo flutuante na seção "Sobre a médica" (classe `.mono`), sobreposto ao canto do retrato da Dra. Bruna.

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Favicon — o desenho é um selo fechado e reconhecível mesmo reduzido a 16–32px, ideal para aba do navegador e atalhos.
- 🥈 **Uso alternativo 1:** Selo decorativo em qualquer fundo claro (como já é usado na seção Sobre) — o fundo rosé sólido garante contraste e legibilidade em qualquer tamanho, diferente das logos wordmark claras.
- 🥉 **Uso alternativo 2:** Ícone de aplicativo/atalho (apple-touch-icon), carimbo em PDFs de receituário ou materiais impressos, marca d'água discreta.
- ⚠️ **Evitar usar em:** Header/navbar em tamanho pequeno (abaixo de ~56px) — o texto perimetral fino ("Clínica Geral, Psiquiatria e Psicanálise") fica ilegível; para a navbar, prefira o wordmark horizontal (`logo-mobile`).

**Novo nome sugerido (SEO):** `favicon-bruna-campos-psiquiatria-rj.ico`

**Alt text sugerido:** "Monograma Bruna Campos — Clínica Geral, Psiquiatria e Psicanálise no Rio de Janeiro"

---

### `logo-mobile-bruna-campos.webp`

**Descrição:** Wordmark horizontal (proporção ~3,3:1, 200×60px), fundo transparente. À esquerda, o monograma caligráfico fino "BC" entrelaçado, na mesma cor rosé-clara da paleta da marca. À direita, o nome "Bruna Campos" em tipografia script/caligráfica delicada, com o subtítulo em caixa alta rastreada "CLÍNICA GERAL, PSIQUIATRIA E PSICANÁLISE" logo abaixo, em fonte sans-serif fina. Toda a arte é em tom claro/rosé (`#D1B9B4`-ish), pensada originalmente para ser aplicada sobre fundo escuro — sobre fundo claro, exige filtro de cor para ficar legível (já implementado via CSS `filter` no header do site atual).

**Contexto de uso atual:** Logo principal do header/navbar (classe `.brand__logo`), com filtro CSS aplicado para escurecer a arte e garantir contraste sobre o fundo claro do site.

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Header/navbar — formato horizontal compacto se encaixa bem na barra de navegação, comunicando nome + especialidades de forma legível.
- 🥈 **Uso alternativo 1:** Assinatura de e-mail ou cabeçalho de documentos/receituário sobre fundo claro (mantendo o mesmo filtro de cor).
- 🥉 **Uso alternativo 2:** Rodapé de páginas internas ou stories/posts de Instagram com fundo escuro (sem necessidade de filtro, já que a arte original é clara).
- ⚠️ **Evitar usar em:** Favicon (não é quadrada, perde legibilidade drasticamente reduzida) e em qualquer fundo claro sem aplicar o filtro de cor — a arte "some" visualmente por ser toda em tom claro.

**Novo nome sugerido (SEO):** `logo-bruna-campos-psiquiatria-psicanalise.webp`

**Alt text sugerido:** "Bruna Campos — Clínica Geral, Psiquiatria e Psicanálise"

---

### `logo-desktop-bruna-campos.webp`

**Descrição:** Mesma composição visual do `logo-mobile` (monograma "BC" + wordmark "Bruna Campos" + subtítulo "Clínica Geral, Psiquiatria e Psicanálise"), porém em resolução maior (400×120px) e com espaçamento levemente distinto, otimizada para exibição em tamanhos maiores sem perda de nitidez. Também em tom claro/rosé, transparente, pensada para fundo escuro.

**Contexto de uso atual:** Logo do rodapé (classe `.footer__logo`), sobre o fundo marrom escuro (`--marrom: #4A3A2C`) do footer — combinação em que a arte clara tem ótimo contraste sem necessidade de filtro.

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Rodapé — já em uso, com contraste ideal sobre o fundo escuro do footer.
- 🥈 **Uso alternativo 1:** Materiais impressos ou digitais com fundo escuro/rosé profundo (cartão de visita, capa de apresentação, slide institucional).
- 🥉 **Uso alternativo 2:** Tela de carregamento (splash screen) ou seção de destaque com fundo escuro, graças à resolução maior que suporta exibição em telas grandes.
- ⚠️ **Evitar usar em:** Qualquer fundo claro sem tratamento de cor, e em espaços muito pequenos (abaixo de ~180px de largura) onde o subtítulo perde legibilidade — nesse caso, usar apenas o monograma (favicon) isoladamente.

**Novo nome sugerido (SEO):** `logo-bruna-campos-clinica-geral-psiquiatria-rodape.webp`

**Alt text sugerido:** "Bruna Campos — Clínica Geral, Psiquiatria e Psicanálise"

---

### `bruna-campos-psiquiatria,clínica-geral-psicanalise-recreio-dos-banderantes.webp`

**Descrição:** Retrato/selfie da Dra. Bruna Campos, enquadramento vertical fechado no rosto e ombros, formato próximo de 1:1. Ela está de frente para a câmera, com leve sorriso e olhar direto para o objetivo, transmitindo simpatia e confiança. Cabelo castanho ondulado, comprido, solto sobre os ombros. Veste jaleco branco de médica, com estetoscópio preto visível ao redor do pescoço — reforçando a autoridade clínica. Ao fundo, ambiente de consultório/clínica com azulejos brancos e uma faixa decorativa azul-petróleo na parte superior da parede, sugerindo espaço de atendimento em saúde. Iluminação natural/branca, uniforme, sem sombras fortes. Estilo fotográfico casual-institucional (selfie), não um retrato profissional de estúdio.

**Contexto de uso atual:** Foto principal da seção "Sobre a médica" (classe `.retrato`), ao lado do texto de formação/credenciais (CRM, pós-graduação em Psiquiatria, Psicanálise).

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Seção Sobre/Credenciais — já em uso; é a única foto real da profissional disponível no projeto, ideal para gerar confiança junto ao bloco de credenciais.
- 🥈 **Uso alternativo 1:** OG Image / Twitter Card para compartilhamento em redes sociais — o rosto está bem visível e centralizado, boa opção de preview ao compartilhar o link do site.
- 🥉 **Uso alternativo 2:** Avatar de perfil em depoimentos futuros do Google, ou miniatura de autor em artigos de blog (quando a seção de blog for criada).
- ⚠️ **Evitar usar em:** Hero de abertura em tamanho grande (é uma selfie, não uma foto profissional de estúdio; ampliada demais pode perder qualidade) e em qualquer contexto que exija foto horizontal/paisagem, já que o enquadramento é vertical/quadrado.

**Novo nome sugerido (SEO):** `dra-bruna-campos-medica-psiquiatra-retrato.webp`

**Alt text sugerido:** "Dra. Bruna Campos, médica pós-graduada em Psiquiatria e psicanalista, atendimento em Clínica Geral, Psiquiatria e Psicanálise no Recreio dos Bandeirantes, Rio de Janeiro"

---

## Instruções de Renomeação

Lista dos comandos de renomeação a serem executados (apenas para referência — **aguardando confirmação do usuário antes de executar**):

```bash
mv "Assets/favicon-bruna-campos.ico" "Assets/favicon-bruna-campos-psiquiatria-rj.ico"
mv "Assets/logo-mobile-bruna-campos.webp" "Assets/logo-bruna-campos-psiquiatria-psicanalise.webp"
mv "Assets/logo-desktop-bruna-campos.webp" "Assets/logo-bruna-campos-clinica-geral-psiquiatria-rodape.webp"
mv "Assets/bruna-campos-psiquiatria,clínica-geral-psicanalise-recreio-dos-banderantes.webp" "Assets/dra-bruna-campos-medica-psiquiatra-retrato.webp"
```

Após renomear, atualizar as referências em `index.html`:
- `Assets/favicon-bruna-campos.ico` → `Assets/favicon-bruna-campos-psiquiatria-rj.ico` (2 ocorrências: `<link rel="icon">` e `.mono`)
- `Assets/logo-mobile-bruna-campos.webp` → `Assets/logo-bruna-campos-psiquiatria-psicanalise.webp` (1 ocorrência: `.brand__logo`)
- `Assets/logo-desktop-bruna-campos.webp` → `Assets/logo-bruna-campos-clinica-geral-psiquiatria-rodape.webp` (1 ocorrência: `.footer__logo`)
- `Assets/bruna-campos-psiquiatria,clínica-geral-psicanalise-recreio-dos-banderantes.webp` → `Assets/dra-bruna-campos-medica-psiquiatra-retrato.webp` (1 ocorrência: `.retrato`)
