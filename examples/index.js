const ZeroAPI = require('zerolist')
const app = new ZeroAPI()

// (id) - Parâmetro === String;
app.userGet('id').then(async (data) => {
    console.log(data)
    /**
     * @id = "123..."
     * @apps = []
     */
})

// (id) - Parâmetro === String;
app.botGet('id').then(async (data) => {
    console.log(data)
    /**
     * @id = "123...",
     * @app_type = "bot",
     * @prefix = "/",
     * @queue = false,
     * @verified = true,
     * @owners = [],
     * @custom_invite = "https://...",
     * @tags = [],
     * @locale = "pt-br",
     * @votes = 1,
     * @zrefs = 1
     * @description = {
     *    @short = "...",
     *    @long = "..."
     * }
     */
})

// (id) - Parâmetro === String;
app.serverGet('id').then(async (data) => {
    console.log(data)
    /**
     * @id = "123...",
     * @app_type = "server",
     * @representants = [],
     * @custom_invite = "https://...",
     * @tags = [],
     * @queue = false,
     * @verified = true,
     * @locale = "pt-br",
     * @votes = 1,
     * @description = {
     *    @short = "...",
     *    @long = "..."
     * }
     */
})
