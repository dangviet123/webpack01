import axios from 'axios';
class AxiosService {
    constructor(){
        const instance = axios.create(); // khởi tại
        instance.interceptors.request.use(this.handleSuccess,this.handleError); // báo lỗi
        this.instance = instance;
    }
    handleSuccess(response){ // hàm gọi api thành công
        return response;
    }
    handleError(error){ // hàm gọi api thất bại
        return Promise.reject(error);
    }
    get(url){ // gọi api get
        return this.instance.get(url);
    }
    post(url,data){
        return this.instance.post(url,data);
    }
    put(url,data){ // cập nhật
        return this.instance.put(url,data);
    }
    delete(url,data){ // delete
        return this.instance.delete(url,data);
    }
    request() {
        return this.instance.interceptors.request;
    }
}

export default new AxiosService();