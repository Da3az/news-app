
module.exports = {
  images: {
      domains: [
        "static01.nyt.com"
      ],
  },
};

  
  // async function getSources(){
  //   const sources = await fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=b8eb5e7e0a6848fb854b327cee7fa13e').then(res => res.json())
  //   console.log(sources)
  //   return sources.sources
  // }

  // module.exports = {
  //   images : {
  //     domains: [
  //       "https://abcnews.go.com",
  //       "http://www.abc.net.au/news",
  //       "https://www.aftenposten.no",
  //       "http://www.aljazeera.com",
  //       "http://www.ansa.it",
  //       "http://www.argaam.com",
  //       "http://arstechnica.com",
  //       "https://arynews.tv/ud/",
  //       "https://apnews.com/",
  //       "http://www.afr.com",
  //       "https://www.axios.com",
  //       "http://www.bbc.co.uk/news",
  //       "http://www.bbc.co.uk/sport",
  //       "http://www.bild.de",
  //       "https://br.blastingnews.com",
  //       "http://www.bleacherreport.com",
  //       "http://www.bloomberg.com",
  //       "http://www.breitbart.com",
  //       "http://www.businessinsider.com",
  //       "http://uk.businessinsider.com",
  //       "https://www.buzzfeed.com",
  //       "http://www.cbc.ca/news",
  //       "http://www.cbsnews.com",
  //       "http://us.cnn.com",
  //       "http://cnnespanol.cnn.com/",
  //       "https://www.ccn.com",
  //       "http://www.tagesspiegel.de",
  //       "http://www.zeit.de/index",
  //       "http://www.elmundo.es",
  //       "https://www.engadget.com",
  //       "http://www.ew.com",
  //       "http://espn.go.com",
  //       "http://www.espncricinfo.com/",
  //       "http://business.financialpost.com",
  //       "http://www.focus.de",
  //       "http://www.football-italia.net",
  //       "http://fortune.com",
  //       "http://www.fourfourtwo.com/news",
  //       "http://www.foxnews.com",
  //       "http://www.foxsports.com",
  //       "http://www.globo.com/",
  //       "https://news.google.com",
  //       "https://news.google.com",
  //       "https://news.google.com",
  //       "https://news.google.com",
  //       "https://news.google.com",
  //       "https://news.google.com",
  //       "https://news.google.com",
  //       "https://news.google.com",
  //       "https://news.google.com",
  //       "https://news.google.com",
  //       "https://news.google.com",
  //       "https://news.google.com",
  //       "http://www.gp.se",
  //       "http://www.gruenderszene.de",
  //       "https://news.ycombinator.com",
  //       "http://www.handelsblatt.com",
  //       "http://www.ign.com",
  //       "https://www.ilsole24ore.com",
  //       "http://www.independent.co.uk",
  //       "http://www.infobae.com/?noredirect",
  //       "https://www.infomoney.com.br",
  //       "http://www.lagaceta.com.ar",
  //       "http://www.lanacion.com.ar",
  //       "http://www.repubblica.it",
  //       "http://www.lemonde.fr",
  //       "https://lenta.ru",
  //       "https://www.lequipe.fr",
  //       "https://www.lesechos.fr",
  //       "http://www.liberation.fr",
  //       "http://www.marca.com",
  //       "https://mashable.com",
  //       "http://www.medicalnewstoday.com",
  //       "http://www.msnbc.com",
  //       "http://www.mtv.com/news",
  //       "http://www.mtv.co.uk/news",
  //       "http://news.nationalgeographic.com",
  //       "https://www.nationalreview.com/",
  //       "http://www.nbcnews.com",
  //       "http://www.news24.com",
  //       "https://www.newscientist.com/section/news",
  //       "http://www.news.com.au",
  //       "https://www.newsweek.com",
  //       "http://nymag.com",
  //       "https://www.nextbigfuture.com",
  //       "http://www.nfl.com/news",
  //       "https://www.nhl.com/news",
  //       "https://www.nrk.no",
  //       "https://www.politico.com",
  //       "http://www.polygon.com",
  //       "https://www.rbc.ru",
  //       "http://www.recode.net",
  //       "https://www.reddit.com/r/all",
  //       "http://www.reuters.com",
  //       "https://russian.rt.com",
  //       "https://www.rte.ie/news",
  //       "https://www.rtlnieuws.nl/",
  //       "https://sabq.org",
  //       "http://www.spiegel.de",
  //       "https://www.svd.se",
  //       "https://t3n.de",
  //       "http://talksport.com",
  //       "https://techcrunch.com",
  //       "https://techcrunch.cn",
  //       "http://www.techradar.com",
  //       "http://www.theamericanconservative.com/",
  //       "https://www.theglobeandmail.com",
  //       "http://thehill.com",
  //       "http://www.thehindu.com",
  //       "http://www.huffingtonpost.com",
  //       "https://www.irishtimes.com",
  //       "https://www.jpost.com/",
  //       "https://www.theladbible.com",
  //       "http://thenextweb.com",
  //       "https://www.thesportbible.com",
  //       "http://timesofindia.indiatimes.com",
  //       "http://www.theverge.com",
  //       "http://www.wsj.com",
  //       "https://www.washingtonpost.com",
  //       "https://www.washingtontimes.com/",
  //       "http://time.com",
  //       "http://www.usatoday.com/news",
  //       "https://news.vice.com",
  //       "https://www.wired.com",
  //       "https://www.wired.de",
  //       "http://www.wiwo.de",
  //       "http://xinhuanet.com/",
  //       "http://www.ynet.co.il"
  //     ]
  //   }
  // }
  

  
  
  