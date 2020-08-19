import React,{useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
import * as langs from '../../../../constants/admincp/languages';
import {Divider, DialogActions, Button } from '@material-ui/core';
import LocalPrintshopIcon from '@material-ui/icons/LocalPrintshop';
import PrintDetail from './PrintDetail';
import {useSelector} from 'react-redux';


function Print() {
  const {ListDetail} = useSelector(state => state.Profile);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
      <div>
        <PrintDetail ref={componentRef} ListDetail={ListDetail} />
        <br />
        <Divider />
        <DialogActions>
        <Button color="primary" onClick={handlePrint} type="submit" variant="contained" startIcon={<LocalPrintshopIcon />} style={{marginRight: 30}} >
          {langs.printed_votes}
        </Button>
        </DialogActions>
      </div>
    )
}
export default Print;
