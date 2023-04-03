import { User } from "@interfaces/user";

export interface UserState {
  isAuthed: boolean;
  users: User;
  token: string;
}
