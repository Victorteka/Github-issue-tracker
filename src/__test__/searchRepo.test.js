import searchRepoReducer from '../reducers/searchRepoReducer'

describe('searchRepoReducer', ()=>{
    it('should return default state if there is no action type passed in the reducer',()=>{
        expect(searchRepoReducer({}, {type:null})).toEqual({})
    })
})