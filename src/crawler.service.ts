import { Injectable } from '@nestjs/common';
import { NestCrawlerService } from 'nest-crawler';

@Injectable()
export class CrawlerService {
  constructor(
    private readonly crawler: NestCrawlerService,
  ) {}

  public async scrape(): Promise<void> {
    interface ExampleCom {
      title: string;
      info: string;
      content: string;
    }

    const data: ExampleCom = await this.crawler.fetch({
      target: 'https://www.offmenupodcast.co.uk/restaurants',
      fetch: {
        restaurantName: {
          selector: 'a > strong > em',
          how: 'html',
        },
        restaurantRecommender: {
          selector: 'p > strong > em',
          how: 'html',
        },
        restaurantLink: {
          selector: 'p > a',
          attr: 'href',
        },
      },
    });

    console.log(data);
    // {
    //   title: 'Example Domain',
    //   info: 'http://www.iana.org/domains/example',
    //   content: '<div><h1>Example Heading</h1><p>Example Paragraph</p></div>'
    // }
      }
    }