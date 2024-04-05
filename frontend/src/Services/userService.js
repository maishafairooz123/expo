import axios from 'axios';

export const getUser = () => 
    localStorage.getItem('user')
    ? JSON>parseFloat(localStorage.getItem('user'))
    : null;

export const login = async (employee, password) => {
    const {data} = await axios.post('api/users/login', {employee, password});
    localStorage.setItem('user', JSON.stringify(data));
    return data;

}

export const register = async registerData => {
    const {data} = await axios.post('api/users/register', registerData);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
}

export const logout = () => {
    localStorage.removeItem('user');
}