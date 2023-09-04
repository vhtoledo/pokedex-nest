import { Injectable, NotFoundException } from '@nestjs/common';
import { Model, isValidObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from './entities/pokemon.entity';

import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Injectable()
export class PokemonService {

  constructor(
    
    @InjectModel( Pokemon.name )
    private readonly pokemonModel: Model<Pokemon>,

  ) {}

  // crear pokemon
  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLocaleLowerCase();

    try {
      const pokemon = await this.pokemonModel.create( createPokemonDto );
      return pokemon;
      
    } catch (error) {
      console.log(error);
    }

  }


  findAll() {
    return `This action returns all pokemon`;
  }

  // buscar por id
  async findOne(term: string) {
    let pokemon: Pokemon;
    if ( !isNaN(+term) ) {
      pokemon = await this.pokemonModel.findOne({ no: term });
    }
    // MongoID
    if ( !pokemon && isValidObjectId( term ) ) {
      pokemon = await this.pokemonModel.findById( term );
    }
    // Name
    if ( !pokemon ) {
      pokemon = await this.pokemonModel.findOne({ name: term.toLowerCase().trim() })
    }

    if ( !pokemon ) 
      throw new NotFoundException(`Pokemon with id, name or no "${ term }" not found`);
    return pokemon;
  }


  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
