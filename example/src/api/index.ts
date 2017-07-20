import axios from 'axios'
import { post, get, ax } from './http'

export default {
    getPackage (data: PlainObject) {
        return get<{
            content: string
        }>('static/api-test.json', {
            params: data
        })
    },

    ax: ax,
    axios: axios
}