const { AxiosInstance } = require('axios');
const Axios = require('axios');
const APIError = require('./ErrorBuild');

module.exports = class ZeroAPI {
    constructor() {
        this._api = Axios.create({ baseURL: 'https://zerolistapi.squareweb.app/' })
        return this;
    };

    async userGet(userId) {
        try {
            const response = await this._api.get('users/' + userId)
            return response.data
        } catch (err) {
            throw new APIError(err)
        };
    };

    async botGet(botId) {
        try {
            const response = await this._api.get('apps/bot/' + botId)
            return response.data
        } catch (err) {
            throw new APIError(err)
        };
    };

    async serverGet(serverId) {
        try {
            const response = await this._api.get('apps/server/' + serverId)
            return response.data
        } catch (err) {
            throw new APIError(err)
        };
    };
};
