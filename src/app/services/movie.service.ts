import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { of, Observable, Subject } from 'rxjs';
import { FavouriteComponent } from '../movies/favourite.component';


@Injectable()
export class MovieService{

      favourite:any[]=[];

    constructor( private http: HttpClient) {

    }
      favourites = JSON.parse(sessionStorage.getItem('datab'));

    getMovieData(){
         return  this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=b312558ff10595355c9cecd84223db0f&language=en-US");
    }


    getMovie(id:number){
        let num:string= id.toString();
        console.log(id)
        return this.http.get("https://api.themoviedb.org/3/movie/"+ num +"?api_key=b312558ff10595355c9cecd84223db0f&language=en-US");
    }
    addToFavourite(id:number){
      let num:string =id.toString();
      this.http.get("https://api.themoviedb.org/3/movie/"+ num +"?api_key=b312558ff10595355c9cecd84223db0f&language=en-US")
      .subscribe(data=>{
        this.favourite.push(data);
        sessionStorage.setItem('datab',JSON.stringify(this.favourite));
      })

    }



    getFavouriteData(){
        let subject = new Subject();
          setTimeout(()=>{
              subject.next(this.favourites);
              subject.complete();
              console.log(this.favourites);
          },200);
          return subject;
    }

    userHasVoted(id:number){
      console.log(this.favourites);
      return this.favourites.some(event=>{
              id === event.id;
          });
    }

}



