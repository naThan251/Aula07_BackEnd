import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alunos } from './alunos/aluno.entity.js';
import { Livros } from './livros/livro.entity.js';
import { Produtos } from './produtos/produto.entity.js';
import { Modalidades } from './modalidades/modalidade.entity.js';
import { Veiculos } from './veiculos/veiculo.entity.js';
import { Eventos } from './eventos/evento.entity.js';

@Module ({

  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'escola_db_2',
      entities: [Alunos, Livros, Produtos, Modalidades, Veiculos, Eventos],
      synchronize: true,
      logging: true,  
    }),
  ],
})

export class AppModule{};