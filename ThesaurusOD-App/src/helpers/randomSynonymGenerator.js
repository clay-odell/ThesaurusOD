const randomSynonymGenerator = async ({ response }) => {
    if (!response || !response.length) {
        throw new Error("Invalid response structure");
    }

    let allSynonyms = [];
    for (let i = 0; i < response.length; i++){
        for(let j = 0; j <response[i].meta.syns.length; j++ ){
            const synArr = response[i].meta.syns[j];
            allSynonyms.push(...synArr);
        }
    }
    const randomIdx = Math.floor(Math.random() * allSynonyms.length);
    const randomSynonym = allSynonyms[randomIdx];

    return randomSynonym;
}
   
export default randomSynonymGenerator;