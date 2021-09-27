import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ListarLivroComponent } from "./components/views/livro/listar-livro/listar-livro.component";
import { CadastrarLivroComponent } from "./components/views/livro/cadastrar-livro/cadastrar-livro.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, ListarLivroComponent, CadastrarLivroComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
