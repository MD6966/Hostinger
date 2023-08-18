import axios from "axios";

export const adminLogin = ({email,password}) => async(dispatch) => {

    const body = {
        email, 
        password
    }
    console.log(body)

    try{
        const res = await axios.post(`${process.env.REACT_APP_URL}login`, body)
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data
          });
          return {res}

    }
    catch(err) {
        console.log(err)
        return{err}
    }

}

export const adminLogOut = () => (dispatch) => {
    dispatch({
        type: 'LOGOUT_SUUCCESS'
      });
}

export const makeConfig = async (type) => {
    const token = await localStorage.getItem('token');
    const config = {
      headers: {
        'Content-type': type,
        auth: token
      }
    };
  
    return config;
  };