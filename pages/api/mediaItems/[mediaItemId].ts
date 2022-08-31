import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleMediaItem } from 'types/google';
import { getGoogleApiToken, getGoogleMediaItem } from 'utils/GoogleApi';

export default async function ApiMediaItem(
  req: NextApiRequest,
  res: NextApiResponse<GoogleMediaItem>
) {
  const mediaItemId: string = req.query.mediaItemId as string;
  const bearerToken = await getGoogleApiToken();
  const mediaItem: GoogleMediaItem = await getGoogleMediaItem(
    bearerToken,
    mediaItemId
  );

  res.status(200).json(mediaItem);
}
