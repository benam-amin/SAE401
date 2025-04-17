import { PassThrough } from "stream";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import type { EntryContext } from "@remix-run/node";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let didError = false;

    const sheet = new ServerStyleSheet();

    const { pipe } = renderToPipeableStream(
      sheet.collectStyles(
        <RemixServer context={remixContext} url={request.url} />
      ),
      {
        onShellReady() {
          const body = new PassThrough();
          const styles = sheet.getStyleTags();

          responseHeaders.set("Content-Type", "text/html");

          // Intercepter le flux pour insérer les styles à la place de __STYLES__
          const originalWrite = body.write.bind(body);
          body.write = (chunk: any) => {
            const chunkStr = chunk.toString();
            if (chunkStr.includes("__STYLES__")) {
              return originalWrite(chunkStr.replace("__STYLES__", styles));
            }
            return originalWrite(chunk);
          };

          resolve(
            new Response(body as any, {
              status: didError ? 500 : responseStatusCode,
              headers: responseHeaders,
            })
          );

          pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(err) {
          didError = true;
          console.error("❌ renderToPipeableStream error:", err);
        },
      }
    );
  });
}
