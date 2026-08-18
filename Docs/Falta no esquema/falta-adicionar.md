# 📋 Falta Adicionar no Schema
**Empresa:** Psiquiatra Recreio dos Bandeirantes RJ - Bruna Campos | Psiquiatria | Clínica Geral
**Data de geração:** 17/08/2026

---

## 🔴 CRÍTICOS — Impactam SEO diretamente

- [ ] `email` — não encontrado no site nem no formulário de coleta ("não informado" no Dossiê-Site.md)
- [ ] `address.streetAddress` — divergência de numeração entre fontes: formulário/site usam "18.000", Pleper/GBP usa "8.000". Confirmar o número correto com a cliente antes de validar no Rich Results Test (mantive "18.000" por ser o valor do site e do formulário oficial).
- [ ] **Segunda unidade (Freguesia)** — cliente adicionou em 17/08/2026 um segundo endereço (Estrada de Jacarepaguá, 7.655, Freguesia, CEP 22755-155), já refletido no HTML (seção Localização) e no `llms.txt`. O `address`/`geo` do JSON-LD `MedicalClinic` continua apontando só para o Recreio (endereço vinculado ao CID/Place ID do Google Business Profile atual). Se a Freguesia também tiver perfil GBP próprio, o correto é criar uma segunda entidade `MedicalClinic` no `@graph` com seu próprio `@id`, `address`, `geo` e `identifier`; se for a mesma entidade/CNPJ atendendo em 2 endereços, avaliar usar `location` (array de `Place`) em vez de `address` único. Decisão pendente de confirmação com a cliente/agência.

## 🟡 IMPORTANTES

- [ ] `aggregateRating` — perfil Google Business sem avaliações (0 avaliações, confirmado no Pleper e no formulário). Omitido corretamente do schema. Revisar quando houver avaliações reais.
- [ ] `sameAs` Facebook — não informado
- [ ] `sameAs` LinkedIn — não aplicável (perfil pessoa física/clínica sem LinkedIn)
- [ ] `CNES` / `Alvará sanitário` — não informados no dossiê; não fazem parte do schema padrão, mas ficam registrados aqui para referência caso a cliente forneça depois

## 🔵 COMPLEMENTARES

- [ ] `paymentAccepted` — formas de pagamento não listadas no site (sabe-se apenas que não aceita convênio)
- [ ] `datePublished` / `dateModified` do `WebPage` — datas de publicação/atualização da LP não definidas ainda (definir no deploy)

## 🟢 FAQ

- [x] Seção FAQ presente na LP (`#faq`) — schema `FAQPage` já implementado com as 4 perguntas visíveis no site

---

## ✅ Resolvidos Automaticamente

- [x] `identifier.Google CID` — `4122219039553274142`
- [x] `identifier.Google Place ID` — `ChIJ6c8kyandmwARHsHsQmAQNTk`
- [x] `hasMap` + `sameAs[0]` — URL canônica `https://maps.google.com/?cid=4122219039553274142` aplicada (substituiu o link opaco `share.google/...`)
- [x] `geo.latitude` / `geo.longitude` — `-23.0086414 / -43.4426752`, extraídas do Pleper (mais precisas que o iframe do Maps)
- [x] `name` — Nome oficial do Google Business Profile: "Clínica de Psiquiatria e Clínica Geral no Recreio - Dra. Bruna Campos"
- [x] `alternateName` — Fórmula AG5 (ETAPA 1.5): "Psiquiatra Recreio dos Bandeirantes RJ - Bruna Campos | Psiquiatria | Clínica Geral" — aplicada também em `WebSite.name` e `OfferCatalog.name`
- [x] `legalName` — "Clínica Médica Bruna Rodrigues LTDA"
- [x] `areaServed` — Rio de Janeiro (cidade) + 8 bairros de abrangência (Recreio dos Bandeirantes, Vargem Grande, Vargem Pequena, Campo Grande, Barra da Tijuca, Freguesia, Jacarepaguá, Anil) — lista real do formulário, não gerada por proximidade genérica
- [x] `foundingDate` — `2022-07-07` (07/07/2022, conforme formulário)
- [x] `founder` — Dra. Bruna Campos, CRM 52.0123363-7, com bio e Instagram pessoal
- [x] `hasOfferCatalog` — 6 serviços reais extraídos do formulário/site (Psiquiatria, Clínica Geral e Psicanálise × presencial/telemedicina) — as 2 opções "domiciliar" foram removidas em 17/08/2026 a pedido da cliente (atendimento domiciliar passou a ser exceção particular, sem divulgação no site)
- [x] `openingHoursSpecification` — atualizado em 17/08/2026 de sexta-feira para Quinta-feira 8h–18h · Sábado 8h–16h
- [x] `logo` / `image` — URLs das imagens reais do site
- [x] `url` — domínio padrão AG5 aplicado em todo o site: `https://brunacampos.ag5agencia.site/` (schema, OG, Twitter, canonical, robots.txt, sitemap.xml, llms.txt)

---

📌 **Após preencher cada item:** remover o `[ ]`, substituir o placeholder no Schema e revalidar em https://validator.schema.org/
📌 **NAP** deve ser idêntico ao Google Business Profile após edição — atenção especial à divergência de numeração do endereço (18.000 vs 8.000) listada nos críticos.
