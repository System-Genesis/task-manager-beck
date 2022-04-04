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
        type: 'select',
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
        type: 'select',
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
        type: 'select',
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
        type: 'select',
      },
      {
        title: 'all from splitter',
        params: {},
        name: 'splitter/all',
      },
      {
        title: 'identifier & source from splitter',
        params: {
          identifier: 'identifier',
          source: ['aka', 'souf'],
        },
        name: 'splitter/identifier/:identifier/source/:source',
        type: 'select',
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
        type: 'select',
      },
      {
        title: 'all from recovery',
        params: {},
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
          byDate: 'date',
        },
        name: 'recovery/byDate/:byDate',
      },
      {
        title: 'daily',
        params: {
          dailyHour: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
          dailyMinute: ['00', '05', '10', '15', '20', '25', '30', '40', '45', '50', '55'],
        },
        name: 'daily/',
        type: 'multiple',
      },
    ],
  },
];

export default managerData;
