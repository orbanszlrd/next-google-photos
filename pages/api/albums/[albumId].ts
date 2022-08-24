import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleAlbum } from '../../../types/google';
import { getGoogleApiToken, getGoogleAlbum } from '../../../utils/GoogleApi';

export default async function Album(
  req: NextApiRequest,
  res: NextApiResponse<GoogleAlbum>
) {
  const albumId: string = req.query.albumId as string;
  const bearerToken = await getGoogleApiToken();
  const album: GoogleAlbum = await getGoogleAlbum(bearerToken, albumId);

  res.status(200).json(album);
}
