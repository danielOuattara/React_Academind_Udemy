import { redirect } from "react-router-dom";

//-----------------------------------------
export function getTokenRemainingDuration() {
  const storedExpirationDate = new Date(localStorage.getItem("expiration"));
  const remainingTime = storedExpirationDate.getTime() - new Date().getTime();
  return remainingTime;
}

//-----------------------------------------
export function getAuthToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const tokenRemainingDuration = getTokenRemainingDuration();
  if (tokenRemainingDuration < 0) {
    return "EXPIRED";
  }

  return token;
}

//-----------------------------------------
export function tokenLoader() {
  return getAuthToken();
}

//-----------------------------------------
export function tokenRouteProtectedLoader() {
  const token = getAuthToken();
  if (!token) return redirect("/auth");
  return null;
}
