// sanity/schemas/customContent.js

export default {
    name: 'servicesSchema',
    title: 'Services Schema',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'The name of the service',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'A short description of the service',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        description: 'An image related to the service',
        options: {
          hotspot: true, // Allows user to select a specific area of the image
        },
      },
      {
        name: 'slug',
        title: 'slugLink',
        type: 'string',
        description: 'Service Details',
      },
    ],
  };
  