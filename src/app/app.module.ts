import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { MarkdownService} from 'ngx-markdown'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BlogViewComponent } from './blog/blog/blog-view.component';
import { BlogPostViewComponent } from './blog/post/blog-post-view.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MarkdownModule.forChild()],
  declarations: [ AppComponent, HelloComponent, BlogViewComponent, BlogPostViewComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MarkdownService]
})
export class AppModule { }
