/// <reference path=".\winrt.d.ts" />

/**
 * Provides a modern HTTP client API for Windows Store apps.
 *   - Minimum supported client : Windows 8.1
 *   - Minimum supported server : Windows Server 2012 R2
 *   - Minimum supported phone : Windows Phone 8.1 [Windows Phone Silverlight 8.1 and Windows Runtime apps]
 * @see https://msdn.microsoft.com/library/windows/apps/windows.web.http.aspx
 */
declare namespace Windows.Web.Http { // TODO: Not completed.
    /**
     * Sends HTTP requests and receives HTTP responses from a resource identified by a URI.
     *   - Minimum supported client : Windows 8.1 [Windows Store apps, desktop apps]
     *   - Minimum supported server : Windows Server 2012 R2 [Windows Store apps, desktop apps]
     *   - Minimum supported phone : Windows Phone 8.1 [Windows Phone Silverlight 8.1 and Windows Runtime apps]
     * @see https://msdn.microsoft.com/library/windows/apps/windows.web.http.httpclient.aspx
     */
    export class HttpClient { // TODO: Not completed.
        close(): void;
        sendRequestAsync(request: HttpRequestMessage): Windows.Foundation.IAsyncOperationWithProgress<HttpResponseMessage, HttpProgress>;
        sendRequestAsync(request: HttpRequestMessage, completionOption: HttpCompletionOption): Windows.Foundation.IAsyncOperationWithProgress<HttpResponseMessage, HttpProgress>;
    }

    export enum HttpCompletionOption {
        responseContentRead, responseHeadersRead
    }

    export class HttpMethod { // TODO: Not completed.
        constructor(method: string);
        static get: HttpMethod;
        static post: HttpMethod;
    }

    export enum HttpStatusCode { // TODO: Not completed.
        ok
    }

    export class HttpRequestMessage implements Windows.Foundation.IClosable { // TODO: Not completed.
        constructor();
        constructor(method: HttpMethod, uri: Windows.Foundation.Uri);
        close(): void;
        headers: Headers.HttpRequestHeaderCollection;
        content: IHttpContent;
    }

    export class HttpResponseMessage { // TODO: Not completed.
        close(): void;
        statusCode: HttpStatusCode;
        content: IHttpContent;
    }

    export interface IHttpContent extends Windows.Foundation.IClosable { // TODO: Not completed.
        headers: Headers.HttpContentHeaderCollection;
        readAsStringAsync(): Windows.Foundation.IAsyncOperationWithProgress<string, number>;
        readAsBufferAsync(): Windows.Foundation.IAsyncOperationWithProgress<Windows.Storage.Streams.IBuffer, number>;
        readAsInputStreamAsync(): Windows.Foundation.IAsyncOperationWithProgress<Windows.Storage.Streams.IInputStream, number>;
    }

    /**
     * Provides HTTP content that uses name/value data encoded with the application/x-www-form-urlencoded MIME type.
     * @see https://msdn.microsoft.com/en-us/library/windows/apps/xaml/windows.web.http.httpformurlencodedcontent.aspx
     */
    export class HttpFormUrlEncodedContent implements IHttpContent { // TODO: Not completed.
        constructor(content: Windows.Foundation.Collections.IIterable<Windows.Foundation.Collections.IKeyValuePair<string, string>>);
        close(): void;
        headers: Headers.HttpContentHeaderCollection;
        readAsStringAsync(): Windows.Foundation.IAsyncOperationWithProgress<string, number>;
        readAsBufferAsync(): Windows.Foundation.IAsyncOperationWithProgress<Windows.Storage.Streams.IBuffer, number>;
        readAsInputStreamAsync(): Windows.Foundation.IAsyncOperationWithProgress<Windows.Storage.Streams.IInputStream, number>;
    }

    export interface HttpProgress {
        bytesReceived: number;
        bytesSent: number;
        retries: number;
        stage: HttpProgressStage;
        totalBytesToReceive: Windows.Foundation.IReference<number>;
        totalBytesToSend: Windows.Foundation.IReference<number>;
    }

    export enum HttpProgressStage {
        none, detectingProxy, resolvingName, connectingToServer, negotiatingSsl, sendingHeaders, sendingContent,
        waitingForResponse, receivingHeaders, receivingContent
    }

    export module Headers { // TODO: Not completed.
        export class HttpRequestHeaderCollection { // TODO: Not completed.
            insert(key: string, value: string): boolean;
            authorization: HttpCredentialsHeaderValue;
        }
        export class HttpContentHeaderCollection { // TODO: Not completed.
            insert(key: string, value: string): boolean;
            contentType: HttpMediaTypeHeaderValue;
        }
        export class HttpCredentialsHeaderValue { // TODO: Not completed.
            constructor(scheme: string, token: string);
        }
        export class HttpMediaTypeHeaderValue {
            static parse(input: string): HttpMediaTypeHeaderValue;
            static tryParse(input: string): { mediaTypeHeaderValue: HttpMediaTypeHeaderValue; succeeded: boolean; };
            constructor(mediaType: string);
            mediaType: string;
            charSet: string;
            parameters: Windows.Foundation.Collections.IVector<HttpNameValueHeaderValue>;
        }
        export class HttpNameValueHeaderValue {
            static parse(input: string): HttpNameValueHeaderValue;
            static tryParse(input: string): { nameValueHeaderValue: HttpNameValueHeaderValue; succeeded: boolean; };
            constructor(name: string);
            constructor(name: string, value: string);
            name: string;
            value: string;
        }
    }
}
