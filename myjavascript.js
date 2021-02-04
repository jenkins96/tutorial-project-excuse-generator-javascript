window.onload = () => {
    document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseGenerator();
    });
}


let excuseGenerator = () => {
    let who = ["Donald Trump", "The Sealion", "Metallica", "Ignacio Santos","Bryan Ruiz", "Beyonce", "El Porcionzón", "The AyA"];
    let action = ["burned", "took the axe and destroyed", "peed", "flushed down the drain", "kissed","kicked", "licked", "smelled"];
    let what = ["my laptop", "my 4Geeks assignment", "my brother", "my private jet plain", "my selfsteem", "my crotch", "my armpit", "my home"];
    let when = ["while I was taking a dump.", "after I ran a marathon.", "before COVID-19.", "right when my crush was passing by.", "while I was fishing."];
    
    let whoIndex = Math.floor(Math.random() * who.length); 
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    return who[whoIndex] + " " + action[actionIndex] + " " + what[whatIndex] + " " + when[whenIndex];
    who.concat(action, what, when);
}
