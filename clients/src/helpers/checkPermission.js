
export const checkActiveOne = (arrPermission) => {
    let idPermission = [];
    if (arrPermission) {
        idPermission = arrPermission.idPermission.map(x => parseInt(x));
    }
    return (idPermission.indexOf(13) !== -1) ? false : true;
}

export const checkProcessOneSave = (arrPermission) => {
    let idPermission = [];
    if (arrPermission) {
        idPermission = arrPermission.idPermission.map(x => parseInt(x));
    }
    return (idPermission.indexOf(14) !== -1) ? true : false;
}