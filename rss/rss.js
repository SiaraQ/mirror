$(document).ready(function(){     
  function loadFeed(){ // wrapper function
    $('#divRss').FeedEk({
     FeedUrl : 'http://www.tvn24.pl/najwazniejsze.xml',
     MaxCount : 6,
     ShowDesc : true,
     ShowPubDate: false,
     DateFormatLang:"pl",
    TitleLinkTarget:'_blank',
    }); 
  } // /wrapper
  loadFeed();
  setInterval(loadFeed, 60000);
});
