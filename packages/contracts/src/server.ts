import { z } from "zod";

export enum ServerState {
  CREATED = "CREATED",
  INSTALLING = "INSTALLING",
  READY = "READY",
  DEPLOYING = "DEPLOYING",
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
  ERROR = "ERROR",
}

export const ServerStateSchema = z.nativeEnum(ServerState);
