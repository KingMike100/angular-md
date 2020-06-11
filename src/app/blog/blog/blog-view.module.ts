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