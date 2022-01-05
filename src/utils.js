import { DIALOG_REPLACE_WORD } from "./dialog";

export function replaceDate(str, format) {
    if (typeof str !== 'string') return ""
    str = str.replace(DIALOG_REPLACE_WORD, formattedDate(format))
    return str
}

function formattedDate(format) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 

    //  4 digits year format
    var yyyy = today.getFullYear();

    //  2 digits year format
    if (format === 'yy-mm-dd') {
        yyyy = today.getFullYear().toString().substring(2);
    }

    if (dd < 10) {
        dd = '0' + dd;
    } 

    if(mm < 10) {
        mm = '0' + mm;
    }

    return yyyy + '-' + mm + '-' + dd
}