import { defineConfig } from 'tinacms';

export default defineConfig({
  local: true,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  schema: {
    collections: [
      {
        name: 'essay',
        label: 'Essays',
        path: 'src/content/essay',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Description' },
          { type: 'datetime', name: 'date', label: 'Publish Date' },
          { type: 'string', name: 'badge', label: 'Badge' },
          { type: 'string', name: 'tags', label: 'Tags', list: true },
          { type: 'boolean', name: 'draft', label: 'Draft' },
        ],
      },
      {
        name: 'bits',
        label: 'Bits',
        path: 'src/content/bits',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true },
          { type: 'string', name: 'description', label: 'Description' },
          { type: 'datetime', name: 'date', label: 'Date', required: true },
          { type: 'string', name: 'tags', label: 'Tags', list: true },
          { type: 'boolean', name: 'draft', label: 'Draft' },
        ],
      },
      {
        name: 'memo',
        label: 'Memo',
        path: 'src/content/memo',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true },
          { type: 'string', name: 'subtitle', label: 'Subtitle' },
          { type: 'datetime', name: 'date', label: 'Date' },
          { type: 'boolean', name: 'draft', label: 'Draft' },
        ],
      },
    ],
  },
});
