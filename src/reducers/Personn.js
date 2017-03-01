import * as cst from '../constants/personn';

const reducer = (
  state=[
    {name:'nico',age:'29'},
    {name:'aline',age:'14'},
    {name:'anne',age:'28'}
  ]
  , action) => {

  switch (action.type){
    case cst.ADD: {
      console.log("adding");
      return [...state, action.payload]
    }
    case cst.REMOVE: {
      console.log("removing");
      //return _.delete(state, name:action.payload.name);
    }
    default: return state;
  }
}

export default reducer;
