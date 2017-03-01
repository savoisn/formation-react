import * as cst from '../constants/personn';

export const add = (personn) => {
  return {
    type:cst.ADD, 
    payload:personn
  }
}

export const remove = (personn) => {
  return {
    type: cst.REMOVE,
    payload: personn
  }
}


const addDispath = (personn) =>{
  resultatAction = add(personn)
  dispatchActionToStore(resultatAction)
}
