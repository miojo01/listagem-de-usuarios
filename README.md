# 👥 Sistema de Listagem e Busca de Usuários

Este projeto é um exercício prático de desenvolvimento web focado na manipulação dinâmica do DOM (Document Object Model) usando JavaScript puro, estilização avançada com CSS3 e conceitos de responsividade.

## 🚀 Funcionalidades

* **Renderização Dinâmica**: Geração automática de elementos `<li>` a partir de um array de dados.
* **Busca Inteligente**: Sistema de filtro que ignora letras maiúsculas/minúsculas e permite buscas por partes do nome usando `.includes()`.
* **Interface Responsiva**: Layout adaptável para dispositivos móveis utilizando Media Queries e cálculos dinâmicos com `calc()`.
* **Feedback ao Usuário**: Tratamento de estados vazios com a exibição da mensagem "Nenhum nome encontrado".
* **Efeitos Visuais**: Transições suaves (`transition`), sombras interativas e efeitos de hover nos botões.

## 🛠️ Tecnologias Utilizadas

* **HTML5**: Estrutura semântica para a interface.
* **CSS3**: 
    * Flexbox para alinhamento e layout responsivo.
    * Google Fonts (Lexend Deca e Roboto).
    * Responsividade com `@media (max-width: 600px)`.
* **JavaScript (ES6+)**:
    * Métodos de array: `.forEach()` para listagem inicial.
    * Estruturas de repetição: `for` clássico para lógica de busca.
    * Manipulação de DOM: `createElement`, `appendChild` e `innerHTML`.

## 📱 Responsividade Implementada

O projeto utiliza um breakpoint de `600px` para garantir uma boa experiência em smartphones:
* O campo de busca ocupa a largura total no topo para facilitar a digitação.
* Os botões "Pesquisar" e "Carregar" dividem a linha inferior lado a lado usando `width: calc(50% - 5px)`.
* O container ajusta sua largura para `90%` da tela, otimizando o espaço em visores pequenos.

## 💡 Aprendizados de Lógica

Como estudante de **Análise e Desenvolvimento de Sistemas**, este exercício consolidou conceitos fundamentais:
1.  **Tratamento de Strings**: Uso de `.toLowerCase()` para garantir que a busca não seja sensível a maiúsculas.
2.  **Flags (Bandeiras)**: Implementação de lógica de controle com a variável `userEncontrado` para gerenciar mensagens de erro.
3.  **Cálculos em CSS**: Uso da função `calc()` para distribuir elementos de forma milimétrica em layouts flexíveis.

---

### Como rodar o projeto
1. Clone este repositório.
2. Abra o arquivo `index.html` em qualquer navegador.

---
Desenvolvido como parte dos estudos de **Desenvolvimento Fullstack**.