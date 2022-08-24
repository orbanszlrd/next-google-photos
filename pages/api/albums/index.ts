import type { NextApiRequest, NextApiResponse } from 'next';
import { GoogleAlbum, GoogleAlbumsData } from '../../../types/google';
import { getGoogleApiToken, getGoogleAlbums } from '../../../utils/GoogleApi';

export default async function Albums(
  _req: NextApiRequest,
  res: NextApiResponse<GoogleAlbum[]>
) {
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
