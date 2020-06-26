import store from 'store'
const USER_KEY = 'user_key'

export default {
    saveUser(user) {
        store.set(USER_KEY, user)
        // localStorage.setItem(USER_KEY, JSON.stringify(user))
    },
    getUser() {
        return store.get(USER_KEY) || {}
        // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
    },
    removeUser() {
        store.remove(USER_KEY)
    }

}