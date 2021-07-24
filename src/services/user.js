import api from './api';

const userService = {
    signup: async (user) => {
        return await api.post('/signup', user)

    },
    login: async (email, password) => {
        const user = {email, password}
        return await api.post('/login', user)
    },
    mytips: async (tipinfos) => {
        return await api.get('/mytips', tipinfos)
    },
    profile: async(infosprofil) => {
        return await api.get('/profile', infosprofil)
    } 
}

export default userService;