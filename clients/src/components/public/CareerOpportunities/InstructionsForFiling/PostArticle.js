import React, { Fragment } from 'react';
import renderHTML from 'react-render-html';
function PostArticle(props) {
    const {Post} = props;
    const renderPost = () => {
        return (
            <Fragment>
                {renderHTML(Post.Content)}
            </Fragment>
        )
    }

    const renderLoading = () => {
        return (
            <Fragment>
                <div className="item">
                    <div className="title"><em className="material-icons">language</em>
                        <h3>CÁCH 1 : NỘP HỒ SƠ ONLINE</h3>
                    </div>
                    <div className="content">
                        <p>Điền vào form Ứng Tuyển: <a href="./">Tại đây</a></p>
                    </div>
                </div>
                <div className="item">
                    <div className="title"><em className="material-icons"></em>
                        <h3>CÁCH 2 : NỘP HỒ SƠ qua mail</h3>
                    </div>
                    <div className="content">
                        <p>Tải mẫu Phiếu Thông Tin Tuyển Dụng: <a href="./">Tại đây</a></p>
                        <p>Điền đầy đủ thông tin theo mẫu</p>
                        <p>Gởi Phiếu thông tin tuyển dụng, CV ứng tuyển về email <a href="./">tuyendung@phanam.com.vn</a></p>
                    </div>
                </div>
                <div className="item">
                    <div className="title"><em className="material-icons">pin_drop</em>
                        <h3>CÁCH 3 : Nộp hồ sơ trực tiếp: <span>Ứng viên có thể gởi CV, hồ sơ ứng tuyển về văn phòng công ty gần nhất: </span></h3>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <h4>Pha Nam Hồ Chí Minh: </h4>
                                <p>CÔNG TY CỔ PHẦN DƯỢC PHA NAM -  436 Cao Thắng, Phường 12, Quận 10, Tp. Hồ Chí Minh </p>
                                <p>Điện thoại: 028 6265 1638</p>
                            </li>
                            <li>
                                <h4>Pha Nam Cần Thơ: </h4>
                                <p>CÔNG TY TNHH MTV DƯỢC  PHA NAM CẦN THƠ - 217 – 219 Nguyễn Văn Cừ, KV.II, P. An  Bình, Q. Ninh Kiều, Tp. Cần Thơ</p>
                                <p>Điện thoại: 0292 3782 058</p>
                            </li>
                            <li>
                                <h4>Pha Nam Đồng Nai: </h4>
                                <p>CÔNG TY TNHH MTV DƯỢC PHA NAM ĐỒNG NAI - CN6 – LK1, CN6 – LK2, KP.7, P. Thống Nhất, Tp. Biên Hòa, Đồng Nai </p>
                                <p>Điện thoại: 0251 3680 678</p>
                            </li>
                            <li>
                                <h4>Pha Nam Khánh Hòa:</h4>
                                <p>CÔNG TY TNHH MTV DƯỢC  PHA NAM KHÁNH HÒA - 38 Dã Tượng, P. Phước Long, Tp. Nha Trang, Tỉnh Khánh Hòa </p>
                                <p>Điện thoại: 0253 880 557</p>
                            </li>
                            <li>
                                <h4>Pha Nam Đà Nẵng:</h4>
                                <p>CÔNG TY TNHH MỘT THÀNH VIÊN DƯỢC - 61 Nguyễn Trác, Phường Hòa Cường Bắc, Q.Hải Châu, Tp. Đà Nẵng</p>
                                <p>Điện thoại: 02363 68 88 99</p>
                            </li>
                            <li>
                                <h4>Pha Nam Hà Nội:</h4>
                                <p>CÔNG TY TNHH MTV DƯỢC PHA NAM HÀ NỘI - Số 12H1, Khu đô thị Yên Hòa, P. Yên Hòa, Q. Cầu Giấy, Tp. Hà Nội </p>
                                <p>Điện thoại: 024 3783 3848</p>
                            </li>
                            <li>
                                <h4>Pha Nam Hải Phòng:</h4>
                                <p>CÔNG TY TNHH MTV DƯỢC PHA NAM HẢI PHÒNG – G9A Khu Biệt Thự Mê Linh, P. Anh Dũng,  Q. Dương Kinh, Tp. Hải Phòng </p>
                                <p>Điện thoại: 0225 3880 089</p>
                            </li>
                            <li>
                                <h4>Pha Nam Nghệ An:</h4>
                                <p>CÔNG TY TNHH MỘT THÀNH VIÊN DƯỢC PHA NAM NGHỆ AN - Số BT3-09, Đường số 9, Khu đô thị mới Vinh Tân, P. Vinh Tân, Tp. Vinh, Tỉnh Nghệ An </p>
                                <p>Điện thoại: 0238 353 4973</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
    return (
        <div className="col-lg-10">
            <div className="tutorial-wrapper">
                {Post.Content !== undefined ? renderPost() : renderLoading()}
            </div>
        </div>
    )
}
export default PostArticle;
