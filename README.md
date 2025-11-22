# Proyecto Web Eva Torres - Documentación 

Este repositorio contiene el código fuente para el sitio web corporativo y e-commerce de Eva Torres.

**Este documento sirve como guía de referencia interna para el equipo de desarrollo y diseño**, con el objetivo de mantener la consistencia visual y técnica del proyecto.

---

## 🎨 Sistema de Diseño y Guía de Estilos

Es crítico mantener la identidad de marca de forma estricta en todos los componentes. Utilizad siempre las variables de color y las tipografías definidas en la configuración de Tailwind.

### Paleta de Colores Oficial

Estos son los valores hexadecimales exactos que definen la marca. No utilicéis colores "parecidos" o hardcodeados, usad siempre las clases de utilidad de Tailwind correspondientes.

| Muestra | Nombre Interno (Tailwind) | HEX | Uso Principal |
| :--- | :--- | :--- | :--- |
| <span style="display:inline-block;width:20px;height:20px;background-color:#0a2e20;border:1px solid #000;"></span> | `eva-dark` | **#0a2e20** | Color primario corporativo. Fondos fuertes (Hero, Footer), textos de alto contraste sobre fondos claros. |
| <span style="display:inline-block;width:20px;height:20px;background-color:#D4AF37;border:1px solid #000;"></span> | `eva-gold` | **#D4AF37** | Color de acento principal. CTAs, bordes, iconos, detalles de lujo y divisores. |
| <span style="display:inline-block;width:20px;height:20px;background-color:#FDFBF7;border:1px solid #ccc;"></span> | `eva-cream` | **#FDFBF7** | Fondos secundarios, áreas de contenido claras que requieren calidez, inputs de formulario. |
| <span style="display:inline-block;width:20px;height:20px;background-color:#FFFFFF;border:1px solid #ccc;"></span> | `white` | **#FFFFFF** | Texto sobre fondos oscuros y contenedores tipo tarjeta para máxima limpieza. |

### Tipografía

Las fuentes están configuradas globalmente en `tailwind.config.js`. Usad las siguientes clases de utilidad según la jerarquía:

* `font-brand`: Para títulos principales de impacto (H1, H2) y nombres de colección (Estilo Serif elegante de alto contraste).
* `font-serif`: Para subtítulos y textos que requieran carácter (Estilo Serif más legible).
* `font-sans`: (Por defecto en `body`) Para el cuerpo de texto, párrafos y lectura general.

---

## 🛠️ Stack Tecnológico

* **Core Framework:** Astro (Enfoque SSG para rendimiento óptimo y SEO).
* **Estilos:** Tailwind CSS (Utilidades primero).
* **Iconos:** Se utiliza un componente propio `Icon.astro` que renderiza SVGs inline. No usar librerías externas pesadas.

---




