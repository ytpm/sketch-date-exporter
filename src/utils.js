import { DIALOG_REPLACE_WORD } from "./dialog";

export function replaceDate(str) {
    if (typeof str !== 'string') return ""
    str = str.replace(DIALOG_REPLACE_WORD, formattedDate())
    return str
}

function formattedDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd;
    } 

    if(mm<10) {
        mm='0'+mm;
    }

    return yyyy+'-'+mm+'-'+dd
}