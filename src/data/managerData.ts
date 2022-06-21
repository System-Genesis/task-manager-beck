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
        toolTip: 'קבלת מידע גולמי לפי מקור',
      },
      {
        title: 'all from splitter',
        params: {},
        name: 'splitter/all',
        message: 'זהירות!! בקשה כבדה ',
        toolTip: 'קבלת כל המידע הגולמי מכל המקורות',
      },
      {
        title: 'identifier and source from splitter',
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
        toolTip: 'קבלת מידע גולמי לפי מזהה אישי ומקור',
      },
      {
        title: 'identifier from splitter',
        params: {
          identifier: 'number',
        },
        name: 'splitter/identifier/:identifier',
        toolTip: 'קבלת מידע גולמי לפי מזהה אישי',
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
        toolTip: 'קבלת מידע גולמי לפי מקור לאחר עיבוד ראשוני',
      },
      {
        title: 'all from mergedUsers',
        params: {},
        name: 'mergedUsers/all',
        message: 'זהירות!! בקשה כבדה ',
        toolTip: 'קבלת כל המידע הגולמי מכל המקורות לאחר עיבוד ראשוני',
      },
      {
        title: 'identifier from mergedUsers',
        params: {
          identifier: 'number',
        },
        name: 'mergedUsers/identifier/:identifier',
        toolTip: 'קבלת מידע גולמי לפי מזהה אישי לאחר עיבוד ראשוני',
      },
      {
        title: 'by date from mergedUsers',
        params: {
          byDate: 'date',
        },
        name: 'mergedUsers/byDate/:byDate',
        toolTip: 'קבלת מידע גולמי לפי תאריך לאחר עיבוד ראשוני',
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
        toolTip: 'הרצת מידע גולמי לפי מקור',
      },
      {
        title: 'all from splitter',
        params: {},
        name: 'splitter/all',
        toolTip: 'הרצת כל המידע הגולמי מכל המקורות',
      },
      {
        title: 'identifier and source from splitter',
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
        toolTip: 'הרצת מידע גולמי לפי מזהה אישי ומקור',
      },
      {
        title: 'identifier from splitter',
        params: {
          identifier: 'number',
        },
        name: 'splitter/identifier/:identifier',
        toolTip: 'הרצת מידע גולמי לפי מזהה אישי',
      },
      {
        title: 'recovery of source',
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
        toolTip: 'הרצת תהליך עדכון של המידע לפי מקור',
      },
      {
        title: 'recovery of all',
        params: {},
        name: 'recovery/all',
        toolTip: 'הרצת תהליך עדכון של המידע מכל המקורות',
      },
      {
        title: 'recovery of identifier',
        params: {
          identifier: 'number',
        },
        name: 'recovery/identifier/:identifier',
        toolTip: 'הרצת תהליך עדכון של המידע לפי מזהה אישי',
      },
      {
        title: 'recovery of date',
        params: {
          byDate: 'date',
        },
        name: 'recovery/byDate/:byDate',
        toolTip: 'הרצת תהליך עדכון של המידע לפי תאריך',
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
        toolTip: 'קביעת זמן הרצת תהליך העדכון של המידע',
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

// [
//   {
//     '$lookup': {
//       'from': 'pages',
//       'localField': 'pages',
//       'foreignField': '_id',
//       'as': 'pages'
//     }
//   }, {
//     '$unwind': {
//       'path': '$pages'
//     }
//   }, {
//     '$lookup': {
//       'from': 'btns',
//       'localField': 'pages.btns',
//       'foreignField': '_id',
//       'as': 'pages.btns'
//     }
//   }, {
//     '$group': {
//       '_id': {
//         '_id': '$_id',
//         'username': '$username',
//         'password': '$password',
//         'role': '$role'
//       },
//       'pages': {
//         '$push': {
//           'btns': '$pages.btns',
//           'title': '$pages.title'
//         }
//       }
//     }
//   }, {
//     '$project': {
//       '_id': '$_id._id',
//       'username': '$_id.username',
//       'password': '$_id.password',
//       'role': '$_id.role',
//       'pages': '$pages'
//     }
//   }
// ]
