import { prop, getModelForClass, Ref, pre } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";
import { Episode } from "./Episode";
import { Podcast } from "./Podcast";
const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 12;

@pre<User>("save", async function preSave(next) {
  const user = this;
  if (!user.isModified("password")) return next();
  try {
    const hash = await bcrypt.hash(user.password, SALT_ROUNDS);
    user.password = hash;
    return next();
  } catch (err) {
    return next(err);
  }
})
@ObjectType()
export class User {
  @Field()
  @prop()
  public firstname: string;

  @Field()
  @prop()
  public lastname: string;

  @Field()
  @prop({ required: true, minlength: 4, unique: true, trim: true })
  public username: string;

  @Field()
  @prop({
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: emailValidator.validate,
      message: (props) => `${props.value} is not a valid email address`,
    },
  })
  public email: string;

  @Field()
  @prop({
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: 8,
  })
  public password: string;

  @Field((type) => Boolean)
  @prop({ default: false })
  public active: boolean;

  @Field((type) => [String])
  @prop({ type: () => [String], default:  [] })
  public contributions: string[];

  @Field((type) => [Podcast])
  @prop({ ref: "Podcast" })
  public podcastLikes: Ref<Podcast>[];

  @Field((type) => [Episode])
  @prop({ ref: "Episode" })
  public likedEpisodes: Ref<Episode>[];

  public comparePassword = async function comparePassword(candidate) {
    return bcrypt.compare(candidate, this.password);
  };
}

export const UserModel = getModelForClass(User);
