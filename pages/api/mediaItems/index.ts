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
  const maxPage = 1;
  let page = 1;

  let nextPageToken: string | undefined = '';
  let mediaItems: GoogleMediaItem[] = [];

  do {
    const data: GoogleMediaItemsData = await getGoogleMediaItems(
      bearerToken,
      nextPageToken
    );

    if (data.mediaItems) {
      mediaItems = [...mediaItems, ...data.mediaItems];
    }

    nextPageToken = data.nextPageToken;
  } while (nextPageToken && page++ < maxPage);

  res.status(200).json(mediaItems);
}
