// app/emotion-ssr.tsx
import createEmotionServer from "@emotion/server/create-instance";
import createCache from "@emotion/cache";

export const createEmotionCache = () => {
  return createCache({ key: "css", prepend: true });
};

export const getStylesFromEmotion = (html: string, cache: ReturnType<typeof createEmotionCache>) => {
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);
  const chunks = extractCriticalToChunks(html);
  const styles = constructStyleTagsFromChunks(chunks);
  return styles;
};
