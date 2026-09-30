# Next Three Hours

**What can I do with my baby or toddler in the next three hours, within a stroller walk of home?**

A single page for parents and caregivers in North Brooklyn. It reads the clock, filters free library programs and playgrounds by age band (0 to 1, 1 to 3), walking time from Montrose and Graham, and whether you can just show up, and tells you when to leave. Weekend and tomorrow-morning views are built in, because those are the moments existing sites serve worst.

## Why this exists

Borough-wide listings (NYC Kids Week, library calendars, Mommy Poppins) answer "what is happening in Brooklyn this week." A caregiver with a two-year-old and a three-hour window before nap is asking a narrower question, and answering it means combining time of day, age, distance, and drop-in status in one view. None of the existing sites filter on time of day or distance.

## What it does now (version 0, September 24, 2026)

- Five time windows: next 3 hours, rest of today, tomorrow morning, this weekend, next 7 days. The default switches to "tomorrow morning" after 6 pm and "this weekend" on Friday afternoons.
- Age bands inferred from the program text (for example "not yet walking" is baby only, "16 to 32 months" is toddler only).
- Walking time from Montrose and Graham at stroller pace, with a "leave by" pill when an event is close.
- Drop-in versus sign-up, canceled flags, and a link to the official page for every listing.
- "Always open" playgrounds within the chosen walking range.
- Data: 61 birth-to-five programs at 11 Brooklyn Public Library branches for the next two weeks, pulled from the library's public event feed on September 23, plus five playgrounds.

## Data

`data/events.js` holds everything. The library rows come from `discover.bklynlibrary.org/api/search/v2.php?event=true&eventlocation=<branch>`, which returns JSON and needs no key. That makes a daily automatic refresh a small scheduled job rather than a scraping project. The feed returns 20 results per branch per call, sorted by date, which covers about a week; pagination is not yet solved.

Not yet included: NYC Parks programs (their site blocks automated reads), paid drop-in classes (Sawyer requires a browser session), and museum programs.

## Running it

Open `index.html`. No build step, no server, no account.

## Backlog

- [ ] Paid drop-in classes with prices (music, movement, play spaces)
- [ ] NYC Parks programs (Kids in Motion, rec centers)
- [ ] Daily refresh job from the library feed
- [ ] Let the user set their own home base
- [ ] Hide canceled events by default
- [ ] Newsletter: "Saturday morning, sorted" every Friday at 3 pm

## License

MIT
