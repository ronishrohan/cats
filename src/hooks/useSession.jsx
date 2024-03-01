import {SessionContext} from "../store/sessionContext";
import { useContext } from "react";

export default function useSession() {
  const { user, updateUser } = useContext(SessionContext);
  return { user, updateUser };
}
