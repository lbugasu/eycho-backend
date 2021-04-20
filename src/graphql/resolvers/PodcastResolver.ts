import { Arg, Query, Resolver } from "type-graphql";
import { Episode, EpisodeModel } from "../../models/Episode";

import { Podcast, PodcastModel } from "../../models/Podcast";


@Resolver((of) => Podcast)
export default class PodcastResolver {

  @Query((returns) => [Podcast], {description: "Get all podcasts"})
  async getPodcasts(): Promise<Podcast[]> {
    const podcasts: Podcast[] = await PodcastModel.find();

    return podcasts;
  }

  @Query((returs)=>[Episode], {description: "Returns a podcasts'episode"})
  async getPodcastEpisodes(@Arg('slug') slug: String): Promise<Episode[]>{
    const episodes: Episode[] = await EpisodeModel.find({podcast: slug})
    return episodes
  }

  @Query((returns) => Podcast, {description: "Find a podcast based on it's slug"})
  async getPodcast(@Arg('slug') slug: String): Promise<Podcast> {
    const podcast: Podcast = await PodcastModel.findOne({slug: `${slug}`});

    return podcast;
  }

  @Query((returns) => [Podcast], {description:"Searches for a podcast based on a search string"})
  async findPodcasts(@Arg('searchString')searchString: String): Promise<Podcast[]> {
    const regex = new RegExp(`^${searchString}`)
    const podcasts: Podcast[] = await PodcastModel.find({title:{$regex: regex, $options: 'ix'}});

    return podcasts;
  }

}
