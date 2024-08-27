export const artists = [
  {
    id: 1,
    name: "Taylor Swift",
    description: "American singer-songwriter",
    imageUrl:
      "https://variety.com/wp-content/uploads/2024/02/Screen-Shot-2024-02-28-at-12.40.18-PM.png?w=1000&h=563&crop=1",
    upcomingEvents: [
      { id: 1, title: "Concert in New York", date: "2024-09-15" },
      { id: 2, title: "Album Signing", date: "2024-10-01" },
    ],
    reviews: [
      { id: 1, text: "Amazing performance!", rating: 5 },
      { id: 2, text: "Loved the new album", rating: 4 },
    ],
  },
  {
    id: 2,
    name: "Ed Sheeran",
    description: "English singer-songwriter",
    imageUrl:
      "https://www.apple.com/newsroom/images/product/music/standard/Apple-Music-Live-Ed-Sheeran-with-guitar_big.jpg.slideshow-large_2x.jpg",
    upcomingEvents: [
      { id: 3, title: "London Show", date: "2024-08-20" },
      { id: 4, title: "Charity Concert", date: "2024-11-05" },
    ],
    reviews: [
      { id: 3, text: "Brilliant guitarist!", rating: 5 },
      { id: 4, text: "Heartfelt lyrics", rating: 4 },
    ],
  },
];
