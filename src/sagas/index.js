import {call, put, take, all, fork} from 'redux-saga/effects';

const getJson = async (fileName) => {
    const data = await fetch('/json/'+fileName+'.json');
    const json = await data.json();
    return json;
};

function* loadContent(fileName){
    yield put({type:'FETCHING'});
    const data = yield call(getJson,fileName);
    yield put({type:'CONTENT_LOADED',payload:{...data,fileName}});
}

function* watchLoadContent(){
    while(true){
        const {payload} = yield take('LOAD_CONTENT');
        yield loadContent(payload);
    }
}

export default function* rootSaga(){
    yield all(
        [
            fork(watchLoadContent)
        ]
    );
}