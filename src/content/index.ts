export enum Category {
  experiences,
}

interface ContentMeta {
  company: string;
  title: string;
  start: Date;
  end: Date;
  skills: string[];
}

export function getContent(): { component: any; meta: ContentMeta }[] {
  let requireContext = require.context(`./`, true, /\.mdx$/);

  return requireContext
    .keys()
    .map((fileName) => {
      const { default: component, meta } = requireContext(fileName);
      return {
        component,
        meta: {
          ...meta,
          start: new Date(meta.start),
          end: meta.end ? new Date(meta.end) : new Date(),
        },
      } as { component: any; meta: ContentMeta };
    })
    .sort((a, b) => b.meta.end.getTime() - a.meta.end.getTime());
}
