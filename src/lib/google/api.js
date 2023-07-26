const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN
const GOOGLE_GRANT_TYPE = 'refresh_token'

export const getGoogleApiToken = async () => {
  const tokenResult = await fetch(
    'https://www.googleapis.com/oauth2/v4/token',
    {
      method: 'POST',
      body: JSON.stringify({
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        refresh_token: GOOGLE_REFRESH_TOKEN,
        grant_type: GOOGLE_GRANT_TYPE,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 3600,
      }
    }
  );

  const tokenData = await tokenResult.json();
  
  return `Bearer ${tokenData['access_token']}`;
};

export const getGoogleAlbums = async (bearerToken, pageToken) => {
  const result = await fetch(
    `https://photoslibrary.googleapis.com/v1/albums/?pageSize=50&pageToken=${pageToken}`,
    {
      method: 'GET',
      headers: {
        Authorization: bearerToken,
      },
      next: {
        revalidate: 0,
      }
    }
  );
  return result.json();
};

export const getGoogleAlbum = async (bearerToken, albumId) => {
  const result = await fetch(
    `https://photoslibrary.googleapis.com/v1/albums/${albumId}`,
    {
      method: 'GET',
      headers: {
        Authorization: bearerToken,
      },
      next: {
        revalidate: 0,
      }
    }
  );
  return result.json();
};

export const getGoogleMediaItems = async (bearerToken, pageToken) => {
  const result = await fetch(
    `https://photoslibrary.googleapis.com/v1/mediaItems/?pageSize=50&pageToken=${pageToken}`,
    {
      method: 'GET',
      headers: {
        Authorization: bearerToken,
      },
      next: {
        revalidate: 3600,
      }
    }
  );
  return result.json();
};

export const getGoogleMediaItem = async (bearerToken, mediaItemId) => {
  const result = await fetch(
    `https://photoslibrary.googleapis.com/v1/mediaItems/${mediaItemId}`,
    {
      method: 'GET',
      headers: {
        Authorization: bearerToken,
      },
      next: {
        revalidate: 3600,
      }
    }
  );
  return result.json();
};

export const getGoogleMediaItemsAlbum = async (bearerToken, albumId, pageToken, pageSize) => {
  const result = await fetch(
    `https://photoslibrary.googleapis.com/v1/mediaItems:search`,
    {
      method: 'POST',
      body: JSON.stringify({
        albumId,
        pageSize,
        pageToken
      }),
      headers: {
        Authorization: bearerToken,
      },
      next: {
        revalidate: 3600,
      }
    }
  );
  return result.json();
};



// import { NextResponse } from "next/server";
// import { getGoogleApiToken } from "@/lib/google/api";
// import { cookies } from "next/headers";

// export async function GET(request) {
//   const cookieStore = cookies();
//   const token = cookieStore.get('token').value;
//   if (token) {
//     return NextResponse.json(token);
//   }

//   if (!token) {
//     const bearerToken = await getGoogleApiToken();

//     if (!bearerToken) {
//       throw new Error(500, 'Unable to get bearer token');
//     }

//     cookieStore.set({
//       name: 'token',
//       value: bearerToken,
//       path: '/',
//       expires: new Date(Date.now() + 3600),
//     })

//     return NextResponse.json(bearerToken);
//   }
// }

const bearerToken = await getGoogleApiToken();

export const getAlbums = async () => {
  let nextPageToken = '';
  let albums = [];

  do {
    const data = await getGoogleAlbums(bearerToken, nextPageToken);
    if (data.albums) {
      albums = [...albums, ...data.albums];
    }
    nextPageToken = data.nextPageToken;
  } while (nextPageToken);

  if (!albums) {
    throw new Error(500, 'Unable to get albums');
  }

  return albums
}