/*results:[
  {"popularity":509.648,
  "vote_count":3681,
  "video":false,
  "poster_path":"/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  "id":475557,
  "adult":false
  ,"backdrop_path":"/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
  "original_language":"en",
  "original_title":"Joker",
  "genre_ids":[80,18,53],
  "title":"Joker",
  "vote_average":8.6,
  "overview":"During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
  "release_date":"2019-10-04"
},
  {
  "popularity":318.56,
  "id":420809,
  "video":false,
  "vote_count":246,
  "vote_average":7.1,
  "title":"Maleficent: Mistress of Evil",
  "release_date":"2019-10-18",
  "original_language":"en","original_title":"Maleficent: Mistress of Evil",
  "genre_ids":[14,12,10751],
  "backdrop_path":"/skvI4rYFrKXS73BJxWGH54Omlvv.jpg",
  "adult":false,
  "overview":"Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
  "poster_path":"/vloNTScJ3w7jwNwtNGoG8DbTThv.jpg"
},
  {
    "popularity":224.201,
  "vote_count":3100,
  "video":false,
  "poster_path":"/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
  "id":420818,"adult":false,"backdrop_path":"/nRXO2SnOA75OsWhNhXstHB8ZmI3.jpg",
  "original_language":"en","original_title":"The Lion King",
  "genre_ids":[12,16,18],
  "title":"The Lion King","vote_average":7.1,
  "overview":"Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.","release_date":"2019-07-19"
},
  {
    "popularity":151.909,
    "vote_count":1029,
  "video":false,
  "poster_path":"/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg",
  "id":559969,
  "adult":false,
  "backdrop_path":"/uLXK1LQM28XovWHPao3ViTeggXA.jpg","original_language":"en",
  "original_title":"El Camino: A Breaking Bad Movie",
  "genre_ids":[80,18,53],
  "title":"El Camino: A Breaking Bad Movie",
  "vote_average":7.2,
  "overview":"In the wake of his dramatic escape from captivity, Jesse Pinkman must come to terms with his past in order to forge some kind of future.","release_date":"2019-10-11"
},
  {
    "popularity":141.81,
    "vote_count":4575,
    "video":false,
    "poster_path":"/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
    "id":429617,
    "adult":false,
    "backdrop_path":"/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
    "original_language":"en","original_title":"Spider-Man: Far from Home",
    "genre_ids":[28,12,878],
    "title":"Spider-Man: Far from Home",
    "vote_average":7.6,
    "overview":"Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.","release_date":"2019-07-02"
  },
  {
    "popularity":122.276,
    "vote_count":2744,
    "video":false,
    "poster_path":"/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
    "id":301528,
    "adult":false,
    "backdrop_path":"/m67smI1IIMmYzCl9axvKNULVKLr.jpg",
    "original_language":"en",
    "original_title":"Toy Story 4",
    "genre_ids":[12,16,35,14,10751],
    "title":"Toy Story 4",
    "vote_average":7.6,
    "overview":"Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called \"Forky\" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.","release_date":"2019-06-21"
  },
  {
  "popularity":94.413,
  "vote_count":1587,"video":false,"poster_path":"/keym7MPn1icW1wWfzMnW3HeuzWU.jpg","id":384018,"adult":false,"backdrop_path":"/qAhedRxRYWZAgZ8O8pHIl6QHdD7.jpg","original_language":"en","original_title":"Fast & Furious Presents: Hobbs & Shaw","genre_ids":[28],"title":"Fast & Furious Presents: Hobbs & Shaw","vote_average":6.5,"overview":"A spinoff of The Fate of the Furious, focusing on Johnson's US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance with Statham's Deckard Shaw.","release_date":"2019-08-02"},
  {"popularity":108.037,"vote_count":1667,"video":false,"poster_path":"/zfE0R94v1E8cuKAerbskfD3VfUt.jpg","id":474350,"adult":false,"backdrop_path":"/8moTOzunF7p40oR5XhlDvJckOSW.jpg","original_language":"en","original_title":"It Chapter Two","genre_ids":[27],"title":"It Chapter Two","vote_average":7,"overview":"27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.","release_date":"2019-09-06"},
  {"popularity":110.602,"vote_count":8,"video":false,"poster_path":"/mAWBfTDAmfpvQGMVFuzuVl49N1P.jpg","id":449924,"adult":false,"backdrop_path":"/ekP6EVxL81lZ4ivcqPsoZ72rY0h.jpg","original_language":"cn","original_title":"葉問4","genre_ids":[28,18,36],"title":"Ip Man 4: The Finale","vote_average":7.7,"overview":"Ip Man 4 is an upcoming Hong Kong biographical martial arts film directed by Wilson Yip and produced by Raymond Wong. It is the fourth in the Ip Man film series based on the life of the Wing Chun grandmaster of the same name and features Donnie Yen reprising the role. The film began production in April 2018 and ended in July the same year.","release_date":"2019-10-18"},
  {"popularity":108.571,"vote_count":3814,"video":false,"poster_path":"/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg","id":420817,"adult":false,"backdrop_path":"/rVqY0Bo4Npf6EIONUROxjYAJfmD.jpg","original_language":"en","original_title":"Aladdin","genre_ids":[12,35,14,10749,10751],"title":"Aladdin","vote_average":7.1,"overview":"A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.","release_date":"2019-05-24"},
  {"popularity":111.047,"vote_count":345,"video":false,"poster_path":"/uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg","id":453405,"adult":false,"backdrop_path":"/c3F4P2oauA7IQmy4hM0OmRt2W7d.jpg","original_language":"en","original_title":"Gemini Man","genre_ids":[28,53],"title":"Gemini Man","vote_average":5.9,"overview":"Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.","release_date":"2019-10-11"},
  {"popularity":106.597,"vote_count":71,"video":false,"poster_path":"/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg","id":338967,"adult":false,"backdrop_path":"/jCCdt0e8Xe9ttvevD4S3TSMNdH.jpg","original_language":"en","original_title":"Zombieland: Double Tap","genre_ids":[28,35,27],"title":"Zombieland: Double Tap","vote_average":7.2,"overview":"The group will face a new zombie threat as a new breed of zombie has developed. This new super-zombie type is faster, bigger, and stronger than the previous strain of zombies and harder to kill. These super-zombies have started grouping up into a horde going from city to city leaving a path of destruction behind them.","release_date":"2019-10-18"},
  {"popularity":100.584,"vote_count":16,"video":false,"poster_path":"/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg","id":290859,"adult":false,"backdrop_path":"/2Ti7HDbAU0DrJqDlUf6GnIg7ADt.jpg","original_language":"en","original_title":"Terminator: Dark Fate","genre_ids":[28,878],"title":"Terminator: Dark Fate","vote_average":7.4,"overview":"More than two decades after the events of Terminator 2: Judgment Day, Sarah Connor sets out to protect a young woman named Dani Ramos and her friends, as a liquid metal Terminator, sent from the future, attempts to terminate them.","release_date":"2019-11-01"},
  {"popularity":149.701,"vote_count":8238,"video":false,"poster_path":"/jpfkzbIXgKZqCZAkEkFH2VYF63s.jpg","id":920,"adult":false,"backdrop_path":"/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg","original_language":"en","original_title":"Cars","genre_ids":[12,16,35,10751],"title":"Cars","vote_average":6.7,"overview":"Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.","release_date":"2006-06-09"},
  {"popularity":106.568,"vote_count":122,"video":false,"poster_path":"/bIID8uZTYNnSMfWwaIluRTzaZQL.jpg","id":483202,"adult":false,"backdrop_path":"/a6WTWBgM7O8wEmCJuGLpPM15agH.jpg","original_language":"en","original_title":"Eli","genre_ids":[27],"title":"Eli","vote_average":6.1,"overview":"A boy named Eli with a rare autoimmune disorder is confined to a special experimental clinic for his treatment. He soon begins experiencing supernatural forces, turning the supposedly safe facility into a haunted prison for him and his fellow patients.","release_date":"2019-10-18"},
  {"popularity":87.733,"vote_count":8736,"video":false,"poster_path":"/4FYu1AAu14tuBU0lns0hbKiHUcH.jpg","id":102651,"adult":false,"backdrop_path":"/tO4xw0P4mdia3EcS6pHkox3cOIy.jpg","original_language":"en","original_title":"Maleficent","genre_ids":[28,12,14,10749,10751],"title":"Maleficent","vote_average":7.1,"overview":"A beautiful, pure-hearted young woman, Maleficent has an idyllic life growing up in a peaceable forest kingdom, until one day when an invading army threatens the harmony of the land.  Maleficent rises to be the land's fiercest protector, but she ultimately suffers a ruthless betrayal – an act that begins to turn her heart into stone. Bent on revenge, Maleficent faces an epic battle with the invading King's successor and, as a result, places a curse upon his newborn infant Aurora. As the child grows, Maleficent realizes that Aurora holds the key to peace in the kingdom – and to Maleficent's true happiness as well.","release_date":"2014-05-30"},
  {"popularity":79.309,"vote_count":2989,"video":false,"poster_path":"/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg","id":458156,"adult":false,"backdrop_path":"/stemLQMLDrlpfIlZ5OjllOPT8QX.jpg","original_language":"en","original_title":"John Wick: Chapter 3 - Parabellum","genre_ids":[28,80,53],"title":"John Wick: Chapter 3 - Parabellum","vote_average":7.1,"overview":"Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.","release_date":"2019-05-17"},
  {"popularity":63.661,"vote_count":14884,"video":false,"poster_path":"/dCtFvscYcXQKTNvyyaQr2g2UacJ.jpg","id":671,"adult":false,"backdrop_path":"/hziiv14OpD73u9gAak4XDDfBKa2.jpg","original_language":"en","original_title":"Harry Potter and the Philosopher's Stone","genre_ids":[12,14,10751],"title":"Harry Potter and the Philosopher's Stone","vote_average":7.8,"overview":"Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.","release_date":"2001-11-16"},
  {"popularity":63.952,"vote_count":2397,"video":false,"poster_path":"/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg","id":466272,"adult":false,"backdrop_path":"/kKTPv9LKKs5L3oO1y5FNObxAPWI.jpg","original_language":"en","original_title":"Once Upon a Time... in Hollywood","genre_ids":[35,18],"title":"Once Upon a Time... in Hollywood","vote_average":7.6,"overview":"A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.","release_date":"2019-07-26"},
  {"popularity":59.941,"vote_count":2665,"video":false,"poster_path":"/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg","id":166428,"adult":false,"backdrop_path":"/lFwykSz3Ykj1Q3JXJURnGUTNf1o.jpg","original_language":"en","original_title":"How to Train Your Dragon: The Hidden World","genre_ids":[12,16,10751],"title":"How to Train Your Dragon: The Hidden World","vote_average":7.7,"overview":"As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.","release_date":"2019-02-22"}
]
*/
