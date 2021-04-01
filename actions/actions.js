import { GET_IMAGES } from "./action-types";
// import {START_EDITING_GRADIENT} from "./action-types";
// import {CONFIRM_EDIT} from "./action-types";
// import {CANCEL_EDIT} from "./action-types";

const RECEIVE_PHOTOS = 'https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';

    export function getImages(json) {
    // console.log('getImages')
    return { type: GET_IMAGES, payload: json}
}

export const fetchImages = () => {
    return async dispatch => {
        const req = new Request(RECEIVE_PHOTOS);
        let json = await fetch(RECEIVE_PHOTOS).then(response => response.json());
        // console.log(json)
        dispatch(getImages(json));
    };
};

// export function editGradient(payload) {
//     return {type: 'START_EDITING_GRADIENT',payload }
// }
//
// export function confirmEdit(payload) {
//     return {type: 'CONFIRM_EDIT', payload }
// }
//
// export function cancelEdit() {
//     return {type: 'CANCEL_EDIT' }
// }