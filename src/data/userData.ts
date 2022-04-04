export const userData = [
  {
    pageNum: 1,
    title: 'Get',
    btns: [
      {
        title: 'source from splitter',
        params: {
          source: ['aka', 'souf'],
        },
        name: 'splitter/source/:source',
      },
      {
        title: 'all from splitter',
        params: {},
        name: 'splitter/all',
        message: 'זהירות!! בקשה כבדה ',
      },
      {
        title: 'identifier & source from splitter',
        params: {
          identifier: 'identifier',
          source: ['aka', 'souf'],
        },
        name: 'splitter/identifier/:identifier/source/:source',
      },
      {
        title: 'identifier from splitter',
        params: {
          identifier: 'identifier',
        },
        name: 'splitter/identifier/:identifier',
      },
      {
        title: 'source from mergedUsers',
        params: {
          source: ['aka', 'souf', 'sf_name'],
        },
        name: 'mergedUsers/source/:source',
      },
      {
        title: 'all from mergedUsers',
        params: {},
        name: 'mergedUsers/all',
        message: 'זהירות!! בקשה כבדה ',
      },
      {
        title: 'identifier from mergedUsers',
        params: {
          identifier: 'text',
        },
        name: 'mergedUsers/identifier/:identifier',
      },
      {
        title: 'date from mergedUsers',
        params: {
          byDate: 'date',
        },
        name: 'mergedUsers/byDate/:byDate',
      },
    ],
  },
];
