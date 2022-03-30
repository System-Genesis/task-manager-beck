const managerData = [
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
            source: ['aka', 'sf_name'],
          },
          name: 'mergedUsers/source/:source',
        },
        {
          title: 'all from mergedUsers',
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
            byDate: 'date'
          },
          name: 'mergedUsers/byDate/:byDate',
        },
      ],
    },
    {
      pageNum: 2,
      title: 'Post',
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
          name: 'splitter/all',
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
          title: 'source from recovery',
          params: {
            source: ['aka', 'souf'],
          },
          name: 'recovery/source/:source',
        },
        {
          title: 'all from recovery',
          name: 'recovery/all',
        },
        {
          title: 'identifier from recovery',
          params: {
            identifier: 'identifier',
          },
          name: 'recovery/identifier/:identifier',
        },
        {
          title: 'date from recovery',
          params: {
            byDate: 'date'
          },
          name: 'recovery/byDate/:byDate',
        },
      ],
    },
  ];

  export default managerData;
  