import Api from '@/services/Api'

// This export will return an object that has register
export default {
    register (credentials) {
        return Api().post('register', credentials)
    }
}