import {AuthPayload} from "@/types/app";

export interface AppState {
    isAuthed: boolean
    accessToken: AuthPayload
}
