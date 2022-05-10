export const userData =  [
    {
      pageNum: 1,
      title: 'Get',
      btns: [
        {
          title: 'source from splitter',
          params: {
            source: [
              'aka',
              'sf_name',
              'es_name',
              'city_name',
              'adnn_name',
              'mir_name',
            ],
          },
          name: 'splitter/source/:source',
          select: 'select',
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
            identifier: 'number',
            source: [
              'aka',
              'sf_name',
              'es_name',
              'city_name',
              'adnn_name',
              'mir_name',
            ],
          },
          name: 'splitter/identifier/:identifier/source/:source',
          select: 'select',
        },
        {
          title: 'identifier from splitter',
          params: {
            identifier: 'number',
          },
          name: 'splitter/identifier/:identifier',
        },
        {
          title: 'source from mergedUsers',
          params: {
            source: [
              'aka',
              'sf_name',
              'es_name',
              'city_name',
              'adnn_name',
              'mir_name',
            ],
          },
          name: 'mergedUsers/source/:source',
          select: 'select',
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
            identifier: 'number',
          },
          name: 'mergedUsers/identifier/:identifier',
        },
        {
          title: 'by date from mergedUsers',
          params: {
            byDate: 'date',
          },
          name: 'mergedUsers/byDate/:byDate',
        },
      ],
    },
  ];
