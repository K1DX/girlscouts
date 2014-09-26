if (Stats.find().count() === 0) {
  Stats.insert({text: "The Girl Scouts of the United States of America (GSUSA) was founded by Juliette Gordon Low in 1912."});
  Stats.insert({text: "I've got something for the girls of Savannah, and all of America, and all the world, and we're going to start it tonight!"});
  Stats.insert({text: "GSUSA aims to empower girls and to help teach values such as honesty, fairness, courage, compassion, character, sisterhood, confidence, and citizenship through activities."});
  Stats.insert({text: "A 1994 Chronicle of Philanthropy poll showed that the Girl Scouts was ranked by the public as the eighth “most popular charity/non-profit in America” of over 100 charities."});
  Stats.insert({text: "The first Girl Scout troop meeting was organized on March 12, 1912 with just 18 girls."});
  Stats.insert({text: "From its inception, the Girl Scouts has been organized and run exclusively by women, for girls and women."});
  Stats.insert({text: "The Girl Scouts started with 18 members on 1912. By 1920 there were nearly 70,000 members."});
  Stats.insert({text: "Started in 1912, by 1923 the GSUSA had branches in every state of the union, Alaska, Hawaii and Puerto Rico and a total membership of 125,738 girls."});
  Stats.insert({text: "In 2013 there were over 3.2 million Girl Scouts: 2.3 million girl members and 890,000 adult members in the United States."});
  Stats.insert({text: "More than 50 million American women have participated in the Girl Scouts. Through its membership in the WAGGGS, GSUSA girls and adults are among over 10 million members in 145 countries."});
  Stats.insert({text: "The current Girl Scouts of the USA logo was adopted in 2010, based on Saul Bass's 1978 logo."});
  Stats.insert({text: "Among the many famous American Girl Scouts are Dakota Fanning, Lucille Ball, Katie Couric, and Elizabeth Dole."});
  Stats.insert({text: "Beginning with Lou Henry Hoover, the incumbent First Lady has served as the Honorary President of GSUSA."});
  Stats.insert({text: "Lou Henry Hoover was also the actual President of the Girl Scouts from 1922–1925 and Chairman of the National Board of Directors from 1925–1928."});
  Stats.insert({text: "During World War I and World War II, girls involved in Scouts helped the Allied forces by selling defense bonds, growing victory gardens, and collecting waste fat and scrap iron."});
  Stats.insert({text: "Over twenty of NASA’s career astronauts were former Girl Scouts."});
  Stats.insert({text: "The first American woman to spacewalk was a former Girl Scout, Dr. Kathryn Sullivan."});
  Stats.insert({text: "From 1917 until 1979 Girl Scouts published a magazine, originally called The Rally (1917–1920) and then The American Girl"});
  Stats.insert({text: "The first Girl Scouts were called Girl Guides"});
  Stats.insert({text: "Girl Scouts who are registered individually and not part of a troop or group are called Juliettes"});
  Stats.insert({text: "The highest award you can earn in Girl Scouts is called the Golden Award."});
  Stats.insert({text: "There are the six levels of Girl Scouts (Daisy, Brownie, Junior, Cadette, Senior, Ambassador)"});
  Stats.insert({text: "The Girl Scout motto is “Be Prepared”."});
}

if(Stories.find().count() === 0) {
  Stories.insert({thenPath: "/stories/before.png", nowPath: "/stories/after.png", beforeCaption: "I was shy", afterCaption: "I speak at tech conferences"});
  Stories.insert({thenPath: "/stories/before.png", nowPath: "/stories/after.png", beforeCaption: "I was a concept", afterCaption: "I'm a racer"});
  Stories.insert({thenPath: "/stories/before.png", nowPath: "/stories/after.png", beforeCaption: "I was made of letters", afterCaption: "I'm made of carbon"});
  Stories.insert({thenPath: "/stories/before.png", nowPath: "/stories/after.png", beforeCaption: "I was a vector drawing", afterCaption: "I'm a full-colored png"});
}
