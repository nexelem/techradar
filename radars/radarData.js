//This is the title for your window tab, and your Radar
document.title = "Nexelem's Technology Radar: 2015 Q1";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//   r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1160;
var w = 1200;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
            {"name":"Tech radar", "pc":{"r":150,"t":135},"movement":"t", "url": "http://nealford.com/memeagora/2013/05/28/build_your_own_technology_radar.html"},
            {"name":"Logs as Data", "pc":{"r":150,"t":95},"movement":"t", "url": "https://blog.logentries.com/2014/04/logs-as-data-what-are-the-top-use-cases-for-your-logs/"},            
            {"name":"Pair Programming", "pc":{"r":120,"t":155},"movement":"t", "url": "http://www.extremeprogramming.org/rules/pair.html"},            
            {"name":"Functional Programming", "pc":{"r":210,"t":150},"movement":"t", "url": "http://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf"},
            {"name":"Polygot Programming", "pc":{"r":290,"t":120},"movement":"c", "url": "http://www.polyglotprogramming.com/"},
            //{"name":"Incremental data warehousing", "pc":{"r":250,"t":165},"movement":"c"},    
            //{"name":"DevOps", "pc":{"r":250,"t":110},"movement":"c"},    
            //{"name":"Polygot Programming", "pc":{"r":180,"t":170},"movement":"c"},    
            //{"name":"Automation of technical tests", "pc":{"r":180,"t":155},"movement":"c"},    
            //{"name":"Capability modelling", "pc":{"r":180,"t":125},"movement":"c"},   
            //{"name":"Service choreography", "pc":{"r":180,"t":105},"movement":"c"},   
            //{"name":"Continuous deployment", "pc":{"r":180,"t":100},"movement":"c"},   
            //{"name":"Evolutionary architecture", "pc":{"r":120,"t":95},"movement":"c"},   
            //{"name":"Coding architects", "pc":{"r":90,"t":170},"movement":"c"},   
            //{"name":"Visualisation and metrics", "pc":{"r":80,"t":150},"movement":"c"},   
            //{"name":"Web as platform", "pc":{"r":80,"t":110},"movement":"c"},   
            //{"name":"Emergent design", "pc":{"r":80,"t":100},"movement":"c"},   
            //{"name":"Evolutionary database", "pc":{"r":70,"t":170},"movement":"c"},   
            //{"name":"Platform roadmaps", "pc":{"r":30,"t":100},"movement":"c"},   
            //{"name":"Build pipelines", "pc":{"r":30,"t":160},"movement":"c"} 
        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [                            
            {"name":"Docker", "pc":{"r":160,"t":75},"movement":"t", "url":"https://www.docker.com/"},            
            {"name":"Bower", "pc":{"r":190,"t":75},"movement":"t", "url":"http://bower.io/"},
            {"name":"Fig", "pc":{"r":210,"t":55},"movement":"t", "url":"http://www.fig.sh/"},
            {"name":"Grunt", "pc":{"r":250,"t":75},"movement":"t", "url":"http://gruntjs.com/"},
            {"name":"Gulp.js", "pc":{"r":250,"t":70},"movement":"t", "url":"http://gulpjs.com/"},
            {"name":"BitBucket", "pc":{"r":280,"t":50},"movement":"c", "url":"https://bitbucket.org/"},   
            {"name":"Kibana", "pc":{"r":285,"t":30},"movement":"c", "url":"http://www.elasticsearch.org/overview/kibana/"},
            {"name":"Logstash", "pc":{"r":278,"t":34},"movement":"t", "url":"http://www.elasticsearch.org/overview/logstash/"},
            {"name":"Reactive Streams / Akka Streams", "pc":{"r":290,"t":40},"movement":"c", "url": "http://www.reactive-streams.org/"},
            {"name":"Vagrant", "pc":{"r":315,"t":30},"movement":"t", "url":"https://www.vagrantup.com/"},
            {"name":"Scalaz", "pc":{"r":250,"t":20},"movement":"t", "url":"http://typelevel.org/projects/scalaz/"},
            {"name":"Spark", "pc":{"r":270,"t":10},"movement":"t", "url":"https://spark.apache.org/"},
            {"name":"Angular-Formly", "pc":{"r":255,"t":15},"movement":"t", "url":"http://angular-formly.com/"}            
            //{"name":"RDF triple stores", "pc":{"r":280,"t":30},"movement":"c"},   
            //{"name":"Apache camel", "pc":{"r":180,"t":85},"movement":"c"},   
            //{"name":"Next gen test tools", "pc":{"r":180,"t":75},"movement":"c"},               
            //{"name":"Neo4j", "pc":{"r":180,"t":50},"movement":"c"},   
            //{"name":"Message busses without smarts", "pc":{"r":160,"t":85},"movement":"c"},   
            //{"name":"Puppet", "pc":{"r":130,"t":85},"movement":"c"},   
            //{"name":"mongoDB", "pc":{"r":130,"t":55},"movement":"c"},   
            //{"name":"Mercurial", "pc":{"r":130,"t":30},"movement":"c"},   
            //{"name":"Git", "pc":{"r":130,"t":15},"movement":"c"},   
            //{"name":"Squid", "pc":{"r":80,"t":85},"movement":"c"},   
            //{"name":"ASP.NET MVC", "pc":{"r":80,"t":10},"movement":"c"},   
            //{"name":"Subversion", "pc":{"r":30,"t":30},"movement":"c"}
        ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            {"name":"AngularJS", "pc":{"r":40,"t":230},"movement":"t", "url": "https://angularjs.org/"},
            {"name":"PlayFramework", "pc":{"r":55,"t":210},"movement":"t", "url": "https://www.playframework.com/"},
            {"name":"NoSQL", "pc":{"r":100,"t":245},"movement":"t", "url": "http://en.wikipedia.org/wiki/NoSQL"},
	        {"name":"OrientDB", "pc":{"r":180,"t":250},"movement":"c", "url": "http://www.orientechnologies.com/orientdb/"},	                    
	        {"name":"ReactJS", "pc":{"r":255,"t":230},"movement":"c", "url": "http://facebook.github.io/react/"},
            {"name":"MongoDB", "pc":{"r":275,"t":190},"movement":"t", "url": "http://www.mongodb.org/"},
            {"name":"Spring", "pc":{"r":360,"t":260},"movement":"c", "url": "http://spring.io/"},
            {"name":"AngularDart", "pc":{"r":250,"t":265},"movement":"t", "url": "https://angulardart.org/"}
            //{"name":"Azure", "pc":{"r":290,"t":265},"movement":"c"},   
            //{"name":"Mobile Web", "pc":{"r":275,"t":260},"movement":"t"},   
            //{"name":"Google App Engine", "pc":{"r":290,"t":255},"movement":"c"},   
            //{"name":"Application appliances", "pc":{"r":190,"t":245},"movement":"c"},   
            //{"name":"Google as corporate platform", "pc":{"r":290,"t":200},"movement":"c"},   
            //{"name":"GPGPU", "pc":{"r":190,"t":185},"movement":"t"},   
            //{"name":"App containers", "pc":{"r":250,"t":260},"movement":"c"},   
            //{"name":"OAuth", "pc":{"r":130,"t":260},"movement":"t"},   
            //{"name":"RDFa", "pc":{"r":130,"t":250},"movement":"t"},   
            //{"name":"Location based services", "pc":{"r":130,"t":230},"movement":"c"},   
            //{"name":"iPad", "pc":{"r":130,"t":220},"movement":"c"},   
            //{"name":"EC2 & S3", "pc":{"r":190,"t":250},"movement":"c"},   
            //{"name":"Facebook as a business platform", "pc":{"r":190,"t":190},"movement":"c"},   
            //{"name":"JVM as platform", "pc":{"r":90,"t":265},"movement":"c"},   
            //{"name":"iPhone", "pc":{"r":90,"t":215},"movement":"c"},   
            //{"name":"Android", "pc":{"r":90,"t":190},"movement":"c"},   
            //{"name":"KVM", "pc":{"r":70,"t":260},"movement":"t"},   
            //{"name":"Atom", "pc":{"r":70,"t":245},"movement":"t"},   
            //{"name":"ALT.NET", "pc":{"r":90,"t":190},"movement":"c"},   
            //{"name":"IE6 End of Life", "pc":{"r":30,"t":225},"movement":"c"}
        ]
    },
    { "quadrant": "Languages",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            {"name":"Scala", "pc":{"r":20,"t":320},"movement":"t", "url": "http://www.scala-lang.org/"},
            {"name":"CoffeeScript", "pc":{"r":70,"t":300},"movement":"t", "url": "http://coffeescript.org/"},            
            {"name":"ClojureScript", "pc":{"r":270,"t":330},"movement":"c", "url": "http://clojurescriptone.com/"},               
            {"name":"Clojure", "pc":{"r":295,"t":290},"movement":"c", "url": "http://clojure.org/"},
            {"name":"Dart", "pc":{"r":265,"t":350},"movement":"c", "url": "https://www.dartlang.org/"}
            //{"name":"HTML 5", "pc":{"r":250,"t":275},"movement":"c"},   
            //{"name":"DSLs", "pc":{"r":190,"t":340},"movement":"c"},   
            //{"name":"Groovy", "pc":{"r":190,"t":280},"movement":"c"},   
            //{"name":"C#4", "pc":{"r":90,"t":355},"movement":"c"},   
            //{"name":"JRuby", "pc":{"r":90,"t":330},"movement":"c"},   
            //{"name":"Javascript as a 1st class language", "pc":{"r":90,"t":275},"movement":"c"},   
            //{"name":"Ruby", "pc":{"r":30,"t":282},"movement":"c"}
        ]
    }
];
