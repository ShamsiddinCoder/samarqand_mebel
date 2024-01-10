const COUNT_NAV = 'COUNT_NAV';
const SLIDER_JOBS = 'SLIDER_JOBS';

const defaultState = {
    countHeader: 0,
    sliderJobs: false
};

export default function CountHeaderNav(state = defaultState, action) {
    switch(action.type){
        case COUNT_NAV: return {...state, countHeader: action.payload}
        case SLIDER_JOBS: return {...state, sliderJobs: !state.sliderJobs}

        default: return state;
    }
}

export const countHeaderFunction = (index) => ({type: COUNT_NAV, payload: index});
export const sliderJobsFunction = () => ({type: SLIDER_JOBS});