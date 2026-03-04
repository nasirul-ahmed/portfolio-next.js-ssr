import { MetadataRoute } from 'next';
import { config } from './config/config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: config.domain,
      lastModified: new Date(),
    },
    {
      url: `${config.domain}/about`,
      lastModified: new Date(),
    },
  ];
}
