import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
// @Schema({ collection: 'shuffle_game' })  If you dont want to match the classname=coll name
export class shuffle_games extends Document {
  @Prop({ required: true, index: true })
  id: number;

  @Prop({ required: true })
  Word: string;
}

export const shuffle_game_Schema = SchemaFactory.createForClass(shuffle_games); //class name = collname otherwise it wont find the collection
