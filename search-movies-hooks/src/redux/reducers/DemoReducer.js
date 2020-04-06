

const INITIAL_STATE = {}

const GET_DEMO_REQUEST = 'GET_DEMO_REQUEST'
const GET_DEMO_SUCCESS = 'GET_DEMO_SUCCESS'

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case GET_DEMO_REQUEST:
			return [...state];
		case GET_DEMO_SUCCESS:
			if (action.demoData) {
				return [...action, action.demoData];
			}
			return [...state, action];
		default:
			return state;
	}
}