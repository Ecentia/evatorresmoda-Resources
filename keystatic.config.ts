import { config, fields, collection } from '@keystatic/core';

export default config({
  ui: {
    brand: { name: 'Panel Eva Torres' },
    navigation: {
      'Catálogo de Tienda': ['products', 'categories'],
    },
  },
  
  storage: {
    kind: 'local',
  },

  collections: {
    // --- CATEGORÍAS ---
    categories: collection({
      label: 'Categorías',
      slugField: 'name',
      path: 'src/content/categories/*',
      format: { data: 'yaml' },
      schema: {
        name: fields.slug({ name: { label: 'Nombre de la Categoría' } }),
        description: fields.text({ 
            label: 'Descripción Corta', 
            description: 'Aparece en la tarjeta de la colección.' 
        }),
        coverImage: fields.image({
          label: 'Foto de Portada',
          directory: 'public/images/categories',
          publicPath: '/images/categories/',
          validation: { isRequired: true }
        }),
      },
    }),

    // --- PRODUCTOS ---
    products: collection({
      label: 'Productos',
      slugField: 'name',
      path: 'src/content/products/*',
      format: { contentField: 'content' },
      schema: {
        name: fields.slug({ name: { label: 'Nombre del Producto' } }),
        
        price: fields.text({ 
          label: 'Precio (Opcional)',
          description: 'Ej: 29.95€. Déjalo vacío si no quieres mostrar precio.' 
        }),
        
        category: fields.relationship({
          label: 'Categoría',
          collection: 'categories',
          validation: { isRequired: true }
        }),

        // CAMBIO: Tallas 100% libres y creadas por el usuario
        sizes: fields.array(
            fields.text({ label: 'Talla' }),
            {
                label: 'Tallas / Variantes',
                itemLabel: props => props.value || 'Nueva Talla',
                description: 'Añade las tallas manualmente (Ej: 38, XL, Única, 50ml...)'
            }
        ),

        isFeatured: fields.checkbox({ 
            label: 'Destacar Producto',
            description: 'Muestra este producto con una etiqueta "Destacado".'
        }),

        image: fields.image({
          label: 'Foto Principal',
          directory: 'public/images/products',
          publicPath: '/images/products/',
          validation: { isRequired: true }
        }),
        
        content: fields.document({
          label: 'Descripción detallada',
          formatting: true,
          dividers: true,
          links: true,
        }),
      },
    }),
  },
});