import { prop, Ref } from '@typegoose/typegoose'
import { Field, ObjectType } from 'type-graphql'
import { Play } from './Play'

@ObjectType()
export class PlayingQueue {
    @Field((type) => [Play])
    @prop({ ref: 'Play', default: [] })
    public plays: Ref<Play>[]
}