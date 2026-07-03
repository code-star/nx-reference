# UX Design

> Maintained by: **designer** role\
> Last updated: 2026-07-03\
> Scope: frontend/fullstack — preserves the existing look, layout, and interactions.

## overview

The demo is a single-screen dashboard rendered inside the **AppTemplate** shell: a fixed left
navigation rail, a header with the page title, and a main content area. The main area shows the
Module-Federation remote (portfolio) plus an exchange-rate panel and alert stream. The visual language
is a dark navy theme with an orange accent, using Atomic Design (atoms → molecules → template).

## component hierarchy

```text
star-app-template [title="Nx Reference"]        (template)
├── nav (fixed left, orange)                     home / code / star icons
├── header                                        <h1>{{ title }}</h1>
└── main
    ├── <router-outlet>  → portfolio remote (MF, route '')
    ├── star-paper  "Exchange rates"              (card)
    │   ├── star-loading-button (get new rate)    → star-primary-button + star-icon(loading, spin)
    │   ├── star-rates-table [rates]              time | EUR/BTC rows
    │   ├── star-alert [item] (error) *@for       error-styled blocks
    │   └── star-alert [item] (info)  *@for        info-styled blocks
    └── star-paper  "Made by Codestar"           (card, intro/footer)
```

## user flows

### Flow 1 — View & refresh exchange rate

1. App loads → `AppTemplate` shell renders; `ngOnInit` triggers one `getRate()`.
2. Button enters loading state (disabled + spinning icon) for ~1s.
3. A new row `[HH:mm:ss, rate]` appends to the rates table; an **info** alert
   ("fetched rate") appears.
4. User clicks **"get new exchange rate"** → repeats step 2–3, appending another row.

### Flow 2 — Error handling

1. If the rate request fails, no row is added.
2. An **error** alert ("getRate failed: …") renders above info alerts.
3. The rest of the UI stays interactive.

### Flow 3 — Module Federation

1. At route `''`, the host loads the **portfolio** remote over MF and renders it inside `main`
   (above the exchange-rate panel via `router-outlet`).
2. The remote view uses the same `@star/ui` components, so styling is seamless across host/remote.

## interaction patterns

- **LoadingButton:** while `loading`, the underlying `PrimaryButton` is `disabled` and a `loading`
  icon spins (2s linear infinite). No click effect while disabled.
- **PrimaryButton:** hover cursor pointer; disabled shows the muted `#533106` background + not-allowed
  cursor. Label uppercased, bold.
- **Nav buttons:** hover darkens the orange background; icon-only with `title` tooltips.
- **Alerts:** severity drives colour (error = warm red on near-black; info = light blue on dark navy).
- **Paper:** groups content as a rounded navy card with white text.

## visual tokens (must match)

| Token                                | Value                                | Usage                       |
| ------------------------------------ | ------------------------------------ | --------------------------- |
| `--star-default-bg`                  | `#002042`                            | app background              |
| `--star-card-bg` / `--star-paper-bg` | `#001329`                            | header + paper cards        |
| `--star-primary`                     | `#e87e00`                            | accent, nav, primary button |
| primary disabled                     | `#533106`                            | disabled button             |
| text                                 | `white`                              | body/table text             |
| error alert                          | `rgb(250,179,174)` on `rgb(24,6,5)`  | error blocks                |
| info alert                           | `rgb(166,213,250)` on `rgb(3,14,24)` | info blocks                 |
| spacing unit                         | `4px`                                | AppTemplate layout math     |
| font                                 | `sans-serif`                         | global                      |
| radii                                | button `4px`, paper `8px`            | —                           |

## accessibility notes (preserve/inherit)

- Nav buttons expose `title` attributes; icons use `aria-hidden`/`focusable="false"` where present.
- Buttons are native `<button>` elements (keyboard/focus behaviour preserved).
- Colour contrast of the existing theme is preserved as-is (demo scope — not re-audited in this
  rebuild).

## Storybook UX

- One deployed catalog: an **intro** page (migrated from `intro.stories.mdx`), one story set per UI
  component, and the message-service docs page (migrated from `message.service.stories.mdx`).
- Component docs (descriptions, `@Input` tables) sourced from compodoc where available (ADR-0004).
