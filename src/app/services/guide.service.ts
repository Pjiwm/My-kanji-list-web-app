import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { Guide } from '../models/guide'

@Injectable({
  providedIn: 'root'
})
export class GuideService {
  private guides: Guide[]
  baseUrl: string = 'https://mykanjilist-backend.herokuapp.com/api'
  constructor(private http: HttpClient, private router: Router) {
    this.guides = [
      {
        id: 1,
        title: 'How to learn kanji',
        content: "var text = @\"" +
          "I spent the first year of my Japanese studies lackadaisically studying kanji the way that everyone told me to study kanji: write each character a zillion times until it sticks in your brain. And, yeah, that was a huge disaster. So, after a year of studying, I knew a pretty solid smattering of Japanese, but I only knew about 500 kanji, despite having studied the kanji a lot." +
          "" +
          "You might be thinking that 500 kanji is a pretty solid amount, but with kanji it’s kind of an all-or-nothing deal. Either you know them or you don’t. Knowing only the most common kanji is certainly better than nothing, but if you can’t read all the common-use characters, you’re still illiterate. And being illiterate sucks." +
          "" +
          "After that year of studying Japanese without knowing the kanji, I quit studying Japanese completely. I didn’t study Japanese at all for about a year after that. I left Japan and just resigned myself to failure. I thought I can’t do this. It’s not possible for me." +
          "" +
          "Then, about a year after that, I decided to try studying with a new system. Basically, I used a very rudimentary version of the system that I will walk you through in this book. It wasn’t nearly as fine-tuned at that time, but I still managed to get drastically different results." +
          "" +
          "I started over, and I learned all 2,136 of the Jōyō Kanji in about 90 days. Not bad, right? But let’s round up and say 100 days." +
          "" +
          "100 days." +
          "" +
          "It’s hard to put time into perspective when studying a language. I think that maybe this is why so many of us get discouraged and quit studying somewhere along the line. We expect to learn everything overnight. When we google “how to learn Japanese” or “how to learn kanji” or “how to master Spanish,” we always add words like fast, easily, in 3 months, whatever. I called my last e-book “How to Learn Japanese in 1 Year.” But the thing is, time frames are absolutely meaningless. And I think that searching for accelerated methods for learning languages, though potentially beneficial, is often nothing more than a lack of commitment." +
          "" +
          "I mean, I get it. I’m human, too. I love instant gratification. Modern-day society has conditioned me to expect it everywhere I go. But there is so much more satisfaction in achieving something that you really have to work for. And I think that that’s the type of mindset that is conducive to making great achievements—not just in language-learning, but in life in general. Yes, we should take the fastest route to our destination. However, the fastest route may still take quite a long time, and that’s okay." +
          "" +
          "What I’m trying to say is that 100 days is both a very long time and a very short time." +
          "" +
          "100 days is a long time, because we’re talking about 100 days in a row. Stop and actually think about where you were about 3 months ago. Between then and now, how many times did you go to work? How many times did you talk on the phone? How many minutes or hours did you spend watching TV shows, playing video games, reading books, looking at Facebook, hanging out with your friends? How often did you feel tired? How often did you feel like you really, really, really didn’t want to go to work? Because we are talking about studying the kanji for at least one hour every single one of those days. That’s a long time!" +
          "" +
          "On the other hand, if you take a step back, 100 days is nothing. I started studying Japanese over 1,000 days ago. If I had spent my first 100 days learning all of the kanji in the method described in this book, then I would be much better at the language today. If I had followed all of the advice in this guide, I would be able to destroy my current level of Japanese. Looking back, I see so much wasted effort. So much wasted time. But, whatever. Live and learn… and share what you’ve learned, yeah?" +
          "" +
          "So in my guide we’re shooting for about 100 days. Specifically, we’re going to try to learn all of the 2,136 Joyo Kanji in 97 days. However, you don’t need to strictly follow the schedules and advice in this guide. Go at your own pace. Decide what you like, what works for you. There are people that like to take the approach that I took: a painful 100-day intensive kanji study session. But if that doesn’t work for you, then don’t do it." +
          "" +
          "Do 10 new kanji a day and learn all of them in about 210 days or so." +
          "" +
          "Or do 5 new kanji a day and learn them in 420 days. That’s only a little bit over a year. And 5 characters per day isn’t too stressful. And if you miss a few days studying new kanji, it’s not a big deal (because the study system allows for that)." +
          "" +
          "Maybe you’re thinking, over 400 days?! Forget it! I know that feeling. The thing is, though, that time is going to pass. 400 days will come and go, and at the end of them, you will either (A) know the kanji, or (B) not know the kanji. There is no gray area here. It is that simple. A or B. Your choice." +
          "\";",
        tags: ['girls', 'reading', 'names'],
        creationDate: new Date("2020-01-16"),
      },
      {
        id: 2,
        title: 'How to learn girl characters for names',
        content: "Jinmeiyō kanji (人名用漢字, Japanese pronunciation: [dʑimmeːjoːkaꜜɲdʑi], lit. Chinese characters for use in personal names) are a set of 863 Chinese characters known as \"name kanji\" in English. They are a supplementary list of characters that can legally be used in registered personal names in Japan, despite not being in the official list of \"commonly used characters\" (jōyō kanji). \"Jinmeiyō kanji\" is sometimes used to refer to the characters in both the jinmeiyō and jōyō lists.[citation needed]" +
          "" +
          "A ministerial decree of 1946 limited the number of officially sanctioned kanji for public use to the 1,850 tōyō kanji. Only kanji on this list were acceptable as registered names, despite the fact that the list excluded many kanji frequently used in names up to that point. However, on May 25, 1951, the cabinet extended the set of characters usable in names by specifying the first 90 jinmeiyō kanji." +
          "" +
          "Over the years, the Minister of Justice has increased the number of name kanji, and has a plan for further addition in response to requests from parents. As of April 30, 2009, there were 985 jinmeiyō kanji, but this number was reduced to 861 in late 2010 when 129 jinmeiyō characters were transferred to the jōyō kanji list, and 5 characters were transferred from the jōyō kanji list to jinmeiyō characters. In 2015 and 2017, 2 kanji in total were added to the jinmeiyō list, making the total number 863." +
          "" +
          "In Japan, name kanji are taught at the junior-high level.[citation needed]",
        tags: ['numbers', '1st grade', 'easy'],
        creationDate: new Date("2020-01-16"),
      },
      {
        id: 3,
        title: 'How to learn boy names',
        content: "Jinmeiyō kanji (人名用漢字, Japanese pronunciation: [dʑimmeːjoːkaꜜɲdʑi], lit. Chinese characters for use in personal names) are a set of 863 Chinese characters known as \"name kanji\" in English. They are a supplementary list of characters that can legally be used in registered personal names in Japan, despite not being in the official list of \"commonly used characters\" (jōyō kanji). \"Jinmeiyō kanji\" is sometimes used to refer to the characters in both the jinmeiyō and jōyō lists.[citation needed]" +
          "" +
          "A ministerial decree of 1946 limited the number of officially sanctioned kanji for public use to the 1,850 tōyō kanji. Only kanji on this list were acceptable as registered names, despite the fact that the list excluded many kanji frequently used in names up to that point. However, on May 25, 1951, the cabinet extended the set of characters usable in names by specifying the first 90 jinmeiyō kanji." +
          "" +
          "Over the years, the Minister of Justice has increased the number of name kanji, and has a plan for further addition in response to requests from parents. As of April 30, 2009, there were 985 jinmeiyō kanji, but this number was reduced to 861 in late 2010 when 129 jinmeiyō characters were transferred to the jōyō kanji list, and 5 characters were transferred from the jōyō kanji list to jinmeiyō characters. In 2015 and 2017, 2 kanji in total were added to the jinmeiyō list, making the total number 863." +
          "" +
          "In Japan, name kanji are taught at the junior-high level.[citation needed]",
        tags: ['names', 'boy', 'guys', 'reading'],
        creationDate: new Date("2020-01-16"),
      },
      {
        id: 4,
        title: 'Guide for reading menus',
        content: "If you're a traveler coming to Japan I'm sure eating some great Japanese food is high on everyone's agenda.  By the very virtue of you traveling to Japan it says that you are somewhat adventurous. So you'll be walking around different cities and popping your head into many restaurants. At least you should be in my opinion. There is no reason to play it safe and find the nearest McDonalds. You will undoubtedly find restaurants where the menu is in Kanji or Japanese only and the owners will not speak your language. I admit that would be a difficult but not insurmountable problem. You could turn around and walk out or you could see what everyone else is eating and point to their dishes. Or maybe the menu has pictures. Or you could point to the plastic food plates outside the restaurant for your order.  Some of the best meals and adventures are found by just walking in and see what happens. Sometimes you strike out, but more often than not, you'll end up having a great experience." +
          "" +
          "Most people coming to Japan make an effort to learn some Japanese basics. The study list incudes a little bit of the spoken and written language and perhaps some Japanese customs.  A huge task that most don't deal with though is learning those Chinese looking characters called Kanji. With the right approach you can learn many kanji in a reasonable amount of time. But for most, you just want to get by, and perhaps learn some of the most common or most important kanji that you might encounter. " +
          "" +
          "From a food perspective, I may be able to shed some light on the kanji problem. You want to know if the menu says raw or cooked. You'd like to know if you're ordering chicken, beef, pork, eggs, or vegetables. You'd like to know if it's a soup, salad, and if it is baked or boiled. Most menus will have this information so it's up to you to figure it out or bring a good interpreter along." +
          "" +
          "I have developed a list of what I call Key Food Kanji. Today's installment is all about meat." +
          "" +
          "For this first series, we will start with beef, pork, and chicken related dishes. Most restaurants will serve something in this category. Unless you have somehow stumbled into a tofu restaurant." +
          "" +
          "肉　\"niku\" meat (beef, pork, chicken)" +
          "牛　\"gyu\" beef " +
          "豚 \"buta\"pork" +
          "牛肉 \"gyuniku\" [ぎゅうにく] beef" +
          "牛丼 \"gyudon\" [ぎゅうどん] rice covered with beef and vegetables" +
          "和牛 [わぎゅう] Wagyu beef, Japanese beef" +
          "近江牛 [おうみぎゅう, おうみうし] Omi beef" +
          "米沢牛 [よねざわぎゅう] Yonezawa beef" +
          "松阪牛 [まつさかうし] Matsusaka beef" +
          "神戸肉 [こうべにく] Kobe beef" +
          "カルビ \"kalbi\" Korean-style beef ribs" +
          "すき焼き, すき焼,  [すきやき, スキヤキ] sukiyaki, thin slices of beef, cooked with various vegetables in a table-top cast-iron pan" +
          "タンtongue of beef, pork, etc." +
          "豚肉 \"butaniku\" [ぶたにく, とんにく] pork" +
          "豚めし, 豚飯  \"butameshi\" [ぶためし] pork with rice" +
          "豚丼  \"butadon\" [ぶたどん, とんどん] rice covered with pork and vegetables" +
          "豚カツ \"tonkatsu\" [とんカツ] pork cutlet" +
          "黒豚 \"kurobuta\" [くろぶた] Berkshire pig" +
          "鶏 \"tori\" [にわとり, とり] (domestic) chicken, chicken (meat)" +
          "焼き鳥, 焼鳥 [やきとり] yakitori, chicken pieces (or sometimes beef or pork offal) grilled on a skewer" +
          "若鳥, 若鶏 \"wakadori\" [わかどり] chick, chicken" +
          "チキン, チッキンchicken" +
          "笹身 \"sasami\" [ささみ] high-quality chicken breast meat" +
          "手羽先 \"tebasaki\" [てばさき] (tip section of) chicken wing, second segment of chicken wing" +
          "鴨, 鳧 \"kamo\" [,カモ] duck, easy mark, sucker, sitting duck" +
          "餃子 \"gyoza\" [ギョーザ, ギョウザ, チャオズ] pot sticker, gyoza, crescent-shaped pan-fried dumplings stuffed with minced pork and vegetables" +
          "So you can see the patterns. Beef, pork, and chicken. You probably also recognized Kobe beef and saw a few other types listed. In Japan Kobe is just one choice of many possible quality beef choice. Some argue that Matsusaka beef is actually better. Others say the Omi is king.  If you're in a major city you can find restaurants that serve it and you can find it in some of the larger food basements or \"depachika.\" But that may be another post in itself." +
          "" +
          "In the next installment we'll cover menu basics like raw, baked, deep fried, vegetables, etc. and some key restaurant phrases",
        tags: ['food', 'menus', 'restaurant'],
        creationDate: new Date("2020-01-16"),
      },
      {
        id: 5,
        title: 'Learn Kanji Calligraphy',
        content: "Many Japanese learners have a love/hate relationship with kanji. There are too many readings, they look too similar to other characters or are just really hard to write neatly—especially on government forms. One way to improve your kanji writing, as well as learn a new skill or perhaps even find a surprising hidden talent of your own, is to try shodo (Japanese calligraphy)." +
          "" +
          "What is shodo?" +
          "Shodo, or “the way of writing,” quite literally means calligraphy in Japanese. Originally brought to Japan from China between the 1st and 5th centuries, it developed over the years into a unique system of writing that includes the hiragana and katakana of today. There’s even a Japanese Calligraphy Association where members can take part in and share the joys of one of Japan’s oldest art forms." +
          "" +
          "In terms of modern calligraphy, there are three main styles of writing. The easiest is called kaisho, or block style lettering. Next is gyosho, or semi-cursive and, finally,    sosho, or the cursive style. Sosho is the most difficult to master, taking casual calligraphers years, sometimes decades to fully master." +
          "" +
          "For those interested in a more in-depth history of this writing system, I strongly encourage you to check out the entry on it at Beyond Calligraphy. If you have six minutes to spare, this video from the University of Houston System Coursera course explains a bit of the history and development of different Japanese scripts up to the Edo era." +
          "" +
          "The tools you need" +
          "As shodo is a traditional art form, it has this image of being an incredibly difficult or expensive hobby to have — and it is, if you’ve been at it for several years and have advanced to a high level of skill." +
          "" +
          "Learning Japanese Calligraphy" +
          "You can find mini calligraphy sets like these in traditional shops in the Asakusa and Ueno areas." +
          "" +
          "The four most basic tools are bunbo shihom, also known as the Four Treasures of the Study, are: fude (brush), washi (Japanese-style paper), sumi (ink) and suzuri (ink stone)." +
          "" +
          "Learning Japanese Calligraphy" +
          "" +
          "Brushes come in various sizes and in prices ranging from ¥100 to tens of thousands of yen. Cheaper brushes have plastic handles and bristles made from synthetic materials, while others can be wood, bamboo or horn based, with bristles made from goat, sheep, horse, boar or deer hair. When getting started with calligraphy, most people prefer to start with a medium or large brush, for ease of use and in order to get the finer details of the characters written correctly." +
          "" +
          "Learning Japanese Calligraphy" +
          "" +
          "If you’d rather begin using something less daunting than a full brush, a fudepen (brush pen) is your best option. It’s a brush with ink inside the handle that you have to “pop” open and squeeze in order to get flowing. The inks are usually available in black, light grey and red, but you can also find water color fudepens in a rainbow of shades." +
          "" +
          "Learning Japanese Calligraphy" +
          "" +
          "Washi paper is readily available in art stores, crafting stores, home centers, larger book stores and even in some supermarkets. You can find a variety of colors, sizes, and textures, although traditional calligraphy calls for long, relatively smooth sheets of white or off-white paper." +
          "" +
          "Learning Japanese Calligraphy" +
          "" +
          "For practical purposes, beginners should stick with hanshi, or practice paper, as it’s much cheaper than washi. These starts from ¥100 a pack versus ¥1,400 plus for 20 sheets of washi." +
          "" +
          "Learning Japanese Calligraphy" +
          "" +
          "Inksticks are just like brushes. They can range in price and quality from ¥150 to well into the ¥70,000-plus range for antique or particularly rare types of ink. They’re made from a hardened mixture of vegetable or pine soot and shaped into a stick. The age, location of the ingredients and their overall quality are what determines the price. Mass produced ones are fine for beginners, but more advanced calligraphers prefer those made between 50-100 years ago for their color, mixing consistency, and ink texture." +
          "" +
          "Learning Japanese Calligraphy" +
          "" +
          "Another option for beginners is bokuju, or bottled ink. This liquid ink is readily available, comes in a variety of colors and is just as reliable as an inkstick when you’re starting out." +
          "" +
          "Learning Japanese Calligraphy" +
          "Plastic inkwells are often reversible, with one side for liquid ink, and the other with space to rub an inkstick." +
          "" +
          "If you use an inkstick, you will need an inkstone or inkwell too. You can easily find plastic or ceramic ones online or in stores, but traditional ones are made from stone and start at the ¥8,000 mark and go up into the millions of yen range. They are beautiful, handmade works of art in the majority of cases and collectors will tell you that without one, you will never see the true depth of beauty a particular inkstick can have." +
          "" +
          "Learning Japanese Calligraphy" +
          "" +
          "A bunchin (paperweight) to hold your paper in place, a shitajiki (undercloth ) to prevent the ink from bleeding through and a fudeoki (brush rest) to keep your brush from leaving ink stains on any surfaces are just as important. Don’t forget the mizusara (water dish), either — that’s where you keep the water used to wet the inkstone." +
          "" +
          "Getting your tools together" +
          "While those are all key pieces for any well practiced calligrapher, if you’re just getting started, you don7t have to spend more than ¥5,000 to be completely satisfied with your tools. The vast majority of the tools a beginner needs can be found at your nearest supermarket or even ¥100 store. There are three options available to beginners:" +
          "" +
          "The straightforward approach: A fudepen and any kind of paper, even a notebook will do." +
          "The school-style approach: A brush, a bottle of ink, hanshi practice paper, a small bowl or soy sauce dish and some newspaper or old flyers." +
          "The water writing approach: A kit that includes a pen to be filled with water and special paper to write on." +
          "If you’re just getting started on your own, those are the only items you really need — and one of them is free if you save up your junk mail. You can substitute regular printer paper for practice paper if you like, but be aware that the ink will likely bleed through whatever paper you decide to use. This is why you’ll need those old newspapers and flyers. The small bowl or soy sauce dish is to pour the ink into — remember not to use it for food afterwards." +
          "" +
          "Please also note: if you open but don’t consistently use your bottle of ink, it will expire and will smell horrible when it does. If you can, try to buy the smallest bottle available when you first get started to save yourself from learning this the hard way." +
          "" +
          "Learning Japanese Calligraphy" +
          "" +
          "If you would rather skip the hassle of spilled ink, save on paper and aren’t fussed about keeping your first attempts to put on the fridge, the water writing approach is your best option. These kits come with everything you need (except the water). All you have to do is open them and brush your heart out over the pre-printed guidelines." +
          "" +
          "To buy your calligraphy supplies online, you should check out the water calligraphy kits on Amazon Japan (here and here), or from the art supply store Sekaido (Japanese only). If you really want to go all out and buy the best items possible, try Pigment Tokyo, and Kyukyodo." +
          "" +
          "How do I get started?" +
          "That depends on which approach you’ve chosen. If you’re using a water calligraphy kit, simply follow the instructions provided in the booklet and you’re good to go." +
          "" +
          "For a fudepen kit, follow the instructions on the pen’s packaging to get the ink flowing. Just remember not to squeeze it too hard or you will overload the brush with ink and your first attempts at writing will look more like Rorschach tests." +
          "" +
          "Liquid ink or an inkstick and stone kits will involve a little more prep work, first. Before you do any calligraphy whatsoever, you’ll need to soak your brush to remove the starch that was put in it to hold its shape. Soak the bristles in water to remove the starch, then let it dry thoroughly with paper towels. Put down a few layers of flyers. newsprint or a cloth, then set your paper over that (with a paperweight if you’ve chosen to use one). For liquid ink, pour it into a small container of some kind, or for an inkstone, pour a few drops of water into the inkstone, then carefully rub the inkstick against that spot until you have some ink." +
          "" +
          "Never let the inkstick sit in water, or rinse it — it well melt and you’ll have wasted your ink. Likewise wash your brushes immediately after use in lukewarm water, until the water runs clear, then dry them with a paper towel and stand them upright in a container. Some ink may have stained the bristles, but that only adds to their charm over time. If they came with a plastic cap, don’t try to force it back over the bristles, as this can damage them." +
          "" +
          "And then what? Well, you’ve got a lot of options. If you can already read Japanese or have studied it, then simply crack open a kanji textbook and follow the instructions for writing each character. Or if you have a favorite character, you can look it up on the KanjiVG website and it will provide the stroke order for you. There are also of course books available, too, such as this one for fudepens specifically or textbooks that teach all the basic steps in Japanese." +
          "" +
          "If you’d rather not use a book though, then both YouTube and Instagram are treasure troves of free beginner calligraphy courses. Three of the best channels on YouTube (in no particular order) are Japanese Calligrapher Takumi, 新宿書道教室 Japanese Calligraphy SHODO Lesson and Gohitsu Shodo Kai. They have playlists specifically for beginners, including tips on how to take care of your calligraphy tools." +
          "" +
          "On Instagram there are plenty of posts showing people’s calligraphy work, but if you’re trying to use it as a study guide, then Shioh.Shodo and Bunkai_Shodo are the best accounts to follow. Both also have their own websites as well." +
          "" +
          "Learning Japanese Calligraphy" +
          "" +
          "Now that you have the tools and the best online instructors available, all you need is some practice and a little luck. If you’re serious about making Japanese calligraphy a hobby and are slightly superstitious about it, then paying a visit to Kameido Tenjin Shrine in Tokyo’s Koto ward is a good idea. There, once you’ve prayed at the shrine itself, you can purchase omamori to help boost your calligraphy prowess, as well as specially stamped calligraphy brushes in small, medium and large sizes.",
        tags: ['caligraphy', 'writing', 'hand-writing'],
        creationDate: new Date("2020-01-16"),
      },
    ]
  }



  postItem(item: any): Observable<Guide> {
    // this.guides.push(item)
    return this.http.post<any>(`${this.baseUrl}/guide/`, item)
  }

  // postItem(item: KanjiList):Observable<KanjiList> {
  //   return this.http.post<any>(`${this.baseUrl}/kanjilist/`, item)
  // }

  putItem(item: any, id: any): Observable<Guide> {
    // const index = this.guides.findIndex((p) => p.id == item.id)
    // this.guides[index] = item
    // this.guides.push(item)
    return this.http.put<any>(`${this.baseUrl}/guide/${id}`, item)
  }

  getById(id: number): Observable<Guide> {
    // return this.guides.find((p) => p.id == id)
    return this.http.get<Guide>(`${this.baseUrl}/guide/${id}`)
  }

  removebyId(id: any) {
    // const index = this.guides.findIndex((p) => p.id == id)
    // this.guides.splice(index, 1)
    return this.http.delete(`${this.baseUrl}/guide/${id}`)
  }

  getAll(): Observable<Guide[]> {
    // return this.guides
    return this.http.get<Guide[]>(`${this.baseUrl}/guide`)
  }

  getNewId() {
    return this.guides[this.guides.length - 1].id + 1
  }
}
