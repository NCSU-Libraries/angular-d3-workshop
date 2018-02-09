import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const fires = [
      {
        'id': 0,
        'Name': 'THOMAS',
        'Cause': 'Under Investigation',
        'Date': ' December 2017',
        'County': 'Ventura & Santa Barbara',
        'Acres': 281893,
        'Structures': 1063,
        'Deaths': 1
      },
      {
        'id': 1,
        'Name': 'CEDAR',
        'Cause': 'Human Related',
        'Date': ' October 2003',
        'County': 'San Diego',
        'Acres': 273246,
        'Structures': 2820,
        'Deaths': 15
      },
      {
        'id': 2,
        'Name': 'RUSH',
        'Cause': 'Lightning',
        'Date': 'August 2012',
        'County': 'Lassen',
        'Acres': 271911,
        'Structures': 0,
        'Deaths': 0
      },
      {
        'id': 3,
        'Name': 'RIM',
        'Cause': 'Human Related',
        'Date': 'August 2013',
        'County': 'Tuolumne',
        'Acres': 257314,
        'Structures': 112,
        'Deaths': 0
      },
      {
        'id': 4,
        'Name': 'ZACA',
        'Cause': 'Human Related',
        'Date': 'July 2007',
        'County': 'Santa Barbara',
        'Acres': 240207,
        'Structures': 1,
        'Deaths': 0
      },
      {
        'id': 5,
        'Name': 'MATILIJA',
        'Cause': 'Undetermined',
        'Date': 'September 1932',
        'County': 'Ventura',
        'Acres': 220000,
        'Structures': 0,
        'Deaths': 0
      },
      {
        'id': 6,
        'Name': 'WITCH ',
        'Cause': 'Powerlines',
        'Date': 'October 2007',
        'County': 'San Diego',
        'Acres': 197990,
        'Structures': 1650,
        'Deaths': 2
      },
      {
        'id': 7,
        'Name': 'KLAMATH THEATER COMPLEX',
        'Cause': 'Lightning',
        'Date': 'June 2008',
        'County': 'Siskiyou',
        'Acres': 192038,
        'Structures': 0,
        'Deaths': 2
      },
      {
        'id': 8,
        'Name': 'MARBLE CONE ',
        'Cause': 'Lightning',
        'Date': 'July 1977',
        'County': 'Monterey',
        'Acres': 177866,
        'Structures': 0,
        'Deaths': 0
      },
      {
        'id': 9,
        'Name': 'LAGUNA',
        'Cause': 'Powerlines',
        'Date': 'September 1970',
        'County': 'San Diego',
        'Acres': 175425,
        'Structures': 382,
        'Deaths': 5
      },
      {
        'id': 10,
        'Name': 'BASIN COMPLEX',
        'Cause': 'Lightning',
        'Date': ' June 2008',
        'County': 'Monterey',
        'Acres': 162818,
        'Structures': 58,
        'Deaths': 0
      },
      {
        'id': 11,
        'Name': 'DAY FIRE',
        'Cause': 'Human Related',
        'Date': 'September 2006',
        'County': 'Ventura',
        'Acres': 162702,
        'Structures': 11,
        'Deaths': 0
      },
      {
        'id': 12,
        'Name': 'STATION FIRE',
        'Cause': 'Human Related',
        'Date': 'August 2009',
        'County': 'Los Angeles',
        'Acres': 160557,
        'Structures': 209,
        'Deaths': 2
      },
      {
        'id': 13,
        'Name': 'ROUGH',
        'Cause': 'Lightning',
        'Date': 'July 2015',
        'County': 'Fresno',
        'Acres': 151623,
        'Structures': 4,
        'Deaths': 0
      },
      {
        'id': 14,
        'Name': 'McNALLY',
        'Cause': 'Human Related',
        'Date': 'July 2002',
        'County': 'Tulare',
        'Acres': 150696,
        'Structures': 17,
        'Deaths': 0
      },
      {
        'id': 15,
        'Name': 'STANISLAUS COMPLEX',
        'Cause': 'Lightning',
        'Date': 'August 1987',
        'County': 'Tuolumne',
        'Acres': 145980,
        'Structures': 28,
        'Deaths': 1
      },
      {
        'id': 16,
        'Name': 'BIG BAR COMPLEX',
        'Cause': 'Lightning',
        'Date': 'August 1999',
        'County': 'Trinity',
        'Acres': 140948,
        'Structures': 0,
        'Deaths': 0
      },
      {
        'id': 17,
        'Name': 'HAPPY CAMP COMPLEX',
        'Cause': 'Lightning',
        'Date': 'August 2014',
        'County': 'Siskiyou',
        'Acres': 134056,
        'Structures': 6,
        'Deaths': 0
      },
      {
        'id': 18,
        'Name': 'SOBERANES',
        'Cause': 'Illegal Campfire',
        'Date': 'July 2016',
        'County': 'Monterey',
        'Acres': 132127,
        'Structures': 68,
        'Deaths': 1
      },
      {
        'id': 19,
        'Name': 'CAMPBELL COMPLEX',
        'Cause': 'Powerlines',
        'Date': 'August 1990',
        'County': 'Tehama',
        'Acres': 125892,
        'Structures': 27,
        'Deaths': 0
      }
    ];
    return {fires};
  }

}
