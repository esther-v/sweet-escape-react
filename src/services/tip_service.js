import api from './api';

const tipService = {
    newTip: async (tip_infos) => {
        return await api.post('/tips', tip_infos)
    },
    deleteTip: async(id_tip) => {
        const url = "/tips/"+id_tip
        return await api.delete(url)
    }
    
}

export default tipService;