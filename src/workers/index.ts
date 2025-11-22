import { WorkerEntrypoint } from "cloudflare:workers";

export default class extends WorkerEntrypoint<Env> {
    async fetch(request: Request) {
        //log requests as json
        console.log("hello from worker");
        console.log(request)

        // You can then just fetch the assets as normal, or you could pass in a custom Request object here if you wanted to fetch some other specific asset
        const assetResponse = await this.env.ASSETS.fetch(request);

        // You can return static asset response as-is, or you can transform them with something like HTMLRewriter
        return assetResponse
    }
}
