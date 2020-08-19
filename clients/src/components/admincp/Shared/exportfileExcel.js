import { saveAs } from 'file-saver';
import * as XLSXStyle from '@jandenma/xlsx-style';
import XLSX from 'xlsx';
import moment from 'moment';
export const exportFileExcel = (arr_oject = {}) => {
    const data = arr_oject.data;
    let createXLSLFormatObj = [];
    let TitleName = [arr_oject.title];
    let columcel = arr_oject.columcel;
    let dateTime = new Date();
    let filename = `${arr_oject.filename}-${moment(dateTime).format("DD-MM-YYYY-HH-mm-ss")}.xlsx`;
    let sheetname = arr_oject.filename;
    createXLSLFormatObj.push(TitleName);
    createXLSLFormatObj.push([""]);
    createXLSLFormatObj.push(columcel);
    data.forEach(el => {
        createXLSLFormatObj.push(el);
    });
    let ws = XLSX.utils.aoa_to_sheet(createXLSLFormatObj);
    if(!ws['!merges']) ws['!merges'] = [{ s: {r:0, c:0}, e: {r:1, c:columcel.length-1} }];
    let arr_cols = [];
    arr_oject.cols.forEach(el => {
        arr_cols.push({wpx: el});
    });
    ws['!cols'] = arr_cols;
    let keyCheck = 0;
    for (let key in ws) {
        keyCheck++;
        if (key[0] === '!') continue;
        ws[key].s = {
            border: {top: { style: "thin",color: {rgb: "2A3F54" } },right: { style: "thin",color: {rgb: "2A3F54" } },let: { style: "thin",color: {rgb: "2A3F54" } },bottom: { style: "thin",color: {rgb: "2A3F54" } }},
            font: {name: "Arial",sz: 9,color: {rgb: "2A3F54" }}	
        };
        if (keyCheck >= 3 && keyCheck < columcel.length+3) {
            ws[key].s = {
                border: {top: { style: "thin",color: {rgb: "2A3F54" } },right: { style: "thin",color: {rgb: "2A3F54" } },let: { style: "thin",color: {rgb: "2A3F54" } },bottom: { style: "thin",color: {rgb: "2A3F54" } }},
                font: {name: "Arial",sz: 10,bold: true,color: {rgb: "2A3F54" }},
                fill:{fgColor:{ rgb: "C6D2E3" }}
            };
        }
    }
    ws.A1.s = { alignment: { wrapText: true, vertical: 'center', horizontal: 'center' },font: {bold: true,name:"Arial",sz: 13,color: {rgb: "2A3F54" },italic: false} };
    let wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetname);
    const wbout = XLSXStyle.write(wb, { type: "buffer", bookType: "xlsx"});
    saveAs(new Blob([wbout], { type: "application/octet-stream" }), filename);
}