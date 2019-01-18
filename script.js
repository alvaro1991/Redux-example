console.clear();

const createPolicy = (name,amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount  
    }
  };
};

const deletePolicy = (name) => {
  return {
    type:'DELETE_POLICY',
    payload: {
      name:name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect:amountOfMoneyToCollect   
    }
  };
};

//Reducers (Departments!)
const claimHistory = (oldListOfClaims = [], action) => {
   if (action.type === 'CREATE_CLAIM'){
     return [...oldListOfClaims,action.payload];
   }
  return oldListOfClaims;
};

const accounting = (bagOfMoney, action) => {
  if (action.type === 'CREATE_CLAIM'){
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
    } else if (action.type === 'CREATE_POLICY'){
      return bagOfMoney + action.payload.amount;
    }
  
    return bagOfMoney;
};
