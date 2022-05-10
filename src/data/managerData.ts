const managerData = [
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
    {
      pageNum: 2,
      title: 'Post',
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
          title: 'source from recovery',
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
          name: 'recovery/source/:source',
          select: 'select',
        },
        {
          title: 'all from recovery',
          params: {},
          name: 'recovery/all',
        },
        {
          title: 'identifier from recovery',
          params: {
            identifier: 'number',
          },
          name: 'recovery/identifier/:identifier',
        },
        {
          title: 'by date from recovery',
          params: {
            byDate: 'date',
          },
          name: 'recovery/byDate/:byDate',
        },
        {
          title: 'daily',
          params: {
            hour: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24,
            ],
            minute: [0, 5, 10, 15, 20, 25, 30, 40, 45, 50, 55],
          },
          name: 'daily',
          message: '.',
          select: 'multiple',
          type: 'body',
        },
      ],
    },
  ];

export default managerData;



// [
//   {
//     '$lookup': {
//       'from': 'pages', 
//       'localField': 'pages', 
//       'foreignField': '_id', 
//       'as': 'pages'
//     }
//   }, {
//     '$lookup': {
//       'from': 'btns', 
//       'localField': 'pages.btns', 
//       'foreignField': '_id', 
//       'as': 'pages.btns'
//     }
//   }
// ]