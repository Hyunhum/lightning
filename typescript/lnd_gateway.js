"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lndGateway = void 0;
const lnd_gateway_1 = require("./../lnd_gateway");
/**
 * Interface to an LND gateway server.
 */
function lndGateway(server) {
    return lnd_gateway_1.lndGateway({
        cert: server.cert,
        macaroon: server.macaroon,
        request: server.request,
        url: server.url,
        websocket: server.websocket,
    });
}
exports.lndGateway = lndGateway;
//# sourceMappingURL=lnd_gateway.js.map