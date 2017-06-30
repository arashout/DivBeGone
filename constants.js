'use strict';
const MSG = Object.freeze({
    ERASE_OBJECT : 'MSG_ERASE_OBJECT',
    GET_URL : 'MSG_GET_URL',
    PREDICT_CLASS : 'MSG_PREDICT_CLASS'
});

const ELEMENTS = Object.freeze({
    UNORDERED_LIST_FILTER_TERMS : document.getElementById('listFilterTerms'),
    INPUT_FILTER_TERM : document.getElementById('inputFilterTerm'),
    INPUT_CONTAINER_CLASS_NAME : document.getElementById('inputClassName'),
    INPUT_URL_KEY : document.getElementById('inputURLKey'),
    BUTTON_ERASE : document.getElementById('buttonErase'),
    BUTTON_STORE : document.getElementById('buttonStoreData'),
    BUTTON_RETRIEVE : document.getElementById('buttonRetrieveData'),
    BUTTON_PREDICT : document.getElementById('buttonPredictClass')
});

const KEY_CODES = Object.freeze({
    ENTER : 13,
    TAB : 9
});

const EVENTS = Object.freeze({
    CLICK : 'click',
    KEY_DOWN : 'keydown',
    INPUT : 'input'
});