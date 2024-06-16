export type Endpoint = {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS";
    uri: string;
    action: string;
}