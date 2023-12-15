import axios from "axios"
import LoaderRef from "../components/loader";

export const request = ({
    url,
    method,
    data,
    isLoader = true
}) => new Promise((resolve, reject) => {

    let token = localStorage.getItem('token');
    let config = {
        url: process.env.REACT_APP_BASE_URL + url,
        method: method,
        data: data ? data : null,
        headers: {
            'Authorization': token ? 'Bearer ' + token : '',
            'Content-Type': 'application/json'
        }
    };

    showLoader(isLoader)

    axios(config).then(res => {
        showLoader(false);
        return resolve(res)
    }).catch(({ response }) => {
        showLoader(false);
        if(response){
            let { status, data } = response;    
            if (status === 401) {
                // let history = useHistory()
                //clear and navigate to login
                // history.replace('/auth/login');
    
            }
        }else{
        }
       
        return reject(response)
    })


});


const showLoader=(status)=>{
    if(LoaderRef && LoaderRef.render &&  LoaderRef.render.defaultProps){
        LoaderRef.render.defaultProps.setLoaderStatus(status)
    }
}