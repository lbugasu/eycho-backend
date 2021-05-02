import { prop } from '@typegoose/typegoose'
import { ObjectType, Field } from 'type-graphql'
import { Episode } from './Episode'

@ObjectType()
export class Play {
  @Field(type => Episode, { description: 'The slug of the epiosde' })
  @prop({ type: () => Episode })
  episode: Episode

  @Field(type => Number)
  @prop({ type: () => Number })
  position: number

  @Field(type => Boolean)
  @prop({ type: () => Boolean, default: false })
  started: boolean

  @Field(type => Boolean, { nullable: true })
  @prop({ type: () => Boolean, default: false })
  completed: boolean
}
