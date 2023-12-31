import {
  SPOTIFY_NOW_PLAYING_URL,
  SPOTIFY_TOKEN_URL,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
} from "@/lib/config";

const basic = Buffer.from(
  `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
).toString("base64");

const getAccessToken = async () => {
  const URL = `${SPOTIFY_TOKEN_URL}?grant_type=client_credentials`;

  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${basic}`,
      },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const getNowPlaying = async () => {
  const URL = `${SPOTIFY_NOW_PLAYING_URL}`;

  try {
    const TOKEN = await getAccessToken();
    const res = await fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
};