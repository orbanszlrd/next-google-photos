import type { NextApiRequest, NextApiResponse } from 'next';
import { GoogleAlbum, GoogleAlbumsData } from '../../types/google';

const getGoogleApiToken = async (): Promise<string> => {
  const tokenResult = await fetch(
    'https://www.googleapis.com/oauth2/v4/token',
    {
      method: 'POST',
      body: JSON.stringify({
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
        grant_type: process.env.GOOGLE_GRANT_TYPE,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const tokenData = await tokenResult.json();
  return `Bearer ${tokenData['access_token']}`;
};

const getGoogleAlbums = async (
  bearerToken: string,
  pageToken: string
): Promise<GoogleAlbumsData> => {
  const result = await fetch(
    `https://photoslibrary.googleapis.com/v1/albums/?pageSize=50&pageToken=${pageToken}`,
    {
      method: 'GET',
      headers: {
        Authorization: bearerToken,
      },
    }
  );
  return result.json();
};

export default async function Albums(
  req: NextApiRequest,
  res: NextApiResponse<GoogleAlbum[]>
) {
  console.log(req.cookies);

  const bearerToken = await getGoogleApiToken();

  let nextPageToken: string | undefined = '';

  let albums: GoogleAlbum[] = [];

  do {
    const data: GoogleAlbumsData = await getGoogleAlbums(
      bearerToken,
      nextPageToken
    );

    if (data.albums) {
      albums = [...albums, ...data.albums];
    }

    nextPageToken = data.nextPageToken;
  } while (nextPageToken);

  res.status(200).json(albums);
}
