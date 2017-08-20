import { setEntries, INITIAL_STATE } from '../core';

export default function reducer(state = INITIAL_STATE, action) {
    let actions = {
        'SET_TASKS': () => setEntries(state, action)
    };

    return actions[action.type] ? actions[action.type]() : state;
    // return state;
}

// import { setEntries, next, vote, INITIAL_STATE } from './core';

// export default function reducer(state = INITIAL_STATE, action) {
//     let actions = {
//         'SET_ENTRIES': () => setEntries(state, action.entries),
//         'NEXT': () => next(state),
//         'VOTE': () => state.update('vote', voteState => vote(voteState, action.entry)) //!!!!!!!!!!!!!!!!!!!
//     };

//     return actions[action.type] ? actions[action.type]() : state;
// }