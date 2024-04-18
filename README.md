# radio-scraper WIP

This is a repository to store the WIP for a future application that at the very least make browsing the **[WFMU](https://www.wfmu.org/playlists/)** archives much easier. 

# Examples
## Playlists - [Example Page](https://www.wfmu.org/playlists/WA) - unrelated to output below
* Note: while working on this I realize that the name 'Playlist' doesn't accurately represent what this object functions as. Instead of a traditional playlist that has things like track info and timing this is more like a list of archived broadcasts that you can listen to at any time.*
In order to create a Playlist object you must pass the html retrieved from a GET request (locally just using curl and redirecting to an output file) and pass that text into the Playlist constructor and then access the `broadcasts` field of the Playlist object and you'll be able to see info about all the broadcasts listed on the HTML that was passed in.
```json
[
  {
    "date": "2024-04-11T05:00:00.000Z",
    "title": "Songs in the Key of QDBarp",
    "streamUrls": [],
    "playlistUrl": "/playlists/shows/138824"
  },
  {
    "date": "2024-04-04T05:00:00.000Z",
    "streamUrls": [
      "/listen.m3u?show=138596&amp;archive=250806",
      "/flashplayer.php?version=3&amp;show=138596&amp;archive=250805"
    ],
    "playlistUrl": "/playlists/shows/138596"
  },
  {
    "date": "2024-03-28T05:00:00.000Z",
    "streamUrls": [
      "/listen.m3u?show=138364&amp;archive=250467",
      "/flashplayer.php?version=3&amp;show=138364&amp;archive=250466"
    ],
    "playlistUrl": "/playlists/shows/138364"
  },
  {
    "date": "2024-03-21T05:00:00.000Z",
    "title": "Listen here.",
    "streamUrls": [],
    "playlistUrl": "https://wfmu.org/playlists/shows/138129"
  },
  {
    "date": "2024-03-14T05:00:00.000Z",
    "title": "I'll Take a Banana Boat, with co-host Jim Price",
    "streamUrls": [
      "/listen.m3u?show=137911&amp;archive=249795",
      "/flashplayer.php?version=3&amp;show=137911&amp;archive=249794"
    ],
    "playlistUrl": "/playlists/shows/137911"
  },
  {
    "date": "2024-03-07T06:00:00.000Z",
    "title": "Sc'at Bomb Radio, with co-host Maggie Hz!",
    "streamUrls": [
      "/flashplayer.php?version=3&amp;show=137686&amp;archive=249458"
    ],
    "playlistUrl": "/playlists/shows/137686"
  },
  {
    "date": "2024-02-29T06:00:00.000Z",
    "streamUrls": [
      "/flashplayer.php?version=3&amp;show=137460&amp;archive=249127"
    ],
    "playlistUrl": "/playlists/shows/137460"
  },
  {
    "date": "2024-02-22T06:00:00.000Z",
    "title": "Doom Dogs, free improv live in the studio!",
    "streamUrls": [
      "/flashplayer.php?version=3&amp;show=137227&amp;archive=248770"
    ],
    "playlistUrl": "/playlists/shows/137227"
  },
  {
    "date": "2024-02-15T06:00:00.000Z",
    "title": "I'm Pretty Precious About My Can",
    "streamUrls": [
      "/flashplayer.php?version=3&amp;show=136965&amp;archive=248431"
    ],
    "playlistUrl": "/playlists/shows/136965"
  },
  {
    "date": "2024-02-08T06:00:00.000Z",
    "title": "Baby, you look great today!",
    "streamUrls": [
      "/flashplayer.php?version=3&amp;show=136699&amp;archive=248094"
    ],
    "playlistUrl": "/playlists/shows/136699"
  }
]
```

## Broadcast
*These are indidividual instances of a specific radio program. You could also think of them as 'episodes' of a radio program*
More used as a helper class to create objects that the 'Playlist' class uses to keep things organized. 

## Show - [Example Page](https://www.wfmu.org/playlists/)
*This started as something else and then my curiosity moved faster than my planning brain*
Currently the show constructor is making an object that is much closer to an index of radio programs on the station but the current name doesn't communicate that at all. Here is the current output for constructing a Show object and then accessing the property `shows`
```json
{
  "Monday": [
    [
      "Wake",
      "with Clay Pigeon",
      "/playlists/WA",
      "/archivefeed/mp3/WA.xml",
      "/playlistfeed/WA.xml",
      "/flashplayer.php?version=3&amp;show=80930&amp;archive=164962",
      "/playlists/shows/80930"
    ],
    [
      "Surface Noise",
      "with Joe McGasko",
      "/playlists/SN",
      "/archivefeed/mp3/SN.xml",
      "/playlistfeed/SN.xml",
      "/flashplayer.php?version=3&amp;show=55373&amp;archive=96277",
      "/playlists/shows/55373"
    ],
    [
      "Three Chord Monte",
      "with Joe Belock",
      "/playlists/TM",
      "/archivefeed/mp3/TM.xml",
      "/playlistfeed/TM.xml",
      "/flashplayer.php?version=3&amp;show=55349&amp;archive=96224",
      "/playlists/shows/55349"
    ],
    [
      "Jim Price",
      "/playlists/JP",
      "/archivefeed/mp3/JP.xml",
      "/playlistfeed/JP.xml",
      "/flashplayer.php?version=3&amp;show=69792&amp;archive=146240",
      "/playlists/shows/69792"
    ],
    [
      "Radio Ravioli",
      "with Olivia",
      "/playlists/OB",
      "/archivefeed/mp3/OB.xml",
      "/playlistfeed/OB.xml",
      "/flashplayer.php?version=3&amp;show=95267&amp;archive=189338",
      "/playlists/shows/95267"
    ],
    [
      "Techtonic",
      "with Mark Hurst",
      "/playlists/TD",
      "/archivefeed/mp3/TD.xml",
      "/playlistfeed/TD.xml",
      "/flashplayer.php?version=3&amp;show=112493&amp;archive=213903",
      "/playlists/shows/112493"
    ],
    [
      "It's Complicated",
      "with Dave Mandl",
      "/playlists/GX",
      "/archivefeed/mp3/GX.xml",
      "/playlistfeed/GX.xml",
      "/flashplayer.php?version=3&amp;show=120983&amp;archive=225793",
      "/playlists/shows/120983"
    ],
    [
      "Bad Animals",
      "with Jim the Poet and Amanda",
      "/playlists/B1",
      "/archivefeed/mp3/B1.xml",
      "/playlistfeed/B1.xml"
    ],
    [
      "Daniel Blumin",
      "/playlists/DN",
      "/archivefeed/mp3/DN.xml",
      "/playlistfeed/DN.xml",
      "/flashplayer.php?version=3&amp;show=54091&amp;archive=93861",
      "/playlists/shows/54091"
    ],
    [
      "Travel Zone",
      "with DJ Time Traveler",
      "/playlists/CK",
      "/archivefeed/mp3/CK.xml",
      "/playlistfeed/CK.xml",
      "/flashplayer.php?version=3&amp;show=80929&amp;archive=164960",
      "/playlists/shows/80929"
    ],
    [
      "Polyglot",
      "with Jesse Dorris",
      "/playlists/PX",
      "/archivefeed/mp3/PX.xml",
      "/playlistfeed/PX.xml",
      "/flashplayer.php?version=3&amp;show=80236&amp;archive=163905",
      "/playlists/shows/80236"
    ]
  ], etc....
}
```
# Useful Links
- [Bun](https://bun.sh/)
    - just thought I'd try it out cause the speed appealed to me and the mascot is really cute
- [Cloudflare HTMLRewriter](https://developers.cloudflare.com/workers/runtime-apis/html-rewriter/#docs-content)
    - I saw Bun had an implementation and I thought why not cause I could learn a little new piece of tech. Not having access to a node and being able to query it's children is a real pain though and if I knew how much work that would be I would probably use another parsing library (which I might do in the future)

# TODO (a non exhaustive list of things to work on)
- rename 'Playlist' to something more accurate (archive?)
- rename 'Show' to something more accurate
    - this one is a little complicated because right now the Show class constructs an object of multiple 'shows' that will eventually hold info like title, dj, airing time, etc. maybe something along the lines of ShowIndex or StationPrograms.
- make `Show` more like `Broadcast` where it stores the values in proper fields so they can be accessed later
- figure out actual audio streaming from the url sources
- fix `type` imports (look more into tsconfig)

# Helpful things I found while working on this
- [Selecting nested elements](https://stackoverflow.com/questions/68114819/access-nested-elements-in-htmlrewriter-cloudflare-workers)
    - basically the `on` functions for HTMLRewriter are executed sequentially so the easiest way to get nested items is to keep chaining `on` functions and making the selector progressively more focused
- [Scraping with Hono and HTMLRewriter](https://vitaneri.com/posts/web-scraping-on-the-edge-using-htmlrewriter)
    - for HTMLRewriter examples I think looking into `~/types` and the constructors would be much more helpful but I'll probably use the other part of this article soon when the tool becomes more automated


# How to Get Started


## Install dependencies:

```bash
bun install
```

## Create local page versions
I implore you to be a good Netizen and while developing instead of hitting WFMU with requests over and over again you either cache the response locally or save the HTML file local and use [Bun File I\O](https://bun.sh/docs/api/file-io) to reference your HTML.

One way of getting the HTML of the page you need is by using [curl](https://curl.se/docs/manpage.html) and using the `>>` bash redirection to direct the output of curl into a file. Here is an example:
    ```bash
    curl INSERT_URL_HERE >> ./examples/YOUR_FILE_NAME_HERE
    ```

## Run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
