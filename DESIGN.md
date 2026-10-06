# DESIGN.md

Follows the Google Stitch DESIGN.md format. Source of truth for visual decisions.

## Visual Theme

- **Theme**: Light. Scene sentence: un gerente de compras revisa el sitio en la oficina de la empresa en Puerto La Cruz o Caracas, con luz diurna de ventana, buscando confirmar opciones de alojamiento para su cuadrilla en Güiria; también un supervisor revisa en el teléfono durante un viaje. Luz del día, tono cálido y de confianza: light.
- **Color strategy**: **Committed** en las secciones clave (hero y CTA), con acentos terracota y oliva como identidad; crema como superficie base. La estrategia general es Committed, no Restrained: la identidad cromática del logo es la protagonista.
- **Aesthetic reference**: Posada corporativa venezolana bien cuidada; señales de hotel boutique (crema, terracota, verde hoja) con utilidad de sitio corporativo (tarifas, cotización, seguridad). Sensación física: papel envejecido del cresol, azulejos artesanales, madera. NO es editorial-magazine, NO es resort luxury, NO es SaaS.

## Color Palette

Usamos **OKLCH** como sistema, con fallback hex para compatibilidad. Colores tintados hacia el tono de la marca; nunca `#000` ni `#fff` puros.

| Token | OKLCH | Hex | Uso |
|---|---|---|---|
| `--color-surface` | `oklch(0.975 0.008 80)` | `#FAF6F0` | Fondo principal (crema) |
| `--color-surface-strong` | `oklch(1 0.004 80)` | `#FFFDF9` | Contenedores/cards |
| `--color-primary` | `oklch(0.54 0.13 43)` | `#B85014` | Terracota: CTAs, acentos, headings destacados |
| `--color-primary-deep` | `oklch(0.46 0.11 40)` | `#9A4410` | Hover/estados del terracota |
| `--color-secondary` | `oklch(0.42 0.05 130)` | `#3E5336` | Verde oliva: detalles, bordes, rótulos |
| `--color-text` | `oklch(0.28 0.008 50)` | `#2B2625` | Texto principal (carbón) |
| `--color-text-soft` | `oklch(0.45 0.01 50)` | `#6E6460` | Texto secundario |
| `--color-border` | `oklch(0.85 0.01 60)` | `#E5DDD3` | Divisores |
| `--color-info` | `oklch(0.55 0.15 240)` | `#2E6B8A` | On success/error/info states (check/error verde-rojo desaturados para accesibilidad) |

Roles semánticos: `--color-primary` (acciones principales), `--color-secondary` (elementos de marca), `--color-danger` (errores de formulario), `--color-success`. Usar siempre tokens, nunca hex sueltos en componentes.

## Typography

- **Display / Headings**: fuente serif de carácter editorial-cálido (fuera de la ban-list del skill: ni Fraunces, Playfair, Cormorant, Lora, Crimson, DM Serif, Instrument Serif). Candidata: **Source Serif 4** (Google Fonts, variable 200–900, con itálicas), que transmite señal de imprenta y letrero corporativo sin ser "el serif de moda".
- **Body / UI**: sans humanista limpia, ligera, legible. Candidata: **Figtree** (Google Fonts, variable 300–900). Persona: clara, cercana, no-too-geometric (no Inter, no DM Sans, no Plus Jakarta).
- **Escala modular**: base 16px, `clamp()` fluid para encabezados. Pasos ≥1.25 de ratio: `--step-0: 1rem`, `--step-1: 1.25rem`, `--step-2: 1.563rem`, `--step-3: 1.953rem`, `--step-4: 2.441rem`, `--step-5: 3.052rem`.
- Jerarquía con peso + escala + espacio: un heading grande es más grande, más pesado Y con más espacio arriba. Títulos en Source Serif 4 pesos 600–700; texto en Figtree 400; labels/eyebrows en Figtree 600 con letter-spacing.
- Body text 16px mínimo en móvil; línea de lectura limitada a 65–75 caracteres (`max-width: 34rem` approx en rem para texto corrido, o `--measure`).

## Components

