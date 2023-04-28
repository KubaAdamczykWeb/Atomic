import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextComponent } from './components/atoms/text/text.component';
import { ButtonComponent } from './components/molecules/button/button.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TextBlockComponent } from './components/molecules/text-block/text-block.component';
import { OneColumnComponent } from './components/templates/one-column/one-column.component';
import { TwoColumnComponent } from './components/templates/two-column/two-column.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { TitleComponent } from './components/organisms/title/title.component';
import { ArticleComponent } from './components/organisms/article/article.component';
import { ArticleWithPhotoComponent } from './components/organisms/article-with-photo/article-with-photo.component';
import { PictureBlockComponent } from './components/molecules/picture-block/picture-block.component';
import { HeadingComponent } from './components/molecules/heading/heading.component';
import { ImageComponent } from './components/atoms/image/image.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/pages/about/about.component';
import { TwoColumnsPageComponent } from './components/pages/two-columns-page/two-columns-page.component';
import { RouterLinkComponent } from './components/atoms/router-link/router-link.component';
import { NavButtonComponent } from './components/molecules/nav-button/nav-button.component';
import { SwitchTemplateComponent } from './components/templates/switch-template/switch-template.component';
import { MutableOrganismComponent } from './components/organisms/mutable-organism/mutable-organism.component';
import { TreeComponent } from './components/organisms/tree/tree.component';
import { TreeItemComponent } from './components/organisms/tree/tree-item/tree-item.component';
import { TreeLabelComponent } from './components/organisms/label/label.component';
import { TreePageComponent } from './components/pages/tree-page/tree-page.component';
import { TextBlockWithIconComponent } from './components/molecules/text-block-with-icon/text-block-with-icon.component';
import { LabelWithIconComponent } from './components/organisms/label-with-icon/label-with-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    ButtonComponent,
    HomeComponent,
    TextBlockComponent,
    OneColumnComponent,
    TwoColumnComponent,
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    ArticleComponent,
    ArticleWithPhotoComponent,
    PictureBlockComponent,
    HeadingComponent,
    ImageComponent,
    AboutComponent,
    TwoColumnsPageComponent,
    RouterLinkComponent,
    NavButtonComponent,
    SwitchTemplateComponent,
    MutableOrganismComponent,
    TreeComponent,
    TreeItemComponent,
    TreeLabelComponent,
    TreePageComponent,
    TextBlockWithIconComponent,
    LabelWithIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
