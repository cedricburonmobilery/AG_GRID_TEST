

var t: any = [];
  var words:string[] = ["logement_", "locataire_","proprietaire_"];
  var generateHex = () => Math.round(Math.random() * 256.0*256.0*256.0).toString(16).padStart(6, "0");
  var generateURL = () => `https://via.placeholder.com/25/${generateHex()}/${generateHex()}`
  for (let i = 0; i < 500; i++) {
    let imagesList: any = [];
    for (let j = 0; j < Math.round(Math.random()*10); j++) {
      imagesList.push({ key: "k_"+i+"_"+j, src: generateURL(), desc: words[0]+"_"+i+"_"+j });
    }
    t.push({
      adress: ""+i+" rue des moumoutes, 35300, Paris",
      loc: words[1] + i, 
      prop: words[2] + i, 
      price: i, 
      imgs: imagesList
    })
  };

  export {t as data};