import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Categorías',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required(),
    }),
    // --- CAMPO NUEVO ---
    defineField({
      name: 'isMain',
      title: '¿Mostrar en Portada?',
      type: 'boolean',
      initialValue: false,
      description: 'Marca esta casilla si quieres que esta categoría sea una de las 3 principales del inicio.',
    }),
    // -------------------
    defineField({
      name: 'description',
      title: 'Descripción Corta',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'coverImage',
      title: 'Foto de Portada',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})