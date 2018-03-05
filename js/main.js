// Horoscope information <p> are from this site: http://www.123newyear.com/zodiac-signs/
// :)

// setting each sign variable an object
var signAquarius = {
    img: "https://3.bp.blogspot.com/-tA05Y0kG2Dc/WZrvGHeKINI/AAAAAAAADuA/BhDwOo3YKU0J_hMxZDqBUarrUbDHAtFcACLcBGAs/s320/aquarius-2018-horoscopes.png",
    title: "Aquarius",
    info: "Aquarians are extremely vulnerable and sensitive. Although you may often find them being surrounded by many friends but in reality they rarely have close friends and acquaintances. Aquarius is a universal sign which makes them public people. Hence Aquarians are often associated with clubs, organizations and forums and enthusiastically participate in intellectual discussions. Aquarians are great communicators as long as they are within their mental realm."
}
var signPisces = {
    img: "https://www.the-astrology-of-love.com/wp-content/uploads/2017/02/Pisces.png",
    title: "Pisces",
    info: "Pisceans live in their imaginary world that barely has a connection with the reality. They love to look at the world through a rosy window. When challenged by reality, Pisceans have the tendency to retreat into their world of imagination."
}
var signAries = {
    img: "https://www.the-astrology-of-love.com/wp-content/uploads/2017/02/Aries.png",
    title: "Aries",
    info: "Aries demonstrate strong personality. They have strong leadership qualities and honest and straightforward. Aries often have strong determination and can’t be deterred by failures.Aries are always eager for action. They take up to leadership spontaneously. But they don’t judge the pros and cons of a situation before acting. This also makes them vulnerable."
}
var signTaurus = {
    img: "http://www.pngmart.com/files/5/Taurus-PNG-Pic.png",
    title: "Taurus",
    info: "Taureans are noted for their determination and zeal. It is not easy to distract a Taurian from his goal once he has set his target. He would stay focused on his target and would continuously strive to achieve it.Taureans attach high value to simplicity and functionality. They often live a life that is simple and devoid of luxury."
}
var signGemini = {
    img: "https://blog-cdn.californiapsychics.com/horoscope/wp-content/themes/CP-Horoscopes/assets/images/icons/gemini.png",
    title: "Gemini",
    info: "Geminis are full of duality. They always look to a situation from dual perspective. Geminis are characterized by inconstancy and dual nature. Geminis therefore always stay confused about their feelings.Geminis however are strong communicators and express good control over language. They are often found to have knowledge over several languages."
}
var signCancer = {
    img: "https://cultureastrology.com/img/cancer.png",
    title: "Cancer",
    info: "Cancerians are emotional. Their lives are often inflicted with mood shifts. You can find a Canerian in different moods even during a day.The true emotion of Cancer however is hidden behind their composure. But they are soft creatures and can be hurt easily by unkind words.People of the Cancer zodiac sign can be prone to depression and other mental issues. However, cancers are great family people and enjoy big families around them."
}
var signLeo = {
    img: "https://2.bp.blogspot.com/-ro024bwN9CU/WZbg1McgPmI/AAAAAAAADsI/JhgOR4ih750VP6HNyZvN_oxeNcsygW8GgCLcBGAs/s1600/leo-horoscope-2018.png",
    title: "Leo",
    info: "Leos are warm spirited. They are full of energy and always eager to jump into action. Leos crave for recognition and admiration. Leos always love to be at the centre of attraction. They strive to reach to the top in whatever they do. Leos always love to be surrounded with large crowd and admirers. However, they are often unkind to criticism and don’t take the words of critics lightly.Leos are very ambitious and choose their acquaintances carefully. They aspire for social recognition."
}
var signVirgo = {
    img: "https://cultureastrology.com/img/virgo.png",
    title: "Virgo",
    info: "Virgos have a keen sense of good and bad and for that they are highly discriminating. They have an intuitive sense to identify wrong motives in people. Hence, Virgos exercise extreme caution in what they do.The virgin defines purity and therefore they are endowed with the ability to distinguish the good from the bad. Hence, Virgos are also cleanliness freaks. Despite their intelligence Virgos often remain confused about the decisions they make in their life. Also, you will not find Virgos teeming with activities."
}
var signLibra = {
    img: "https://blog-cdn.californiapsychics.com/horoscope/wp-content/themes/CP-Horoscopes/assets/images/icons/libra.png",
    title: "Libra",
    info: "Libra is an active sign and members born under the sign are endowed with high energy. But Librans also tend to run out of their energy soon.The Libra is the ‘balance’ and members of this sign have a very balanced mind. They can be found in settling disputes often. Librans always try to maintain harmony and balance. They are also very level headed and have a keen sense for justice. Therefore, their suggestions are often highly sought after by their friends and kins.Librans are two faceted characters. They both have the cheerfulness and darkness in them. Librans have phases of heightened activities but they can easily slip into a phases of complete inactivity and apathy as well."
}
var signScorpio = {
    img: "http://acharyag.com/images/rashi-2.png",
    title: "Scorpio",
    info: "Scorpions are most diverse in nature and therefore present the most interesting study. Scorpios hold grudge and would wait patiently for the right moment to strike. They are not likely to forget any act of betrayal or treachery. For Scorpios what is implied is more fascinating than the obvious.Scorpios are often described as egoists. However, some of the positive traits of Scorpios are- diplomacy, intuition, intelligence, engaging, resolute, spirituality and sensitivity."
}
var signSagittarius = {
    img: "https://blog-cdn.californiapsychics.com/horoscope/wp-content/themes/CP-Horoscopes/assets/images/icons/sagittarius.png",
    title: "Sagittarius",
    info: "Sagittarians are the incurable optimists. They are always looking at the positive side of a thing. Their optimism can’t be dampened by hardships or negative results.Sagittarians often are outdoor people. They will take interest in all sorts of sports and outdoor activities. They are also adventures in nature. Although they are true to their faults but can also turn completely deaf to criticism and turn down suggestions."
}
var signCapricorn = {
    img: "https://blog-cdn.californiapsychics.com/horoscope/wp-content/themes/CP-Horoscopes/assets/images/icons/capricorn.png",
    title: "Capricorn",
    info: "Members of this sign has an insatiable desire to climb higher and during this course they can also become selfish and might not hesitate to sacrifice other’s interests in fulfilling their goals.Capricorns may seem risk averse but in reality they carefully plan all their moves ahead and rehearse them to perfection."
}

