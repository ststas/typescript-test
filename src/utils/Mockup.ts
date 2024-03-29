import { TestSite, Type, Status } from '../types/types';

export const TestsAndSites: TestSite[] = [
  {
    id: 1,
    name: 'Prototype of the new map',
    type: Type.CLASSIC,
    status: Status.PAUSED,
    siteId: 2,
    url: 'https://www.delivery.company.com',
  },
  {
    id: 2,
    name: 'Dark theme test',
    type: Type.MVT,
    status: Status.DRAFT,
    siteId: 3,
    url: 'http://games.company.com',
  },
  {
    id: 3,
    name: "New Year's Sale",
    type: Type.MVT,
    status: Status.STOPPED,
    siteId: 1,
    url: 'https://market.company.com',
  },
  {
    id: 4,
    name: 'Order basket redesing',
    type: Type.CLASSIC,
    status: Status.ONLINE,
    siteId: 1,
    url: 'https://market.company.com',
  },
  {
    id: 5,
    name: 'Spring promotion',
    type: Type.SERVER_SIDE,
    status: Status.DRAFT,
    siteId: 2,
    url: 'https://www.delivery.company.com',
  },
  {
    id: 6,
    name: 'Prototype of a new header',
    type: Type.SERVER_SIDE,
    status: Status.ONLINE,
    siteId: 3,
    url: 'http://games.company.com',
  },
  {
    id: 7,
    name: "New Year's Sale Copy 1",
    type: Type.MVT,
    status: Status.DRAFT,
    siteId: 1,
    url: 'https://market.company.com',
  },
];
