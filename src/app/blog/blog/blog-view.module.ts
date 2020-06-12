import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [BlogViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BlogViewComponent}
    ]),
    ComponentsModule,
    MarkdownModule.forChild()
  ]
})