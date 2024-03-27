import { Injectable } from '@nestjs/common';
import { CrawlerService } from './crawler.service';

@Injectable()
export class AppService {
  constructor(private readonly crawlerService: CrawlerService) {}

  scrape(): string {
      this.crawlerService.scrape();
      return "string";
  }
}
