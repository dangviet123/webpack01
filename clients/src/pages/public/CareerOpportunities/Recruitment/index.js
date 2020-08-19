import React,{useState} from 'react'
import SliderHome from './../../../../components/layouts/pubicLayout/Slider';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Grid from '@material-ui/core/Grid';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { KeyboardDatePicker  } from "@material-ui/pickers";
function Recruitment() {
    const [selectedDate, handleDateChange] = useState(null);
    return (
        <main>
            <SliderHome />
            <section className="phanam-breadcrumb-1">
                <div className="main-breadcrumb">
                <div className="container">
                    <ol className="breadcrumb">
                    <li><a href="./"> </a></li>
                    <li><a href="./">Sự kiện nổi bật</a></li>
                    <li className="active" aria-current="page">Hoạt động văn hóa</li>
                    </ol>
                </div>
                </div>
            </section>
            <section >
                <div >
                    <div className="rec_content">

                        <Card  variant="outlined" >
                            <CardContent>
                                <Grid container spacing={5}>
                                    <Grid  item xs={12} sm={6} >
                                        <Typography variant="h5" component="h2" style={{color: '#006ab6',textAlign: 'center'}}>
                                            THÔNG TIN CƠ BẢN
                                        </Typography>

                                        <div className="textFieldInput" >
                                            <TextField   label="Họ tên" size="small" fullWidth variant="outlined"/>
                                        </div>
                                        <div className="textFieldInput">
                                        <KeyboardDatePicker
                                            autoOk
                                            variant="inline"
                                            inputVariant="outlined"
                                            label="Ngày sinh"
                                            format="DD-MM-YYYY"
                                            value={selectedDate}
                                            InputAdornmentProps={{ position: "start" }}
                                            onChange={date => handleDateChange(date)}
                                            size="small"
                                            fullWidth
                                        />
                                        </div>
                                        <div className="textFieldInput">
                                            <FormControl variant="outlined" fullWidth size="small">
                                                <InputLabel id="demo-simple-select-outlined-label">Giới tính</InputLabel>
                                                <Select 
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={''}
                                                label="Giới tính"
                                                >
                                                <MenuItem value="">
                                                    <em>Chọn</em>
                                                </MenuItem>
                                                <MenuItem value={0}>Nam</MenuItem>
                                                <MenuItem value={1}>Nữ</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className="textFieldInput">
                                            <FormControl variant="outlined" fullWidth size="small">
                                                <InputLabel id="demo-simple-select-outlined-label">Hôn nhân</InputLabel>
                                                <Select 
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                label="Hôn nhân"
                                                value={''}
                                                >
                                                <MenuItem value="">
                                                    <em>Chọn</em>
                                                </MenuItem>
                                                <MenuItem value={0}>Độc thân</MenuItem>
                                                <MenuItem value={1}>Kết hôn</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className="textFieldInput">
                                            <TextField  label="Hộ khẩu thường trú" size="small"  fullWidth variant="outlined"/>
                                        </div>
                                        <div className="textFieldInput">
                                            <TextField   label="Số điện thoại" size="small"  fullWidth variant="outlined"/>
                                        </div>
                                        <div className="textFieldInput">
                                            <TextField   label="Nơi ở hiện tại" size="small"  fullWidth variant="outlined"/>
                                        </div>
                                        <div className="textFieldInput">
                                            <TextField   label="Ghi chú" size="small"  fullWidth variant="outlined"/>
                                        </div>
                                    </Grid>

                                    <Grid  item xs={12} sm={6}>
                                        <Typography variant="h5" component="h2" style={{color: '#006ab6',textAlign: 'center'}}>
                                            THÔNG TIN CHUNG
                                        </Typography>
                                        <div className="textFieldInput">
                                            <TextField   label="Tiêu đề hồ sơ" size="small"  fullWidth variant="outlined"/>
                                        </div>
                                        <div className="textFieldInput" >
                                            <FormControl variant="outlined" size="small" fullWidth>
                                                <InputLabel id="demo-simple-select-outlined-label">Vị trí ứng tuyển</InputLabel>
                                                <Select 
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                label="Vị trí ứng tuyển"
                                                value={''}
                                                >
                                                <MenuItem value="">
                                                    <em>Chọn</em>
                                                </MenuItem>
                                                <MenuItem value={0}>Nhấn viên bán hàng</MenuItem>
                                                <MenuItem value={1}>Nhân viên giao hàng</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className="textFieldInput">
                                            <TextField   label="Địa điểm làm việc mong muốn" size="small"  fullWidth variant="outlined"/>
                                        </div>
                                        
                                        <div className="textFieldInput">
                                            <TextField  label="Trình độ cao nhất" size="small"  fullWidth variant="outlined"/>
                                        </div>
                                        <div className="textFieldInput">
                                            <FormControl variant="outlined" fullWidth size="small">
                                                <InputLabel id="demo-simple-select-outlined-label">Số năm kinh nghiệm</InputLabel>
                                                <Select 
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                label="Số năm kinh nghiệm"
                                                value={''}
                                                >
                                                <MenuItem value="">
                                                    <em>Chọn</em>
                                                </MenuItem>
                                                <MenuItem value={0}>1 Năm</MenuItem>
                                                <MenuItem value={1}>2 Năm</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className="textFieldInput">
                                            <TextField   label="Mức lương mong muốn" size="small"  fullWidth variant="outlined"/>
                                        </div>

                                        <div className="textFieldInput">
                                        <input
                                                accept="image/*"
                                                style={{display: 'none'}}
                                                id="contained-button-file"
                                                multiple
                                                type="file"
                                            />
                                            <label htmlFor="contained-button-file">
                                            <div className="note"><i>Chỉ chấp nhận file với định dạng (docx,pdf)</i></div>
                                                <Button size="small" variant="contained" color="primary" component="span" startIcon={<CloudUploadIcon />} >
                                                File đính kèm
                                                </Button>
                                            </label>
                                        </div>
                                        
                                    </Grid>
                                </Grid>
                                
                            </CardContent>
                            <CardActions style={{padding: 15}}>
                                <Button variant="contained" startIcon={<AutorenewIcon />} >LÀM MỚI</Button>
                                <Button variant="contained" color="primary" endIcon={<SendIcon />} >NỘP HỒ SƠ</Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Recruitment;
