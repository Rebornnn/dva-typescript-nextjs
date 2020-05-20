export default {
  namespace: 'tdk',

  state: {
    title: '海投网tdk title',
    description: '海投网tdk description',
    keywords: '海投网tdk keywords'
  },

  effects: {
    * updateTDK({ payload }: any, { put }: any) {
      yield put('saveTDK', { ...payload })
    }
  },

  reducers: {
    saveTDK(state: Object, payload: any) {
      return { ...state, ...payload }
    }
  }
}
