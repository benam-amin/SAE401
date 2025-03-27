import { PassThrough } from "stream";
import { RemixServer } from "@remix-run/react";
import { renderToPipeableStream } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import type { EntryContext } from "@remix-run/node";
import { renderHeadToString } from 'remix-island'
import { Head } from './root'

import {
    createReadableStreamFromReadable,
    type EntryContext,
  } from '@remix-run/node'

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const sheet = new ServerStyleSheet();
  let markup = "";

  try {
    markup = renderToPipeableStream(
      sheet.collectStyles(<RemixServer context={remixContext} url={request.url} />),
      {
        onAllReady() {

          responseHeaders.set("Content-Type", "text/html");

          const head = renderHeadToString({
            request,
            remixContext,
            Head,
          })

        
          sheet.seal();


          const body = injectStyles(head, sheet, markup)
          const stream = createReadableStreamFromReadable(body)

          resolve(new Response(body, {
            status: responseStatusCode,
            headers: responseHeaders,
          }));
        },
      }
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function injectStyles(
    head: string,
    styleSheet: ServerStyleSheet,
    pipe: <Writable extends NodeJS.WritableStream>(
      destination: Writable,
    ) => Writable,
  ) {
    const body = new PassThrough()
    body.write(
      `<!DOCTYPE html><html><head>${head} ${styleSheet.getStyleTags()}</head><body><div id="root">`,
    )
    pipe(body)
    body.write('</div></body></html>')
    return body
  }
