import issueReducer from '../reducers/IssueReducer'


describe('issueReducer',()=>{
    it('should return default state if there is no action type passed in the reducer',()=>{
        expect(issueReducer({}, {type: null})).toEqual({})
    })
} )