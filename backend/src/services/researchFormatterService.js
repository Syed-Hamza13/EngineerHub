const formatResearch =
(rawResponse)=>{


    return {

        problemUnderstanding:
        rawResponse.problem ||
        "",


        existingSolutions:
        rawResponse.solutions ||
        [],


        recommendedTechnologies:
        rawResponse.technologies ||
        [],


        algorithms:
        rawResponse.algorithms ||
        [],


        architecture:
        rawResponse.architecture ||
        "",


        implementationSteps:
        rawResponse.steps ||
        [],


        researchGap:
        rawResponse.gap ||
        "",


        futureScope:
        rawResponse.future ||
        ""

    };


};


module.exports = {
    formatResearch
};