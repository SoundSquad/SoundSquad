export const mockSearchResults = [
  {
    id: 1,
    singerName: "Adele",
    imageUrl:
      "https://static.news.zumst.com/images/4/2021/12/01/202112010940069735_t.jpg",
    description:
      "Adele is an English singer-songwriter known for her powerful voice and emotional ballads, including hits like 'Hello' and 'Rolling in the Deep'.",
  },
  {
    id: 2,
    singerName: "Adele",
    imageUrl:
      "https://files.slack.com/files-pri/T072CAYVALU-F07JAGU80UE/02nd3r5_9xyqo8s9lmyqovtcnswo-nqyqf3n_pjyzmuxyohjj5s9n9h66lozbq9xb0zyl3ggrt3yzwiyvltnww.webp",
    description:
      "Adele is an English singer-songwriter known for her powerful voice and emotional ballads, including hits like 'Hello' and 'Rolling in the Deep'.",
  },
  {
    id: 3,
    singerName: "Adele",
    imageUrl: "https://example.com/ed-sheeran.jpg",
    description:
      "Adele is an English singer-songwriter known for her powerful voice and emotional ballads, including hits like 'Hello' and 'Rolling in the Deep'.",
  },
  {
    id: 4,
    singerName: "Adele",
    imageUrl:
      "https://files.slack.com/files-pri/T072CAYVALU-F07JAGUE2AJ/20231201502231.jpg",
    description:
      "Adele is an English singer-songwriter known for her powerful voice and emotional ballads, including hits like 'Hello' and 'Rolling in the Deep'.",
  },
  {
    id: 5,
    singerName: "Adele",
    imageUrl:
      "https://files.slack.com/files-pri/T072CAYVALU-F07JE9GCAMB/p1065590921493731_758_thum.jpg",
    description:
      "Adele is an English singer-songwriter known for her powerful voice and emotional ballads, including hits like 'Hello' and 'Rolling in the Deep'.",
  },
  {
    id: 6,
    singerName: "Adele",
    imageUrl:
      "https://files.slack.com/files-pri/T072CAYVALU-F07JE9GCAMB/p1065590921493731_758_thum.jpg",
    description:
      "Adele is an English singer-songwriter known for her powerful voice and emotional ballads, including hits like 'Hello' and 'Rolling in the Deep'.",
  },
  {
    id: 7,
    singerName: "Adele",
    imageUrl:
      "https://files.slack.com/files-pri/T072CAYVALU-F07JE9GCAMB/p1065590921493731_758_thum.jpg",
    description:
      "Adele is an English singer-songwriter known for her powerful voice and emotional ballads, including hits like 'Hello' and 'Rolling in the Deep'.",
  },
  {
    id: 8,
    singerName: "Adele",
    imageUrl:
      "https://files.slack.com/files-pri/T072CAYVALU-F07JE9GCAMB/p1065590921493731_758_thum.jpg",
    description:
      "Adele is an English singer-songwriter known for her powerful voice and emotional ballads, including hits like 'Hello' and 'Rolling in the Deep'.",
  },
  {
    id: 9,
    singerName: "Adele",
    imageUrl:
      "https://files.slack.com/files-pri/T072CAYVALU-F07JE9GCAMB/p1065590921493731_758_thum.jpg",
    description:
      "Adele is an English singer-songwriter known for her powerful voice and emotional ballads, including hits like 'Hello' and 'Rolling in the Deep'.",
  },
  {
    id: 10,
    singerName: "Adele",
    imageUrl:
      "https://files.slack.com/files-pri/T072CAYVALU-F07JE9GCAMB/p1065590921493731_758_thum.jpg",
    description:
      "Adele is an English singer-songwriter known for her powerful voice and emotional ballads, including hits like 'Hello' and 'Rolling in the Deep'.",
  },
  {
    id: 11,
    singerName: "Adele",
    imageUrl:
      "https://files.slack.com/files-pri/T072CAYVALU-F07JE9GCAMB/p1065590921493731_758_thum.jpg",
    description:
      "Adele is an English singer-songwriter known for her powerful voice and emotional ballads, including hits like 'Hello' and 'Rolling in the Deep'.",
  },
  {
    id: 12,
    singerName: "Adele",
    imageUrl:
      "https://files.slack.com/files-pri/T072CAYVALU-F07JE9GCAMB/p1065590921493731_758_thum.jpg",
    description:
      "Adele is an English singer-songwriter known for her powerful voice and emotional ballads, including hits like 'Hello' and 'Rolling in the Deep'.",
  },
  {
    id: 13,
    singerName: "Adele",
    imageUrl:
      "https://files.slack.com/files-pri/T072CAYVALU-F07JE9GCAMB/p1065590921493731_758_thum.jpg",
    description:
      "Adele is an English singer-songwriter known for her powerful voice and emotional ballads, including hits like 'Hello' and 'Rolling in the Deep'.",
  },
  {
    id: 14,
    singerName: "Adele",
    imageUrl:
      "https://files.slack.com/files-pri/T072CAYVALU-F07JE9GCAMB/p1065590921493731_758_thum.jpg",
    description:
      "Adele is an English singer-songwriter known for her powerful voice and emotional ballads, including hits like 'Hello' and 'Rolling in the Deep'.",
  },
  {
    id: 15,
    singerName: "Adele",
    imageUrl:
      "https://files.slack.com/files-pri/T072CAYVALU-F07JE9GCAMB/p1065590921493731_758_thum.jpg",
    description:
      "Adele is an English singer-songwriter known for her powerful voice and emotional ballads, including hits like 'Hello' and 'Rolling in the Deep'.",
  },

];

const ITEMS_PER_PAGE = 5;

export const fetchSearchResults = async ({ pageParam = 1, query }) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const filteredResults = mockSearchResults.filter((result) =>
    result.singerName.toLowerCase().includes(query.toLowerCase())
  );

  const start = (pageParam - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const paginatedResults = filteredResults.slice(start, end);

  return {
    results: paginatedResults,
    nextPage: end < filteredResults.length ? pageParam + 1 : undefined,
    totalPages: Math.ceil(filteredResults.length / ITEMS_PER_PAGE),
  };
};