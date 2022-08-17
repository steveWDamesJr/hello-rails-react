
// Action Type
const fetchGreetings = "hello-rails-react/greetings/fetchGreetings"


// Action

const greetings = (data) => {
  return {
    type: fetchGreetings,
    payload: {
      data
    }
  }
}

// Fetch data

const fetchData = () => (dispatch) => {
  fetch("/messages").then((response) => {
    return response.json()
  }).then((response) => {
    console.log(response.greeting)
    dispatch(greetings(response.greeting))
  })
}


// Reducer

const greetingReducer = (state = [], action) => {
  switch (action.type) {
    case fetchGreetings: return action.payload.data
    default: return state
  }
}

export default greetingReducer;
export {fetchData};