export const userData = [
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
];
