"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = exports.ThemeResolver = exports.PodcastResolver = exports.PersonResolver = exports.LocationResolver = exports.EpisodeResolver = exports.CommentResolver = void 0;
const CommentResolver_1 = __importDefault(require("./CommentResolver"));
exports.CommentResolver = CommentResolver_1.default;
const EpisodeResolver_1 = __importDefault(require("./EpisodeResolver"));
exports.EpisodeResolver = EpisodeResolver_1.default;
const LocaleResolver_1 = __importDefault(require("./LocaleResolver"));
exports.LocationResolver = LocaleResolver_1.default;
const PersonResolver_1 = __importDefault(require("./PersonResolver"));
exports.PersonResolver = PersonResolver_1.default;
const PodcastResolver_1 = __importDefault(require("./PodcastResolver"));
exports.PodcastResolver = PodcastResolver_1.default;
const ThemeResolver_1 = __importDefault(require("./ThemeResolver"));
exports.ThemeResolver = ThemeResolver_1.default;
const UserResolver_1 = __importDefault(require("./UserResolver"));
exports.UserResolver = UserResolver_1.default;