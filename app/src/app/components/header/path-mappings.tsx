const pathMappings = {
  news: '/news',
  video: '/video',
  JLPTMainpage: '/jlpt-test/jlpt-mainpage',
  dictionary: '/dictionary',
} as const;

export type PathMappingKeys = keyof typeof pathMappings;

export default pathMappings;
