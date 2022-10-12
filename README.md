## ZeroList API
> Está API é utilizada para puxar os dados de uma aplicação registrada na **[ZeroList](https://google.com)**! Venha conferir agora mesmo como utiliza-se.

> * **Especificações sobre o uso**:
> ```cs
> String id: "Search Application",
> Object data: "Search Result"

### - Como puxar os dados de algum bot?
> ```js
> const ZeroAPI = require('zerolist');
> const app = new ZeroAPI();
> 
> app.botGet('id').then(async (data) => {
>   await console.log(data)
>   // Return >> Object;
> })
> ```

### - Como puxar os dados de algum servidor?
> ```js
> const ZeroAPI = require('zerolist');
> const app = new ZeroAPI();
> 
> app.serverGet('id').then(async (data) => {
>   await console.log(data)
>   // Return >> Object;
> })
> ```

### - Como puxar os dados de algum desenvolvedor?
> ```js
> const ZeroAPI = require('zerolist');
> const app = new ZeroAPI();
> 
> app.userGet('id').then(async (data) => {
>   await console.log(data)
>   // Return >> Object;
> })
> ```

### * Contribuidores: [@DollnKey](https://github.com/DollnKey).
