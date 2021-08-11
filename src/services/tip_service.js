import api from './api';

const tipService = {
    newTip: async (tip_infos) => {
        return await api.post('/tips', tip_infos)
    },
    deleteTip: async(id_tip) => {
        const url = "/tips/"+id_tip
        return await api.delete(url)
    },
    updateTip: async(id_tip, updatedPlace, updatedDescription) => {
        const infos = {updatedPlace, updatedDescription}
        const url = "/tips/"+id_tip
        return await api.put(url, infos)
    },
    tipDetails: async(id_tip) => {
        const url = "/tips/"+id_tip
        return await api.get(url)
    }   
}

export default tipService;