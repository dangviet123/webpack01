import React,{forwardRef} from 'react';
import * as langs from '../../../../constants/admincp/languages';
import { DialogContent, Table, TableRow, TableCell, TableBody} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';
import Skeleton from '@material-ui/lab/Skeleton';
import logo from '../../../../images/logo.png';
const useStyles = makeStyles(() => ({
    h3_title: {
      textTransform: 'uppercase',
      fontSize: 15,
      marginTop: 10,
      marginBottom: 10
    },
    title: {
      fontWeight: 500,
      textTransform: 'capitalize'
    },
    candidate_information: {
      fontWeight: 500,
      textTransform: 'uppercase',
      fontSize: 18,
      textAlign: "center"
    },
    company: {
      fontWeight: 500,
      textTransform: 'uppercase',
      fontSize: 14,
    },
    logo_title: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 10
    },
    grow: {
      flexGrow: 1
    },
    max_print: {
        padding: "30px 40px"
    }
  }));

  const ComponentToPrint = forwardRef((props, ref) => {
    const {ListDetail} = props;
    const classes = useStyles();
    return (
        <DialogContent style={{overflow: 'hiden'}} ref={ref} className={classes.max_print}>
          <div className={classes.logo_title}>
            <div>
              <div className={classes.company}>
                {langs.infomation_company}
              </div>
              <div className={classes.address}>
                {langs.infomation_address}
              </div>
            </div>
            <div className={classes.grow}></div>
            <div>
              <img src={logo} alt={``} width={200} />
            </div>
          </div>
          <div className={classes.candidate_information}>
            {langs.candidate_information}
          </div>
          <h3 className={classes.h3_title}>{langs.personal_information}</h3>
          <Table>
            <TableBody>
              <TableRow>
                  <TableCell className={classes.title} width={200}>{langs.full_name}</TableCell>
                  <TableCell>{ListDetail.FullName ? ListDetail.FullName : <Skeleton variant="text" width={`100%`}  />}</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell className={classes.title}>{langs.birth_day}</TableCell>
                  <TableCell>
                    {ListDetail.DateBirthDay ? <Moment format="DD-MM-YYYY">{ListDetail.DateBirthDay}</Moment> : <Skeleton variant="text" width={`100%`}  />}
                  </TableCell>
              </TableRow>
              <TableRow>
                  <TableCell className={classes.title}>{langs.sex}</TableCell>
                  <TableCell>{ListDetail.idGender ? ListDetail.idGender===1 ? langs.male : langs.female : <Skeleton variant="text" width={`100%`}  />}</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell className={classes.title}>{langs.phone}</TableCell>
                  <TableCell>{ListDetail.Phone}</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell className={classes.title}>{langs.email_address}</TableCell>
                  <TableCell>{ListDetail.Email ? ListDetail.Email : <Skeleton variant="text" width={`100%`}  />}</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell className={classes.title}>{langs.marriage}</TableCell>
                  <TableCell>{ListDetail.idMarriage ? ListDetail.idMarriage === 1 ? langs.alone : langs.married : <Skeleton variant="text" width={`100%`}  />}</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell className={classes.title}>{langs.place_of_birth}</TableCell>
                  <TableCell>{ListDetail.Permanent ? ListDetail.Permanent : <Skeleton variant="text" width={`100%`}  />}</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell className={classes.title}>{langs.current_residence}</TableCell>
                  <TableCell>{ListDetail.CurrentPlace ? ListDetail.CurrentPlace : <Skeleton variant="text" width={`100%`}  />}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <h3 className={classes.h3_title}>{langs.general_information}</h3>
          <Table >
            <TableBody>
              <TableRow>
                  <TableCell className={classes.title} width={200}>{langs.title}</TableCell>
                  <TableCell>{ListDetail.Profile ? ListDetail.Profile : <Skeleton variant="text" width={`100%`}  />}</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell className={classes.title}>{langs.educational_level}</TableCell>
                  <TableCell>{ListDetail.Education ? ListDetail.Education : <Skeleton variant="text" width={`100%`}  />}</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell className={classes.title}>{langs.desired_working_place}</TableCell>
                  <TableCell>{ListDetail.DesiredWork ? ListDetail.DesiredWork : <Skeleton variant="text" width={`100%`}  />}</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell className={classes.title}>{langs.experience}</TableCell>
                  <TableCell>{ListDetail.YearsExperience ? ListDetail.YearsExperience : <Skeleton variant="text" width={`100%`}  />}</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell className={classes.title}>{langs.desired_salary}</TableCell>
                  <TableCell>{ListDetail.Salary ? ListDetail.Salary : <Skeleton variant="text" width={`100%`}  />}</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell className={classes.title}>{langs.vacancies}</TableCell>
                  <TableCell>{ListDetail.Recruit ? ListDetail.Recruit : <Skeleton variant="text" width={`100%`}  />}</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell className={classes.title}>{langs.job_position}</TableCell>
                  <TableCell>{ListDetail.Vacancies ? ListDetail.Vacancies : <Skeleton variant="text" width={`100%`}  />}</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell className={classes.title}>{langs.job_posting_area}</TableCell>
                  <TableCell>{ListDetail.GroupArea ? ListDetail.GroupArea : <Skeleton variant="text" width={`100%`}  />}</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell className={classes.title}>{langs.notes}</TableCell>
                  <TableCell>{ListDetail.Notes !== undefined ? ListDetail.Notes : <Skeleton variant="text" width={`100%`}  />}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </DialogContent>
    )
});

export default ComponentToPrint;
