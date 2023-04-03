import { User } from "@interfaces/user";

export interface UserState {
  isShowSignInModalForm: boolean;
  isAuthed: boolean;
  users: User;
  token: string;
}
