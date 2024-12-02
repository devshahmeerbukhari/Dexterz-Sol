// sanity/schemas/customContent.js

export default {
    name: 'projectSchema',
    title: 'Project Schema',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'The name of the item',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'A short description of the item',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        description: 'An image related to the item',
        options: {
          hotspot: true, // Allows user to select a specific area of the image
        },
      },
      {
        name: 'slug',
        title: 'slugLink',
        type: 'string',
        description: 'Slug',
      },
      {
        name: 'detail',
        title: 'detail',
        type: 'text',
        description: 'A Detail description of the item',
      },
    ],
  };
  