### Layout
- Container desktop: `max-width: 1200px`, gutters de `clamp(1.25rem, 4vw, 3rem)`. Grid responsive `repeat(auto-fit, minmax(280px, 1fr))`, sin bloquear a breakpoints arbitrarios; breakpoints sistemáticos: 480 / 768 / 1024 / 1280.
- Espaciado 4pt base (4, 8, 12, 16, 24, 32, 48, 64, 96). Tokens semánticos `--space-2xs` … `--space-3xl`. Ritmo vertical variado, no uniforme.

### Navegación
- Header sticky: logo `logo_hotel.webp`, nav principal (Inicio, Apartamentos, Servicios, Tarifas, FAQ, Contacto), CTA primario "Solicitar Cotización" (terracota).
- Breadcrumbs en subpáginas: `Inicio › Sección`, estilo discreto debajo del header.
- Sticky CTA móvil: barra fija inferior con "Llamar" y "WhatsApp / Reservar", 2 botones ≥44px, con padding-safe para evitar tap conflicts; oculta con `prefers-reduced-motion` no aplica (es utilidad, permanece).
- Footer: 4 columnas (marca+datos, enlaces, servicios, contacto), RIF, enlace a política.

### Botones
- Primario: fondo terracota, texto crema, radius `0.5rem`, altura mínima 48px, hover `--color-primary-deep`, transición 150–200ms ease-out. Focus visible 2px ring offset.
- Secundario: borde 1px `--color-secondary`, texto oliva, fondo transparente.
- WhatsApp: texto + ícono SVG oficial (Lucide), foco visible, target `_blank rel="noopener"`.

### Formularios
- Labels visibles siempre (nunca placeholder-only), `for` asociado, `input type="email"`, `type="tel"`, `type="number"` para teclado correcto. Errores bajo el campo con `aria-live`. Botón submit deshabilitado con spinner mientras abre WhatsApp. Helper text persistente en campos complejos (noches, personas).
- Estado exitoso: toast de confirmación con resumen del mensaje enviado.

### Tarifas (tabla)
- `<table>` real, accesible, con la tabla de 3 rangos ($140/$130/$120 + IVA). Columnas tabulares (`font-variant-numeric: tabular-nums`). Fila destacada para "Corporativo / proyectos largos". Botón CTA bajo la tabla hacia cotización.

### FAQ
- Acordeón con `<button>` + `aria-expanded`, `aria-controls`, panel `aria-labelledby`. Transición vía `grid-template-rows` (no height).

### Mapa
- Iframe de Google Maps embebido con `loading="lazy"`, `title`, `referrerpolicy="no-referrer-when-downgrade"`, allowfullscreen; placeholder con dirección y link oficial debajo.

## Elevation & Depth

Escala semántica (no valores sueltos): `--shadow-xs` (borde sutil), `--shadow-sm` (hover cards), `--shadow-md` (header sticky), `--shadow-lg` (overlay móvil). Sombras sutiles, 20–30% de opacidad de `#2B2625`, sin ambientes dramáticos. Z-index: `--z-header: 40; --z-sticky-cta: 30; --z-overlay: 50`.

## Radius & Icons

- Radius tokens: `--radius-sm: .375rem`, `--radius-md: .625rem`, `--radius-lg: 1rem`. Borde redondeado suave (señal hotel boutique), NO pilas (pills) salvo badges.
- Íconos: **Lucide** (SVG, stroke consistente 2px), tamaño token `--icon-sm: 20px; --icon-md: 24px; --icon-lg: 32px`. Un solo set, sin emojis como íconos. Detalles botánicos: hojas/ramas SVG de forma discreta solo en ornamentos de sección, coherentes con el logo.

## Motion

- Curva `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-expo) para entradas de página; micro-interacciones 150–250ms. Nunca animar propiedades de layout (width/height/top). Revelados en scroll con IntersectionObserver y stagger 40ms solo si `prefers-reduced-motion: no-preference`.
- Hover: transform scale (1.02–1.03) en tarjetas, color de fondo en botones. Sin bounce ni elastic.

## Imágenes

Optimizadas con Astro `<Image>` (webp ya nativo), `srcset` + sizes, `loading="lazy"` salvo hero (eager), `width`/`height` declarados para evitar CLS, alt descriptivo orientado a "Alojamiento corporativo en Güiria". Ver mapa de imágenes en PRODUCT/proyecto.