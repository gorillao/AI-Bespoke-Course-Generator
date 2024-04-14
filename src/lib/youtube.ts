import axios from "axios"
import {YoutubeTranscript} from 'youtube-transcript'
import { strict_output } from "./gpt";


export async function searchYoutube(searchQuery:string){
    searchQuery=encodeURIComponent(searchQuery);
    const {data}=await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=$