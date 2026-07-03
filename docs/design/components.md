# Component Contracts (`@star/ui`)

> Maintained by: **designer** role\
> Last updated: 2026-07-03\
> Implementation-ready spec. **Rendered HTML output and SCSS must be byte-preserving**; the
> implementation is modernised per ADR-0006 (standalone + signal inputs + `@if`/`@for`).

## conventions

- Selector prefix `star-`. Keep existing selectors and `@Input` **names/types** exactly.
- Rewrite `@Input() x: T = d` → `x = input<T>(d)` (or `input.required<T>()` where the legacy selector
  required the attribute, e.g. `star-alert[item]`, `star-app-template[title]`, `star-icon[type]`).
- Read signals in templates as `x()`. Replace `*ngIf`→`@if`, `*ngFor`→`@for (… ; track …)`.
- Components import their dependencies directly (standalone); the barrel `@star/ui` re-exports all.

## atoms

### PrimaryButton — `star-primary-button`

- Input: `disabled = input(false)`.
- Template:
  ```html
  <button [disabled]="disabled()"><ng-content></ng-content></button>
  ```
- SCSS (preserve):
  ```scss
  button {
    background: #e87e00; border: none; border-radius: 4px; cursor: pointer;
    color: black; padding: 0.5rem 1rem;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    text-transform: uppercase; font-weight: bold;
    &:disabled { background: #533106; cursor: not-allowed; }
  }
  ```

### Icon — `star-icon[type]`

- Input: `type = input.required<'loading' | 'home' | 'code' | 'star'>()` (attribute required by
  selector; default `home` acceptable if kept non-required — preserve current default `home`).
- Template: four inline SVGs (`viewBox="0 0 24 24"`), one per type, gated with `@if (type() === '…')`.
  Preserve exact SVG `path` data for `loading`, `home`, `code`, `star` from the current source.
- SCSS: none.

### Paper — `star-paper`

- No inputs; content projection.
- Template: `<section><ng-content></ng-content></section>`.
- SCSS (preserve): `:host { --star-paper-bg: #001329; }` and `section { background: var(--star-paper-bg);
  color: white; margin: 1rem; padding: 1rem; border-radius: 8px; h2{margin-top:0} h4{margin-bottom:0} }`.

## molecules

### LoadingButton — `star-loading-button`

- Input: `loading = input(false)`.
- Template (preserve; composes PrimaryButton + Icon):
  ```html
  <star-primary-button [disabled]="loading()">
    <div class="flex">
      <div><ng-content></ng-content></div>
      @if (loading()) { <star-icon class="img-spin" type="loading"></star-icon> }
    </div>
  </star-primary-button>
  ```
- SCSS (preserve): `.flex { display:flex; gap:.4rem; }` + `.img-spin { width:15px;height:15px;
  animation:spin 2s linear infinite; transform-origin:center; }` + `@keyframes spin { 100%{ transform:rotate(360deg);} }`.
- Imports: `PrimaryButtonComponent`, `IconComponent`.

### Alert — `star-alert[item]`

- Input: `item = input.required<LogItem>()` (selector requires `[item]`; preserve default-safe access).
- Method: `getPrefix()` → `item().severity.toUpperCase()`.
- Template: `<div [ngClass]="item().severity"><span>{{ getPrefix() }}</span> {{ item().message }}</div>`.
- SCSS (preserve): `.error { color: rgb(250,179,174); background: rgb(24,6,5); padding:1rem; }`,
  `.info { color: rgb(166,213,250); background: rgb(3,14,24); padding:1rem; }`, `span { font-weight:bold; }`.
- Imports: `NgClass`.

### RatesTable — `star-rates-table`

- Input: `rates = input<[number, Rate][]>([])`.
- Template (preserve; `@for` with `track`):
  ```html
  <table>
    <thead><tr><th>Time</th><th>EUR / BTC</th></tr></thead>
    <tbody>
      @for (rate of rates(); track rate[0]) {
        <tr><td>{{ rate[0] | date: 'HH:mm:ss' }}</td><td>{{ rate[1] }}</td></tr>
      }
    </tbody>
  </table>
  ```
- SCSS (preserve): white text; `td{width:150px}`; first-child left / last-child right aligned; `th`
  bottom border `2px solid white`; non-last row `td` bottom border `1px solid white`.
- Imports: `DatePipe`.

## template

### AppTemplate — `star-app-template[title]`

- Input: `title = input('')` (selector requires `[title]`).
- Template (preserve): `.root` flex layout → fixed `nav` (home/code/star icon buttons) + `.root-column`
  (`header` with `<h1>{{ title() }}</h1>` + `main` with `<ng-content>`).
- SCSS (preserve): tokens `--star-default-bg:#002042`, `--star-card-bg:#001329`, `--star-primary:#e87e00`;
  `$star-spacing: 4px`; `sans-serif`; `.root{height:100vh;display:flex}`; orange `nav` with darkened
  hover buttons (`darken(#e87e00, 5%/10%)`); navy `header`. Preserve all spacing math verbatim.
- Imports: `IconComponent`.

## pipe

### BySeverity — `bySeverity`

- Pure pipe: `transform(value: LogItem[], severity: Severity)` → `value.filter(i => i.severity === severity)`.
- Standalone pipe; exported from `@star/ui`.

## export barrel (`libs/ui/src/index.ts`)

Re-export all components + the pipe so consumers (`demo`, `portfolio`) import from `@star/ui` exactly
as today. Consumers add the specific standalone components/pipe to their component `imports`.

## test expectations (parity — Phase 8)

One spec per item asserting: creation, input reflection (signal inputs set via
`fixture.componentRef.setInput`), `PrimaryButton` disabled binding, `LoadingButton` spinner shown only
when `loading()`, `Alert` prefix uppercasing + severity class, `RatesTable` row rendering + date
format, `BySeverity` filtering, `Icon` SVG selection by `type`.

## verbatim-design note

The exact current HTML/SCSS/SVG source is in the legacy tree at `libs/ui/src/lib/**` at the tip of the
pre-rebuild commit. The engineer ports markup/styles character-for-character (only swapping structural
directives for control-flow blocks and `x` → `x()` signal reads).
