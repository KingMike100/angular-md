import { Component, OnInit } from '@angular/core';
import { MarkdownService} from 'ngx-markdown'

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  constructor(private markdownService: MarkdownService) { }

  ngOnInit() {
      
  }

}