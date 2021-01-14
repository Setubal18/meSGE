# Minha Escola SGE

## Sobre

Projeto com proposito de criar uma MVP (Mínimo Produto Viavel) de uma SGE (Sistema de gestão escolar)

[DEMO](https://me-sge.vercel.app/auth)

# Como entrar?

Para entrar como `admin` basta no campo `login` colocar a palavra `admin`.

Para logar como uma escola é necessario cadastrar primeiro a escola no `admin` depois utilizar o ´nome´ da escola ou do responsável, diretor(a) ou reitor(a) no campo de `login` e no campo `matrícula` adicione a matrícula da sua escola.

## O'que utiliza?

### Core

- [Angular 10 ](https://angular.io/) <i>versão 10.0.8</i>
- [IONIC 4 ](https://ionicframework.com/) <i>versão 6.12.3</i>

### Libs Externas

> A lista de dependências abaixo não leva em consideração pacotes essenciais para o workflow do Angular, como por exemplo, os que possuam prefixos `@angular` e `@types`, including `rxjs`, `tslib` e `zone.js`

<p>Até o momento sem utilização de libs externas 😎</p>

## TO-DO

- [x] CRUD Escolas
- [x] CRUD Turmas
- [x] Login
- [x] CRUD Turmas (logado como escola)
- [ ] Testes
- [ ] CRUD Matérias

## Comandos

### Build

Para utilizar executar localmente em modo desenvolvimento utilize `ionic serve`.

Execute `ionic build` para buildar o projeto. Os arquivos de saída da build serão armazenados no diretório `dist/`. Use a flag `--prod` para habilitar o modo `production`.

Comandos para buildar APK `ionic build` para gerar a build depois `ionic cap add` usando `android || ios` para criar os projetos <i>android</i> e <i>ios</i> respectivamente.
Use `ionic cap copy` para copiar as builds para o projeto nativo. Caso tenha feito atualizações utilize o comando `ionic cap sync`.

### Encapsulamento de código

Execute `ionic generate component component-name` para gerar um novo componente. Você também pode usar `ionic generate directive|pipe|service|class|guard|interface|enum|module`.

## Commits

| Tipo de commit | Descrição                | Release                                                                                                                     |
| -------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `feat`         | Uma nova feature         | `minor`                                                                                                                     |
| `fix`          | Correção de bugs         | `patch`                                                                                                                     |
| `docs`         | Documentação             | `patch` se o `escopo` for `readme`                                                                                          |
| `lint`         | Formatação de código     | Alterações que não afetam o significado do código (espaços em branco, identação, ponto-e-virgula, etc)                      |
| `style`        | Estilização de Página    | Alterações que afentam estilização da página não necessariamente uma funcionalidade nova (Aquivos styl,css, animações )     |
| `refactor`     | Refatoração de código    | Alteração no código que não corrige um bug, e nem adiciona uma feature                                                      |
| `perf`         | Melhorias de performance | Alteração no código que melhora a performance                                                                               |
| `build`        | Builds                   | Alterações que afetam o sistema de build, ou dependências externas (escopos exemplares: gulp, broccoli, yarn, npm, webpack) |
| `ci`           | Integração continua (CI) | Alteração aos arquivos de configuração e scripts do CI (escopos exemplares: travis, circleci, browserstack, saucelabs)      |
| `chore`        | Chores                   | Outras mudanças que não modificam os arquivos da aplicação ou dos testes                                                    |
| `revert`       | Reversão de commit       | Reversão a um commit anterior                                                                                               |
