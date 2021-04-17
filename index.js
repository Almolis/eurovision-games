let words = ["dance", "alone", "fire", "desire", "fly", "love", "wave", "crime", "soul", "dream", "sleep", "kiss", "two", "number", "don't", "life", "take", "every", "angel", "never", "ever", "thing", "some", "eyes", "your", "my", "devil", "sing", "music", "forever", "know", "all", "heard", "wing", "star", "why", "sky", "once", "mind", "way", "again", "like", "game", "whole", "story", "believe", "me", "you", "true", "hurt", "feel", "I", "out", "in", "up", "down", "mind", "day", "night", "give", "touch", "hear", "yeah", "one", "any", "world"]



let nextWord = document.querySelector(".next-word"); 
nextWord.addEventListener("click", function() {
    let randomWord = words[Math.floor(Math.random()*words.length)]
    document.getElementById("word").innerHTML = randomWord;
  });


  