const initialUser = {
  user: { firstName: "", lastName: "", userId: "", image: "", email:"" },
  sales:[],
  salesCategory:["Keyboards", "Guitar","Bass","Drums / Percussions","Wind"],
  articleCategory:["Best Practice","Recording", "Ear Training","Technique", "Teaching", "Musical Instruments","Beginners", "Set-Up"]
};

const setUser = (state = initialUser, action) => {
  switch (action.type) {
    case "SET_USER_DATA": {
      return { ...state, user: { ...action.payload } };
    }
    case "SET_SALES": {
      return { ...state, sales:  [...action.payload]  };
    }
    case "LOGOUT":{
      return {...state, user:{...action.payload}}
    }
   

    default:
      return state;
  }
};

export default setUser;
