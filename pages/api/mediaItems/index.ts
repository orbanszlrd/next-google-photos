import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleMediaItem, GoogleMediaItemsData } from '../../../types/google';
import {
  getGoogleApiToken,
  getGoogleMediaItems,
} from '../../../utils/GoogleApi';

export default async function MediaItems(
  _req: NextApiRequest,
  res: NextApiResponse<GoogleMediaItem[]>
) {
  const bearerToken = await getGoogleApiToken();

  let nextPageToken: string | undefined = '';

  const data: GoogleMediaItemsData = await getGoogleMediaItems(
    bearerToken,
    nextPageToken
  );

  const mediaItems = data.mediaItems;

  res.status(200).json(mediaItems);
}
