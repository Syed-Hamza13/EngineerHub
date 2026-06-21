const ResearchBlock =
require("../models/ResearchBlock");

const mongoose =
require("mongoose");




// Generate Keywords

const generateKeywords = (text)=>{


    const stopWords = [

        "the",
        "is",
        "a",
        "an",
        "for",
        "and",
        "using",
        "with",
        "this",
        "that",
        "are",
        "from",
        "based",
        "into",
        "through"

    ];



    const words =
    text
    .toLowerCase()
    .replace(/[^\w\s]/gi,"")
    .split(" ");



    const importantWords =
    words.filter(word=>{


        return (

            word.length > 5
            &&
            !stopWords.includes(word)

        );


    });



    return [

        ...new Set(importantWords)

    ].slice(0,10);


};







// Detect Domain

const detectDomain = (text)=>{


    text =
    text.toLowerCase();



    if(
        text.includes("blockchain") ||
        text.includes("smart contract") ||
        text.includes("ethereum")
    )
    {
        return "Blockchain";
    }




    if(
        text.includes("machine learning") ||
        text.includes("deep learning") ||
        text.includes("neural network") ||
        text.includes("artificial intelligence")
    )
    {
        return "Artificial Intelligence";
    }





    if(
        text.includes("security") ||
        text.includes("attack") ||
        text.includes("vulnerability") ||
        text.includes("cyber")
    )
    {
        return "Cyber Security";
    }




    return "General Technology";


};








// Difficulty Detection

const detectDifficulty = (text)=>{


    const advancedWords=[

        "architecture",
        "optimization",
        "neural network",
        "distributed",
        "algorithm",
        "scalability",
        "embedding"

    ];



    let score = 0;



    advancedWords.forEach(word=>{


        if(
            text
            .toLowerCase()
            .includes(word)
        )
        {
            score++;
        }


    });





    if(score >= 3)
    {
        return "ADVANCED";
    }



    if(score >= 1)
    {
        return "INTERMEDIATE";
    }



    return "BEGINNER";


};








// Generate Summary

const generateSummary = (text)=>{


    const sentences =
    text.split(".");



    return sentences[0]
    .trim();


};









// Main Metadata Processor

exports.generateMetadata =
async(researchId)=>{


    // Validate MongoDB ID

    if(
        !mongoose.Types.ObjectId.isValid(researchId)
    )
    {
        throw new Error(
            "Invalid Research ID"
        );
    }





    const research =
    await ResearchBlock.findById(
        researchId
    );





    if(!research)
    {
        throw new Error(
            "Research not found"
        );
    }





    const text =

    research.title
    +
    " "
    +
    research.content;







    const metadata = {


        summary:

        generateSummary(text),




        keywords:

        generateKeywords(text),




        domain:

        detectDomain(text),




        difficulty:

        detectDifficulty(text),




        topics:

        generateKeywords(text)


    };








    research.summary =
    metadata.summary;



    research.keywords =
    metadata.keywords;



    research.domain =
    metadata.domain;



    research.difficulty =
    metadata.difficulty;



    research.topics =
    metadata.topics;





    await research.save();






    return metadata;


};