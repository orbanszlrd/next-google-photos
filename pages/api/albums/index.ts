import type { NextApiRequest, NextApiResponse } from 'next';
import { GoogleAlbum, GoogleAlbumsResponse } from 'types/google';
import { getGoogleApiToken, getGoogleAlbums } from 'utils/GoogleApi';

export default async function ApiAlbums(
  _req: NextApiRequest,
  res: NextApiResponse<GoogleAlbum[]>
) {
  const bearerToken = await getGoogleApiToken();

  let nextPageToken: string | undefined = '';

  let albums: GoogleAlbum[] = [];

  do {
    const data: GoogleAlbumsResponse = await getGoogleAlbums(
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
