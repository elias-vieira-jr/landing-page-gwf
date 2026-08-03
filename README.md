# Landing Page GWF Consultoria e Contabilidade

Landing page institucional da **GWF Consultoria e Contabilidade**, escritório de contabilidade em Rondonópolis (MT) com foco em agronegócio e empresas do estado. Site estático (HTML, CSS e JavaScript puro, sem build tools ou dependências de pacote).

## Seções

- **Hero** — chamada principal com CTA para WhatsApp e para a seção de serviços.
- **Diferencial** — pontos fortes do escritório no atendimento ao produtor rural (sazonalidade fiscal, LCDPR/Funrural, compliance, sucessão patrimonial).
- **Serviços** — cards de Fiscal, Contábil, Trabalhista, Produtor Rural e Legalização de Empresas.
- **Sobre** — apresentação do escritório e contadores animados (anos de experiência, clientes, especialidades).
- **Contato** — dados de contato, redes sociais, mapa incorporado do Google Maps e formulário de contato.
- **Portais** — atalhos para o Portal do Empregado e Portal do Cliente (Onvio).

## Estrutura do projeto

```
├── index.html      # marcação e conteúdo das seções
├── style.css        # estilos, layout responsivo e animações
├── script.js         # menu mobile, animações de reveal e contadores
├── images/            # logos, fotos e favicon
└── fonts/               # fontes locais (se houver)
```

## Tecnologias

- HTML5 semântico
- CSS3 (sem pré-processador)
- JavaScript vanilla (Intersection Observer para animações de reveal e contadores)
- [Font Awesome](https://fontawesome.com/) (via CDN) para ícones

## Como rodar localmente

Por ser um site 100% estático, basta abrir o `index.html` diretamente no navegador ou servir a pasta com qualquer servidor HTTP simples, por exemplo:

```bash
npx serve .
```

ou

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000` (ou a porta indicada).

## Deploy

Como não há etapa de build, o conteúdo da pasta pode ser publicado diretamente em qualquer serviço de hospedagem estática (GitHub Pages, Netlify, Vercel, etc.).
