import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class SubscriptionStatus {
    constructor(rssFeed) {
        this.rssFeed = rssFeed
    }

    @Field()
    callbackUrl: string = ''

    @Field()
    state: string = ''

    @Field()
    lastSuccessfulVerification: string = ''

    @Field()
    expirationTime: string = ''

    @Field()
    lastSubscribeRequest: string = ''

    @Field()
    lastUnsubscribeRequest: string

    @Field()
    lastVerificationError: string = ''

    @Field()
    lastDeliveryError: string = ''

    @Field()
    aggregateStatistics: string = ''

    @Field()
    rssFeed: string = ''
}
