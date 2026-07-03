import { ChatMistralAI } from "@langchain/mistralai";
import readline from "readline/promises";
import { HumanMessage, tool, createAgent } from "langchain";
import { sendEmail } from "./mail.service.js";
import * as z from "zod"
import dotenv from "dotenv"
import { searchWeb } from "./tavily.service.js";

dotenv.config()

const emailTool = tool(
    sendEmail,
    {
        name: "sendEmail",
        description: "sends an email to the sepcified email address with the given subject and message. ",
        schema: z.object({
             to: z.string().describe("recipient's email address"),
             html: z.string().describe("html content of the email"),
             subject: z.string().describe("subject of the email")

        })
    }
)

const searchLatestWeb = tool(
    searchWeb,
    {
        name: "searchWeb",
        description: "searches on web to get latest information about any question, use this when user asks about recent , latest, curretn , today , updated, or time-sensitive facts",
        schema: z.object({
            query: z.string().describe("the question to search on web for latest info")
        })
    }
)

const rl = new readline.Interface({
    input: process.stdin,
    output: process.stdout
});



const model = new ChatMistralAI({
    model: "mistral-large-latest",
    temperature: 0
});

const agent = createAgent({
  model: model,
  tools: [emailTool, searchLatestWeb],

});

const messages = []

while(true){
    const userInput = await rl.question("\x1b[32mYou: \x1b[0m");
    messages.push(new HumanMessage(userInput));
    const response  = await agent.invoke({
        messages
    });
    messages.push(response.messages[response.messages.length - 1]);
    console.log("\x1b[32mAi: \x1b[0m" + response.messages[response.messages.length - 1].text);

    console.log(response.tool_calls)

    
}




