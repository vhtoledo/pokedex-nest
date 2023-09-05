import { join } from 'path'; // de node
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [

    ConfigModule.forRoot(),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
    }),
    
    // referencia a nuestra bd
    MongooseModule.forRoot(process.env.MONGODB),

    PokemonModule,

    CommonModule,

    SeedModule
  ],
})
export class AppModule {}