// Press enter to click button
var input = document.getElementById("inputsign");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("mybtn").click();
    }
});

//function for onclick --> when user clicks button this function runs and matches the input with the correct sign and then outputs the values in blank tags in the HTML
function getSign() {
    var sign = document.getElementById("inputsign").value
    var lowSign = sign.toLowerCase()
    if(lowSign == "aquarius") {
        document.getElementById("signimg").src = signAquarius.img
        document.getElementById("sign").innerHTML = signAquarius.title
        document.getElementById("signinfo").innerHTML = signAquarius.info
    } 
    else if(lowSign == "pisces") {
        document.getElementById("signimg").src = signPisces.img
        document.getElementById("sign").innerHTML = signPisces.title
        document.getElementById("signinfo").innerHTML = signPisces.info
    } 
    else if(lowSign == "aries") {
        document.getElementById("signimg").src = signAries.img
        document.getElementById("sign").innerHTML = signAries.title
        document.getElementById("signinfo").innerHTML = signAries.info
    } 
    else if(lowSign == "taurus") {
        document.getElementById("signimg").src = signTaurus.img
        document.getElementById("sign").innerHTML = signTaurus.title
        document.getElementById("signinfo").innerHTML = signTaurus.info
    } 
    else if(lowSign == "gemini") {
        document.getElementById("signimg").src = signGemini.img
        document.getElementById("sign").innerHTML = signGemini.title
        document.getElementById("signinfo").innerHTML = signGemini.info
    } 
    else if(lowSign == "cancer") {
        document.getElementById("signimg").src = signCancer.img
        document.getElementById("sign").innerHTML = signCancer.title
        document.getElementById("signinfo").innerHTML = signCancer.info
    } 
    else if(lowSign == "leo") {
        document.getElementById("signimg").src = signLeo.img
        document.getElementById("sign").innerHTML = signLeo.title
        document.getElementById("signinfo").innerHTML = signLeo.info
    } 
    else if(lowSign == "virgo") {
        document.getElementById("signimg").src = signVirgo.img
        document.getElementById("sign").innerHTML = signVirgo.title
        document.getElementById("signinfo").innerHTML = signVirgo.info
    } 
    else if(lowSign == "libra") {
        document.getElementById("signimg").src = signLibra.img
        document.getElementById("sign").innerHTML = signLibra.title
        document.getElementById("signinfo").innerHTML = signLibra.info
    } 
    else if(lowSign == "scorpio") {
        document.getElementById("signimg").src = signScorpio.img
        document.getElementById("sign").innerHTML = signScorpio.title
        document.getElementById("signinfo").innerHTML = signScorpio.info
    } 
    else if(lowSign == "sagittarius") {
        document.getElementById("signimg").src = signSagittarius.img
        document.getElementById("sign").innerHTML = signSagittarius.title
        document.getElementById("signinfo").innerHTML = signSagittarius.info
    } 
    else if(lowSign == "capricorn") {
        document.getElementById("signimg").src = signCapricorn.img
        document.getElementById("sign").innerHTML = signCapricorn.title
        document.getElementById("signinfo").innerHTML = signCapricorn.info
    } 
    else {
        alert("Opps! Invalid input. Please try again :)")
    };
}
