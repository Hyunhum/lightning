import {lndGateway as _lndGateway} from "./../lnd_gateway";
import type {AuthenticatedLnd} from "./authenticated_lnd_grpc";
import type {UnauthenticatedLndGatewayServer} from "./unauthenticated_lnd_gateway";
import type {UnauthenticatedLnd} from "./unauthenticated_lnd_grpc";

export type LndGatewayServer = UnauthenticatedLndGatewayServer & {
  /** Use Base 64 Encoded Macaroon String */
  macaroon?: string;
};

/**
 * Interface to an LND gateway server.
 */
export function lndGateway(
  server: LndGatewayServer
): {
  lnd: AuthenticatedLnd | UnauthenticatedLnd;
} {
  return _lndGateway({
    cert: server.cert,
    macaroon: server.macaroon,
    request: server.request,
    url: server.url,
    websocket: server.websocket,
  });
}
