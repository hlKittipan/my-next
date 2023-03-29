import { AuthPayload } from "@interfaces/app";

export interface AppState {
  isAuthed: boolean;
  accessToken: AuthPayload;
}
