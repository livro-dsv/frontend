import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Livro } from "src/app/models/livro";
import { LivroService } from "src/app/services/livro.service";

@Component({
  selector: "app-cadastrar-livro",
  templateUrl: "./cadastrar-livro.component.html",
  styleUrls: ["./cadastrar-livro.component.css"],
})
export class CadastrarLivroComponent implements OnInit {
  titulo!: string;
  autor!: string;
  genero!: string;
  preco!: number;

  constructor(private service: LivroService, private router: Router) {}

  ngOnInit(): void {}

  create(): void {
    let livro: Livro = {
      titulo: this.titulo,
      genero: this.genero,
      autor: this.autor,
      preco: this.preco,
    };
    this.service.create(livro).subscribe((livro) => {
      this.router.navigate(["livro/listar"]);
    });
  }
}
