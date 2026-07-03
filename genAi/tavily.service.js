import { tavily } from "@tavily/core";
import { configDotenv } from "dotenv";

const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });

export const searchWeb = async ({query})=>{
    const response = await tvly.search(query,{
        maxResults: 5,
        searchDepth:"advanced"
    });
    const results = response.results.map
    return response.results
}



