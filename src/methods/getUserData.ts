import axios from "axios";

export function getToken() {
  const cookie = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("token="));
  if (cookie) {
    const token = cookie.split("=")[1].slice(1, -1);
    return token;
  }
  return null;
}

export async function getUserData() {
  const token = getToken();

  if (token) {
    try {
      const res = await axios.get(`http://localhost:5050/api/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  return null;
}
