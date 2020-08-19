import * as Types from '../../../constants/public/Home';
const initialState = {
    BlockImage1: [],
    BlockImage2: [],
    BlockImage3: [],
    BlockText1: {},
    BlockText2: {}
}
const Home = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_HOME: {
            return {...state};
        }
            
        case Types.FETCH_HOME_SUCCESS:{
            const { datas} = action.payload;
            const {BlockImage1,
                BlockImage2,
                BlockImage3,
                BlockText1,
                BlockText2} = datas;
            return {...state,
                BlockImage1,
                BlockImage2,
                BlockImage3,
                BlockText1,
                BlockText2};
        }

        default:
            return {...state};
    }
}

export default Home;