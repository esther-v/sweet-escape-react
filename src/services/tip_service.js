import api from './api';

const tipService = {
    newTip: async (tip_infos) => {
        return await api.post('/tips', tip_infos)
    }
}

export default tipService;